"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PRICING } from "@/lib/constants";

const { calculator, plans } = PRICING;

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function Pricing() {
  const [hours, setHours] = useState<number>(calculator.default);

  const hoursPerMonth = Math.round(hours * 4.33);
  const monthlyLoss  = Math.round(hoursPerMonth * calculator.hourlyRate);
  const pct = ((hours - calculator.min) / (calculator.max - calculator.min)) * 100;

  return (
    <section id="pricing" className="bg-black">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-8 lg:py-20">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-white">
            {PRICING.eyebrow}
          </p>
          <h2
            className="font-bold tracking-tight text-bs-white whitespace-pre-line"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            {PRICING.heading}
          </h2>
        </div>

        {/* ── TOP: Full-width Savings Calculator ── */}
        <div
          className="rounded-2xl px-6 py-4 mb-6"
          style={{ background: "rgba(29,114,243,0.06)", border: "1.5px solid rgba(29,114,243,0.2)" }}
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-center">

            {/* Slider side */}
            <div className="flex flex-col gap-3">
              <p className="text-[14px] text-white/60">
                {calculator.label}{" "}
                <span className="text-bs-white font-semibold">{hours} hours/week</span>{" "}
                on tasks AI can do
              </p>
              <input
                type="range"
                min={calculator.min}
                max={calculator.max}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full appearance-none h-1.5 rounded-full outline-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #1D72F3 ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
                }}
              />
              <p className="text-[11px] text-white/25 leading-relaxed">
                {calculator.description}
              </p>
            </div>

            {/* Result side */}
            <div
              className="flex items-center gap-8 shrink-0 lg:pl-8"
              style={{ borderLeft: "1px solid rgba(29,114,243,0.15)" }}
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/35 mb-1">
                  Monthly, you&apos;re losing
                </p>
                <p className="font-black leading-none text-bs-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                  {fmt(monthlyLoss)}
                  <span className="text-[0.9rem] font-semibold text-white/35">/mo</span>
                </p>
              </div>
              <div className="flex gap-6" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)", paddingLeft: "2rem" }}>
                <div>
                  <p className="text-[10px] text-white/30">Hrs/month</p>
                  <p className="text-[13px] font-bold text-bs-white mt-0.5">{hoursPerMonth}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30">Avg. cost</p>
                  <p className="text-[13px] font-bold text-bs-white mt-0.5">{fmt(calculator.hourlyRate)}/hr</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30">Payback</p>
                  <p className="text-[13px] font-bold text-white/60 mt-0.5">{Math.ceil(4500 / monthlyLoss)}mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM: 3 Pricing Cards in a horizontal row ── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl flex flex-col transition-all duration-200"
              style={
                plan.highlight
                  ? {
                      background: "rgba(29,114,243,0.06)",
                      border: "1.5px solid rgba(29,114,243,0.5)",
                      boxShadow: "0 0 0 4px rgba(29,114,243,0.08), 0 8px 32px rgba(29,114,243,0.15)",
                    }
                  : {
                      background: "rgba(255,255,255,0.02)",
                      border: "1.5px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                    }
              }
            >
              {plan.badge && (
                <span className="absolute -top-3 left-5 rounded-full bg-bs-blue px-3 py-0.5 text-[11px] font-semibold text-white tracking-wide shadow-[0_2px_12px_rgba(29,114,243,0.5)]">
                  {plan.badge}
                </span>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Name & price */}
                <div className="mb-5">
                  <p className="text-[15px] font-bold text-bs-white mb-1">{plan.name}</p>
                  <p className="text-[12px] text-white/40 leading-relaxed mb-4">{plan.description}</p>
                  {plan.price ? (
                    <>
                      <p className="text-[30px] font-black text-bs-white leading-none">
                        {fmt(plan.price)}
                      </p>
                      <p className="text-[11px] text-white/30 mt-1">one-time · no retainer</p>
                    </>
                  ) : (
                    <>
                      <p className="text-[26px] font-black text-bs-white leading-none">Custom</p>
                      <p className="text-[11px] text-white/30 mt-1">let&apos;s talk scope</p>
                    </>
                  )}
                </div>

                {/* Divider */}
                <div
                  className="mb-4"
                  style={{ borderTop: plan.highlight ? "1px solid rgba(29,114,243,0.2)" : "1px solid rgba(255,255,255,0.06)" }}
                />

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[13px] text-white/60">
                      <span
                        className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                        style={plan.highlight
                          ? { background: "rgba(29,114,243,0.2)", border: "1px solid rgba(29,114,243,0.4)" }
                          : { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }
                        }
                      >
                        <Check size={9} className={plan.highlight ? "text-bs-blue" : "text-white/40"} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={plan.cta.href}
                  className={[
                    "flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-[13px] font-semibold transition-all duration-200",
                    plan.highlight
                      ? "bg-bs-blue text-white hover:bg-bs-blue-hover shadow-[0_2px_16px_rgba(29,114,243,0.4)]"
                      : "bg-white/6 text-white/70 hover:bg-white/12 hover:text-white border border-white/10",
                  ].join(" ")}
                >
                  {plan.cta.label}
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #1D72F3;
          border: 2px solid #fff;
          box-shadow: 0 0 0 3px rgba(29,114,243,0.3);
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #1D72F3;
          border: 2px solid #fff;
          box-shadow: 0 0 0 3px rgba(29,114,243,0.3);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
