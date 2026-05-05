export default function PainPoints() {
  return (
    <section className="rounded-t-[3.5rem] bg-black pt-14 pb-10 lg:pt-16 lg:pb-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-bs-blue">
            Problem & Solution
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-bs-white sm:text-4xl">
            Where businesses struggle — and how we fix it.
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-3 grid-rows-[280px_280px_220px] gap-4">

          {/* Card 1 — large left */}
          <div
            className="relative col-span-2 row-span-2 overflow-hidden rounded-3xl"
            style={{ background: "linear-gradient(145deg, #0d1f3c 0%, #091628 100%)" }}
          >
            <ImageHint text="Add a visual showing an AI dashboard, workflow builder, or automation flowchart — communicates 'smart systems running in the background'" />
            <div className="absolute bottom-0 inset-x-0 p-8"
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
            className="relative overflow-hidden rounded-3xl p-7"
            style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <ImageHint text="Add a photo of a stressed employee at a cluttered desk with spreadsheets or sticky notes — the 'manual work' feeling" />
            <div className="relative">
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
            className="relative overflow-hidden rounded-3xl p-7"
            style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <ImageHint text="Add a visual of an AI voice interface, sound wave, or a phone screen showing a bot conversation — communicates '24/7 AI handling calls'" />
            <div className="relative">
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
            style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <ImageHint text="Add an image showing unanswered messages, a CRM with red overdue tasks, or a 'lead went cold' metaphor — communicates missed opportunity" />
            <div className="absolute bottom-0 inset-x-0 p-6">
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
            className="relative col-span-2 overflow-hidden rounded-3xl p-8 flex flex-col justify-between"
            style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.08)" }}
          >
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
    </section>
  );
}

function ImageHint({ text }: { text: string }) {
  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 flex justify-center px-6 pointer-events-none">
      <p className="rounded-xl border border-dashed border-white/20 bg-white/5 px-4 py-2.5 text-center text-[11px] leading-relaxed text-white/35 backdrop-blur-sm">
        🖼 {text}
      </p>
    </div>
  );
}
