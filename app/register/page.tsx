"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { programs } from "@/content/site";

const GRADES = ["5", "6", "7", "8", "9", "10", "11", "12"];

type Status = "idle" | "submitting" | "success" | "error";

const prog = programs.list[0]; // Performance Training

export default function RegisterPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    grade: "",
    notes: "",
  });

  const set = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/mykaegoj", {
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
          <div className="mb-8" style={{ borderBottom: "3px solid var(--coral)", paddingBottom: "28px" }}>
            <span
              className="block mb-2.5 text-sm tracking-[0.28em]"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
            >
              Performance Training · Summer 2026
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
              Sign Up.
            </h1>
            <p className="text-[15px] leading-[1.65]" style={{ color: "var(--g400)" }}>
              {prog.description.split("\n\n")[0]} Sign up isn't required, but we love to get to know our athletes so we can tailor our programs.
            </p>
          </div>

          {/* Program details */}
          <div className="mb-10 p-6 rounded-sm flex flex-col gap-4" style={{ background: "var(--d900)" }}>
            <div className="flex flex-wrap gap-2">
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
            {prog.schedule && (
              <div>
                <span
                  className="block text-[11px] tracking-[0.18em] uppercase mb-1"
                  style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
                >
                  Schedule
                </span>
                <p className="text-[14px]" style={{ color: "var(--l200)" }}>{prog.schedule}</p>
              </div>
            )}
            {prog.pricing && (
              <div>
                <span
                  className="block text-[11px] tracking-[0.18em] uppercase mb-1"
                  style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)" }}
                >
                  Pricing
                </span>
                <p className="text-[14px]" style={{ color: "var(--l200)" }}>{prog.pricing}</p>
              </div>
            )}
          </div>


          {status === "success" ? (
            /* Success state */
            <div className="py-12 text-center">
              <div
                className="mb-4 text-5xl leading-none"
                style={{ fontFamily: "var(--font-bebas)", color: "var(--coral)", letterSpacing: "0.02em" }}
              >
                See You Out There.
              </div>
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

              {/* Name row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="First Name" required>
                  <Input
                    value={form.firstName}
                    onChange={(v) => set("firstName", v)}
                    placeholder="First name"
                    required
                  />
                </Field>
                <Field label="Last Name" required>
                  <Input
                    value={form.lastName}
                    onChange={(v) => set("lastName", v)}
                    placeholder="Last name"
                    required
                  />
                </Field>
              </div>

              {/* Email */}
              <Field label="Email" required>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(v) => set("email", v)}
                  placeholder="your@email.com"
                  required
                />
              </Field>

              {/* Grade */}
              <Field label="Athlete's Grade">
                <Select
                  value={form.grade}
                  onChange={(v) => set("grade", v)}
                  options={GRADES.map((g) => ({ value: g, label: `Grade ${g}` }))}
                  placeholder="Select grade"
                />
              </Field>

              {/* Notes */}
              <Field label="Anything else we should know?">
                <textarea
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  placeholder="Goals, questions, schedule constraints..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-sm text-[15px] leading-[1.6] resize-none outline-none transition-colors"
                  style={{
                    fontFamily: "var(--font-figtree)",
                    background: "var(--d800)",
                    color: "var(--l200)",
                    border: "1px solid var(--d600)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--coral)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--d600)")}
                />
              </Field>

              {/* Error */}
              {status === "error" && (
                <p className="text-sm" style={{ color: "var(--coral)" }}>
                  Something went wrong — please try again or email us at hello@havefunathletics.com
                </p>
              )}

              {/* Submit */}
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
                  {status === "submitting" ? "Sending..." : "Sign Me Up →"}
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

/* ── Small reusable sub-components ── */

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-xs tracking-[0.14em] uppercase"
        style={{ fontFamily: "var(--font-bebas)", color: "var(--g400)", letterSpacing: "0.18em" }}
      >
        {label}{required && <span style={{ color: "var(--coral)" }}> *</span>}
      </label>
      {children}
    </div>
  );
}

function Input({
  value, onChange, placeholder, type = "text", required,
}: {
  value: string; onChange: (v: string) => void; placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
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
  );
}

function Select({
  value, onChange, options, placeholder, required,
}: {
  value: string; onChange: (v: string) => void; options: { value: string; label: string }[]; placeholder?: string; required?: boolean;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full px-4 py-3 rounded-sm text-[15px] outline-none transition-colors appearance-none cursor-pointer"
      style={{
        fontFamily: "var(--font-figtree)",
        background: "var(--d800)",
        color: value ? "var(--l200)" : "var(--g500)",
        border: "1px solid var(--d600)",
      }}
      onFocus={(e) => (e.target.style.borderColor = "var(--coral)")}
      onBlur={(e) => (e.target.style.borderColor = "var(--d600)")}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value} style={{ background: "var(--d800)", color: "var(--l200)" }}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
