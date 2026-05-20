"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        className={[
          "flex h-15.5 w-full items-center justify-between px-6 lg:px-8 transition-all duration-500",
          scrolled
            ? "bg-white/5 backdrop-blur-2xl border-b border-white/12 shadow-[0_8px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]"
            : "bg-white/4 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)]",
        ].join(" ")}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label={`${SITE.name} home`}>
          <Image
            src="/logoNav.png"
            alt={`${SITE.name} logo`}
            width={120}
            height={32}
            priority
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[16px] font-medium text-white/50 hover:text-white/90 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href={NAV.cta.href}
            className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/16 border border-white/12 px-4 py-1.5 text-[12px] font-semibold text-white tracking-wide transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
          >
            {NAV.cta.label}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center rounded-full p-2 text-white/50 hover:text-white hover:bg-white/8 transition-all duration-200"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden w-full bg-white/5 backdrop-blur-2xl border-b border-white/10 px-6 pb-5 pt-4 shadow-[0_16px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <ul className="flex flex-col gap-1 mb-4">
            {NAV.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-3 py-2.5 text-[14px] font-medium text-white/50 hover:text-white hover:bg-white/6 transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={NAV.cta.href}
            className="flex w-full items-center justify-center rounded-full bg-white/10 hover:bg-white/16 border border-white/12 px-5 py-2.5 text-[13px] font-semibold text-white tracking-wide transition-all duration-200"
            onClick={() => setMobileOpen(false)}
          >
            {NAV.cta.label}
          </Link>
        </div>
      )}
    </header>
  );
}