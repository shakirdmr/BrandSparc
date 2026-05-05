import { ArrowRight } from "lucide-react";
import { SITE, FOOTER } from "@/lib/constants";
import TypewriterHeadline from "@/components/ui/TypewriterHeadline";

export default function SiteFooter() {
  return (
    <footer
      className="relative"
      style={{
        backgroundImage: "url('/brandSparcCoverShakir.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 pt-16 pb-14">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">

          {/* Left — headline + CTA */}
          <div className="flex flex-col justify-between gap-8 lg:pr-8">
            <TypewriterHeadline className="text-[1.75rem] font-bold leading-snug text-bs-white min-h-18" />
            <a
              href={FOOTER.cta.href}
              className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-black hover:bg-white/8 "
            >
              {FOOTER.cta.label}
              <ArrowRight size={13} />
            </a>
          </div>

          {/* 4 link columns */}
          {FOOTER.columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-white/50 hover:text-bs-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


  {/* Bottom bar */}
      <div className="relative z-10 ">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/30">
            &copy; {SITE.name} {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-5">
            {FOOTER.legal.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[12px] text-white/30 hover:text-bs-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Big brand name */}
      <div className="relative z-10 border-t border-white/4 overflow-hidden">
        <div className="mt-4 mb-6 mx-auto max-w-6xl px-6 lg:px-8">
          <p
            className="font-black text-bs-white select-none leading-none"
            style={{ fontSize: "clamp(4rem, 14vw, 11rem)", opacity: 0.9 }}
          >
            {SITE.name}
          </p>
        </div>
      </div>

    

    </footer>
  );
}
