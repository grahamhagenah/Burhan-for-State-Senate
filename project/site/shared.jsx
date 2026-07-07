// ============================================================
// Burhan for Senate — shared chrome + primitives
// Loaded on every page. Exports to window.
// ============================================================
const { useState, useEffect, useRef } = React;

const ACTBLUE = "https://secure.actblue.com/donate/burhanwebsite";
const trackDonate = () => {
  const page = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
  window.plausible && window.plausible('Donate Click', { props: { page } });
};

// ---- icons ----
function ArrowIcon({ color = "#fff", className = "ar" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill={color} aria-hidden="true">
      <path d="M 12.175 9 L 0 9 L 0 7 L 12.175 7 L 6.575 1.4 L 8 0 L 16 8 L 8 16 L 6.575 14.6 L 12.175 9 Z" />
    </svg>
  );
}
function PlayIcon({ color = "#003DA5" }) {
  return (
    <svg viewBox="0 0 24 24" fill={color} aria-hidden="true"><path d="M5 3.5v17l15-8.5z" /></svg>
  );
}
function ChevronIcon({ color = "currentColor", className = "chev" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2.4" aria-hidden="true">
      <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ---- button ----
function Button({ variant = "orange", children, arrow, arrowColor, href, target, style, className = "", ...rest }) {
  const cls = `btn btn-${variant} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowIcon color={arrowColor || (variant === "orange" ? "#003DA5" : "#fff")} />}
    </>
  );
  if (href) {
    return <a className={cls} href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} style={style} {...rest}>{inner}</a>;
  }
  return <button className={cls} style={style} {...rest}>{inner}</button>;
}

// ---- boxed section header ----
function BoxedHeader({ eyebrow, children, eyebrowClass = "", onOrange, style }) {
  return (
    <div className="col" style={{ gap: 8, alignItems: "flex-start", ...style }}>
      {eyebrow && <span className={`eyebrow ${eyebrowClass}`}>{eyebrow}</span>}
      <span className={`boxed${onOrange ? " on-orange" : ""}`}>{children}</span>
    </div>
  );
}

// ---- logo ----
function Logo() {
  return (
    <a className="logo" href="index.html">
      <span className="word">BURHAN</span>
      <span className="tag">2ND MIDDLESEX · STATE SENATE</span>
    </a>
  );
}

// ---- site header ----
function SiteHeader({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const hdrRef = useRef(null);
  const links = [
    { label: "Meet Burhan", href: "receipts.html" },
    { label: "Issues", href: "issues.html" },
    { label: "Volunteer", href: "volunteer.html" },
  ];

  useEffect(() => {
    function handleClick(e) {
      if (hdrRef.current && !hdrRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <header className={"hdr" + (menuOpen ? " menu-open" : "")} ref={hdrRef}>
        <Logo />
        <nav>
          <div className="navlinks">
            {links.map((l) => (
              <a key={l.label} href={l.href} className={active === l.label ? "active" : ""}>{l.label}</a>
            ))}
          </div>
          <Button variant="orange" href={ACTBLUE} target="_blank" style={{ fontSize: 17, padding: "9px 18px" }} onClick={trackDonate}>Donate</Button>
          <button
            className="hamburger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </nav>
      </header>
      <div className={"mobile-menu" + (menuOpen ? " open" : "")} id="mobile-menu" role="dialog" aria-label="Navigation menu">
        {links.map((l) => (
          <a key={l.label} href={l.href} className={active === l.label ? "active" : ""}>{l.label}</a>
        ))}
        <a className="btn btn-orange" href={ACTBLUE} target="_blank" rel="noopener noreferrer" onClick={trackDonate}>Donate</a>
      </div>
    </>
  );
}

// ---- site footer (MORE IS POSSIBLE rallying band + copyright) ----
function SiteFooter({ headline = "More is possible", sub }) {
  return (
    <>
      <section className="fcta motif-bg">
        <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
          <h2>{headline}</h2>
          {sub && <p>{sub}</p>}
          <div className="fbtns">
            <Button variant="orange" href="volunteer.html" arrow arrowColor="#003DA5">Volunteer</Button>
            <Button variant="red" href={ACTBLUE} target="_blank" arrow arrowColor="#fff" onClick={trackDonate}>Donate</Button>
          </div>
        </Reveal>
      </section>
      <div className="fcopy">
        <span>© 2026 Committee to Elect Burhan Azeem</span>
        <a href="contact.html">Contact Us</a>
      </div>
    </>
  );
}

// ---- branded video thumbnail placeholder ----
function VideoThumb({ label = "Watch", className = "", style, children }) {
  return (
    <div className={`vthumb ${className}`} style={style}>
      {children}
      <span className="play"><PlayIcon color="#003DA5" /></span>
      {label && <span className="vlabel">{label}</span>}
    </div>
  );
}

// ---- reveal-on-scroll ----
function Reveal({ children, as = "div", className = "", style }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) * 0.94) { setShown(true); return; }
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.1 });
      io.observe(el);
    }
    const t = setTimeout(() => setShown(true), 1400);
    return () => { io && io.disconnect(); clearTimeout(t); };
  }, []);
  const Tag = as;
  return <Tag ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} style={style}>{children}</Tag>;
}

Object.assign(window, { ACTBLUE, trackDonate, ArrowIcon, PlayIcon, ChevronIcon, Button, BoxedHeader, Logo, SiteHeader, SiteFooter, VideoThumb, Reveal });
