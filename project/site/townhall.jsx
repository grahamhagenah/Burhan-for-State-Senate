// ============================================================
// TOWNHALL PAGE — "The YIMBY Agenda: A National Housing Town Hall"
// Not linked from the top nav. Lives at /townhall.
// Before Aug 4: Mobilize registration card. On/after Aug 4: YouTube livestream embed.
// ============================================================
const { useState: useStateT, useEffect: useEffectT } = React;

const MOBILIZE_URL = "https://www.mobilize.us/burhanforstatesenate/event/992771/";
// Swap in the real video ID once the stream is live.
const YOUTUBE_ID = "";

function isEventDay() {
  return new Date() >= new Date(2026, 7, 4);
}

function TownhallHero() {
  return (
    <section className="th-poster-wrap">
      <h1 className="sr-only">The YIMBY Agenda: A National Housing Town Hall — August 4</h1>
      <Reveal className="th-poster">
        <picture>
          <source media="(max-width: 640px)" srcSet="/project/site/assets/townhall-poster-portrait.png" />
          <img src="/project/site/assets/townhall-poster-banner.png" alt="" />
        </picture>
      </Reveal>
    </section>
  );
}

function RegisterCard() {
  return (
    <Reveal className="th-card">
      <p className="th-lead">Save your spot, and then come back here to watch live.</p>
      <Button variant="orange" href={MOBILIZE_URL} target="_blank" arrow arrowColor="#003DA5"
        onClick={() => window.plausible && window.plausible('Townhall Register Click')}>
        Register on Mobilize
      </Button>
    </Reveal>
  );
}

function LivestreamEmbed() {
  return (
    <Reveal className="th-video">
      <iframe
        src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
        title="The YIMBY Agenda: A National Housing Town Hall"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Reveal>
  );
}

function TownhallPage() {
  const [live, setLive] = useStateT(false);
  useEffectT(() => { setLive(isEventDay()); }, []);

  return (
    <>
      <TownhallHero />
      <div className="th-body">
        {live ? <LivestreamEmbed /> : <RegisterCard />}
      </div>
    </>
  );
}

window.TownhallPage = TownhallPage;
