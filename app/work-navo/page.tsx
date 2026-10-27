import type { Metadata } from "next";
import Link from "next/link";
import SafeImg from "@/components/SafeImg";
import VidButton from "@/components/VidButton";

export const metadata: Metadata = {
  title: "Navo Case Study | Flamy",
  description:
    "A multi-brand identity with a unified digital experience. NAVO is born through a masterful amalgam of distinguished brands.",
};

export default function WorkNavoPage() {
  return (
    <>
      <header className="ph wrap">
        <div className="tag mono" style={{ marginBottom: "28px" }}>
          <span style={{ color: "var(--ash)" }}>Portfolio / Lifestyle</span>
        </div>
        <h1 className="d">
          Navo
          <span className="fl">.</span>
        </h1>
        <p className="sub">A multi-brand identity with a unified digital experience.</p>
        <div className="cta-row">
          <Link className="btn" href="/contact">
            Want Results Like This? Get a Free Audit →
          </Link>
          <Link className="btn o" href="/portfolio">
            ← All Projects
          </Link>
        </div>
      </header>
      <section style={{ paddingTop: "0" }}>
        <div className="wrap">
          <figure className="imgph rv" style={{ aspectRatio: "16/8" }}>
            <span>
              <b>Image</b>
              Main hero image (desktop mockup of homepage)
              <br />
              images/navo/hero.jpg
            </span>
            <SafeImg src="/images/navo/hero.jpg" alt="Main hero image (desktop mockup of homepage)" />
          </figure>
          <div className="meta rv">
            <div>
              <h4>Client</h4>
              <p>Navo</p>
            </div>
            <div>
              <h4>Industry</h4>
              <p>Lifestyle</p>
            </div>
            <div>
              <h4>Services</h4>
              <p>Website development, UI/UX design</p>
            </div>
            <div>
              <h4>Timeline</h4>
              <p>[X weeks]</p>
            </div>
          </div>
          <div className="cs2 rv">
            <h2>
              Overview
              <span className="fl">.</span>
            </h2>
            <p>
              NAVO is born through a masterful amalgam of distinguished brands. [Add 1 to 2 lines about the brief and what the client
              wanted.]
            </p>
          </div>
          <div className="cs2 rv">
            <h2>
              The challenge
              <span className="fl">.</span>
            </h2>
            <p>Bringing several brands under one roof risks a confusing, inconsistent experience.</p>
          </div>
          <figure className="imgph rv" style={{ aspectRatio: "16/9" }}>
            <span>
              <b>Image</b>
              Image 1: Before / old site or research board
              <br />
              images/navo/1.jpg
            </span>
            <SafeImg src="/images/navo/1.jpg" alt="Image 1: Before / old site or research board" />
          </figure>
          <div className="cs2 rv">
            <h2>
              Our approach
              <span className="fl">.</span>
            </h2>
            <p>We built a unified design system and site that lets each brand shine while the whole experience feels like one.</p>
          </div>
          <div className="gal two">
            <figure className="imgph rv" style={{ aspectRatio: "4/3" }}>
              <span>
                <b>Image</b>
                Image 2: Key page, desktop
                <br />
                images/navo/2.jpg
              </span>
              <SafeImg src="/images/navo/2.jpg" alt="Image 2: Key page, desktop" />
            </figure>
            <figure className="imgph rv" style={{ aspectRatio: "4/3" }}>
              <span>
                <b>Image</b>
                Image 3: Key page, desktop
                <br />
                images/navo/3.jpg
              </span>
              <SafeImg src="/images/navo/3.jpg" alt="Image 3: Key page, desktop" />
            </figure>
          </div>
          <div className="gal three" style={{ marginTop: "18px" }}>
            <figure className="imgph rv" style={{ aspectRatio: "9/16" }}>
              <span>
                <b>Image</b>
                Mobile screen 1
                <br />
                images/navo/mobile-1.jpg
              </span>
              <SafeImg src="/images/navo/mobile-1.jpg" alt="Mobile screen 1" />
            </figure>
            <figure className="imgph rv" style={{ aspectRatio: "9/16" }}>
              <span>
                <b>Image</b>
                Mobile screen 2
                <br />
                images/navo/mobile-2.jpg
              </span>
              <SafeImg src="/images/navo/mobile-2.jpg" alt="Mobile screen 2" />
            </figure>
            <figure className="imgph rv" style={{ aspectRatio: "9/16" }}>
              <span>
                <b>Image</b>
                Mobile screen 3
                <br />
                images/navo/mobile-3.jpg
              </span>
              <SafeImg src="/images/navo/mobile-3.jpg" alt="Mobile screen 3" />
            </figure>
          </div>
          <div style={{ marginTop: "18px" }}>
            <figure className="imgph rv" style={{ aspectRatio: "16/8" }}>
              <span>
                <b>Image</b>
                Image 4: Full-width detail / brand moment
                <br />
                images/navo/4.jpg
              </span>
              <SafeImg src="/images/navo/4.jpg" alt="Image 4: Full-width detail / brand moment" />
            </figure>
          </div>
          <div className="cs2 rv">
            <h2>
              The results
              <span className="fl">.</span>
            </h2>
            <div>
              <p>[One line on what changed after launch.]</p>
              <div className="res">
                <div>
                  <b>[+X%]</b>
                  <span>Conversion rate</span>
                </div>
                <div>
                  <b>[+X%]</b>
                  <span>Organic traffic</span>
                </div>
                <div>
                  <b>[X s]</b>
                  <span>Page load time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="vsec">
        <div className="wrap">
          <div className="tag mono">
            <b>01</b> Client words
          </div>
          <div className="vgrid one rv">
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
                  <span>Navo</span>
                </div>
                <em>▶ 1:00</em>
              </div>
            </VidButton>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="nextp rv" style={{ borderTop: "0", paddingTop: "0" }}>
            <div>
              <div className="mono" style={{ color: "var(--ash)", marginBottom: "10px" }}>
                Next project
              </div>
              <Link className="big" href="/work-adapt-fitness">
                Adapt Fitness →
              </Link>
            </div>
            <Link className="btn o" href="/portfolio">
              ← All Projects
            </Link>
          </div>
        </div>
      </section>
      <div className="ctab">
        <div className="wrap">
          <h2 className="d rv">Want a result like Navo?</h2>
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
