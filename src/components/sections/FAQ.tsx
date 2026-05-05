"use client";

import { useState } from "react";
import { Plus, Minus, CheckCircle2 } from "lucide-react";
import { FAQ } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-black px-4 pb-6 lg:px-6 lg:pb-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white border border-black/6 shadow-[0_2px_40px_rgba(0,0,0,0.06)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">

            {/* Left — Accordion */}
            <div>
              <div className="mb-10">
                <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-bs-blue">
                  {FAQ.eyebrow}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-bs-navy sm:text-4xl whitespace-pre-line">
                  {FAQ.heading}
                </h2>
              </div>

              <div className="flex flex-col">
                {FAQ.items.map((item, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div key={i} className="border-b border-black/8">
                      <button
                        onClick={() => toggle(i)}
                        className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      >
                        <span
                          className="text-[15px] font-semibold leading-snug transition-colors"
                          style={{ color: isOpen ? "#07101E" : "rgba(7,16,30,0.6)" }}
                        >
                          {item.question}
                        </span>
                        <span
                          className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full transition-colors"
                          style={{
                            background: isOpen ? "rgba(29,114,243,0.1)" : "rgba(7,16,30,0.05)",
                            border: isOpen ? "1px solid rgba(29,114,243,0.25)" : "1px solid rgba(7,16,30,0.1)",
                          }}
                        >
                          {isOpen ? (
                            <Minus size={14} className="text-bs-blue" />
                          ) : (
                            <Plus size={14} style={{ color: "rgba(7,16,30,0.4)" }} />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <p className="pb-5 text-[13px] leading-relaxed text-black/50">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — Two stacked CTA cards */}
            <div className="flex flex-col gap-4">

              {/* Top card — light */}
              <div className="rounded-2xl p-7 bg-white border border-black/8">
                <h3 className="mb-2 text-[20px] font-bold leading-snug text-bs-navy">
                  {FAQ.ctaTop.heading}
                </h3>
                <p className="mb-6 text-[13px] leading-relaxed text-black/50">
                  {FAQ.ctaTop.description}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {FAQ.ctaTop.buttons.map((btn) => (
                    <a
                      key={btn.label}
                      href={btn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-black/4 px-4 py-2 text-[13px] font-medium text-black/70 hover:bg-black/8 hover:text-black transition-all duration-200"
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom card — white */}
              <div className="rounded-2xl p-7 bg-black border border-white/8">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-[#f1f1f1]">
                  {FAQ.cta.label}
                </p>
                <h3 className="mb-5 text-[20px] font-bold leading-snug text-white">
                  {FAQ.cta.heading}
                </h3>

                <ul className="mb-6 flex flex-col gap-3">
                  {FAQ.cta.trustPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <CheckCircle2 size={15} className="shrink-0 text-white" />
                      <span className="text-[13px] text-white/50">{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={FAQ.cta.button.href}
                  className="flex w-full items-center justify-center rounded-full py-3 text-[14px] font-semibold text-black transition-colors bg-white hover:bg-white/85"
                >
                  {FAQ.cta.button.label}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
