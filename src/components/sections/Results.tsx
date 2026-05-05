import { RESULTS } from "@/lib/constants";
import { Quote } from "lucide-react";

export default function Results() {
  return (
    <section id="results" className="bg-black px-4 pb-6 lg:px-6 lg:pb-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white border border-black/6 shadow-[0_2px_40px_rgba(0,0,0,0.06)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-20">

          {/* Header */}
          <div className="mb-14 max-w-xl">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-bs-blue">
              {RESULTS.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-bs-navy sm:text-4xl whitespace-pre-line">
              {RESULTS.heading}
            </h2>
          </div>

          {/* Before → After metric cards */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {RESULTS.metrics.map((m) => (
              <div
                key={m.label}
                className="relative overflow-hidden rounded-2xl p-px"
                style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.3), rgba(29,114,243,0.3))" }}
              >
                <div
                  className="relative h-full rounded-2xl px-6 py-7 flex flex-col gap-4 bg-white"
                >
                  {/* Before */}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] uppercase tracking-widest text-black/30 font-semibold">Before</span>
                    <span className="text-[22px] font-black text-red-400 leading-tight line-through decoration-red-300">
                      {m.before}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(239,68,68,0.3), rgba(29,114,243,0.5))" }} />
                    <span className="text-[11px] font-bold text-black/25 uppercase tracking-wider">After</span>
                    <div className="h-px flex-1" style={{ background: "rgba(29,114,243,0.3)" }} />
                  </div>

                  {/* After */}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[28px] font-black text-bs-blue leading-tight">{m.after}</span>
                    <span className="text-[13px] font-semibold text-bs-navy/80">{m.label}</span>
                  </div>

                  {/* Context */}
                  <p className="text-[12px] leading-relaxed text-black/40 mt-1">{m.context}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Case study cards */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {RESULTS.caseStudies.map((cs) => (
              <div
                key={cs.author}
                className="rounded-2xl p-6 flex flex-col gap-5 border border-black/8 bg-black/2"
              >
                {/* Client type badge */}
                <div className="self-start">
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest"
                    style={{ background: "rgba(29,114,243,0.08)", color: "#1D72F3", border: "1px solid rgba(29,114,243,0.2)" }}
                  >
                    {cs.clientType}
                  </span>
                </div>

                {/* Problem */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] uppercase tracking-widest text-black/30 font-semibold">The Problem</span>
                  <p className="text-[13px] leading-relaxed text-black/50">{cs.problem}</p>
                </div>

                {/* Outcome */}
                <div
                  className="rounded-xl px-4 py-3"
                  style={{ background: "rgba(29,114,243,0.06)", border: "1px solid rgba(29,114,243,0.15)" }}
                >
                  <span className="text-[11px] uppercase tracking-widest text-bs-blue/70 font-semibold">Outcome</span>
                  <p className="mt-1 text-[15px] font-bold text-bs-navy leading-snug">{cs.outcome}</p>
                </div>

                {/* Quote */}
                <div className="flex gap-3 mt-auto pt-1">
                  <Quote className="mt-0.5 h-4 w-4 shrink-0 text-bs-blue/40" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[13px] italic leading-relaxed text-black/45">{cs.quote}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] font-semibold text-bs-navy/70">{cs.author}</span>
                      <span className="text-black/20">·</span>
                      <span className="text-[12px] text-black/35">{cs.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
