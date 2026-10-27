import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization Services | Flamy",
  description:
    "Turn the traffic you already have into revenue. You don't always need more visitors. Often you need your current visitors to convert. We find the friction ",
};

export default function ServiceCroPage() {
  return (
    <>
      <header className="ph wrap">
        <div className="tag mono" style={{ marginBottom: "28px" }}>
          <span style={{ color: "var(--ash)" }}>Services / CRO</span>
        </div>
        <h1 className="d">
          Conversion Rate Optimization
          <span className="fl">.</span>
        </h1>
        <p className="sub">
          Turn the traffic you already have into revenue. You don&apos;t always need more visitors. Often you need your current visitors to
          convert. We find the friction and remove it.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/contact">
            Get My Free CRO Audit →
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
              Where your website is quietly losing sales
              <span className="fl">.</span>
            </h2>
          </div>
          <div className="probs rv">
            <div>
              <h3>Visitors leave without buying</h3>
              <p>Confusing navigation, weak offers and slow pages send people away before they ever reach checkout.</p>
            </div>
            <div>
              <h3>Ad spend that doesn&apos;t pay back</h3>
              <p>You pay for every click. If the page doesn&apos;t convert, every click is money lost.</p>
            </div>
            <div>
              <h3>Decisions made on opinion</h3>
              <p>Redesigns based on taste instead of data rarely move the number that matters.</p>
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
              <h3>Full-funnel audit</h3>
              <p>We map every step from first click to payment and find the biggest drop-offs.</p>
            </div>
            <div>
              <i>02</i>
              <h3>Behaviour analysis</h3>
              <p>Heatmaps, scroll maps and session recordings show what people actually do.</p>
            </div>
            <div>
              <i>03</i>
              <h3>User research</h3>
              <p>Surveys and quick interviews reveal why people hesitate.</p>
            </div>
            <div>
              <i>04</i>
              <h3>Landing page optimisation</h3>
              <p>Sharper offer, clearer hierarchy, stronger proof and better CTAs.</p>
            </div>
            <div>
              <i>05</i>
              <h3>Checkout optimisation</h3>
              <p>Fewer fields, clearer trust signals, less cart abandonment.</p>
            </div>
            <div>
              <i>06</i>
              <h3>A/B & multivariate testing</h3>
              <p>Every change is tested, so you only keep what wins.</p>
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
              Our CRO process
              <span className="fl">.</span>
            </h2>
            <p style={{ margin: "24px 0 30px", fontSize: "19px", maxWidth: "420px" }}>
              Best for: E-commerce stores, D2C brands, SaaS and lead-gen businesses that already get traffic.
            </p>
            <Link className="btn" href="/contact">
              Start With a Free Audit →
            </Link>
          </div>
          <div>
            <div className="hs rv">
              <span className="n">1</span>
              <div>
                <h3>Audit</h3>
                <p>Analytics, heatmaps and recordings reviewed to find the leaks.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">2</span>
              <div>
                <h3>Hypotheses</h3>
                <p>We turn findings into a ranked list of test ideas.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">3</span>
              <div>
                <h3>Test</h3>
                <p>We design and run A/B tests on your highest-impact pages.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">4</span>
              <div>
                <h3>Roll out & repeat</h3>
                <p>Winners go live for everyone. Then we start the next test.</p>
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
            <li>More sales from the same traffic</li>
            <li>Lower cost per acquisition</li>
            <li>A testing habit, not a one-off redesign</li>
            <li>Clear monthly reporting on what moved</li>
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
              <summary>How much traffic do I need for CRO?</summary>
              <p>
                More traffic means faster tests, but even moderate traffic benefits from audit-led fixes. We&apos;ll tell you honestly
                what&apos;s testable.
              </p>
            </details>
            <details>
              <summary>How long until I see results?</summary>
              <p>
                Quick fixes from the audit often lift conversions in the first 2 to 4 weeks. Test-led gains compound over 2 to 3 months.
              </p>
            </details>
            <details>
              <summary>Do you need access to my analytics?</summary>
              <p>Yes, read access to analytics and your store or CMS is enough to start.</p>
            </details>
          </div>
          <div className="rv" style={{ marginTop: "70px" }}>
            <div className="tag mono">
              <b>06</b> Explore more
            </div>
            <div className="relg">
              <Link href="/service-seo">
                <span>SEO</span>
                <span className="fl">↗</span>
              </Link>
              <Link href="/service-ui-ux">
                <span>UI/UX Design</span>
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
          <h2 className="d rv">Ready for better CRO results?</h2>
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
