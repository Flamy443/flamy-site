import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import VideoModal from "@/components/VideoModal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flamy | CRO, SEO & UI/UX Agency That Grows Revenue",
  description:
    "Flamy is a conversion rate optimization, SEO and UI/UX agency. We design and build websites and apps that rank on Google and turn visitors into customers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Link className="btn sticky" href="/contact">
          Free Audit →
        </Link>
        <VideoModal />
        <Reveal />
      </body>
    </html>
  );
}
