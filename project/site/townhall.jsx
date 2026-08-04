// ============================================================
// TOWNHALL PAGE — "The YIMBY Agenda: A National Housing Town Hall"
// Not linked from the top nav. Lives at /housing.
// Before Aug 4: hero CTA + Mobilize registration. On/after Aug 4: YouTube livestream embed.
// ============================================================
const { useState: useStateT, useEffect: useEffectT } = React;

const MOBILIZE_URL = "https://www.mobilize.us/burhanforstatesenate/event/992771/";
// Swap in the real video ID once the stream is live.
const YOUTUBE_ID = "yz_XWRIvk5A";

const COHOSTS = [
  { name: "Jonathan Berk", title: "Founder, re:MAIN" },
  { name: "Chelsea Byers", title: "Councilmember & Fmr. Mayor, West Hollywood" },
  { name: "Matt Darling", title: "Policy Fellow, Searchlight Institute" },
  { name: "Sam Deutsch", title: "Better Cities" },
  { name: "Armand Domalewski", title: "Co-Founder, YIMBY Democrats" },
  { name: "Gaelle Esposito", title: "President, Welcoming Neighbors Network" },
  { name: "Laura Foote", title: "Executive Director, YIMBY Action" },
  { name: "M. Nolan Gray", title: "Author, Arbitrary Lines · California YIMBY" },
  { name: "Brian Hanlon", title: "Co-Founder & CEO, California YIMBY" },
  { name: "Jesse Kanson-Benanav", title: "Executive Director, Abundant Housing MA" },
  { name: "Amanda Litman", title: "Co-Founder & President, Run for Something" },
  { name: "Greg Magofña", title: "Co-Founder, East Bay for Everyone" },
  { name: "Will Poff-Webster", title: "Infrastructure Policy Director, Institute for Progress" },
  { name: "Dan Reed", title: "Maryland Policy Director, Greater Greater Washington" },
  { name: "Marina Rubina", title: "Architect and Host, Who Killed the Starter Home?" },
  { name: "Justin Saif", title: "President, A Better Cambridge" },
];

function isEventDay() {
  return new Date() >= new Date(2026, 7, 4);
}

function RegisterButton({ label = "Register on Mobilize" }) {
  return (
    <Button variant="orange" href={MOBILIZE_URL} target="_blank" arrow arrowColor="#003DA5"
      onClick={() => window.plausible && window.plausible('Townhall Register Click')}>
      {label}
    </Button>
  );
}

function TownhallHero({ live }) {
  return (
    <section className="th-hero">
      <Reveal as="div" className="th-hero-grid">
        <h1 className="th-headline">More <span className="th-bracket">[</span>Housing<span className="th-bracket">]</span> Is Possible</h1>
        <p className="th-when">Tuesday, August 4 · 7PM ET / 4PM PT · Livestream</p>
        <p className="th-sub">Join Vice Mayor Burhan Azeem and the people behind the Montana Miracle, California’s SB79, and the ROAD to Housing Act to discuss recent wins, the path forward, and what's next for the housing movement.</p>
        <div className="th-cta">
          {live ? (
            <p className="th-micro th-live-note">We're live — scroll down to <a href="#watch">watch now</a>.</p>
          ) : (
            <>
              <RegisterButton />
              <p className="th-micro">Registered? Come back here on Aug 4 to watch live.</p>
            </>
          )}
        </div>
        <div className="th-flyer">
          <picture>
            <source media="(max-width: 640px)" srcSet="/project/site/assets/townhall-poster-aug4.png" />
            <img src="/project/site/assets/townhall-poster-aug4.png" alt="More [Housing] Is Possible — A National Town Hall, Tuesday August 4, 7PM ET" />
          </picture>
        </div>
      </Reveal>
    </section>
  );
}

function WhatToExpect() {
  return (
    <section className="th-expect">
      <Reveal className="th-expect-inner">
        <span className="eyebrow-label">What to expect</span>
        <p>Speakers will dig into the policy that's moving the needle, the campaigns and organizing that got us here, and how local leadership can turn big ideas into more homes.</p>
        <p>Expect sharp takes, lively panels, and the collective brainpower of the country's most effective housing advocates in one room.</p>
      </Reveal>
    </section>
  );
}

function CoHosts() {
  return (
    <section className="th-cohost">
      <Reveal className="th-cohost-inner">
        <h2>Co-hosted by organizers, policymakers, and advocates from across the country</h2>
        <ul className="th-cohost-grid">
          {COHOSTS.map((p) => (
            <li key={p.name}>
              <span className="th-cohost-name">{p.name}</span>
              <span className="th-cohost-title">{p.title}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

function RepeatCTA() {
  return (
    <section className="th-repeat">
      <Reveal>
        <RegisterButton />
      </Reveal>
    </section>
  );
}

function LivestreamEmbed() {
  return (
    <section className="th-body" id="watch">
      <Reveal className="th-video">
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
          title="The YIMBY Agenda: A National Housing Town Hall"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Reveal>
    </section>
  );
}

function TownhallPage() {
  const [live, setLive] = useStateT(false);
  useEffectT(() => { setLive(isEventDay()); }, []);

  return (
    <>
      <TownhallHero live={live} />
      <WhatToExpect />
      <CoHosts />
      {live ? <LivestreamEmbed /> : <RepeatCTA />}
    </>
  );
}

window.TownhallPage = TownhallPage;
