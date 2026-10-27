"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function activeHref(path: string) {
  if (path.startsWith("/service")) return "/services";
  if (path.startsWith("/work-")) return "/portfolio";
  return path;
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = activeHref(pathname);

  return (
    <nav>
      <Link href="/" className="logo">
        flamy<span className="fl">.</span>
      </Link>
      <div className={`links mono${open ? " open" : ""}`} onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}>
        {links.map((l) => (
          <Link key={l.href} className={`l${active === l.href ? " act" : ""}`} href={l.href}>
            {l.label}
          </Link>
        ))}
        <Link className="btn sm" href="/contact">
          Get Free Audit →
        </Link>
      </div>
      <button className="burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
        Menu
      </button>
    </nav>
  );
}
