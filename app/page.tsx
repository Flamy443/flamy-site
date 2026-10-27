import type { Metadata } from "next";
import Link from "next/link";
import VidButton from "@/components/VidButton";

export const metadata: Metadata = {
  title: "Flamy | CRO, SEO & UI/UX Agency That Grows Revenue",
  description:
    "Flamy is a conversion rate optimization, SEO and UI/UX agency. We design and build websites and apps that rank on Google and turn visitors into customers.",
};

export default function Home() {
  return (
    <>
      <header className="hero wrap" id="top">
        <div>
          <div className="mono" style={{ color: "var(--ash)", marginBottom: "28px" }}>
            CRO · SEO · UI/UX · Web &amp; App Development
          </div>
          <h1 className="d">
            Your website gets traffic.
            <br />
            We make it <span className="hl">make money.</span>
          </h1>
        </div>
        <div className="hero-bot">
          <div>
            <p>
              Flamy is a CRO, SEO and UI/UX agency. We find where you&apos;re losing customers, fix it, and build websites and apps that
              rank higher and convert better.
            </p>
            <p className="trust mono">Trusted by 13+ brands across fashion, food, beauty, fitness &amp; tech</p>
          </div>
          <div className="cta-row" style={{ justifyContent: "flex-end" }}>
            <Link className="btn" href="/contact">
              Get a Free Conversion Audit →
            </Link>
            <Link className="btn o" href="/portfolio">
              See Our Work
            </Link>
          </div>
        </div>
      </header>
      <div className="marq" aria-hidden="true">
        <div>
          <span>Rank higher</span>
          <i>✦</i>
          <span>Convert better</span>
          <i>✦</i>
          <span>Grow faster</span>
          <i>✦</i>
          <span>Light the fuse</span>
          <i>✦</i>
          <span>Rank higher</span>
          <i>✦</i>
          <span>Convert better</span>
          <i>✦</i>
          <span>Grow faster</span>
          <i>✦</i>
          <span>Light the fuse</span>
          <i>✦</i>
        </div>
      </div>
      <section>
        <div className="wrap prob">
          <div className="rv">
            <div className="tag mono">
              <b>01</b> The problem
            </div>
            <h2 className="d">
              Traffic without sales is a vanity metric
              <span className="fl">.</span>
            </h2>
          </div>
          <div className="rv">
            <p style={{ fontSize: "20px", marginBottom: "30px", maxWidth: "520px" }}>
              You&apos;re paying for ads. You&apos;re publishing content. Visitors land on your site. And then they leave.
            </p>
            <ul>
              <li>
                A slow, confusing site quietly kills sales.
                <small>Every extra second of load time costs conversions.</small>
              </li>
              <li>
                Pretty design that doesn&apos;t convert is an expensive poster.
                <small>Looks are the start of the job, not the end.</small>
              </li>
              <li>
                Page 3 of Google is the same as not existing.
                <small>Buyers are searching. Be where they look.</small>
              </li>
            </ul>
            <p style={{ margin: "30px 0 24px", fontWeight: "500" }}>Good news: every one of these is fixable. That&apos;s what we do.</p>
            <Link className="btn k" href="/contact">
              Find What&apos;s Leaking Your Revenue →
            </Link>
          </div>
        </div>
      </section>
      <section id="what" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="rv">
            <div className="tag mono">
              <b>02</b> What we do
            </div>
            <h2 className="d" style={{ fontSize: "clamp(44px,8vw,128px)", fontWeight: "800" }}>
              We fix the leaks.
              <br />
              Then we build the engine
              <span className="fl">.</span>
            </h2>
            <p style={{ maxWidth: "620px", fontSize: "19px", marginTop: "24px" }}>
              Flamy is a growth-design agency. We combine three disciplines that usually live in separate agencies, so every decision points
              at the same number: revenue.
            </p>
          </div>
          <div className="what rv">
            <div className="wc">
              <span className="n">/01</span>
              <h3>Conversion Rate Optimization</h3>
              <p>More sales from the traffic you already pay for.</p>
              <ul>
                <li>Funnel and UX audits</li>
                <li>Heatmaps and session replays</li>
                <li>A/B testing</li>
                <li>Landing page and checkout fixes</li>
              </ul>
              <Link className="more" href="/service-cro">
                Explore CRO →
              </Link>
            </div>
            <div className="wc">
              <span className="n">/02</span>
              <h3>SEO</h3>
              <p>Show up when buyers search, and bring people ready to buy.</p>
              <ul>
                <li>Technical SEO</li>
                <li>Keyword and intent strategy</li>
                <li>Content that ranks</li>
                <li>Authority and link building</li>
              </ul>
              <Link className="more" href="/service-seo">
                Explore SEO →
              </Link>
            </div>
            <div className="wc">
              <span className="n">/03</span>
              <h3>UI/UX, Web &amp; App</h3>
              <p>Websites and apps designed to convert, built fast and ready to rank.</p>
              <ul>
                <li>Research, wireframes, UI</li>
                <li>Shopify, WooCommerce, custom</li>
                <li>iOS and Android apps</li>
                <li>Under-2-second load targets</li>
              </ul>
              <Link className="more" href="/services">
                See all services →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="how">
        <div className="wrap how">
          <div className="stick rv">
            <div className="tag mono">
              <b>03</b> How we do it
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
      <section className="vsec" id="reviews">
        <div className="wrap">
          <div className="rv">
            <div className="tag mono">
              <b>04</b> Client stories
            </div>
            <h2 className="d" style={{ fontSize: "clamp(44px,8vw,128px)", fontWeight: "800" }}>
              Don&apos;t take our word for it
              <span className="fl">.</span>
            </h2>
            <p style={{ maxWidth: "560px", fontSize: "19px", color: "#c9c4ba", marginTop: "22px" }}>
              Hear it from the founders we&apos;ve worked with.
            </p>
          </div>
          <div className="vgrid rv">
            <VidButton video="">
              <div className="vframe">
                <span className="play">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 3.5v17l14-8.5z"></path>
                  </svg>
                </span>
                <div className="q">&quot;[Client quote goes here]&quot;</div>
              </div>{" "}
              <div className="vmeta">
                <div>
                  <b>[Founder name]</b>
                  <span>[Brand], [Industry]</span>
                </div>
                <em>▶ 1:20</em>
              </div>
            </VidButton>
            <VidButton video="">
              <div className="vframe">
                <span className="play">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 3.5v17l14-8.5z"></path>
                  </svg>
                </span>
                <div className="q">&quot;[Client quote goes here]&quot;</div>
              </div>{" "}
              <div className="vmeta">
                <div>
                  <b>[Founder name]</b>
                  <span>[Brand], [Industry]</span>
                </div>
                <em>▶ 1:05</em>
              </div>
            </VidButton>
            <VidButton video="">
              <div className="vframe">
                <span className="play">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 3.5v17l14-8.5z"></path>
                  </svg>
                </span>
                <div className="q">&quot;[Client quote goes here]&quot;</div>
              </div>{" "}
              <div className="vmeta">
                <div>
                  <b>[Founder name]</b>
                  <span>[Brand], [Industry]</span>
                </div>
                <em>▶ 0:58</em>
              </div>
            </VidButton>
          </div>
          <div className="vcta rv">
            <span>Want to be our next success story?</span>
            <Link className="btn" href="/contact">
              Get a Free Audit →
            </Link>
          </div>
        </div>
      </section>
      <div className="ctab">
        <div className="wrap">
          <h2 className="d rv">Ready to turn visitors into customers?</h2>
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
