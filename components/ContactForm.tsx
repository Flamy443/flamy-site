"use client";

import { useState, type FormEvent, type ReactNode } from "react";

export default function ContactForm({ children }: { children: ReactNode }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form className="rv" onSubmit={onSubmit}>
      {children}
      <button className="btn" style={{ justifySelf: "start", cursor: "pointer" }}>
        {sent ? "Sent. We'll reply within 24h ✦" : "Send My Request →"}
      </button>
      <span className="micro">Free audit. We reply within 24 hours. Your information stays private.</span>
    </form>
  );
}
