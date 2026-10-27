import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | CRO, SEO, UI/UX, Website & App Development | Flamy",
  description:
    "Conversion rate optimization, SEO, UI/UX design, website development and app development. One growth team for everything your brand needs online.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="ph wrap">
        <div className="tag mono" style={{ marginBottom: "28px" }}>
          <span style={{ color: "var(--ash)" }}>Services</span>
        </div>
        <h1 className="d">
          Everything your website needs to rank, convert
          <span className="fl">.</span>
        </h1>
        <p className="sub">Five services. One growth team. Pick one or combine them for compounding results.</p>
        <div className="cta-row">
          <Link className="btn" href="/contact">
            Get a Free Audit →
          </Link>
          <Link className="btn o" href="/pricing">
            See Pricing
          </Link>
        </div>
      </header>
      <section id="services" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="svc-head rv" style={{ display: "none" }}>
            <div>
              <h2 className="d">
                Three levers.
                <br />
                One goal
                <span className="fl">.</span>
              </h2>
            </div>
            <p style={{ maxWidth: "380px", fontSize: "19px" }}>
              Five services. One growth team. Pick one or combine them for compounding results.
            </p>
          </div>
          <Link className="svc rv" href="/service-cro">
            <span className="mono">/01</span>{" "}
            <div>
              <h3>Conversion Rate Optimization</h3>
            </div>{" "}
            <div>
              <p>Turn the traffic you already have into revenue. We study how people use your site, then remove the friction.</p>
              <ul>
                <li>CRO audit</li>
                <li>Heatmaps</li>
                <li>A/B testing</li>
                <li>Checkout &amp; landing pages</li>
              </ul>
            </div>{" "}
            <span className="arrow">↗</span>
          </Link>
          <Link className="svc rv" href="/service-seo">
            <span className="mono">/02</span>{" "}
            <div>
              <h3>SEO</h3>
            </div>{" "}
            <div>
              <p>Get found by people ready to buy. Technical SEO, content and authority that bring buyers, not just traffic.</p>
              <ul>
                <li>Technical SEO</li>
                <li>Keyword strategy</li>
                <li>Content</li>
                <li>Link building</li>
                <li>Core Web Vitals</li>
              </ul>
            </div>{" "}
            <span className="arrow">↗</span>
          </Link>
          <Link className="svc rv" href="/service-ui-ux">
            <span className="mono">/03</span>{" "}
            <div>
              <h3>UI/UX Design</h3>
            </div>{" "}
            <div>
              <p>Design people love. Design that sells. Every layout, button and flow is backed by research and conversion principles.</p>
              <ul>
                <li>UX research</li>
                <li>Wireframes</li>
                <li>Web &amp; app UI</li>
                <li>Design systems</li>
              </ul>
            </div>{" "}
            <span className="arrow">↗</span>
          </Link>
          <Link className="svc rv" href="/service-website-development">
            <span className="mono">/04</span>{" "}
            <div>
              <h3>Website Development</h3>
            </div>{" "}
            <div>
              <p>Fast, secure, SEO-ready. Built to load in under 2 seconds, rank from day one and scale with you.</p>
              <ul>
                <li>Custom builds</li>
                <li>Shopify / WooCommerce</li>
                <li>CMS</li>
                <li>Schema &amp; tracking</li>
              </ul>
            </div>{" "}
            <span className="arrow">↗</span>
          </Link>
          <Link className="svc rv" href="/service-app-development">
            <span className="mono">/05</span>{" "}
            <div>
              <h3>App Development</h3>
            </div>{" "}
            <div>
              <p>Apps people actually keep installed. From idea to App Store, with smooth UX and strong retention.</p>
              <ul>
                <li>MVP planning</li>
                <li>iOS &amp; Android</li>
                <li>React Native / Flutter</li>
                <li>ASO</li>
              </ul>
            </div>{" "}
            <span className="arrow">↗</span>
          </Link>
          <p className="rv" style={{ marginTop: "40px", display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: "19px" }}>Not sure where to start? We&apos;ll tell you.</span>
            <Link className="btn" href="/contact">
              Build My Custom Growth Plan →
            </Link>
          </p>
        </div>
      </section>
      <section id="how">
        <div className="wrap how">
          <div className="stick rv">
            <div className="tag mono">
              <b>01</b> How we do it
            </div>
            <h2 className="d" style={{ fontSize: "clamp(44px,6.6vw,104px)", fontWeight: "800" }}>
              No guesswork.
              <br />
              Just a system
              <span className="fl">.</span>
            </h2>
            <p style={{ margin: "24px 0 30px", fontSize: "19px", maxWidth: "420px" }}>
              Every engagement follows the same four steps, so you always know what&apos;s happening, why, and what it&apos;s worth.
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
                <div className="when mono">Week 1</div>
                <p>
                  We dig into your analytics, heatmaps, session recordings, search data and customer journeys to see what&apos;s really
                  going on.
                </p>
                <div className="cols">
                  <div>
                    <h4>What we do</h4>
                    <p>Funnel analysis, technical SEO crawl, speed tests, competitor benchmarking, stakeholder call.</p>
                  </div>
                  <div>
                    <h4>What you get</h4>
                    <p>A clear picture of where you&apos;re losing customers and rankings.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">2</span>
              <div>
                <h3>Diagnose</h3>
                <div className="when mono">Week 1 to 2</div>
                <p>We turn findings into a prioritised plan, ranked by revenue impact and effort, so the biggest wins go first.</p>
                <div className="cols">
                  <div>
                    <h4>What we do</h4>
                    <p>Hypothesis list, keyword and intent mapping, UX and copy recommendations.</p>
                  </div>
                  <div>
                    <h4>What you get</h4>
                    <p>A roadmap with timelines, owners and expected impact.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">3</span>
              <div>
                <h3>Build &amp; Fix</h3>
                <div className="when mono">Week 2 to 6</div>
                <p>We redesign, develop and optimise. Quick wins ship in days. Bigger rebuilds ship in focused sprints.</p>
                <div className="cols">
                  <div>
                    <h4>What we do</h4>
                    <p>UI/UX design, development, on-page SEO, content, tracking and speed optimisation.</p>
                  </div>
                  <div>
                    <h4>What you get</h4>
                    <p>Faster, clearer pages that rank and convert, with analytics ready.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">4</span>
              <div>
                <h3>Test &amp; Scale</h3>
                <div className="when mono">Month 2 onwards</div>
                <p>We keep improving what works. A/B tests, ranking tracking and monthly reviews turn one win into a growth loop.</p>
                <div className="cols">
                  <div>
                    <h4>What we do</h4>
                    <p>A/B and multivariate tests, link building, new content, monthly strategy call.</p>
                  </div>
                  <div>
                    <h4>What you get</h4>
                    <p>A monthly report on leads, sales and revenue. No vanity metrics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ctab">
        <div className="wrap">
          <h2 className="d rv">Not sure where to start? We&apos;ll tell you.</h2>
          <p className="rv" style={{ fontSize: "20px", color: "#c9c4ba", maxWidth: "620px", marginTop: "22px" }}>
            Book a free 30-minute strategy call and we&apos;ll point you to the highest-impact starting point.
          </p>
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
