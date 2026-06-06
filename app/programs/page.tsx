import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { programs } from "@/content/site";

export const metadata: Metadata = {
  title: "Programs — Have Fun Athletics",
  description: "Athletic training programs in Winthrop, MA. Performance training, baseball coaching, personal training, and more.",
};

export default function ProgramsPage() {
  const { header, list, comingSoon } = programs;

  return (
    <>
      <Nav />
      <div style={{ paddingTop: "54px", background: "var(--d950)", minHeight: "100vh" }}>
        <div className="max-w-3xl mx-auto">

        {/* Page Header */}
        <div
          className="px-5 pt-9 pb-8 md:px-0 md:pt-12 md:pb-10"
          style={{ background: "var(--d950)", borderBottom: "3px solid var(--coral)" }}
        >
          <span
            className="block mb-2.5 text-sm tracking-[0.28em]"
            style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
          >
            {header.label}
          </span>
          <h1
            className="mb-4 leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(52px, 12vw, 96px)",
              letterSpacing: "0.02em",
              color: "var(--l50)",
              lineHeight: "0.88",
            }}
          >
            {header.headline}
          </h1>
          <p
            className="text-[15px] leading-[1.65] max-w-xl"
            style={{ color: "var(--g400)" }}
          >
            {header.body}
          </p>
        </div>

        {/* Program Sections */}
        {list.map((prog, i) => (
          <div
            key={prog.name}
            className="px-5 py-10"
            style={{
              background: i % 2 === 0 ? "var(--d950)" : "var(--d900)",
              borderBottom: "1px solid var(--d700)",
            }}
          >
            <span
              className="block mb-3 text-[13px] tracking-[0.28em]"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
            >
              {prog.label}
            </span>
            <div
              className="mb-4 leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(40px, 10vw, 72px)",
                letterSpacing: "0.02em",
                color: "var(--l50)",
                lineHeight: "0.9",
              }}
            >
              {prog.name}
            </div>
            <div className="mb-5">
              {prog.description.split("\n\n").map((para, j) => (
                <p
                  key={j}
                  className="text-[15px] leading-[1.7] mb-3 last:mb-0"
                  style={{ color: "var(--l200)" }}
                >
                  {para}
                </p>
              ))}
            </div>
            {(prog.schedule || prog.pricing) && (
              <div
                className="mb-5 p-4 rounded-sm"
                style={{ background: "var(--d800)", borderLeft: "3px solid var(--coral)" }}
              >
                {prog.schedule && (
                  <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--l200)" }}>
                    <span style={{ color: "var(--g400)" }}>Schedule: </span>{prog.schedule}
                  </p>
                )}
                {prog.pricing && (
                  <p className="text-sm leading-relaxed" style={{ color: "var(--l200)" }}>
                    <span style={{ color: "var(--g400)" }}>Pricing: </span>{prog.pricing}
                  </p>
                )}
              </div>
            )}
            <div className="flex flex-wrap gap-2 mb-7">
              {prog.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] tracking-[0.16em] px-2.5 py-1.5 rounded-sm"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    color: "var(--g400)",
                    background: "var(--d800)",
                    border: "1px solid var(--d600)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            {prog.cta.style === "coral" ? (
              <Link
                href={prog.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block md:inline-block text-center py-4 px-8 rounded-sm text-lg tracking-[0.1em] transition-opacity hover:opacity-90"
                style={{
                  fontFamily: "var(--font-bebas)",
                  background: "var(--coral)",
                  color: "var(--l50)",
                }}
              >
                {prog.cta.label}
              </Link>
            ) : (
              <a
                href={prog.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block md:inline-block text-center py-[15px] px-8 rounded-sm text-lg tracking-[0.1em] transition-opacity hover:opacity-80"
                style={{
                  fontFamily: "var(--font-bebas)",
                  background: "transparent",
                  color: "var(--coral)",
                  border: "1.5px solid var(--coral)",
                }}
              >
                {prog.cta.label}
              </a>
            )}
          </div>
        ))}

        {/* Coming Soon */}
        <div className="px-5 py-10" style={{ background: "var(--d800)" }}>
          <span
            className="block mb-3 text-[13px] tracking-[0.28em]"
            style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
          >
            {comingSoon.label}
          </span>
          <h2
            className="mb-3.5 leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 10vw, 72px)",
              letterSpacing: "0.02em",
              color: "var(--l50)",
              lineHeight: "0.9",
            }}
          >
            {comingSoon.headline}
          </h2>
          <p
            className="text-[15px] leading-[1.65] mb-7"
            style={{ color: "var(--l200)" }}
          >
            {comingSoon.body}
          </p>
          <div className="flex flex-col gap-0.5 mb-8">
            {comingSoon.items.map((item, i) => (
              <div
                key={item.title}
                className="px-5 py-4"
                style={{
                  background: "#FDF1EE",
                  borderLeft: "3px solid var(--coral)",
                  borderRadius:
                    i === 0
                      ? "3px 3px 0 0"
                      : i === comingSoon.items.length - 1
                      ? "0 0 3px 3px"
                      : "0",
                }}
              >
                <div
                  className="text-xl mb-1 leading-tight"
                  style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em", color: "var(--d950)" }}
                >
                  {item.title}
                </div>
                <p className="text-[13px] leading-[1.6]" style={{ color: "var(--d700)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <a
            href={comingSoon.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block md:inline-block text-center py-[15px] px-8 rounded-sm text-lg tracking-[0.1em] transition-opacity hover:opacity-80"
            style={{
              fontFamily: "var(--font-bebas)",
              background: "transparent",
              color: "var(--coral)",
              border: "1.5px solid var(--coral)",
            }}
          >
            {comingSoon.cta.label}
          </a>
        </div>

        </div>{/* end max-w container */}
        <Footer />
      </div>
    </>
  );
}
