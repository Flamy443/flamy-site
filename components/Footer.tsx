import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="big">
          flamy<span className="fl">.</span>
        </div>
        <div className="micro">Rank higher. Convert better. Grow faster.</div>
      </div>
      <div className="mono" style={{ display: "flex", gap: 26, alignItems: "center", flexWrap: "wrap" }}>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link className="btn sm" href="/contact">
          Book Your Free Audit →
        </Link>
      </div>
    </footer>
  );
}
