import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <div
        style={{ paddingTop: "54px", minHeight: "100vh", background: "var(--d950)" }}
        className="flex flex-col"
      >
        <div className="flex-1 flex flex-col justify-center px-6 py-20">
          <span
            className="block mb-3 text-sm tracking-[0.28em]"
            style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
          >
            404
          </span>
          <h1
            className="mb-4 leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(52px, 14vw, 96px)",
              letterSpacing: "0.02em",
              color: "var(--l50)",
            }}
          >
            Page Not Found.
          </h1>
          <p className="mb-8 text-base leading-relaxed max-w-sm" style={{ color: "var(--g400)" }}>
            This page doesn't exist — but the work does. Head back and find what you're looking for.
          </p>
          <Link
            href="/"
            className="inline-block self-start px-6 py-4 rounded-sm text-lg tracking-widest transition-opacity hover:opacity-90"
            style={{
              fontFamily: "var(--font-bebas)",
              background: "var(--coral)",
              color: "var(--l50)",
            }}
          >
            Back To Home →
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}
