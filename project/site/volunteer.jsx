// ============================================================
// VOLUNTEER PAGE — "Join the movement"
// Sign-up form (visual design only; dev wires the backend).
// Layout is a Tweak: Split (aside + form) / Centered card.
// ============================================================
const { useState: useStateV } = React;

const INTERESTS = ["Knock Doors", "Call Neighbors", "Host an Event", "Other Skill to Offer"];

function VolAside() {
  const ways = [
    ["Knock doors", "The single highest-impact thing you can do. We'll train you and pair you up."],
    ["Make calls", "Help the campaign from your couch."],
    ["Host an event", "Gather neighbors for a house party or meet-and-greet."],
    ["Lend a skill", "Graphic design, childcare at events, bartending -- every skill can be put to good use!"],
  ];
  return (
    <div className="vol-aside">
      <div className="vol-portrait" style={{ backgroundImage: "url(project/site/assets/burhan-portrait-cutout.png)", backgroundColor: "#215BBE", backgroundPosition: "center -10px", backgroundSize: "auto 320px", backgroundRepeat: "no-repeat" }} />
      <div className="vbox">
        <h2 className="vbig">It takes all of us</h2>
        <ul className="vlist">
          {ways.map(([h, d]) => (
            <li key={h}><span className="vd" /><span><strong style={{ fontFamily: "var(--font-heading)", letterSpacing: ".02em", textTransform: "uppercase", fontSize: 18 }}>{h}</strong> {d}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Field({ label, opt, value, onChange, type = "text", placeholder, err, name }) {
  return (
    <label className={`field${err ? " err" : ""}`}>
      <span>{label}{opt && <span className="opt"> · optional</span>}</span>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} name={name}
             aria-invalid={!!err} />
      {err && <span className="errmsg">{err}</span>}
    </label>
  );
}

function VolForm() {
  const [f, setF] = useStateV({ first: "", last: "", email: "", phone: "", zip: "" });
  const [picks, setPicks] = useStateV({ "Knock Doors": true });
  const [errs, setErrs] = useStateV({});
  const [done, setDone] = useStateV(false);

  const set = (k) => (e) => { setF((s) => ({ ...s, [k]: e.target.value })); setErrs((s) => ({ ...s, [k]: null })); };
  const toggle = (v) => setPicks((s) => ({ ...s, [v]: !s[v] }));

  const [submitting, setSubmitting] = useStateV(false);

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!f.first.trim()) next.first = "Required";
    if (!f.last.trim()) next.last = "Required";
    if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) next.email = f.email.trim() ? "Enter a valid email" : "Required";
    if (!/^\d{5}$/.test(f.zip.trim())) next.zip = f.zip.trim() ? "5-digit ZIP" : "Required";
    setErrs(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    const interests = Object.keys(picks).filter((k) => picks[k]).join(", ");
    const params = new URLSearchParams({
      EMAIL: f.email.trim(),
      FNAME: f.first.trim(),
      LNAME: f.last.trim(),
      PHONE: f.phone.trim(),
      ZIP: f.zip.trim(),
      VOLUNTEER: interests,
    });

    const callbackName = "mc_cb_" + Date.now();
    const script = document.createElement("script");
    window[callbackName] = (data) => {
      delete window[callbackName];
      script.remove();
      setSubmitting(false);
      if (data.result === "success") {
        window.plausible && window.plausible('Volunteer Form Submit');
        window.location.href = "https://www.mobilize.us/burhanforstatesenate/";
      } else {
        setErrs({ form: data.msg.replace(/<[^>]*>/g, "") });
      }
    };
    const base = "https://voteburhan.us20.list-manage.com/subscribe/post-json?u=1597408c6e4707fa041c3da45&id=f4bf312185";
    script.src = `${base}&${params.toString()}&c=${callbackName}`;
    document.body.appendChild(script);
  };

  if (done) {
    return (
      <div className="vform">
        <div className="vthanks">
          <BoxedHeader onOrange>You're in{f.first ? `, ${f.first}` : ""}!</BoxedHeader>
          <p className="lead" style={{ maxWidth: "42ch" }}>
            Thanks for stepping up. We'll send you upcoming canvasses, phone banks, and events near
            {f.zip ? ` ${f.zip}` : " you"} — and get you plugged in close to home.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginTop: 6 }}>
            <Button variant="orange" href={ACTBLUE} target="_blank" arrow arrowColor="#003DA5" onClick={trackDonate}>Chip in too</Button>
            <Button variant="ghost" onClick={() => { setDone(false); }}>Edit my info</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="vform" onSubmit={submit} noValidate>
      <h3 className="vform-h">Sign up to help</h3>
      <div className="frow">
        <Field label="First name" value={f.first} onChange={set("first")} placeholder="Jane" err={errs.first} />
        <Field label="Last name" value={f.last} onChange={set("last")} placeholder="Rivera" err={errs.last} />
      </div>
      <Field label="Email" type="email" value={f.email} onChange={set("email")} placeholder="jane@email.com" err={errs.email} />
      <div className="frow">
        <Field label="Phone" opt value={f.phone} onChange={set("phone")} placeholder="(617) 555-0148" />
        <Field label="ZIP code" value={f.zip} onChange={set("zip")} placeholder="02143" err={errs.zip} />
      </div>
      <div className="field" style={{ marginBottom: 4 }}>
        <span>How do you want to help?</span>
        <div className="checks-grid">
          {INTERESTS.map((v) => (
            <span key={v} className={`chk${picks[v] ? " on" : ""}`} onClick={() => toggle(v)} role="checkbox" aria-checked={!!picks[v]} tabIndex={0}
                  onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(v); } }}>
              <span className="box" />{v}
            </span>
          ))}
        </div>
      </div>
      {errs.form && <p style={{ color: "var(--red, #c0392b)", fontSize: 14, margin: "0 0 8px" }}>{errs.form}</p>}
      <Button variant="orange" type="submit" className="vsubmit" arrow arrowColor="#003DA5" disabled={submitting}>
        {submitting ? "Sending…" : "Count me in"}
      </Button>
      <p style={{ fontSize: 11, lineHeight: 1.5, color: "var(--blue)", opacity: .55, margin: "14px 0 0" }}>By submitting your cell phone number, you consent to receive periodic updates from The Azeem Campaign, including by automated text message. Messages include donation asks. Messaging frequency varies and Msg &amp; Data rates may apply. Text HELP for help, STOP to end. <a href="tos.html" style={{ color: "inherit" }}>Terms</a> &amp; <a href="privacy.html" style={{ color: "inherit" }}>Privacy policy</a>.</p>
    </form>
  );
}

function VolunteerBody({ layout }) {
  if (layout === "Centered") {
    return (
      <section className="section" style={{ paddingTop: 72, paddingBottom: 96 }}>
        <Reveal style={{ maxWidth: 640, margin: "0 auto" }}>
          <VolForm />
        </Reveal>
      </section>
    );
  }
  return (
    <div className="vol-wrap">
      <Reveal><VolAside /></Reveal>
      <Reveal><VolForm /></Reveal>
    </div>
  );
}

window.VolunteerBody = VolunteerBody;
