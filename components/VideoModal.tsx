"use client";

import { useEffect, useState } from "react";

export const OPEN_VIDEO_EVENT = "flamy:open-video";

const isFile = (src: string) => /\.(mp4|webm|mov)(\?|$)/i.test(src);

export default function VideoModal() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("");

  useEffect(() => {
    const onOpen = (e: Event) => {
      setSrc((e as CustomEvent<string>).detail ?? "");
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener(OPEN_VIDEO_EVENT, onOpen);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(OPEN_VIDEO_EVENT, onOpen);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className={`modal${open ? " on" : ""}`} onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="mbox">
        <button className="mx" onClick={() => setOpen(false)}>
          Close ✕
        </button>
        {open && !src && (
          <p className="mmsg">
            Add this client&apos;s video URL as the <code>video</code> prop of the VidButton (YouTube/Vimeo embed link or an .mp4 file).
          </p>
        )}
        {open && src && isFile(src) && <video src={src} controls autoPlay playsInline />}
        {open && src && !isFile(src) && (
          <iframe
            src={src + (src.includes("?") ? "&" : "?") + "autoplay=1"}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
