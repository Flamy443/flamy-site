"use client";

import { useRef, useState, useEffect } from "react";

// Renders nothing if the image file is missing, so the CSS placeholder behind it shows through.
export default function SafeImg({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) return null;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={base + src} alt={alt} onError={() => setFailed(true)} />;
}
