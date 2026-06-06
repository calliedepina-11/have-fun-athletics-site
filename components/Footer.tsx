import Link from "next/link";
import Image from "next/image";
import { site, nav } from "@/content/site";

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-center px-5 pt-10 pb-12 gap-6 text-center"
      style={{ background: "var(--d950)", borderTop: "1px solid var(--d700)" }}
    >
      <div className="relative w-40 h-10">
        <Image
          src="/handwriting-bobby-white.svg"
          alt="Bobby's handwriting"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex gap-5 flex-wrap justify-center">
        {nav.links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-xs tracking-widest uppercase transition-colors hover:opacity-60"
            style={{ fontFamily: "var(--font-figtree)", color: "var(--l200)" }}
          >
            {l.label}
          </Link>
        ))}
        <a
          href={`mailto:${site.email}`}
          className="text-xs tracking-widest uppercase transition-colors hover:opacity-60"
          style={{ fontFamily: "var(--font-figtree)", color: "var(--l200)" }}
        >
          Contact
        </a>
      </div>
      <p
        className="text-xs"
        style={{ fontFamily: "var(--font-figtree)", color: "var(--g400)" }}
      >
        {site.copyright}
      </p>
    </footer>
  );
}
