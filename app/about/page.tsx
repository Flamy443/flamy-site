import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Flamy | CRO, SEO & UI/UX Growth Agency",
  description:
    "Meet Flamy, a team of strategists, designers, developers and SEO experts who build websites and apps that rank, convert and grow brands.",
};

export default function AboutPage() {
  return (
    <>
      <header className="ph wrap">
        <div className="tag mono" style={{ marginBottom: "28px" }}>
          <span style={{ color: "var(--ash)" }}>About</span>
        </div>
        <h1 className="d">
          We get websites to actually work
          <span className="fl">.</span>
        </h1>
        <p className="sub">
          Flamy started with one frustration: beautiful websites that brought in no business. So we built an agency that measures success in
          revenue, not likes.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/contact">
            Work With Us →
          </Link>
          <Link className="btn o" href="/portfolio">
            View Our Portfolio
          </Link>
        </div>
      </header>
      <section id="about" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="about">
            <div className="rv">
              <h2 className="d">
                We get websites to actually work
                <span className="fl">.</span>
              </h2>
            </div>
            <div className="rv" style={{ paddingTop: "60px" }}>
              <p className="lead">
                Flamy started with one frustration: beautiful websites that brought in no business. So we built an agency that measures
                success in revenue, not likes.
              </p>
              <p style={{ color: "#55524d" }}>
                We began as a creative brand studio working with fashion labels, restaurants, fitness brands and apps. We kept seeing the
                same pattern: brands invested in design, but nobody tied it to conversions or search visibility. Today Flamy is a
                growth-design agency. Every page we touch has a job and a number attached to it.
              </p>
              <ul className="belief">
                <li>
                  <b>Data beats opinions.</b>
                  <span>We test. We don&apos;t guess.</span>
                </li>
                <li>
                  <b>Speed is a feature.</b>
                  <span>Slow sites lose customers and rankings.</span>
                </li>
                <li>
                  <b>Simple wins.</b>
                  <span>The clearest page almost always converts best.</span>
                </li>
                <li>
                  <b>Growth is a system.</b>
                  <span>Not a one-time redesign.</span>
                </li>
              </ul>
              <p style={{ marginTop: "32px" }}>
                <Link className="btn k" href="/contact">
                  Work With Us →
                </Link>
              </p>
            </div>
          </div>
          <div className="compare rv">
            <div>
              <span>Typical agency</span>
              <span>Flamy</span>
            </div>
            <div>
              <span>Designs first, thinks about SEO later</span>
              <span>SEO and conversion strategy built into the brief</span>
            </div>
            <div>
              <span>Hands over the site and disappears</span>
              <span>Tracks, tests and improves after launch</span>
            </div>
            <div>
              <span>Reports on clicks and impressions</span>
              <span>Reports on leads, sales and revenue</span>
            </div>
            <div>
              <span>Separate vendors for design, dev and SEO</span>
              <span>One accountable team</span>
            </div>
          </div>
          <div className="stats rv">
            <div>
              <b>
                13
                <span className="fl">+</span>
              </b>
              <span>Brands grown</span>
            </div>
            <div>
              <b>5</b>
              <span>Growth services</span>
            </div>
            <div>
              <b>
                &lt;2
                <span className="fl">s</span>
              </b>
              <span>Load-time target</span>
            </div>
            <div>
              <b>
                24
                <span className="fl">h</span>
              </b>
              <span>Reply time</span>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="rv">
            <div className="tag mono">
              <b>01</b> The team
            </div>
            <h2 className="d" style={{ fontSize: "clamp(44px,8vw,128px)", fontWeight: "800" }}>
              The people behind the results
              <span className="fl">.</span>
            </h2>
          </div>
          <div className="team rv">
            <div className="tm">
              <div className="ph-img">Y</div>
              <h3>[Name]</h3>
              <p>Founder, Growth Strategy</p>
            </div>
            <div className="tm">
              <div className="ph-img">U</div>
              <h3>[Name]</h3>
              <p>Lead UI/UX Designer</p>
            </div>
            <div className="tm">
              <div className="ph-img">S</div>
              <h3>[Name]</h3>
              <p>SEO Lead</p>
            </div>
            <div className="tm">
              <div className="ph-img">D</div>
              <h3>[Name]</h3>
              <p>Head of Development</p>
            </div>
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
