"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

type Status = "idle" | "submitting" | "success" | "error";

export default function NewsletterPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ firstName: "", email: "" });

  const set = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/xojzeark", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Nav />
      <div style={{ paddingTop: "54px", background: "var(--d950)", minHeight: "100vh" }}>
        <div className="max-w-2xl mx-auto px-5 py-12 md:py-16">

          {/* Header */}
          <div className="mb-10" style={{ borderBottom: "3px solid var(--coral)", paddingBottom: "28px" }}>
            <span
              className="block mb-2.5 text-sm tracking-[0.28em]"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
            >
              Have Fun Athletics
            </span>
            <h1
              className="leading-none mb-4"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(48px, 12vw, 80px)",
                letterSpacing: "0.02em",
                color: "var(--l50)",
                lineHeight: "0.9",
              }}
            >
              Stay In The Loop.
            </h1>
            <p className="text-[15px] leading-[1.65]" style={{ color: "var(--g400)" }}>
              New programs, updates, and what's coming next. No spam — just the good stuff.
            </p>
          </div>

          {status === "success" ? (
            <div className="py-12 text-center">
              <div
                className="mb-4 text-5xl leading-none"
                style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)", letterSpacing: "0.02em" }}
              >
                You're On The List.
              </div>
              <p className="text-[15px] leading-[1.7] mb-8" style={{ color: "var(--l200)" }}>
                We'll be in touch when there's something worth sharing.
              </p>
              <Link
                href="/"
                className="inline-block py-4 px-8 rounded-sm text-lg tracking-[0.1em] transition-opacity hover:opacity-90"
                style={{
                  fontFamily: "var(--font-bebas)",
                  background: "var(--coral)",
                  color: "var(--l50)",
                }}
              >
                Back Home →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs uppercase"
                    style={{ fontFamily: "var(--font-bebas)", color: "var(--g400)", letterSpacing: "0.18em" }}
                  >
                    First Name <span style={{ color: "var(--coral)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                    placeholder="First name"
                    required
                    className="w-full px-4 py-3 rounded-sm text-[15px] outline-none transition-colors"
                    style={{
                      fontFamily: "var(--font-figtree)",
                      background: "var(--d800)",
                      color: "var(--l200)",
                      border: "1px solid var(--d600)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--coral)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--d600)")}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs uppercase"
                    style={{ fontFamily: "var(--font-bebas)", color: "var(--g400)", letterSpacing: "0.18em" }}
                  >
                    Email <span style={{ color: "var(--coral)" }}>*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-sm text-[15px] outline-none transition-colors"
                    style={{
                      fontFamily: "var(--font-figtree)",
                      background: "var(--d800)",
                      color: "var(--l200)",
                      border: "1px solid var(--d600)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--coral)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--d600)")}
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="text-sm" style={{ color: "var(--coral)" }}>
                  Something went wrong — please try again or email us at hello@havefunathletics.com
                </p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="block w-full md:inline-block md:w-auto py-4 px-10 rounded-sm text-xl tracking-[0.1em] transition-opacity hover:opacity-90 disabled:opacity-50 cursor-pointer"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    background: "var(--coral)",
                    color: "var(--l50)",
                  }}
                >
                  {status === "submitting" ? "Signing up..." : "Sign Me Up →"}
                </button>
              </div>

            </form>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
