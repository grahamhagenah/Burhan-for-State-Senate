// ============================================================
// ISSUES PAGE — "What Burhan will deliver"
// 6 issue cards; clicking opens a modal.
// ============================================================
const { useState: useStateI } = React;

const ISSUES = [
  {
    n: 1, slug: "housing", title: "Housing", kicker: "Issue 01",
    teaser: "Allow neighborhoods to build the housing they want and need",
    thumb: "project/site/assets/tripledecker_thumb.png",
    instagram: "https://www.instagram.com/reel/DZFl2SGoJQg/",
    video: "https://www.instagram.com/reel/DZFl2SGoJQg/",
    body: [
      "Massachusetts has a housing crisis because one hundred years ago, the state began making it illegal to build affordable housing. Burhan knows how to undo those laws and unlock new housing. In Cambridge, he passed the Affordable Housing Overlay and re-legalized triple-deckers and starter homes. As state senator, he'll roll out that model statewide.",
      "He'll also make sure the whole state does their part. Right now, communities like Cambridge and Somerville are building, while the state has to sue other towns just to allow any multifamily housing at all. Burhan will push for a housing-by-right law near transit — modeled after California's SB79 — to override local zoning and allow taller, denser housing within a half-mile of transit stops.",
    ],
  },
  {
    n: 2, slug: "transit", title: "Transit", kicker: "Issue 02",
    teaser: "Extend the T and fix the reason it keeps breaking",
    thumb: "project/site/assets/station_thumb.png",
    instagram: "https://www.instagram.com/reel/DXHveu6Ebon/",
    video: "https://www.instagram.com/reel/DXHveu6Ebon/",
    body: [
      "The T can be faster, cheaper to run, and more reliable. It just hasn't happened because the people making decisions don't ride it. Burhan's plan: extend the Red Line to Arlington, the Green Line to West Medford, and build multiple connectors to make transfers faster. He'll fund this construction by implementing congestion pricing and curtailing the MBTA's spending on redundant consultants.",
      "He'll also fix the MBTA longer term by empowering riders. Today, suburban drivers have more say than Boston metro riders. Burhan will propose a new governing body that gives the people who depend on the T more governance control, because a better T means faster commutes and a stronger local economy for everyone.",
    ],
  },
  {
    n: 3, slug: "statehouse", title: "The State House", kicker: "Issue 03",
    teaser: "Restructure Beacon Hill so it's actually productive",
    thumb: "project/site/assets/statehouse_thumb.png",
    instagram: "https://www.instagram.com/reel/DXKitzFiETD/",
    video: "https://www.instagram.com/reel/DXKitzFiETD/",
    body: [
      "Beacon Hill hasn't been delivering for Massachusetts voters for three reasons.",
      "First, the State House has exempted itself from the public records law that applies to every other governing body in Massachusetts. Burhan will end that exception.",
      "Second, secret voting. Fewer than 100 votes are made public each year, which means bills with 80% public support can die with no record of who killed them. Burhan built Cambridge's public legislative tracker so constituents could see exactly how their representatives voted. He'll push for the same transparency at the State House.",
      "Third, a corrupt compensation system. Legislators earn an $82,000 base salary but can collect an additional $120,000 in stipends, awarded at the sole discretion of Beacon Hill leadership. Any legislator who tries to change the system gets a massive pay cut.",
    ],
  },
  {
    n: 4, slug: "affordability", title: "Affordability", kicker: "Issue 04",
    teaser: "Ensure families can stay in our district",
    thumb: "project/site/assets/childcare_thumb.png",
    instagram: "https://www.instagram.com/reel/DYmoI_hIX60/",
    video: "https://www.youtube.com/watch?v=C2SwXPgurkU",
    body: [
      "The number one reason families leave the district is when they have children. Childcare costs more than tuition at UMass, which is why Burhan passed universal pre-K in Cambridge. As state senator, he'll expand that model statewide, putting $21,000 back in every family's pocket.",
      "The second bill that hits families hard is energy. Third-party electricity suppliers have never once saved a customer money. Burhan will move to ban them on day one. He'll also expand Cambridge's Community Energy bulk-purchasing model to every community in the district — a program that has already returned $95 million in savings to Cambridge residents, nearly $2,000 per household.",
    ],
  },
  {
    n: 5, slug: "federal", title: "Trump & Federal Cuts", kicker: "Issue 05",
    teaser: "Build state resilience to Trump's policies",
    thumb: "project/site/assets/trump_thumb.png",
    instagram: "https://www.instagram.com/reel/DXR86ohEd9f/",
    video: "https://www.instagram.com/reel/DXR86ohEd9f/",
    body: [
      "Massachusetts is facing one of the deepest recessions in the country right now. NIH cuts are threatening the research hospitals and universities that employ tens of thousands of people. Vaccine program cuts are dismantling the public health programs families depend on.",
      "Burhan's answer is to build a more resilient Massachusetts. He will incentivize businesses to ensure new technology gets manufactured here, not just invented here. He'll also work with other New England states to jointly fund the health and research programs that Washington has walked away from.",
    ],
  },
  {
    n: 6, slug: "climate", title: "Climate", kicker: "Issue 06", climate: true,
    teaser: "Clean tech is invented here, and should be built here, too",
    instagram: "https://www.instagram.com/reel/DZNJVYJobww/",
    video: "https://www.instagram.com/reel/DZNJVYJobww/",
    body: [
      "Massachusetts invents clean energy, but the manufacturing jobs and climate benefits go elsewhere. Burhan will change the green drain by making it easier for manufacturers to stay. He will speed up the permitting process for wind energy, which currently takes a decade to build. And he'll push the state to subsidize geothermal wells and fusion development — because those technologies are good climate policy and an economic strategy for what comes after fossil fuels.",
    ],
  },
];


// collapsed thumbnail (video or climate still)
function IssueThumb({ it }) {
  if (it.climate) {
    return <div className="athumb" style={{ backgroundImage: "url(project/site/assets/climate_thumb.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />;
  }
  return <div className="athumb" style={it.thumb ? { backgroundImage: `url(${it.thumb})` } : undefined} />;
}

function InstagramEmbed({ url }) {
  React.useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const s = document.createElement("script");
      s.src = "//www.instagram.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);
  return (
    <div className="abody-video ig-embed-wrap">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{ background: "#FFF", border: 0, borderRadius: 3, margin: "0 auto", maxWidth: "100%", minWidth: 0, padding: 0, width: "100%" }}
      />
    </div>
  );
}

function IssueBodyContent({ it, modal }) {
  return (
    <>
      <div className="atext">
        {it.body.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <div>
        {it.instagram ? (
          <InstagramEmbed url={it.instagram} />
        ) : it.climate ? (
          <div className="abody-video" style={{ backgroundImage: "url(project/site/assets/climate_thumb.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", boxShadow: "10px 10px 0 0 var(--red)" }} />
        ) : (
          <VideoThumb className="abody-video" label="Watch the clip" style={modal ? { aspectRatio: "9/14" } : null} />
        )}
      </div>
    </>
  );
}

function IssueCard({ it, onToggle }) {
  return (
    <div className={`acard${it.climate ? " climate" : ""}`}>
      <div className="ahead" onClick={onToggle} role="button" tabIndex={0}
           onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(); } }}>
        <div className="amid">
          <h3 className="atitle">{it.title}</h3>
          <p className="ateaser">{it.teaser}</p>
          <span className="atoggle">
            See the Plan
            <ArrowIcon color="#FF9600" className="ar" />
          </span>
        </div>
        <IssueThumb it={it} />
      </div>
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

function IssuesList() {
  const [modalIt, setModalIt] = useStateI(null);
  useEffect(() => {
    const slug = window.location.hash.replace("#", "");
    if (slug) {
      const match = ISSUES.find((i) => i.slug === slug);
      if (match) setModalIt(match);
    }
  }, []);
  return (
    <>
      <div className="acc">
        {ISSUES.map((it) => (
          <IssueCard key={it.n} it={it} onToggle={() => setModalIt(it)} />
        ))}
      </div>
      {modalIt && <IssueModal it={modalIt} onClose={() => setModalIt(null)} />}
    </>
  );
}

window.IssuesList = IssuesList;
window.ISSUES = ISSUES;
