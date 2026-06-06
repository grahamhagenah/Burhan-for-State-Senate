// ============================================================
// HOME (placeholder) — the full homepage is already designed;
// this is a clean branded landing that routes to the new pages.
// ============================================================
function HomeHero() {
  return (
    <section className="home-hero motif-bg">
      <div className="bullseye">
        <span className="ring r-orange" />
        <span className="ring r-red" />
        <span className="ring r-photo">
          <img src="assets/burhan-portrait-cutout.png" alt="Burhan Azeem" />
        </span>
      </div>
      <div className="hcol">
        <span className="htag">State Senate '26</span>
        <h1>More is possible</h1>
        <p className="hsub">
          Burhan Azeem is running for State Senate in the 2nd Middlesex — to deliver on
          housing, transit, and childcare for working families.
        </p>
        <div className="hbtns">
          <Button variant="orange" href="volunteer.html" arrow arrowColor="#003DA5">Join the campaign</Button>
          <Button variant="ghost" href="issues.html">Why I'm running</Button>
        </div>
      </div>
    </section>
  );
}

function HomeCards() {
  const cards = [
    { n: "01", title: "The Issues", body: "Six fights worth having — from housing and transit to a State House that actually works.", href: "issues.html", cta: "See the plan" },
    { n: "02", title: "The Receipts", body: "Don't take our word for it. A record of results Burhan has already delivered.", href: "receipts.html", cta: "See the proof" },
    { n: "03", title: "Volunteer", body: "More is possible if we build it together. Knock doors, make calls, host an event.", href: "volunteer.html", cta: "Join us" },
  ];
  return (
    <section className="section priorities" style={{ background: "transparent" }}>
      <Reveal style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <BoxedHeader eyebrow="Start here">Explore the campaign</BoxedHeader>
        <div className="pgrid">
          {cards.map((c) => (
            <a className="pcard" href={c.href} key={c.n} style={{ textDecoration: "none", border: "1px solid var(--line-grey)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 40, color: "var(--orange)", lineHeight: 1 }}>{c.n}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <span className="atoggle" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--orange)", marginTop: 4 }}>
                {c.cta} <ArrowIcon color="#FF9600" className="ar" />
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function HomeNote() {
  return (
    <div style={{ background: "var(--surface-tint)", borderTop: "1px solid var(--line-grey)", borderBottom: "1px solid var(--line-grey)", padding: "18px 120px", textAlign: "center", fontFamily: "var(--font-body)", fontSize: 15, color: "var(--fg-muted)" }} className="homenote">
      Note — the full homepage is already designed. This landing routes to the newly designed Issues, Volunteer, and Receipts pages.
    </div>
  );
}

window.HomeHero = HomeHero;
window.HomeCards = HomeCards;
window.HomeNote = HomeNote;
