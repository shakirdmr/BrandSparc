"use client";

const LOGOS = [
  { src: "https://brandsparc.com/wp-content/uploads/2025/10/Group-41.png",        alt: "Partner 1" },
  { src: "https://brandsparc.com/wp-content/uploads/2025/10/Group-40.png",        alt: "Partner 2" },
  { src: "https://brandsparc.com/wp-content/uploads/2025/10/Clip-path-group.png", alt: "Partner 3" },
  { src: "https://brandsparc.com/wp-content/uploads/2025/10/Mask-group.png",      alt: "Partner 4" },
  { src: "https://brandsparc.com/wp-content/uploads/2025/10/Group-133.png",       alt: "Partner 5" },
  { src: "https://brandsparc.com/wp-content/uploads/2025/10/Vector-W.png",        alt: "Partner 6" },
];

export default function SocialProof() {
  return (
    <section
      id="results"
      className="pb-12 pt-0 overflow-hidden"
      style={{ background: "#000000" }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8 mb-10">
        <h2 className="text-center font-bold text-bs-white leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)" }}>
          Trusted by clients across the<br />US, UK, Canada &amp; Asia
        </h2>
      </div>

      {/* Full-width marquee strip */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
          style={{ background: "linear-gradient(to right, #000000, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
          style={{ background: "linear-gradient(to left, #000000, transparent)" }} />

        <div
          className="flex w-max gap-12 items-center"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="shrink-0 h-9 w-28 opacity-50 hover:opacity-80 transition-opacity duration-200">
              <img src={logo.src} alt={logo.alt} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
