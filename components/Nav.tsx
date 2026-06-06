"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/content/site";

const LogoMark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1053 420" width="64" height="26" aria-label="Have Fun Athletics">
    <rect width="1053" height="420" fill="#111110"/>
    <path fill="#FDFCFB" d="M256.07 369.73L309.97 255.65A0.57 0.57 0 0 0 309.45 254.84L230.43 254.84A0.57 0.57 0 0 0 229.92 255.17L175.55 370.22A0.57 0.57 0 0 1 175.04 370.55L87.88 370.55A0.57 0.57 0 0 1 87.36 369.74L229.21 69.55A0.57 0.57 0 0 1 229.72 69.22L317.87 69.22A0.57 0.57 0 0 1 318.39 70.03L264.03 185.07A0.57 0.57 0 0 0 264.55 185.88L429.50 185.88A0.57 0.57 0 0 1 430.01 186.69L344.99 370.21A0.57 0.57 0 0 1 344.48 370.54L256.59 370.54A0.57 0.57 0 0 1 256.07 369.73Z"/>
    <path fill="#FDFCFB" d="M701.72 71.13L671.39 136.61A0.63 0.63 0 0 1 670.82 136.98L377.93 136.98A0.63 0.63 0 0 1 377.35 136.09L407.69 70.61A0.63 0.63 0 0 1 408.26 70.24L701.14 70.24A0.63 0.63 0 0 1 701.72 71.13Z"/>
    <path fill="#FDFCFB" d="M447.07 253.55L476.89 187.34A0.46 0.46 0 0 1 477.31 187.07L624.78 187.07A0.46 0.46 0 0 1 625.20 187.72L594.52 253.93A0.46 0.46 0 0 1 594.11 254.20L447.49 254.20A0.46 0.46 0 0 1 447.07 253.55Z"/>
    <path fill="#E8614A" d="M732.19 296.52L655.43 296.52A0.35 0.35 0 0 1 655.11 296.03L750.69 70.77A0.35 0.35 0 0 1 751.01 70.56L830.34 70.56A0.35 0.35 0 0 1 830.66 71.05L732.51 296.31A0.35 0.35 0 0 1 732.19 296.52Z"/>
    <path fill="#E8614A" d="M857.23 296.56L779.98 296.56A0.36 0.36 0 0 1 779.64 296.06L875.87 70.76A0.36 0.36 0 0 1 876.20 70.54L955.39 70.54A0.36 0.36 0 0 1 955.72 71.04L857.56 296.34A0.36 0.36 0 0 1 857.23 296.56Z"/>
    <path fill="#E8614A" d="M700.17 370.09L623.51 370.09A0.51 0.51 0 0 1 623.04 369.38L647.97 312.17A0.51 0.51 0 0 1 648.43 311.86L725.09 311.86A0.51 0.51 0 0 1 725.56 312.57L700.63 369.78A0.51 0.51 0 0 1 700.17 370.09Z"/>
    <path fill="#E8614A" d="M772.94 311.89L850.05 311.89A0.39 0.39 0 0 1 850.41 312.44L825.40 369.87A0.39 0.39 0 0 1 825.04 370.10L747.92 370.10A0.39 0.39 0 0 1 747.56 369.55L772.58 312.12A0.39 0.39 0 0 1 772.94 311.89Z"/>
  </svg>
);

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-[14px]"
        style={{ background: "var(--d950)", borderBottom: "1px solid var(--d700)" }}
      >
        <Link href="/" aria-label="Have Fun Athletics home">
          <LogoMark />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase transition-colors"
              style={{ fontFamily: "var(--font-figtree)", color: "var(--g400)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={nav.cta.href}
            className="px-5 py-2 rounded-sm text-sm tracking-widest uppercase font-semibold transition-opacity hover:opacity-90"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "16px",
              letterSpacing: "0.1em",
              background: "var(--coral)",
              color: "var(--l50)",
            }}
          >
            {nav.cta.label}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-[22px] h-[1.5px] transition-transform"
            style={{
              background: "var(--l200)",
              transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-[22px] h-[1.5px] transition-opacity"
            style={{
              background: "var(--l200)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-[22px] h-[1.5px] transition-transform"
            style={{
              background: "var(--l200)",
              transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-[54px]"
          style={{ background: "var(--d950)" }}
        >
          <div className="flex flex-col p-8 gap-6">
            {nav.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-4xl tracking-wide"
                style={{ fontFamily: "var(--font-bebas)", color: "var(--l50)" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="inline-flex mt-4 px-6 py-3 rounded-sm text-xl tracking-widest self-start"
              style={{
                fontFamily: "var(--font-bebas)",
                background: "var(--coral)",
                color: "var(--l50)",
              }}
            >
              {nav.cta.label}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
