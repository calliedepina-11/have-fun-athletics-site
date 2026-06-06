import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { home } from "@/content/site";

export default function Home() {
  const { hero, building, program, philosophy, register } = home;

  return (
    <>
      <Nav />
      <main className="snap-y snap-mandatory overflow-y-scroll h-dvh">

        {/* ── HERO ── */}
        <section
          className="snap-start min-h-dvh flex flex-col justify-end relative overflow-hidden"
          style={{ background: "var(--d950)" }}
        >
          <div
            className="hero-bg absolute inset-0"
            style={{
              backgroundImage: `url(${hero.image})`,
              backgroundColor: "var(--d950)",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(17,17,16,0.95) 0%, rgba(17,17,16,0.4) 60%, rgba(17,17,16,0.2) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 p-6 pb-12 md:p-16 md:pb-20 max-w-2xl">
            <span
              className="block mb-3 text-sm tracking-[0.28em]"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
            >
              {hero.label}
            </span>
            <h1
              className="mb-5 leading-none whitespace-pre-line"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(64px, 12vw, 130px)",
                letterSpacing: "0.03em",
                color: "var(--l50)",
              }}
            >
              {hero.headline}
            </h1>
            <p className="mb-3 text-base md:text-lg leading-relaxed max-w-md" style={{ color: "var(--l200)" }}>
              {hero.body}
            </p>
            <p className="mb-7 text-sm" style={{ color: "var(--g400)" }}>
              {hero.sub}
            </p>
            <Link
              href={hero.cta.href}
              className="inline-block px-7 py-4 rounded-sm text-xl tracking-widest transition-opacity hover:opacity-90"
              style={{ fontFamily: "var(--font-bebas)", background: "var(--coral)", color: "var(--l50)" }}
            >
              {hero.cta.label}
            </Link>
          </div>
        </section>

        {/* ── WHAT WE'RE BUILDING ── */}
        <section
          className="snap-start min-h-dvh flex flex-col justify-center px-6 py-16 md:px-16"
          style={{ background: "var(--d900)" }}
        >
          <div className="max-w-5xl w-full mx-auto">
            <span
              className="block mb-3 text-sm tracking-[0.28em]"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
            >
              {building.label}
            </span>
            <h2
              className="mb-8 leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(40px, 6vw, 72px)",
                letterSpacing: "0.02em",
                color: "var(--l50)",
              }}
            >
              {building.headline}
            </h2>
            {/* Mobile: stacked | Desktop: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {building.pillars.map((p) => (
                <div
                  key={p.title}
                  className="p-5 rounded-sm"
                  style={{ background: "var(--d800)", borderLeft: "3px solid var(--coral)" }}
                >
                  <div
                    className="text-xl mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-bebas)", color: "var(--l50)", letterSpacing: "0.04em" }}
                  >
                    {p.title}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--g400)" }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUMMER PROGRAM ── */}
        <section
          className="snap-start min-h-dvh flex flex-col justify-end relative overflow-hidden"
          style={{ background: "var(--d950)" }}
        >
          <div className="absolute inset-0">
            <Image
              src={program.image}
              alt="Summer program"
              fill
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(17,17,16,0.97) 0%, rgba(17,17,16,0.55) 50%, rgba(17,17,16,0.25) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 p-6 pb-12 md:p-16 md:pb-20 max-w-2xl">
            <span
              className="block mb-3 text-sm tracking-[0.28em]"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
            >
              {program.label}
            </span>
            <h2
              className="mb-4 leading-none whitespace-pre-line"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(40px, 7vw, 80px)",
                letterSpacing: "0.02em",
                color: "var(--l50)",
              }}
            >
              {program.headline}
            </h2>
            <p className="mb-7 text-sm md:text-base leading-relaxed max-w-sm" style={{ color: "var(--l200)" }}>
              {program.sub}
            </p>
            <Link
              href={program.cta.href}
              className="inline-block px-7 py-4 rounded-sm text-xl tracking-widest transition-opacity hover:opacity-90"
              style={{ fontFamily: "var(--font-bebas)", background: "var(--coral)", color: "var(--l50)" }}
            >
              {program.cta.label}
            </Link>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section
          className="snap-start min-h-dvh flex flex-col justify-center px-6 py-16 md:px-16"
          style={{ background: "var(--d950)" }}
        >
          <div className="max-w-5xl w-full mx-auto">
            <span
              className="block mb-3 text-sm tracking-[0.28em]"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
            >
              {philosophy.label}
            </span>
            <h2
              className="mb-8 leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(40px, 6vw, 72px)",
                letterSpacing: "0.02em",
                color: "var(--l50)",
              }}
            >
              {philosophy.headline}
            </h2>
            {/* Mobile: stacked | Desktop: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {philosophy.beliefs.map((b) => (
                <div key={b.number}>
                  <span
                    className="block text-3xl mb-2"
                    style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
                  >
                    {b.number}
                  </span>
                  <div
                    className="text-xl leading-tight mb-2"
                    style={{ fontFamily: "var(--font-bebas)", color: "var(--l50)", letterSpacing: "0.04em" }}
                  >
                    {b.title}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--g400)" }}>
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href={philosophy.cta.href}
              className="text-sm tracking-wide transition-opacity hover:opacity-70"
              style={{ color: "var(--coral)" }}
            >
              {philosophy.cta.label}
            </Link>
          </div>
        </section>

        {/* ── REGISTER + FOOTER ── */}
        <div className="snap-start min-h-dvh flex flex-col">
          <div
            className="flex-1 flex flex-col justify-center px-6 py-12 md:px-16"
            style={{ background: "var(--coral)" }}
          >
            <div className="max-w-2xl">
              <span
                className="block mb-3 text-sm tracking-[0.28em]"
                style={{ fontFamily: "var(--font-bebas)", color: "rgba(17,17,16,0.55)" }}
              >
                {register.label}
              </span>
              <h2
                className="mb-4 leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(40px, 7vw, 80px)",
                  letterSpacing: "0.02em",
                  color: "var(--d950)",
                }}
              >
                {register.headline}
              </h2>
              <p className="mb-8 text-base md:text-lg leading-relaxed max-w-sm" style={{ color: "rgba(17,17,16,0.7)" }}>
                {register.body}
              </p>
              <Link
                href={register.cta.href}
                className="inline-block px-7 py-4 rounded-sm text-xl tracking-widest transition-opacity hover:opacity-90"
                style={{ fontFamily: "var(--font-bebas)", background: "var(--d950)", color: "var(--l50)" }}
              >
                {register.cta.label}
              </Link>
            </div>
          </div>
          <Footer />
        </div>

      </main>
    </>
  );
}
