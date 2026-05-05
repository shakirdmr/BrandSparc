"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Let's Automate Your Business.",
  "Let Us 10x Your Revenue.",
  "Stop Doing Work AI Can Do.",
  "Scale Without Hiring More.",
  "Your Business, On Autopilot.",
];

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const PAUSE_AFTER_TYPE = 2200;
const PAUSE_AFTER_DELETE = 400;

export default function TypewriterHeadline({ className }: { className?: string }) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((i) => i + 1), TYPE_SPEED);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((i) => i - 1), DELETE_SPEED);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(t);
    }
  }, [charIndex, deleting, phraseIndex]);

  useEffect(() => {
    setDisplayed(PHRASES[phraseIndex].slice(0, charIndex));
  }, [charIndex, phraseIndex]);

  return (
    <h2 className={className}>
      <span
        className="bg-clip-text text-transparent"
        style={{ backgroundImage: "linear-gradient(135deg, #F7F8FC 0%, #6aaeff 50%, #1D72F3 100%)" }}
      >
        {displayed}
      </span>
      <span
        className="inline-block w-0.5 h-[0.85em] align-middle ml-0.5 rounded-sm animate-[blink_0.9s_step-end_infinite]"
        style={{ background: "linear-gradient(180deg, #6aaeff, #1D72F3)" }}
      />
    </h2>
  );
}
