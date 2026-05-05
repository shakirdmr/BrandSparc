import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { HERO } from "@/lib/constants";

const VIDEO_SRC =
  "https://brandsparc.com/wp-content/uploads/2026/01/Create_a_cinematic_202601172302_a3uwu.mp4";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Background video ────────────────────────────────────────── */}
      <video
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay so text stays readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "rgba(7,16,30,0.62)" }}
      />

      {/* Extra bottom fade into next section */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #07101E)" }}
      />

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-10 pt-28 text-center lg:px-10">

        {/* Eyebrow */}
        <div className="mb-7 inline-flex items-center gap-1.5 rounded-full bg-white/8 px-3.5 py-1.5 backdrop-blur-sm">
         <span className="text-[12px] font-medium tracking-widest text-bs-muted uppercase">
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
              className={["block", line.muted ? "text-white/55" : "text-bs-white"].join(" ")}
            >
              {line.text}
            </span>
          ))}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.75] text-white/75">
          {HERO.description}
        </p>

        {/* CTAs */}
        <div className="mt-18 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={HERO.ctaPrimary.href}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3 text-[14px] font-semibold text-bs-navy shadow-sm transition-all duration-300 hover:px-9"
          >
            {HERO.ctaPrimary.label}
            <ArrowRight size={15} />
          </Link>

          <Link
            href={HERO.ctaSecondary.href}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-[14px] font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:px-9 hover:text-white"
          >
            {HERO.ctaSecondary.label}
           
          </Link>
        </div>

      </div>
    </section>
  );
}
