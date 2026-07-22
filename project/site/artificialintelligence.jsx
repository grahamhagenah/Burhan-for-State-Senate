// ============================================================
// AI PAGE — "AI: Safety and Shared Prosperity"
// ============================================================

function AIPhoto({ label, ratio = "4/3" }) {
  return (
    <div className="ai-ph" style={{ "--ar": ratio }}>
      <span className="ai-ph-ico">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3l-1.8 2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.2L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
      </span>
      <span className="ai-ph-label">{label}</span>
    </div>
  );
}

function AIImage({ src, alt, ratio = "4/3" }) {
  return <div className="ai-photo" style={{ "--ar": ratio, backgroundImage: `url(${src})` }} role="img" aria-label={alt} />;
}

function AILink({ href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="ai-link">{children}</a>;
}

function AIHero() {
  return (
    <section className="page-hero motif-bg ai-hero">
      <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 20 }}>
        <span className="kicker">Policy: Artificial Intelligence</span>
        <h1>Safety and Shared Prosperity</h1>
        <p className="lede">
          Fifty years ago, Cambridge faced down a frightening new technology and chose to write the rules
          instead of running from them. That decision built the biotech capital of the world. We can do
          the same thing with AI.
        </p>
      </Reveal>
    </section>
  );
}

function AIMovingFast() {
  return (
    <section className="ai-section alt">
      <Reveal className="ai-row">
        <div>
          <span className="ai-eyebrow">The moment</span>
          <h2>AI Is Moving Fast</h2>
          <div className="ai-body">
            <p>AI is moving faster than any technology we have ever seen. The amount of work these systems can do on their own is <AILink href="https://metr.org/time-horizons/">roughly doubling every few months</AILink>, and that pace shows no sign of letting up.</p>
            <p>A lot of what is coming will be good for us. Faster ways to find new medicines. Real expert help for families who could never afford a lawyer or a specialist. But a lot of it is worrying too. These tools have already been used to help plan cyberattacks. Our <AILink href="https://www.bostonglobe.com/2026/07/20/business/massachusetts-artificial-intelligence-poll/">schools are struggling to keep up with them</AILink>. And if you are wondering what all of this means for your own job, the honest answer is that nobody can tell you yet.</p>
            <p>What we can do is write good rules while it still matters, and I think Massachusetts is exactly the place to do it.</p>
          </div>
        </div>
        <div className="ai-media">
          <AIImage src="/project/site/assets/ai_burhan_speaking.png" alt="Burhan Azeem speaking at a podium" ratio="4/3" />
        </div>
      </Reveal>
    </section>
  );
}

function AICambridge() {
  return (
    <section className="ai-section">
      <Reveal className="ai-row rev">
        <div>
          <span className="ai-eyebrow">The Cambridge precedent</span>
          <h2>We've Gone Through This Before</h2>
          <div className="ai-body">
            <p>In 1976, Harvard wanted to build a lab here for a frightening new technology called recombinant DNA, the foundation of modern genetic engineering. Neighbors packed City Hall, and <AILink href="https://www.sciencehistory.org/stories/distillations-pod/the-people-vs-recombinant-dna/">the mayor stood up and warned about Frankenstein</AILink>.</p>
            <p>Cambridge did not panic and it did not look away. The city paused the research, sat regular residents on a review board next to the scientists, and then passed <AILink href="https://www.cambridgeday.com/2026/06/11/fifty-years-since-recombination-debate-ushered-in-biotech-in-cambridge/">the first law anywhere in the world governing this kind of research</AILink>. That ordinance is still on the books today.</p>
            <p>The clear rules gave companies the certainty to build here, and Kendall Square grew into <AILink href="https://www.bostonglobe.com/business/2016/03/17/how-cambridge-became-life-sciences-capital/MgKcguVmPSkVzvlKPp89cK/story.html">the biotech capital of the world</AILink>. What started in our City Hall spread outward, to <AILink href="https://www.sciencehistory.org/stories/magazine/an-absolute-good/">Princeton, San Diego, Ann Arbor, and beyond</AILink> — and <AILink href="https://archive.org/details/geneticalchemyso00krim">someone even wrote a book about how it all happened</AILink>. A lot of the treatments saving lives today trace back to a city council that chose to write the rules instead of running from them.</p>
            <p>We can do the same thing with AI.</p>
          </div>
        </div>
        <div className="ai-media">
          <AIImage src="/project/site/assets/ai_cambridge_cityhall.jpg" alt="Cambridge City Hall" ratio="4/3" />
        </div>
      </Reveal>
    </section>
  );
}

function AIStepOne() {
  return (
    <section className="ai-section alt">
      <Reveal>
        <div style={{ maxWidth: 760 }}>
          <span className="ai-eyebrow">Step one</span>
          <h2 style={{ maxWidth: "none" }}>Match the Strongest Laws in America</h2>
          <div className="ai-body">
            <p>California, New York, and Illinois have already passed the country's first AI safety laws. They require the largest AI companies to publish their safety plans, report serious incidents, and protect the employees who speak up when something looks dangerous, and Illinois now brings in outside auditors to make sure the work is actually being done. Massachusetts should, at the very least, hold ourselves to those same standards.</p>
            <p>And these things tend to spread: New York borrowed from California, Illinois built on both, and Congress is now using all three as the starting point for a <AILink href="https://www.techpolicy.press/unpacking-the-great-american-artificial-intelligence-act-of-2026/">national framework</AILink>. <AILink href="https://whav.net/2026/07/20/poll-voters-want-ai-regulated-finegold-says-senate-bill-does-the-job/">Beacon Hill is debating a version right now</AILink>, and on this one the public is out ahead of the politicians.</p>
          </div>
        </div>
        <div className="ai-stats">
          <div className="ai-stat">
            <span className="ai-stat-num">75%</span>
            <span className="ai-stat-label">of Massachusetts voters support the bill (poll, July 2026)</span>
          </div>
          <div className="ai-stat">
            <span className="ai-stat-num">~70%</span>
            <span className="ai-stat-label">say they do not want to wait on Washington to act</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function AIPillars() {
  const items = [
    { n: "01", title: "Real safety standards", body: <>Right now <AILink href="https://www.gov.ca.gov/2025/09/29/governor-newsom-signs-sb-53-advancing-californias-world-leading-artificial-intelligence-industry/">the law only asks companies to describe</AILink> their own safety plans. We should set actual requirements the most powerful systems have to meet before internal deployment, including locking the models down so they cannot be stolen or quietly tampered with. We crash-test cars and we run trials on new medicine. This is the same common sense.</> },
    { n: "02", title: "Real accountability", body: <>If a company's AI causes a genuine catastrophe, that company should be <AILink href="https://www.nbcnews.com/tech/tech-news/ai-law-california-ca-companies-regulation-newsom-rcna234562">on the hook for the harm</AILink>.</> },
    { n: "03", title: "Independent testing", body: <>The most powerful models should be checked by <AILink href="https://www.transparencycoalition.ai/news/illinois-lawmakers-send-significant-ai-frontier-model-safety-bill-to-gov-pritzker">qualified outside experts</AILink> before the rest of us ever use them. On something this consequential, no one should be grading their own homework.</> },
    { n: "04", title: "An AI dividend", body: "If these systems create the kind of wealth their builders keep promising, working families ought to share in it. When companies profit from automating the work people used to do, some of that gain should come back to the public that made it possible." },
  ];
  return (
    <section className="ai-section">
      <Reveal>
        <span className="ai-eyebrow">The plan</span>
        <h2 style={{ maxWidth: "none", marginBottom: 8 }}>Four Places Massachusetts Should Lead</h2>
        <div className="ai-pillars">
          {items.map((it) => (
            <div className="ai-pillar" key={it.n}>
              <span className="ai-pillar-n">Issue {it.n}</span>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function AIFutures() {
  return (
    <section className="ai-section alt">
      <Reveal>
        <div style={{ maxWidth: 780, marginBottom: 8 }}>
          <span className="ai-eyebrow">Why the rules matter</span>
          <h2 style={{ maxWidth: "none" }}>Two Futures</h2>
          <div className="ai-body">
            <p>I want to be clear about why I care so much about getting the rules right, because the range of outcomes here is enormous.</p>
          </div>
        </div>
        <div className="ai-futures">
          <div className="ai-future bad">
            <span className="ai-future-label">Future one</span>
            <p>AI puts half the country out of work.</p>
          </div>
          <span className="ai-vs">vs.</span>
          <div className="ai-future good">
            <span className="ai-future-label">Future two</span>
            <p>AI simply lets all of us do the same work in half the time, for the same pay.</p>
          </div>
        </div>
        <div className="ai-body" style={{ maxWidth: 780 }}>
          <p>On an economist's spreadsheet those two futures look almost identical, because in both cases the same work gets done with far fewer hours. In the lives of actual people they could not be more different. One of them hollows out families and whole towns. The other doesn't sound half bad.</p>
          <p>Technology will keep moving no matter what any of us do about it. What policy decides is who ends up better off when it does. That, to me, is the entire point of doing this job well.</p>
        </div>
      </Reveal>
    </section>
  );
}

function AIWhyMe() {
  return (
    <section className="ai-section">
      <Reveal>
        <span className="ai-eyebrow">Why this fight, and why me</span>
        <div className="ai-bio">
          <div className="ai-bio-photo" style={{ backgroundImage: "url(/project/site/assets/ai_bio_portrait.png)" }} />
          <div className="ai-body">
            <p>There is not a single engineer in the Massachusetts State Senate, and AI is moving so fast that even the people building it are struggling to keep up. I studied engineering at MIT, I have built AI products myself, and I have spent years close to the AI researchers and advocates shaping this policy. I do not claim to have every answer, because nobody honestly does yet. But I do think I bring a particular kind of insight to these questions, and a real willingness to do the hard work of getting them right.</p>
            <p>Fifty years ago, this community looked at a frightening new technology, chose to write the rules, and ended up leading the very industry it was afraid of. That is the Massachusetts way, and it is the work I want to take to Beacon Hill.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function AIPage() {
  return (
    <>
      <AIHero />
      <AIMovingFast />
      <AICambridge />
      <AIStepOne />
      <AIPillars />
      <AIFutures />
      <AIWhyMe />
      <SiteFooter headline="Let's write the rules" sub={"Massachusetts got ahead of biotech and became its capital.\nWe can do the same with AI."} />
    </>
  );
}

window.AIPage = AIPage;
