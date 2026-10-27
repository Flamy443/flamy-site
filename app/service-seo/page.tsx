import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Services | Flamy",
  description:
    "Get found by people ready to buy. We target keywords that signal buying intent, then build the technical foundation, content and authority to rank for them",
};

export default function ServiceSeoPage() {
  return (
    <>
      <header className="ph wrap">
        <div className="tag mono" style={{ marginBottom: "28px" }}>
          <span style={{ color: "var(--ash)" }}>Services / SEO</span>
        </div>
        <h1 className="d">
          SEO
          <span className="fl">.</span>
        </h1>
        <p className="sub">
          Get found by people ready to buy. We target keywords that signal buying intent, then build the technical foundation, content and
          authority to rank for them.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/contact">
            Get My Free SEO Audit →
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
              Why good businesses stay invisible on Google
              <span className="fl">.</span>
            </h2>
          </div>
          <div className="probs rv">
            <div>
              <h3>You&apos;re on page 3</h3>
              <p>Most clicks go to the first page. Anything below is practically invisible.</p>
            </div>
            <div>
              <h3>Traffic that doesn&apos;t buy</h3>
              <p>Ranking for the wrong keywords brings visitors who never convert.</p>
            </div>
            <div>
              <h3>A site Google can&apos;t read</h3>
              <p>Slow pages, broken structure and missing schema hold good content back.</p>
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
              <h3>Technical SEO audit</h3>
              <p>Crawl, indexing, speed and structure issues found and fixed.</p>
            </div>
            <div>
              <i>02</i>
              <h3>Keyword & intent research</h3>
              <p>We target what buyers search, mapped to the right page.</p>
            </div>
            <div>
              <i>03</i>
              <h3>On-page optimisation</h3>
              <p>Titles, headings, copy, internal links and schema done properly.</p>
            </div>
            <div>
              <i>04</i>
              <h3>Content strategy</h3>
              <p>SEO-led blogs and landing pages built to rank and convert.</p>
            </div>
            <div>
              <i>05</i>
              <h3>Link building & digital PR</h3>
              <p>Quality links and mentions that build real authority.</p>
            </div>
            <div>
              <i>06</i>
              <h3>Local SEO</h3>
              <p>Google Business Profile and local rankings for location-led brands.</p>
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
              Our SEO process
              <span className="fl">.</span>
            </h2>
            <p style={{ margin: "24px 0 30px", fontSize: "19px", maxWidth: "420px" }}>
              Best for: Brands that want sustainable, compounding organic growth instead of renting traffic.
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
                <p>Technical health, content gaps and competitor rankings reviewed.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">2</span>
              <div>
                <h3>Strategy</h3>
                <p>Keyword map and content plan built around buying intent.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">3</span>
              <div>
                <h3>Fix & publish</h3>
                <p>Technical fixes ship first. Content and links follow.</p>
              </div>
            </div>
            <div className="hs rv">
              <span className="n">4</span>
              <div>
                <h3>Track & grow</h3>
                <p>Monthly ranking, traffic and lead reporting. We double down on what works.</p>
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
            <li>Higher rankings on keywords that matter</li>
            <li>Organic traffic that actually converts</li>
            <li>Faster, healthier site</li>
            <li>A compounding source of leads</li>
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
              <summary>How long does SEO take?</summary>
              <p>Technical and on-page fixes can show movement in 4 to 8 weeks. Competitive keywords typically take 4 to 6 months.</p>
            </details>
            <details>
              <summary>Do you guarantee rankings?</summary>
              <p>No honest agency can. We guarantee the work, the transparency and a clear reporting trail.</p>
            </details>
            <details>
              <summary>Do you write the content too?</summary>
              <p>Yes. Our SEO writers produce content briefed on search intent, which your team can review.</p>
            </details>
          </div>
          <div className="rv" style={{ marginTop: "70px" }}>
            <div className="tag mono">
              <b>06</b> Explore more
            </div>
            <div className="relg">
              <Link href="/service-cro">
                <span>Conversion Rate Optimization</span>
                <span className="fl">↗</span>
              </Link>
              <Link href="/service-website-development">
                <span>Website Development</span>
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
          <h2 className="d rv">Ready for better SEO results?</h2>
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
