// ============================================================
// INTERNSHIP PAGE — "Join the Campaign: High School Summer Internship 2026"
// ============================================================

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdUyktfKWX6KpuUuRIS5QyGFWtchnUIn1Ws5vIC8gU1HHz_7g/viewform?usp=dialog";

function InternDot() {
  return <span className="intern-dot" aria-hidden="true" />;
}

function InternshipHero() {
  return (
    <section className="page-hero motif-bg intern-hero">
      <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 20 }}>
        <span className="kicker">Deadline: June 16</span>
        <h1>Summer Internship</h1>
        <p style={{ maxWidth: "52ch" }}>
          We're looking for ambitious high school students to become part of the campaign. You'll
          register voters, help canvassers move faster, and get our message out to the district.
          By the end, you'll know more about how elections work than most adults do.
        </p>
        <Button variant="orange" href={APPLY_URL} target="_blank" arrow arrowColor="#003DA5"
          style={{ fontSize: 22, padding: "14px 32px", marginTop: 8 }}
          onClick={() => window.plausible && window.plausible('Internship Apply')}>
          Apply Now
        </Button>
      </Reveal>
    </section>
  );
}

function InternshipLogistics() {
  const items = [
    { label: "Where", val: "In person", sub: "Cambridge Campaign HQ" },
    { label: "Commitment", val: "8–10 hrs / week", sub: "Come in 2 days per week" },
    { label: "When", val: "Jun 23 – Sep 2", sub: "Available at least 8 weeks" },
  ];
  return (
    <div className="intern-stats-band">
      <Reveal className="intern-stats-row">
        {items.map((item) => (
          <div key={item.label} className="intern-stat">
            <span className="intern-stat-label">{item.label}</span>
            <span className="intern-stat-val">{item.val}</span>
            <span className="intern-stat-sub">{item.sub}</span>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

function WhatYoullDo() {
  return (
    <div className="intern-card">
      <h2 className="intern-section-head">What you'll do</h2>
      <p className="intern-lead">Interns get assigned projects based on their skills and the campaign's needs. Examples include:</p>

      <div className="intern-group">
        <p className="intern-group-label">In the Field</p>
        <ul className="intern-list">
          <li><InternDot /><span>Identify local businesses that support Burhan and build relationships</span></li>
          <li><InternDot /><span>Assist canvassers so they can move faster and talk to more voters</span></li>
        </ul>
      </div>

      <div className="intern-group">
        <p className="intern-group-label">Content &amp; Social</p>
        <ul className="intern-list">
          <li><InternDot /><span>Repurpose existing content into stories and reels</span></li>
          <li><InternDot /><span>Film b-roll of canvassers and Burhan</span></li>
          <li><InternDot /><span>Pitch and create original social content</span></li>
        </ul>
      </div>
    </div>
  );
}

function WhoWereLookingFor() {
  return (
    <div className="intern-card">
      <h2 className="intern-section-head">Who we're looking for</h2>
<ul className="intern-list">
        <li><InternDot /><span>Friends and family say you're <strong>extremely reliable</strong></span></li>
        <li><InternDot /><span>You can communicate your ideas and plans well, out loud</span></li>
        <li><InternDot /><span>You live in the district <strong>(Cambridge, Somerville, Winchester, or Medford)</strong></span></li>
        <li><InternDot /><span>You're available 8–10 hrs/week for at least eight weeks through Sept 2</span></li>
      </ul>
      <div className="intern-bonus">
        <span className="intern-bonus-label">Bonus</span>
        <p>Bonus: if you've got a special skill, e.g., photography, music composition, or balloon animals, we'll put it to good use!</p>
      </div>
    </div>
  );
}

function WhatYouGet() {
  return (
    <div className="intern-card" style={{ marginTop: 24 }}>
      <h2 className="intern-section-head">What you get</h2>
      <ul className="intern-list">
        <li><InternDot /><span>A <strong>letter of recommendation</strong> at the end of the summer</span></li>
        <li><InternDot /><span><strong>Mentorship</strong> from campaign staff, including graduates of Harvard Law and ex-Googlers.</span></li>
      </ul>
    </div>
  );
}

function InternshipApply() {
  return (
    <section className="fcta motif-bg">
      <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
        <h2>Apply by June 16</h2>
        <p>Parents, if you have questions, you can email <a href="mailto:niki@voteburhan.com" style={{ color: "inherit", textDecoration: "underline" }}>niki@voteburhan.com</a></p>
        <Button variant="orange" href={APPLY_URL} target="_blank" arrow arrowColor="#003DA5"
          style={{ fontSize: 22, padding: "14px 32px" }}
          onClick={() => window.plausible && window.plausible('Internship Apply')}>
          Apply Now
        </Button>
      </Reveal>
    </section>
  );
}

function InternshipPage() {
  return (
    <>
      <InternshipHero />
      <InternshipLogistics />

      <div className="intern-body">
        <Reveal><WhatYoullDo /></Reveal>
        <div>
          <Reveal><WhoWereLookingFor /></Reveal>
          <Reveal><WhatYouGet /></Reveal>
        </div>
      </div>

      <InternshipApply />
    </>
  );
}

window.InternshipPage = InternshipPage;
