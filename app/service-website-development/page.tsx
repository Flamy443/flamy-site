import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Development Services | Flamy",
  description:
    "Fast, secure, SEO-ready websites. Your site is your best salesperson. We build it to load in under 2 seconds, rank from day one and scale with you.",
};

export default function ServiceWebsiteDevelopmentPage() {
  return (
    <>
      <header className="ph wrap">
        <div className="tag mono" style={{ marginBottom: "28px" }}>
          <span style={{ color: "var(--ash)" }}>Services / Web Dev</span>
        </div>
        <h1 className="d">
          Website Development
          <span className="fl">.</span>
        </h1>
        <p className="sub">
          Fast, secure, SEO-ready websites. Your site is your best salesperson. We build it to load in under 2 seconds, rank from day one
          and scale with you.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/contact">
            Get My Free Web Dev Audit →
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
              Why most websites underperform
              <span className="fl">.</span>
            </h2>
          </div>
          <div className="probs rv">
            <div>
              <h3>Slow load times</h3>
              <p>Every extra second costs sales and search rankings.</p>
            </div>
            <div>
              <h3>Not built for SEO</h3>
              <p>Poor structure and missing markup make ranking harder.</p>
            </div>
            <div>
              <h3>Hard to update</h3>
              <p>Teams wait on developers for simple content changes.</p>
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
              <h3>Custom development</h3>
              <p>Clean, maintainable code built to your design.</p>
            </div>
            <div>
              <i>02</i>
              <h3>E-commerce</h3>
              <p>Shopify, WooCommerce and custom stores built to convert.</p>
            </div>
            <div>
              <i>03</i>
              <h3>CMS setup</h3>
              <p>WordPress, Webflow or headless, so your team can edit easily.</p>
            </div>
            <div>
              <i>04</i>
              <h3>Mobile-first builds</h3>
              <p>Perfect on every screen size.</p>
            </div>
            <div>
              <i>05</i>
              <h3>Speed & Core Web Vitals</h3>
              <p>Optimised images, caching and lean code.</p>
            </div>
            <div>
              <i>06</i>
              <h3>Tracking & schema</h3>
              <p>Analytics, events and structured data set up from day one.</p>
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
              Our Web Dev process
              <span className="fl">.</span>
            </h2>
            <p style={{ margin: "24px 0 30px", fontSize: "19px", maxWidth: "420px" }}>
              Best for: New launches, rebuilds and platform migrations.
            </p>
            <Link className="btn" href="/contact">
              Start With a Free Audit →
            </Link>
          </div>
          <div>
            <div className="hs rv">
              <span className="n">1</span>
              <div>
                <h3>Plan</h3>
                <p>Sitemap, tech stack and SEO structure agreed.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">2</span>
              <div>
                <h3>Build</h3>
                <p>Development in sprints with regular previews.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">3</span>
              <div>
                <h3>Test</h3>
                <p>Speed, devices, forms, tracking and SEO checked.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">4</span>
              <div>
                <h3>Launch & support</h3>
                <p>Smooth go-live, redirects handled, 30 days of support.</p>
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
            <li>A site that loads in under 2 seconds</li>
            <li>Built-in SEO foundation</li>
            <li>Easy content editing for your team</li>
            <li>No lost rankings on migration</li>
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
              <summary>Which platform should I choose?</summary>
              <p>
                We recommend based on your goals, team and budget. Shopify for most stores, WordPress or Webflow for content sites, custom
                when you need it.
              </p>
            </details>
            <details>
              <summary>Will I lose my SEO if I redesign?</summary>
              <p>Not with us. We map every URL, set up redirects and protect your rankings.</p>
            </details>
            <details>
              <summary>Who owns the website?</summary>
              <p>You do. Code, content and accounts are yours.</p>
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
              <Link href="/service-seo">
                <span>SEO</span>
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
          <h2 className="d rv">Ready for better Web Dev results?</h2>
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
