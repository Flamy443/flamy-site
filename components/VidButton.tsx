"use client";

import type { ReactNode } from "react";
import { OPEN_VIDEO_EVENT } from "./VideoModal";

export default function VidButton({ video = "", children }: { video?: string; children: ReactNode }) {
  return (
    <button className="vid" onClick={() => window.dispatchEvent(new CustomEvent(OPEN_VIDEO_EVENT, { detail: video }))}>
      {children}
    </button>
  );
}
