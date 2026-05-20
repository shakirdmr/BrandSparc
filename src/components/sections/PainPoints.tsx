export default function PainPoints() {
  return (
    <section className="bg-black px-4 py-6 lg:px-6 lg:py-8">
      {/* Floating card */}
      <div
        className="mx-auto max-w-7xl rounded-3xl pt-14 pb-20 lg:pt-16 lg:pb-24"
        style={{ background: "linear-gradient(145deg, #0d1f3c 0%, #091628 100%)" }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          {/* Header */}
          <div className="mb-10 max-w-xl">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-bs-blue">
              Problem & Solution
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-bs-white sm:text-4xl">
              Where you struggle — and how we will fix it.
            </h2>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-3 grid-rows-[280px_280px_220px] gap-4">

            {/* Card 1 — large left */}
            <div
              className="relative col-span-2 row-span-2 overflow-hidden rounded-3xl"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <img
                src="/pexaCovera.png"
                alt="AI automation dashboard"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute bottom-0 inset-x-0 p-8"
                style={{ background: "linear-gradient(to top, rgba(7,16,30,0.95) 0%, transparent 100%)" }}
              >
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-white/50">
                  ✦ Solution
                </p>
                <h3 className="text-2xl font-bold text-bs-white leading-snug">
                  Full AI Automation,<br />Done For You.
                </h3>
                <p className="mt-2 text-[13px] text-white/50 max-w-sm">
                  From audit to deployment — we build and manage your entire AI stack so your team never has to touch it.
                </p>
              </div>
            </div>

            {/* Card 2 — problem */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <img
                src="/pexaCovera.png"
                alt="Manual repetitive work"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(7,16,30,0.55)" }}
              />
              <div className="absolute bottom-0 inset-x-0 p-7 relative z-10">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-white/50">
                  ✦ Problem
                </p>
                <p className="text-[17px] font-bold text-bs-white leading-snug">
                  Hours wasted on<br />manual, repetitive tasks
                </p>
              </div>
            </div>

            {/* Card 3 — solution */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <img
                src="/pexaCovera.png"
                alt="AI voice agents"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(7,16,30,0.55)" }}
              />
              <div className="absolute bottom-0 inset-x-0 p-7 z-10">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-white/50">
                  ✦ Solution
                </p>
                <p className="text-[17px] font-bold text-bs-white leading-snug">
                  AI Voice Agents<br />running 24/7
                </p>
                <p className="mt-2 text-[12px] text-white/50">
                  Handles calls, qualifies leads, books appointments — while you sleep.
                </p>
              </div>
            </div>

            {/* Card 4 — problem */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <img
                src="/pexaCovera.png"
                alt="Leads going cold"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(7,16,30,0.55)" }}
              />
              <div className="absolute bottom-0 inset-x-0 p-6 z-10">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-white/50 mb-1">
                  ✦ Problem
                </p>
                <p className="text-[15px] font-bold text-bs-white leading-snug">
                  Leads go cold from<br />slow follow-ups
                </p>
              </div>
            </div>

            {/* Card 5 — solution */}
            <div
              className="relative col-span-2 overflow-hidden rounded-3xl"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <img
                src="/pexaCovera.png"
                alt="Fast deployment"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(7,16,30,0.65)" }}
              />
              <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-white/50">
                  ✦ Solution
                </p>
                <div>
                  <h3 className="text-2xl font-bold text-bs-white leading-snug mb-2">
                    From Audit to Live in Weeks —<br />
                    Not Months.
                  </h3>
                  <p className="text-[13px] text-white/50 max-w-sm">
                    We've built the playbooks and systems to move fast. You get results before the competition catches up.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}