// ============================================================
// RECEIPTS PAGE — "Burhan has proved that more is possible."
// A) stats bar  B) transit-map timeline (H/V tweak)
// C) press clippings (collage/grid tweak)
// ============================================================

const MILESTONES = [
  { year: "2022", win: "Became the youngest-ever City Councilor in Cambridge history" },
  { year: "2023", win: "Passed the Affordable Housing Overlay 2.0" },
  { year: "2024", win: "Secured universal childcare for Cambridge" },
  { year: "2025", win: "Re-legalized triple-deckers and affordable apartments in Cambridge" },
  { year: "2026", win: "Elected Cambridge Vice Mayor", last: true },
];

const CLIPS = [
  { c: "c1", logo: "project/site/assets/logo-city-journal.png", pub: "City Journal", quote: "Cambridge's city council deserves credit for showing other cities the way to a new approach.", big: true },
  { c: "c2", logo: "project/site/assets/logo-mit-tech-review.png", pub: "MIT Technology Review", quote: "A walking antidote to political cynicism." },
  { c: "c3", logo: "project/site/assets/logo-harvard-crimson.png", pub: "The Harvard Crimson", quote: "One of the Council's most vocal advocates for legalizing multifamily housing citywide" },
  { c: "c4", masthead: "Winchester News", pub: "Winchester News", quote: "In this race, [Burhan] is asking voters to expect more.", src: "https://winchesternews.org/" },
  { c: "c5", logo: "project/site/assets/logo-boston-globe.png", pub: "The Boston Globe", quote: "The most ambitious new zoning anywhere in the nation.", big: true },
];

function Timeline({ orientation }) {
  const vertical = orientation === "Vertical";
  const tl = (
    <div className={`timeline ${vertical ? "vertical" : "horizontal"}`}>
      <div className="tl-line" />
      <div className="tl-stops">
        {MILESTONES.map((m) => (
          <div className={`tl-stop${m.last ? " last" : ""}`} key={m.year}>
            <span className="tl-year">{m.year}</span>
            <span className="tl-dot" />
            <span className="tl-win">{m.win}</span>
          </div>
        ))}
      </div>
    </div>
  );
  const photo = (
    <div className="tl-image">
      <img src="project/site/Burhan_Youngest_Councilor.png" alt="Burhan being sworn in as the youngest-ever City Councilor in Cambridge history" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    </div>
  );
  return (
    <section className="section">
      <Reveal style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <BoxedHeader eyebrow="A record of results">The last four years</BoxedHeader>
        {vertical ? <div className="tl-with-image">{tl}{photo}</div> : tl}
      </Reveal>
    </section>
  );
}

function Clip({ clip }) {
  return (
    <article className={`clip ${clip.c}${clip.big ? " big" : ""}`}>
      <div className="clip-pub">
        {clip.logo ? <img src={clip.logo} alt={clip.pub} /> : <span className="masthead">{clip.masthead}</span>}
      </div>
      <div className="clip-rule" />
      <p className="clip-quote">{"\u201C"}{clip.quote}{"\u201D"}</p>
      {clip.src && (
        <a className="clip-src" href={clip.src} target="_blank" rel="noopener noreferrer">
          Read the story <ArrowIcon color="#FF9600" className="ar" />
        </a>
      )}
    </article>
  );
}

function Clippings({ layout }) {
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <Reveal style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <BoxedHeader eyebrow="Don't take our word for it">In the press</BoxedHeader>
        <div className={`clip-grid${layout === "Clean grid" ? " plain" : ""}`}>
          {CLIPS.map((clip) => <Clip key={clip.c} clip={clip} />)}
        </div>
      </Reveal>
    </section>
  );
}

function ReceiptsBody({ timeline, clips }) {
  return (
    <>
      <Timeline orientation={timeline} />
      <Clippings layout={clips} />
    </>
  );
}

window.ReceiptsBody = ReceiptsBody;
