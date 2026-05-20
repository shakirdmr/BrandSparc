import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden"
      aria-label="Hero"
      style={{
        backgroundImage: "url('/pexaCovera.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Lighter overlay so image is more vibrant */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "rgba(7,16,30,0.45)" }}
      />

      {/* Subtle radial vignette for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, rgba(7,16,30,0.55) 100%)",
        }}
      />

      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #07101E)" }}
      />

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-10 pt-28 text-center lg:px-10">

        {/* Eyebrow */}
        <div className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
          <span className="text-[12px] font-semibold tracking-widest text-white/80 uppercase">
            {HERO.eyebrow}
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-bold leading-[1.15] tracking-tight"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          {HERO.h1.map((line, i) => (
            <span
              key={i}
              className={["block", line.muted ? "text-white/50" : "text-white drop-shadow-[0_2px_24px_rgba(255,255,255,0.15)]"].join(" ")}
            >
              {line.text}
            </span>
          ))}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.75] text-white/70">
          {HERO.description}
        </p>

        {/* CTAs */}
        <div className="mt-18 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={HERO.ctaPrimary.href}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3 text-[14px] font-semibold text-bs-navy shadow-[0_4px_24px_rgba(255,255,255,0.2)] transition-all duration-300 hover:px-9 hover:shadow-[0_4px_32px_rgba(255,255,255,0.3)]"
          >
            {HERO.ctaPrimary.label}
            <ArrowRight size={15} />
          </Link>

          <Link
            href={HERO.ctaSecondary.href}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 bg-white/8 px-7 py-3 text-[14px] font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/45 hover:bg-white/12 hover:px-9 hover:text-white"
          >
            {HERO.ctaSecondary.label}
          </Link>
        </div>

      </div>
    </section>
  );
}