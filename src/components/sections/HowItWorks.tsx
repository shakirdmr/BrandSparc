import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-black"
    >
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-20">

          {/* Header */}
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-bs-blue">
              {HOW_IT_WORKS.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-bs-white sm:text-4xl whitespace-pre-line">
              {HOW_IT_WORKS.heading}
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-3">
            {HOW_IT_WORKS.steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col gap-6 lg:pr-12">

                {/* Connector line between steps */}
                {i < HOW_IT_WORKS.steps.length - 1 && (
                  <div
                    className="absolute top-7 left-full hidden lg:block w-full h-px -translate-x-6"
                    style={{ background: "linear-gradient(to right, rgba(29,114,243,0.4), rgba(29,114,243,0.05))" }}
                  />
                )}

                {/* Number badge */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                    style={{ background: "rgba(29,114,243,0.12)", border: "1px solid rgba(29,114,243,0.25)" }}
                  >
                    <span className="text-[18px] font-black text-bs-blue">{step.number}</span>
                  </div>
                  <div className="h-px flex-1 lg:hidden" style={{ background: "rgba(255,255,255,0.06)" }} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] font-bold text-bs-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-white/45">
                    {step.description}
                  </p>
                </div>

                {/* Detail pill */}
                <div
                  className="self-start rounded-full px-4 py-1.5"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="text-[11px] text-white/40 leading-snug">{step.detail}</p>
                </div>

                {/* Mobile divider */}
                {i < HOW_IT_WORKS.steps.length - 1 && (
                  <div className="mb-8 mt-2 h-px w-full lg:hidden" style={{ background: "rgba(255,255,255,0.06)" }} />
                )}
              </div>
            ))}
          </div>

        </div>
    </section>
  );
}
