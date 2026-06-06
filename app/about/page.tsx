"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { about } from "@/content/site";

export default function AboutPage() {
  const { header, jumpNav, story, team, cta } = about;
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("story");

  useEffect(() => {
    const sections = ["story", "team"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      // Fire when section crosses the top 20% of the viewport
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const prevSlide = () =>
    setCarouselIndex((i) => (i - 1 + team.carousel.length) % team.carousel.length);
  const nextSlide = () =>
    setCarouselIndex((i) => (i + 1) % team.carousel.length);

  return (
    <>
      <Nav />
      <div style={{ paddingTop: "54px", background: "var(--d950)", minHeight: "100vh" }}>
        <div className="max-w-3xl mx-auto">

        {/* Page Header */}
        <div
          className="px-5 pt-9 pb-8 md:px-0 md:pt-12 md:pb-10"
          style={{ background: "var(--d950)", borderBottom: "1px solid var(--d700)" }}
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
          <p className="text-[15px] leading-[1.65] max-w-xl" style={{ color: "var(--g400)" }}>
            {header.body}
          </p>
        </div>

        {/* Jump Nav */}
        <div
          className="flex sticky top-[54px] z-40"
          style={{ background: "var(--d900)", borderBottom: "1px solid var(--d700)" }}
        >
          {jumpNav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex-1 text-center py-3.5 text-[13px] tracking-[0.16em] transition-colors relative"
                style={{
                  fontFamily: "var(--font-bebas)",
                  color: isActive ? "var(--l50)" : "var(--g400)",
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: "var(--coral)" }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* ── STORY ── */}
        <div id="story">

          {/* Story block — d900 background */}
          <div className="px-5 py-10 md:px-10" style={{ background: "var(--d900)" }}>

          {/* Two-column block: title + image */}
          <div className="flex flex-col md:flex-row md:items-center mb-8">
            {/* Eyebrow + Headline — vertically centered, left half */}
            <div className="mb-6 md:mb-0 md:flex-1">
              <span
                className="block mb-3 text-[13px] tracking-[0.28em]"
                style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
              >
                {story.label}
              </span>
              <h2
                className="leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(40px, 10vw, 72px)",
                  letterSpacing: "0.02em",
                  color: "var(--l50)",
                  lineHeight: "0.9",
                }}
              >
                {story.headline}
              </h2>
            </div>

            {/* Note photo — right half, centered */}
            <div className="md:flex-1 flex md:justify-center">
              <Image
                src={story.noteImage}
                alt="Bobby's handwritten note"
                width={400}
                height={560}
                className="rounded-sm w-48 md:w-56 lg:w-64 h-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Body text — full width underneath, back on d950 */}
          <div className="mb-6">
            {story.body.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-[15px] leading-[1.75] mb-4 last:mb-0"
                style={{ color: "var(--l200)" }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Bobby's handwriting */}
          <div className="relative w-full max-w-xs h-16 mb-4">
            <Image
              src="/handwriting-bobby-white.svg"
              alt="Bobby's handwriting"
              fill
              className="object-contain object-left"
            />
          </div>
            <p
              className="text-sm italic"
              style={{ color: "var(--g500)" }}
            >
              — {story.attribution}
            </p>

          </div>{/* end d900 story block */}

          {/* Beliefs — back on d950 */}
          <div className="px-5 py-10 md:px-10" style={{ background: "var(--d950)" }}>
          <h3
            className="mb-4 text-2xl tracking-[0.04em]"
            style={{ fontFamily: "var(--font-bebas)", color: "var(--l50)" }}
          >
            What We Believe
          </h3>
          <div className="flex flex-col gap-2">
            {story.beliefs.map((b) => (
              <div
                key={b.number}
                className="p-5 rounded-sm"
                style={{ background: "var(--d800)", borderLeft: "3px solid var(--coral)" }}
              >
                <div className="flex gap-3 mb-1">
                  <span
                    className="text-xl leading-tight shrink-0"
                    style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
                  >
                    {b.number}
                  </span>
                  <span
                    className="text-xl leading-tight"
                    style={{ fontFamily: "var(--font-bebas)", color: "var(--l50)", letterSpacing: "0.04em" }}
                  >
                    {b.title}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--g400)" }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
          </div>{/* end d950 beliefs block */}
        </div>{/* end story section */}

        {/* ── TEAM ── */}
        <div
          id="team"
          className="px-5 py-10"
          style={{ background: "var(--d900)", borderTop: "1px solid var(--d700)" }}
        >
          <span
            className="block mb-3 text-[13px] tracking-[0.28em]"
            style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
          >
            {team.label}
          </span>
          <h2
            className="mb-1 leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 10vw, 72px)",
              letterSpacing: "0.02em",
              color: "var(--l50)",
              lineHeight: "0.9",
            }}
          >
            {team.headline}
          </h2>
          <p
            className="mb-8 text-sm"
            style={{ color: "var(--g500)" }}
          >
            {team.sub}
          </p>

          {/* Coach cards — mobile: stacked, desktop: 2-col then 3rd full width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {team.members.map((member, i) => (
              <div
                key={member.name}
                className="rounded-sm overflow-hidden"
                style={{ background: "var(--d800)" }}
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: member.objectPosition || "center" }}
                  />
                </div>
                <div className="p-5">
                  <div
                    className="text-2xl leading-tight mb-0.5"
                    style={{ fontFamily: "var(--font-bebas)", color: "var(--l50)", letterSpacing: "0.04em" }}
                  >
                    {member.name}
                  </div>
                  <div
                    className="text-[13px] mb-4 tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
                  >
                    {member.role}
                  </div>
                  <div>
                    {member.bio.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="text-sm leading-[1.75] mb-3 last:mb-0"
                        style={{ color: "var(--g400)" }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  {member.cta && 'href' in member.cta && (
                    <Link
                      href={(member.cta as {href: string; label: string}).href}
                      className="inline-block mt-5 text-sm transition-opacity hover:opacity-70"
                      style={{ color: "var(--coral)" }}
                    >
                      {(member.cta as {href: string; label: string}).label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Photo carousel */}
          <div className="mb-2">
            <div
              className="text-lg mb-3 tracking-[0.04em]"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--g400)" }}
            >
              The People &amp; The Journey
            </div>
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-3">
              <Image
                src={team.carousel[carouselIndex]}
                alt={`Team photo ${carouselIndex + 1}`}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="px-4 py-2 text-sm tracking-widest transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-bebas)",
                  color: "var(--g400)",
                  background: "var(--d800)",
                  border: "1px solid var(--d600)",
                  borderRadius: "2px",
                }}
              >
                ← Prev
              </button>
              <span
                className="text-sm"
                style={{ fontFamily: "var(--font-bebas)", color: "var(--d600)" }}
              >
                {carouselIndex + 1} / {team.carousel.length}
              </span>
              <button
                onClick={nextSlide}
                className="px-4 py-2 text-sm tracking-widest transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-bebas)",
                  color: "var(--g400)",
                  background: "var(--d800)",
                  border: "1px solid var(--d600)",
                  borderRadius: "2px",
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="px-5 py-10"
          style={{ background: "var(--d950)", borderTop: "1px solid var(--d700)" }}
        >
          <span
            className="block mb-3 text-[13px] tracking-[0.28em]"
            style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
          >
            {cta.label}
          </span>
          <h2
            className="mb-3 leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(36px, 9vw, 64px)",
              letterSpacing: "0.02em",
              color: "var(--l50)",
              lineHeight: "0.9",
            }}
          >
            {cta.headline}
          </h2>
          <p className="mb-7 text-[15px] leading-[1.65]" style={{ color: "var(--l200)" }}>
            {cta.body}
          </p>
          <Link
            href={cta.cta.href}
            className="inline-block px-6 py-4 rounded-sm text-lg tracking-widest transition-opacity hover:opacity-90"
            style={{
              fontFamily: "var(--font-bebas)",
              background: "var(--coral)",
              color: "var(--l50)",
            }}
          >
            {cta.cta.label}
          </Link>
        </div>

        </div>{/* end max-w container */}
        <Footer />
      </div>
    </>
  );
}
