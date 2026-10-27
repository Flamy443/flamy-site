"use client";

import { useState, type ReactNode } from "react";

type Tab = "ret" | "proj";

export default function PricingTabs({ ret, proj }: { ret: ReactNode; proj: ReactNode }) {
  const [tab, setTab] = useState<Tab | null>(null);

  return (
    <>
      <div className="pchoose rv" id="ptoggle">
        <button className={tab === "ret" ? "on" : ""} onClick={() => setTab("ret")}>
          <span className="mono">Service 01</span>
          <b>SEO</b>
          <i>Rank higher on Google with monthly retainers.</i>
        </button>
        <button className={tab === "proj" ? "on" : ""} onClick={() => setTab("proj")}>
          <span className="mono">Service 02</span>
          <b>E-commerce Website</b>
          <i>A store designed to convert, built to rank.</i>
        </button>
      </div>
      <p className="phint mono" hidden={tab !== null}>
        ↑ Select a service to see its packages
      </p>
      <div className={`ppanel${tab === "ret" ? " on" : ""}`}>{ret}</div>
      <div className={`ppanel${tab === "proj" ? " on" : ""}`}>{proj}</div>
    </>
  );
}
