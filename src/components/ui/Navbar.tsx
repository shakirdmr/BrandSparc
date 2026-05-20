"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const nav = navRef.current;
    const glow = glowRef.current;
    if (!nav || !glow) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.07), transparent 60%)`;
      glow.style.opacity = "1";
    };

    const onMouseLeave = () => {
      glow.style.opacity = "0";
    };

    nav.addEventListener("mousemove", onMouseMove);
    nav.addEventListener("mouseleave", onMouseLeave);
    return () => {
      nav.removeEventListener("mousemove", onMouseMove);
      nav.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        ref={navRef}
        className={[
          "relative py-2 w-full transition-all duration-500 overflow-hidden",
          scrolled
            ? "bg-black/30 backdrop-blur-2xl  "
            : "bg-white/4 ",
        ].join(" ")}
      >
        {/* Liquid gloss layer */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{ opacity: 0 }}
        />

        {/* Top gloss streak — always visible */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px z-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 30%, rgba(255,255,255,0.32) 50%, rgba(255,255,255,0.18) 70%, transparent 100%)",
          }}
        />

        {/* Bottom subtle reflection */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px z-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
          }}
        />

        {/* Inner content aligned with page layout */}
        <div className="relative z-10 mx-auto flex h-15.5 max-w-6xl items-center justify-between px-6 lg:px-8">

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
                  className="text-[16px] font-medium hover:text-white/90 transition-colors duration-200"
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

        </div>
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