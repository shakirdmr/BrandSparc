import { Cpu, Mic, GitBranch, Code2, Globe, BarChart2 } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP = { Cpu, Mic, GitBranch, Code2, Globe, BarChart2 } as const;

const IMAGE_HINTS = [
  "AI dashboard or workflow automation flowchart — robots handling tasks",
  "Phone screen showing a voice bot conversation or sound wave interface",
  "CRM pipeline view with connected apps — Salesforce, HubSpot, email icons",
  "Code editor or custom dashboard with AI data visualisation",
  "Modern website mockup on laptop and mobile screen",
  "Analytics dashboard with rising graph and ad performance metrics",
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black px-4 py-6 lg:px-6 lg:py-8"
    >
      {/* Floating card */}
      <div
        className="mx-auto max-w-7xl rounded-3xl pt-14 pb-20 lg:pt-16 lg:pb-24"
        style={{ background: "#f5f5f0" }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-bs-blue">
              {SERVICES.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-bs-navy sm:text-4xl whitespace-pre-line">
              {SERVICES.heading}
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.cards.map((card, i) => {
              const Icon = ICON_MAP[card.icon as keyof typeof ICON_MAP];
              return (
                <div
                  key={card.title}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white"
                  style={{ border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
                >
                  {/* Top 50% — image area */}
                  <div
                    className="relative flex items-center justify-center"
                    style={{ height: "200px", background: "#f0f0ea" }}
                  >
                    <p className="mx-6 rounded-xl border border-dashed border-black/15 bg-black/4 px-4 py-3 text-center text-[11px] leading-relaxed text-black/30">
                      {IMAGE_HINTS[i]}
                    </p>
                  </div>

                  {/* Bottom 50% — text area */}
                  <div className="flex flex-col gap-3 p-6" style={{ minHeight: "200px" }}>
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ background: "rgba(29,114,243,0.1)" }}
                    >
                      <Icon size={16} className="text-bs-blue" />
                    </div>
                    <h3 className="text-[15px] font-bold text-bs-navy leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[12px] leading-relaxed text-bs-navy/50">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
