import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Flamy | Book a Free CRO, SEO & Website Audit",
  description:
    "Talk to Flamy about CRO, SEO, UI/UX, website or app development. Book a free audit or strategy call. We reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <section className="contact" id="contact" style={{ paddingTop: "170px" }}>
        <div className="wrap">
          <div className="tag mono">
            <b>01</b> Contact
          </div>
          <h2 className="d rv">
            Let&apos;s grow your business
            <span className="fl">.</span>
          </h2>
          <div className="cgrid">
            <div className="rv">
              <p className="sub">
                Tell us what you&apos;re building or what&apos;s not working. We&apos;ll reply within 24 hours with honest next steps. No
                sales pressure, no jargon.
              </p>
              <ol className="steps">
                <li>We review your site and prepare your audit.</li>
                <li>We reply within 24 hours to schedule a 30-minute call.</li>
                <li>You get a clear plan with priorities, timeline and pricing. No obligation.</li>
              </ol>
              <div className="reach">
                <a href="mailto:yash@weareflamy.com">yash@weareflamy.com</a>
                <a href="#">WhatsApp: [number]</a>
                <a href="#">Book a call: [Calendly link]</a>
                <span className="micro">Serving brands across India, UAE and worldwide.</span>
              </div>
            </div>
            <ContactForm>
              <label>
                <span className="mono">Name *</span>
                <input required name="name" />
              </label>
              <label>
                <span className="mono">Email *</span>
                <input required type="email" name="email" />
              </label>
              <label>
                <span className="mono">Website URL</span>
                <input name="url" placeholder="https://" />
              </label>
              <div>
                <span className="mono" style={{ color: "#a9a49a", display: "block", marginBottom: "12px" }}>
                  I&apos;m interested in
                </span>
                <div className="chips">
                  <label>
                    <input type="checkbox" />
                    <span>CRO</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>SEO</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>UI/UX</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>Website</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>App</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>Not sure yet</span>
                  </label>
                </div>
              </div>
              <label>
                <span className="mono">Tell us about your project</span>
                <textarea rows={3} name="msg"></textarea>
              </label>
            </ContactForm>
          </div>
        </div>
      </section>
    </>
  );
}
