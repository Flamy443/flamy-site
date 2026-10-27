"use client";

import { useState, type ReactNode } from "react";

const filters = [
  { key: "all", label: "All" },
  { key: "web", label: "Websites" },
  { key: "app", label: "Apps" },
  { key: "uiux", label: "UI/UX" },
  { key: "seo", label: "SEO" },
  { key: "ecom", label: "E-commerce" },
];

export default function PortfolioGrid({ items }: { items: { tags: string; card: ReactNode }[] }) {
  const [active, setActive] = useState("all");

  return (
    <>
      <div className="filters rv" id="filters">
        {filters.map((f) => (
          <button key={f.key} className={active === f.key ? "on" : ""} onClick={() => setActive(f.key)}>
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid" id="grid">
        {items.map((it, i) => (
          <div key={i} style={{ display: active === "all" || it.tags.split(" ").includes(active) ? "contents" : "none" }}>
            {it.card}
          </div>
        ))}
      </div>
    </>
  );
}
