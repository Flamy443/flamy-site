import type { Metadata } from "next";
import Link from "next/link";
import SafeImg from "@/components/SafeImg";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Website, App & UI/UX Design Case Studies | Flamy",
  description:
    "Explore Flamy's work: websites, apps and UI/UX designs for fashion, food, beauty and fitness brands, built to rank and convert.",
};

export default function PortfolioPage() {
  return (
    <>
      <header className="ph wrap">
        <div className="tag mono" style={{ marginBottom: "28px" }}>
          <span style={{ color: "var(--ash)" }}>Portfolio</span>
        </div>
        <h1 className="d">
          Work that moves numbers, not just pixels
          <span className="fl">.</span>
        </h1>
        <p className="sub">Real brands. Real problems. Real results. Open any project to see the full story.</p>
        <div className="cta-row">
          <Link className="btn" href="/contact">
            Want Results Like These? Talk to Us →
          </Link>
        </div>
      </header>
      <section className="port" style={{ paddingTop: "clamp(50px,6vw,80px)" }}>
        <div className="wrap">
          <PortfolioGrid
            items={[
              {
                tags: "web ecom uiux",
                card: (
                  <Link className="card rv" data-c="web ecom uiux" href="/work-5-feet-11">
                    <div className="thumb t1">
                      <SafeImg src="/images/5-feet-11/cover.jpg" alt="5 Feet 11" />
                      <b className="">5</b>
                      <em>Fashion / D2C</em>
                    </div>
                    <div className="cap">
                      <div>
                        <h3>5 Feet 11</h3>
                        <p>Contemporary clothing brand, built for faster shopping.</p>
                      </div>
                      <span>View →</span>
                    </div>
                  </Link>
                ),
              },
              {
                tags: "web uiux",
                card: (
                  <Link className="card rv" data-c="web uiux" href="/work-akanksha-mago">
                    <div className="thumb t2">
                      <SafeImg src="/images/akanksha-mago/cover.jpg" alt="Akanksha Mago" />
                      <b className="">Am</b>
                      <em>Luxury occasion wear</em>
                    </div>
                    <div className="cap">
                      <div>
                        <h3>Akanksha Mago</h3>
                        <p>A luxury label with an online experience to match.</p>
                      </div>
                      <span>View →</span>
                    </div>
                  </Link>
                ),
              },
              {
                tags: "web uiux",
                card: (
                  <Link className="card rv" data-c="web uiux" href="/work-3d-thrift">
                    <div className="thumb t3">
                      <SafeImg src="/images/3d-thrift/cover.jpg" alt="3D Thrift" />
                      <b className="fl">3D</b>
                      <em>Digital retail</em>
                    </div>
                    <div className="cap">
                      <div>
                        <h3>3D Thrift</h3>
                        <p>Digital-first store built around 3D product discovery.</p>
                      </div>
                      <span>View →</span>
                    </div>
                  </Link>
                ),
              },
              {
                tags: "web ecom seo",
                card: (
                  <Link className="card rv" data-c="web ecom seo" href="/work-rollie-nation">
                    <div className="thumb t4">
                      <SafeImg src="/images/rollie-nation/cover.jpg" alt="Rollie Nation" />
                      <b className="fl">R</b>
                      <em>Footwear</em>
                    </div>
                    <div className="cap">
                      <div>
                        <h3>Rollie Nation</h3>
                        <p>Global footwear e-commerce, rebuilt for speed and sales.</p>
                      </div>
                      <span>View →</span>
                    </div>
                  </Link>
                ),
              },
              {
                tags: "seo web",
                card: (
                  <Link className="card rv" data-c="seo web" href="/work-blissful-bakes">
                    <div className="thumb t5">
                      <SafeImg src="/images/blissful-bakes/cover.jpg" alt="Blissful Bakes" />
                      <b className="">Bb</b>
                      <em>Artisanal bakery</em>
                    </div>
                    <div className="cap">
                      <div>
                        <h3>Blissful Bakes</h3>
                        <p>A local bakery, now discoverable and orderable online.</p>
                      </div>
                      <span>View →</span>
                    </div>
                  </Link>
                ),
              },
              {
                tags: "web ecom",
                card: (
                  <Link className="card rv" data-c="web ecom" href="/work-the-blue-knot">
                    <div className="thumb t1">
                      <SafeImg src="/images/the-blue-knot/cover.jpg" alt="The Blue Knot" />
                      <b className="">TB</b>
                      <em>Home textile</em>
                    </div>
                    <div className="cap">
                      <div>
                        <h3>The Blue Knot</h3>
                        <p>Modern home textile brand with a storefront that sells.</p>
                      </div>
                      <span>View →</span>
                    </div>
                  </Link>
                ),
              },
              {
                tags: "web seo",
                card: (
                  <Link className="card rv" data-c="web seo" href="/work-lavaash-by-saby">
                    <div className="thumb t2">
                      <SafeImg src="/images/lavaash-by-saby/cover.jpg" alt="Lavaash by Saby" />
                      <b className="">L</b>
                      <em>Restaurant</em>
                    </div>
                    <div className="cap">
                      <div>
                        <h3>Lavaash by Saby</h3>
                        <p>Web presence for a chef-led concept.</p>
                      </div>
                      <span>View →</span>
                    </div>
                  </Link>
                ),
              },
              {
                tags: "app uiux",
                card: (
                  <Link className="card rv" data-c="app uiux" href="/work-meet-blossom">
                    <div className="thumb t3">
                      <SafeImg src="/images/meet-blossom/cover.jpg" alt="Meet Blossom" />
                      <b className="fl">B</b>
                      <em>Mobile app</em>
                    </div>
                    <div className="cap">
                      <div>
                        <h3>Meet Blossom</h3>
                        <p>A plant-care app designed for delight and retention.</p>
                      </div>
                      <span>View →</span>
                    </div>
                  </Link>
                ),
              },
              {
                tags: "seo web",
                card: (
                  <Link className="card rv" data-c="seo web" href="/work-whisk-a-wish">
                    <div className="thumb t4">
                      <SafeImg src="/images/whisk-a-wish/cover.jpg" alt="Whisk a Wish" />
                      <b className="fl">W</b>
                      <em>Home bakery, New Delhi</em>
                    </div>
                    <div className="cap">
                      <div>
                        <h3>Whisk a Wish</h3>
                        <p>A baker&apos;s brand, built to take orders.</p>
                      </div>
                      <span>View →</span>
                    </div>
                  </Link>
                ),
              },
              {
                tags: "seo web",
                card: (
                  <Link className="card rv" data-c="seo web" href="/work-madam-pho">
                    <div className="thumb t5">
                      <SafeImg src="/images/madam-pho/cover.jpg" alt="Madam Pho" />
                      <b className="">MP</b>
                      <em>Restaurant, Dubai</em>
                    </div>
                    <div className="cap">
                      <div>
                        <h3>Madam Pho</h3>
                        <p>Authentic Vietnamese flavours with a digital presence to match.</p>
                      </div>
                      <span>View →</span>
                    </div>
                  </Link>
                ),
              },
              {
                tags: "web ecom uiux seo",
                card: (
                  <Link className="card rv" data-c="web ecom uiux seo" href="/work-200-skincare">
                    <div className="thumb t1">
                      <SafeImg src="/images/200-skincare/cover.jpg" alt="200% Skincare" />
                      <b className="">200</b>
                      <em>Beauty</em>
                    </div>
                    <div className="cap">
                      <div>
                        <h3>200% Skincare</h3>
                        <p>Global beauty brand with a luxurious, high-converting site.</p>
                      </div>
                      <span>View →</span>
                    </div>
                  </Link>
                ),
              },
              {
                tags: "web uiux",
                card: (
                  <Link className="card rv" data-c="web uiux" href="/work-navo">
                    <div className="thumb t2">
                      <SafeImg src="/images/navo/cover.jpg" alt="Navo" />
                      <b className="">N</b>
                      <em>Lifestyle</em>
                    </div>
                    <div className="cap">
                      <div>
                        <h3>Navo</h3>
                        <p>A multi-brand identity with a unified digital experience.</p>
                      </div>
                      <span>View →</span>
                    </div>
                  </Link>
                ),
              },
              {
                tags: "seo web",
                card: (
                  <Link className="card rv" data-c="seo web" href="/work-adapt-fitness">
                    <div className="thumb t3">
                      <SafeImg src="/images/adapt-fitness/cover.jpg" alt="Adapt Fitness" />
                      <b className="fl">A</b>
                      <em>Fitness</em>
                    </div>
                    <div className="cap">
                      <div>
                        <h3>Adapt Fitness</h3>
                        <p>A fitness studio driving memberships from search.</p>
                      </div>
                      <span>View →</span>
                    </div>
                  </Link>
                ),
              },
            ]}
          />
        </div>
      </section>
      <div className="ctab">
        <div className="wrap">
          <h2 className="d rv">Your brand could be our next case study.</h2>
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
