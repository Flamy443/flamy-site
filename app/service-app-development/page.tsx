import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "App Development Services | Flamy",
  description:
    "Apps people actually keep installed. From idea to App Store, we design and build iOS and Android apps with smooth UX and strong retention.",
};

export default function ServiceAppDevelopmentPage() {
  return (
    <>
      <header className="ph wrap">
        <div className="tag mono" style={{ marginBottom: "28px" }}>
          <span style={{ color: "var(--ash)" }}>Services / App</span>
        </div>
        <h1 className="d">
          App Development
          <span className="fl">.</span>
        </h1>
        <p className="sub">
          Apps people actually keep installed. From idea to App Store, we design and build iOS and Android apps with smooth UX and strong
          retention.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/contact">
            Get My Free App Audit →
          </Link>
          <Link className="btn o" href="/pricing">
            See Pricing
          </Link>
        </div>
      </header>
      <section style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="rv">
            <div className="tag mono">
              <b>01</b> The problem
            </div>
            <h2 className="d" style={{ fontSize: "clamp(38px,6vw,96px)", fontWeight: "800", maxWidth: "1000px" }}>
              Why many apps get deleted in a week
              <span className="fl">.</span>
            </h2>
          </div>
          <div className="probs rv">
            <div>
              <h3>Too many features, too soon</h3>
              <p>Bloated first versions take longer and confuse users.</p>
            </div>
            <div>
              <h3>Poor onboarding</h3>
              <p>If users don&apos;t reach value in a minute, they leave.</p>
            </div>
            <div>
              <h3>Nobody finds the app</h3>
              <p>Without store optimisation and a launch plan, good apps stay hidden.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="rv">
            <div className="tag mono">
              <b>02</b> What&apos;s included
            </div>
            <h2 className="d" style={{ fontSize: "clamp(38px,6vw,96px)", fontWeight: "800" }}>
              Everything you get
              <span className="fl">.</span>
            </h2>
          </div>
          <div className="incg rv">
            <div>
              <i>01</i>
              <h3>Product strategy & MVP</h3>
              <p>We cut scope to the version that proves your idea.</p>
            </div>
            <div>
              <i>02</i>
              <h3>iOS & Android development</h3>
              <p>Native or cross-platform, whichever fits best.</p>
            </div>
            <div>
              <i>03</i>
              <h3>Cross-platform builds</h3>
              <p>React Native or Flutter for speed and shared code.</p>
            </div>
            <div>
              <i>04</i>
              <h3>App UI/UX design</h3>
              <p>Onboarding and flows designed for retention.</p>
            </div>
            <div>
              <i>05</i>
              <h3>API & backend</h3>
              <p>Secure integrations and scalable infrastructure.</p>
            </div>
            <div>
              <i>06</i>
              <h3>ASO & launch</h3>
              <p>Store listing, screenshots and keywords that drive installs.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "0" }}>
        <div className="wrap how">
          <div className="stick rv">
            <div className="tag mono">
              <b>03</b> How we do it
            </div>
            <h2 className="d" style={{ fontSize: "clamp(40px,5.6vw,88px)", fontWeight: "800" }}>
              Our App process
              <span className="fl">.</span>
            </h2>
            <p style={{ margin: "24px 0 30px", fontSize: "19px", maxWidth: "420px" }}>
              Best for: Startups and brands launching or upgrading a mobile product.
            </p>
            <Link className="btn" href="/contact">
              Start With a Free Audit →
            </Link>
          </div>
          <div>
            <div className="hs rv">
              <span className="n">1</span>
              <div>
                <h3>Scope</h3>
                <p>Idea, users and MVP defined.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">2</span>
              <div>
                <h3>Design</h3>
                <p>Flows and UI prototyped and tested.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">3</span>
              <div>
                <h3>Build</h3>
                <p>Development in sprints with test builds.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">4</span>
              <div>
                <h3>Launch & improve</h3>
                <p>Store submission, ASO and post-launch iteration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="port">
        <div className="wrap">
          <div className="rv">
            <div className="tag mono">
              <b>04</b> What you can expect
            </div>
            <h2 className="d" style={{ fontSize: "clamp(38px,6vw,96px)", fontWeight: "800" }}>
              Outcomes
              <span className="fl">.</span>
            </h2>
          </div>
          <ul className="outs rv">
            <li>A focused MVP launched faster</li>
            <li>Smooth onboarding and retention</li>
            <li>Store-ready listing</li>
            <li>A roadmap for what to build next</li>
          </ul>
          <p className="rv" style={{ marginTop: "40px" }}>
            <Link className="btn k" href="/portfolio">
              See Our Work →
            </Link>
          </p>
        </div>
      </section>
      <section className="faq">
        <div className="wrap">
          <div className="rv">
            <div className="tag mono">
              <b>05</b> FAQ
            </div>
            <h2 className="d" style={{ fontSize: "clamp(38px,6vw,96px)", fontWeight: "800", marginBottom: "40px" }}>
              Questions
              <span className="fl">?</span> Answers.
            </h2>
          </div>
          <div className="rv">
            <details open>
              <summary>Native or cross-platform?</summary>
              <p>Cross-platform suits most MVPs. We&apos;ll recommend native if performance or device features demand it.</p>
            </details>
            <details>
              <summary>How long does an MVP take?</summary>
              <p>Typically 8 to 14 weeks depending on scope. We confirm after scoping.</p>
            </details>
            <details>
              <summary>Do you handle the store submission?</summary>
              <p>Yes, including listing, screenshots and review feedback.</p>
            </details>
          </div>
          <div className="rv" style={{ marginTop: "70px" }}>
            <div className="tag mono">
              <b>06</b> Explore more
            </div>
            <div className="relg">
              <Link href="/service-ui-ux">
                <span>UI/UX Design</span>
                <span className="fl">↗</span>
              </Link>
              <Link href="/service-cro">
                <span>Conversion Rate Optimization</span>
                <span className="fl">↗</span>
              </Link>
              <Link href="/pricing">
                <span>Pricing &amp; packages</span>
                <span className="fl">↗</span>
              </Link>
              <Link href="/services">
                <span>All services</span>
                <span className="fl">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="ctab">
        <div className="wrap">
          <h2 className="d rv">Ready for better App results?</h2>
          <div className="row rv">
            <Link className="btn" href="/contact">
              Book My Free Audit →
            </Link>
            <Link className="btn o" href="/portfolio">
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
