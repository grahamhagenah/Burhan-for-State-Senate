// ============================================================
// ISSUES PAGE — "What Burhan will deliver"
// 6 issue cards, collapsed by default. Interaction mode is a
// Tweak: Accordion (one open) / Inline (open many) / Modal.
// ============================================================
const { useState: useStateI } = React;

const ISSUES = [
  {
    n: 1, title: "Housing", kicker: "Issue 01",
    teaser: "Allow neighborhoods to build the housing they want and need",
    video: "https://www.instagram.com/reel/DZFl2SGoJQg/",
    body: [
      "Massachusetts has a housing crisis because one hundred years ago, the state began making it illegal to build affordable housing. Burhan knows how to undo those laws and unlock new housing. In Cambridge, he passed the Affordable Housing Overlay and re-legalized triple-deckers and starter homes. As state senator, he'll roll out that model statewide.",
      "He'll also make sure the whole state does their part. Right now, communities like Cambridge and Somerville are building, while the state has to sue other towns just to allow any multifamily housing at all. Burhan will push for a housing-by-right law near transit — modeled after California's SB79 — to override local zoning and allow taller, denser housing within a half-mile of transit stops.",
    ],
  },
  {
    n: 2, title: "Transit", kicker: "Issue 02",
    teaser: "Extend the T and fix the reason it keeps breaking",
    video: "https://www.instagram.com/reel/DXHveu6Ebon/",
    body: [
      "The T can be faster, cheaper to run, and more reliable. It just hasn't happened because the people making decisions don't ride it. Burhan's plan: extend the Red Line to Lexington, the Green Line to Medford, and build multiple connectors to make transfers faster. He'll fund this construction by implementing congestion pricing and curtailing the MBTA's spending on redundant consultants.",
      "He'll also fix the MBTA longer term by empowering riders. Today, suburban drivers have more say than Boston metro riders. Burhan will propose a new governing body that gives the people who depend on the T more governance control — because a better T means faster commutes and a stronger local economy for everyone.",
    ],
  },
  {
    n: 3, title: "The Statehouse", kicker: "Issue 03",
    teaser: "Restructure Beacon Hill so it's actually productive",
    video: "https://www.instagram.com/reel/DXKitzFiETD/",
    body: [
      "Beacon Hill hasn't been delivering for Massachusetts voters for three reasons.",
      "First, secret voting. Fewer than 100 votes are made public each year, which means bills with 80% public support can die with no record of who killed them. Burhan built Cambridge's public legislative tracker so constituents could see exactly how their representatives voted. He'll push for the same transparency at the Statehouse.",
      "Second, the Statehouse has exempted itself from the public records law that applies to every other governing body in Massachusetts. Burhan will end that exception.",
      "Third, a corrupt compensation system. Legislators earn an $82,000 base salary but can collect an additional $120,000 in stipends, awarded at the sole discretion of Beacon Hill leadership. Any legislator who tries to change the system gets a massive pay cut. Burhan already works on an $83,000 salary, so he has nothing to lose.",
    ],
  },
  {
    n: 4, title: "Affordability", kicker: "Issue 04",
    teaser: "Ensure families can stay in our district",
    video: "https://www.youtube.com/watch?v=C2SwXPgurkU",
    body: [
      "The number one reason families leave the district is when they have children. Childcare costs more than tuition at UMass, which is why Burhan passed universal pre-K in Cambridge. As state senator, he'll expand that model statewide, putting $21,000 back in every family's pocket.",
      "The second bill that hits families hard is energy. Third-party electricity suppliers have never once saved a customer money. Burhan will ban them on day one. He'll also expand Cambridge's Community Energy bulk-purchasing model to every community in the district — a program that has already returned $95 million in savings to Cambridge residents, nearly $2,000 per household.",
    ],
  },
  {
    n: 5, title: "Trump & Federal Cuts", kicker: "Issue 05",
    teaser: "Build state resilience to Trump's policies",
    video: "https://www.instagram.com/reel/DXR86ohEd9f/",
    body: [
      "Massachusetts is facing one of the deepest recessions in the country right now. NIH cuts are threatening the research hospitals and universities that employ tens of thousands of people. Vaccine program cuts are dismantling the public health programs families depend on.",
      "Burhan's answer is to build a more resilient Massachusetts. He will incentivize businesses to ensure new technology gets manufactured here, not just invented here. He'll also work with other New England states to jointly fund the health and research programs that Washington has walked away from.",
    ],
  },
  {
    n: 6, title: "Climate", kicker: "Issue 06", climate: true,
    teaser: "Clean tech is invented here, and should be built here, too",
    video: null,
    body: [
      "Massachusetts invents clean energy, but the manufacturing jobs and climate benefits go elsewhere. Burhan will change the green drain by making it easier for manufacturers to stay. He will speed up the permitting process for wind energy, which currently takes a decade to build. And he'll push the state to subsidize geothermal wells and fusion development — because those technologies are good climate policy and an economic strategy for what comes after fossil fuels.",
    ],
  },
];

function TurbineGraphic() {
  return (
    <svg viewBox="0 0 120 120" width="84" height="84" fill="none" stroke="#fff" strokeWidth="3" aria-hidden="true" style={{ opacity: .92 }}>
      <circle cx="60" cy="52" r="6" fill="#FF9600" stroke="none" />
      <path d="M60 52 L60 14 M60 52 L93 71 M60 52 L27 71" strokeLinecap="round" strokeWidth="7" stroke="#fff" />
      <path d="M60 58 L60 106" strokeLinecap="round" />
    </svg>
  );
}

// collapsed thumbnail (video or climate still)
function IssueThumb({ it }) {
  if (it.climate) {
    return (
      <div className="athumb" style={{ background: "linear-gradient(135deg,#0a6b4f,#0a2a6e)" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <TurbineGraphic />
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 13, letterSpacing: ".1em", color: "#fff", textTransform: "uppercase" }}>Built in Massachusetts</span>
        </div>
      </div>
    );
  }
  return <VideoThumb className="athumb" label="" />;
}

function IssueBodyContent({ it, modal }) {
  return (
    <>
      <div className="atext">
        {it.body.map((p, i) => <p key={i}>{p}</p>)}
        <a className="atoggle" href="#plan" style={{ marginTop: 4, textDecoration: "none" }}>
          Read the full plan <ArrowIcon color="#FF9600" className="ar" />
        </a>
      </div>
      <div>
        {it.climate ? (
          <div className="abody-video" style={{ aspectRatio: "9/12", background: "linear-gradient(135deg,#0a6b4f,#0a2a6e)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "10px 10px 0 0 var(--red)" }}>
            <TurbineGraphic />
          </div>
        ) : (
          <VideoThumb className="abody-video" label="Watch the clip" style={modal ? { aspectRatio: "9/14" } : null} />
        )}
      </div>
    </>
  );
}

function IssueCard({ it, mode, open, onToggle }) {
  const isModal = mode === "Modal";
  return (
    <div className={`acard${open && !isModal ? " open" : ""}${it.climate ? " climate" : ""}`}>
      <div className="ahead" onClick={onToggle} role="button" tabIndex={0}
           onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(); } }}>
        <div className="amid">
          <h3 className="atitle">{it.title}</h3>
          <p className="ateaser">{it.teaser}</p>
          <span className="atoggle">
            {isModal ? "Read the full story" : (open ? "Close" : "Read the full story")}
            {isModal ? <ArrowIcon color="#FF9600" className="ar" /> : <ChevronIcon color="#FF9600" />}
          </span>
        </div>
        <IssueThumb it={it} />
      </div>
      {!isModal && (
        <div className="abody">
          <div className="abody-inner">
            <div className="abody-pad">
              <IssueBodyContent it={it} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function IssueModal({ it, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, []);
  if (!it) return null;
  // Portal to body so position:fixed isn't trapped by a transformed ancestor
  // (the reveal animation creates a containing block otherwise).
  return ReactDOM.createPortal(
    <div className="imodal-scrim" onClick={onClose}>
      <div className="imodal" onClick={(e) => e.stopPropagation()}>
        <button className="imodal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="imodal-head">
          <span className="imodal-eyebrow">The plan</span>
          <h3 className="atitle">{it.title}</h3>
        </div>
        <div className="imodal-body">
          <IssueBodyContent it={it} modal />
        </div>
      </div>
    </div>,
    document.body
  );
}

function IssuesList({ mode, startOpen }) {
  // accordion: single open index; inline: set of open indices; modal: open id
  const [openOne, setOpenOne] = useStateI(startOpen && mode !== "Modal" ? 0 : null);
  const [openMany, setOpenMany] = useStateI(startOpen && mode === "Inline" ? { 0: true } : {});
  const [modalIt, setModalIt] = useStateI(null);

  const toggle = (it, i) => {
    if (mode === "Modal") { setModalIt(it); return; }
    if (mode === "Accordion") { setOpenOne((c) => (c === i ? null : i)); return; }
    setOpenMany((s) => ({ ...s, [i]: !s[i] }));
  };
  const isOpen = (i) => mode === "Accordion" ? openOne === i : !!openMany[i];

  return (
    <>
      <div className="acc">
        {ISSUES.map((it, i) => (
          <IssueCard key={it.n} it={it} mode={mode} open={isOpen(i)} onToggle={() => toggle(it, i)} />
        ))}
      </div>
      {mode === "Modal" && modalIt && <IssueModal it={modalIt} onClose={() => setModalIt(null)} />}
    </>
  );
}

window.IssuesList = IssuesList;
window.ISSUES = ISSUES;
