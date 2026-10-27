import type { Metadata } from "next";
import Link from "next/link";
import PricingTabs from "@/components/PricingTabs";

export const metadata: Metadata = {
  title: "Pricing & Packages | CRO, SEO, Web & App | Flamy",
  description: "Simple, transparent packages for SEO, CRO, website and app development. Start with a free audit.",
};

export default function PricingPage() {
  return (
    <>
      <section id="pricing" style={{ paddingTop: "160px" }}>
        <div className="wrap">
          <div className="rv">
            <div className="tag mono">
              <b>01</b> Pricing &amp; packages
            </div>
            <h2 className="d" style={{ fontSize: "clamp(44px,8vw,128px)", fontWeight: "800", marginBottom: "24px" }}>
              Pick your fire
              <span className="fl">.</span>
            </h2>
            <p style={{ maxWidth: "600px", fontSize: "19px" }}>
              Simple, transparent packages. No hidden fees, no lock-in contracts. Choose what you need to see the packages.
            </p>
          </div>
          <PricingTabs
            ret={
              <>
                <div className="plans">
                  <div className="plan">
                    <div className="nm">Spark</div>
                    <div className="for">For brands getting started with search.</div>
                    <div className="pr">
                      ₹45k
                      <small>/ month</small>
                    </div>
                    <ul>
                      <li>Full technical SEO audit</li>
                      <li>Technical SEO fixes</li>
                      <li>Keyword and intent map</li>
                      <li>4 SEO-optimised pages or posts a month</li>
                      <li>Monthly ranking and traffic report</li>
                    </ul>
                    <Link className="btn o" href="/contact">
                      Start With Spark →
                    </Link>
                  </div>
                  <div className="plan hot">
                    <span className="badge">Most picked</span>
                    <div className="nm">Blaze</div>
                    <div className="for">SEO with content and links. For brands ready to grow properly.</div>
                    <div className="pr">
                      ₹95k
                      <small>/ month</small>
                    </div>
                    <ul>
                      <li>Everything in Spark</li>
                      <li>8 content pieces a month</li>
                      <li>Link building and digital PR</li>
                      <li>On-page and schema optimisation</li>
                      <li>Core Web Vitals fixes</li>
                      <li>Fortnightly calls and live dashboard</li>
                    </ul>
                    <Link className="btn" href="/contact">
                      Get Blaze →
                    </Link>
                  </div>
                  <div className="plan">
                    <div className="nm">Inferno</div>
                    <div className="for">Full SEO team on tap. For scale-ups with big targets.</div>
                    <div className="pr">
                      Custom
                      <small>/ month</small>
                    </div>
                    <ul>
                      <li>Everything in Blaze</li>
                      <li>Dedicated SEO strategist</li>
                      <li>Programmatic and large-site SEO</li>
                      <li>International and multi-location SEO</li>
                      <li>Weekly strategy calls</li>
                      <li>Priority support</li>
                    </ul>
                    <Link className="btn k" href="/contact">
                      Talk to Us →
                    </Link>
                  </div>
                </div>
                <div className="addons">
                  <h3>
                    Add-ons
                    <span className="fl">.</span>
                  </h3>
                  <div>
                    <div className="arow">
                      <span>Technical SEO audit and fix list</span>
                      <b>₹20k</b>
                    </div>
                    <div className="arow">
                      <span>Content pack: 10 SEO articles</span>
                      <b>₹35k</b>
                    </div>
                    <div className="arow">
                      <span>Local SEO and Google Business Profile setup</span>
                      <b>₹15k</b>
                    </div>
                    <div className="arow">
                      <span>Link-building pack (10 quality links)</span>
                      <b>₹30k</b>
                    </div>
                  </div>
                </div>
              </>
            }
            proj={
              <>
                <div className="plans">
                  <div className="plan">
                    <div className="nm">Starter Store</div>
                    <div className="for">A clean, fast store to start selling online.</div>
                    <div className="pr">
                      ₹1.2L
                      <small>starting</small>
                    </div>
                    <ul>
                      <li>Shopify or WooCommerce setup</li>
                      <li>Up to 25 products</li>
                      <li>Branded theme styling</li>
                      <li>Payments and shipping setup</li>
                      <li>Mobile-first design</li>
                      <li>Basic SEO setup</li>
                      <li>30 days support</li>
                    </ul>
                    <Link className="btn o" href="/contact">
                      Get a Quote →
                    </Link>
                  </div>
                  <div className="plan hot">
                    <span className="badge">Best value</span>
                    <div className="nm">Growth Store</div>
                    <div className="for">A custom store designed to convert and rank.</div>
                    <div className="pr">
                      ₹2.5L
                      <small>starting</small>
                    </div>
                    <ul>
                      <li>Custom UI/UX design</li>
                      <li>Up to 100 products</li>
                      <li>Conversion-optimised product and checkout pages</li>
                      <li>SEO-ready structure and schema</li>
                      <li>Speed and Core Web Vitals tuning</li>
                      <li>Analytics and tracking setup</li>
                      <li>WhatsApp and email integrations</li>
                      <li>60 days support</li>
                    </ul>
                    <Link className="btn" href="/contact">
                      Get a Quote →
                    </Link>
                  </div>
                  <div className="plan">
                    <div className="nm">Custom Commerce</div>
                    <div className="for">For large catalogues and complex needs.</div>
                    <div className="pr">
                      Custom
                      <small>quote</small>
                    </div>
                    <ul>
                      <li>Everything in Growth Store</li>
                      <li>Unlimited products</li>
                      <li>Custom features and integrations</li>
                      <li>Headless or custom builds</li>
                      <li>Store migration</li>
                      <li>Ongoing CRO retainer</li>
                      <li>Priority support</li>
                    </ul>
                    <Link className="btn k" href="/contact">
                      Talk to Us →
                    </Link>
                  </div>
                </div>
                <div className="addons">
                  <h3>
                    Add-ons
                    <span className="fl">.</span>
                  </h3>
                  <div>
                    <div className="arow">
                      <span>Product upload (per 100 products)</span>
                      <b>₹10k</b>
                    </div>
                    <div className="arow">
                      <span>Store migration from another platform</span>
                      <b>₹40k</b>
                    </div>
                    <div className="arow">
                      <span>Conversion audit with video walkthrough</span>
                      <b>₹25k</b>
                    </div>
                    <div className="arow">
                      <span>Launch SEO pack</span>
                      <b>₹30k</b>
                    </div>
                    <div className="arow">
                      <span>Monthly maintenance and support</span>
                      <b>₹8k / mo</b>
                    </div>
                  </div>
                </div>
              </>
            }
          />
          <div className="guar rv">
            <h3>Not sure which package? Start with a free audit and we&apos;ll tell you.</h3>
            <Link className="btn k" href="/contact">
              Book My Free Audit →
            </Link>
          </div>
          <p className="micro rv" style={{ marginTop: "22px", color: "var(--ash)", fontSize: "14px" }}>
            Prices exclude GST. Every project is scoped to your goals; final quote shared within 48 hours.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: "0" }}>
        <div className="wrap faq">
          <div className="rv">
            <div className="tag mono">
              <b>02</b> FAQ
            </div>
            <h2 className="d" style={{ fontSize: "clamp(40px,7vw,104px)", fontWeight: "800", marginBottom: "50px" }}>
              Questions
              <span className="fl">?</span> Answers.
            </h2>
          </div>
          <div className="rv">
            <details open>
              <summary>What is a CRO agency?</summary>
              <p>
                A CRO (conversion rate optimization) agency improves the percentage of your website visitors who buy, sign up or enquire,
                using data, UX research and A/B testing.
              </p>
            </details>
            <details>
              <summary>How is Flamy different from a normal web design agency?</summary>
              <p>
                Most agencies design for looks and hand over a site. We design for conversions and rankings, then measure and improve it
                after launch.
              </p>
            </details>
            <details>
              <summary>How long does SEO take to show results?</summary>
              <p>
                Technical and on-page fixes can move the needle in 4 to 8 weeks. Competitive keywords typically take 4 to 6 months. We set
                honest timelines upfront.
              </p>
            </details>
            <details>
              <summary>Do you work with startups and small businesses?</summary>
              <p>Yes. We work with D2C brands, startups, SMEs and established companies.</p>
            </details>
            <details>
              <summary>What does a free audit include?</summary>
              <p>
                A review of your site&apos;s conversion blockers, SEO health and speed, with a prioritized list of quick wins. No
                obligation.
              </p>
            </details>
            <details>
              <summary>How much do your services cost?</summary>
              <p>Every project is scoped to your goals. Book a free call and we&apos;ll share a clear quote within 48 hours.</p>
            </details>
          </div>
        </div>
      </section>
      <div className="ctab">
        <div className="wrap">
          <h2 className="d rv">Not sure which package fits?</h2>
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
