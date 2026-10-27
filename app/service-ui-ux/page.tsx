import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Flamy",
  description:
    "Design people love. Design that sells. We design interfaces that feel effortless, because effortless converts. Every layout, button and flow is backed by r",
};

export default function ServiceUiUxPage() {
  return (
    <>
      <header className="ph wrap">
        <div className="tag mono" style={{ marginBottom: "28px" }}>
          <span style={{ color: "var(--ash)" }}>Services / UI/UX</span>
        </div>
        <h1 className="d">
          UI/UX Design
          <span className="fl">.</span>
        </h1>
        <p className="sub">
          Design people love. Design that sells. We design interfaces that feel effortless, because effortless converts. Every layout,
          button and flow is backed by research.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/contact">
            Get My Free UI/UX Audit →
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
              When good looks aren&apos;t enough
              <span className="fl">.</span>
            </h2>
          </div>
          <div className="probs rv">
            <div>
              <h3>Confusing journeys</h3>
              <p>Visitors can&apos;t find what they need, so they leave.</p>
            </div>
            <div>
              <h3>Inconsistent brand experience</h3>
              <p>Pages look different, feel different and break trust.</p>
            </div>
            <div>
              <h3>Design that ignores conversion</h3>
              <p>Beautiful pages with no clear next step don&apos;t sell.</p>
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
              <h3>UX research & mapping</h3>
              <p>User journeys, personas and pain points defined.</p>
            </div>
            <div>
              <i>02</i>
              <h3>Wireframes & prototypes</h3>
              <p>Clickable flows tested before a single line of code.</p>
            </div>
            <div>
              <i>03</i>
              <h3>Website UI design</h3>
              <p>Conversion-led layouts in your brand&apos;s voice.</p>
            </div>
            <div>
              <i>04</i>
              <h3>App UI design</h3>
              <p>Native-feeling iOS and Android interfaces.</p>
            </div>
            <div>
              <i>05</i>
              <h3>Design systems</h3>
              <p>Reusable components so every page stays consistent.</p>
            </div>
            <div>
              <i>06</i>
              <h3>Usability testing</h3>
              <p>Real users try the design and we fix what trips them up.</p>
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
              Our UI/UX process
              <span className="fl">.</span>
            </h2>
            <p style={{ margin: "24px 0 30px", fontSize: "19px", maxWidth: "420px" }}>
              Best for: Brands redesigning, launching or fixing a confusing experience.
            </p>
            <Link className="btn" href="/contact">
              Start With a Free Audit →
            </Link>
          </div>
          <div>
            <div className="hs rv">
              <span className="n">1</span>
              <div>
                <h3>Discover</h3>
                <p>Goals, audience and competitors understood.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">2</span>
              <div>
                <h3>Wireframe</h3>
                <p>Structure and flow mapped for the key pages.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">3</span>
              <div>
                <h3>Design</h3>
                <p>High-fidelity UI with brand, motion and conversion in mind.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">4</span>
              <div>
                <h3>Test & hand off</h3>
                <p>Usability checks, then dev-ready files and specs.</p>
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
            <li>Clearer journeys and fewer drop-offs</li>
            <li>A consistent, premium brand experience</li>
            <li>Faster build thanks to a proper design system</li>
            <li>Designs validated before development</li>
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
              <summary>Do you design in Figma?</summary>
              <p>Yes. You get organised, dev-ready Figma files and a component library.</p>
            </details>
            <details>
              <summary>Can you work from our brand guidelines?</summary>
              <p>Absolutely. We can also extend or build brand guidelines if you don&apos;t have them.</p>
            </details>
            <details>
              <summary>Do you also build the design?</summary>
              <p>Yes. Design and development sit in one team, so nothing gets lost in hand-off.</p>
            </details>
          </div>
          <div className="rv" style={{ marginTop: "70px" }}>
            <div className="tag mono">
              <b>06</b> Explore more
            </div>
            <div className="relg">
              <Link href="/service-website-development">
                <span>Website Development</span>
                <span className="fl">↗</span>
              </Link>
              <Link href="/service-app-development">
                <span>App Development</span>
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
          <h2 className="d rv">Ready for better UI/UX results?</h2>
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
