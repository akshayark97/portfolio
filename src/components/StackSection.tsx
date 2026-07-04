"use client";

import { useEffect, useRef, useState } from "react";

const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

/**
 * Card-deck scroll layer. Each card docks directly below the fixed header
 * the moment its top touches it and stays pinned there for the rest of
 * the scroll — cards are direct siblings inside <main>, so their sticky
 * range never runs out. Content taller than the card scrolls 1:1 inside
 * the pinned frame (nothing is unreachable, even on mobile); the hidden
 * overflow is re-added as bottom margin so the page keeps its natural
 * scroll length. While the next card slides up, the docked card dims,
 * blurs, and recedes until the newcomer docks below the header.
 */
export function StackSection({
  index,
  card = true,
  children,
}: {
  index: number;
  card?: boolean;
  children: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const [navH, setNavH] = useState(0);
  const [marginB, setMarginB] = useState(0);

  useEffect(() => {
    const cardEl = cardRef.current;
    const inner = innerRef.current;
    const veil = veilRef.current;
    if (!cardEl || !inner || !veil) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const headerH = () =>
      card ? (document.querySelector("header")?.offsetHeight ?? 0) : 0;

    const measure = () => {
      const top = headerH();
      setNavH(top);
      // Scroll length for content hidden inside the pinned frame.
      setMarginB(Math.max(inner.offsetHeight - (window.innerHeight - top), 0));
    };

    // Flow (unstuck) document position — offsetTop of a stuck sticky
    // element includes its displacement, so sum the siblings instead.
    const flowTop = () => {
      const parent = cardEl.parentElement;
      if (!parent) return 0;
      let top = parent.getBoundingClientRect().top + window.scrollY;
      for (
        let sib = parent.firstElementChild;
        sib && sib !== cardEl;
        sib = sib.nextElementSibling
      ) {
        top +=
          (sib as HTMLElement).offsetHeight +
          (parseFloat(getComputedStyle(sib).marginBottom) || 0);
      }
      return top;
    };

    let frame = 0;
    const apply = () => {
      frame = 0;
      const vh = window.innerHeight;
      const top = headerH();

      // Scroll the content inside the pinned frame, 1:1 with the page.
      const maxShift = Math.max(inner.offsetHeight - cardEl.offsetHeight, 0);
      const shift = clamp(window.scrollY - (flowTop() - top), 0, maxShift);
      inner.style.transform = `translate3d(0, ${-shift}px, 0)`;

      if (reduced) return;

      // Depth feedback: 0 → next card still below, 1 → next card docked.
      const next = cardEl.nextElementSibling;
      let cover = 0;
      if (next) {
        const nextTop = next.getBoundingClientRect().top;
        cover = clamp((vh - nextTop) / Math.max(vh - top, 1), 0, 1);
      }
      cardEl.style.transform = cover > 0 ? `scale(${1 - cover * 0.05})` : "";
      cardEl.style.filter =
        cover > 0 ? `blur(${(cover * 5).toFixed(2)}px)` : "";
      veil.style.opacity = String(cover * 0.6);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    apply();
    const observer = new ResizeObserver(onResize);
    observer.observe(inner);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [card]);

  return (
    <div
      ref={cardRef}
      style={{
        top: navH,
        height: `calc(100svh - ${navH}px)`,
        marginBottom: marginB,
        zIndex: index,
      }}
      className={`sticky overflow-hidden bg-ink will-change-transform ${
        card
          ? "rounded-t-[2rem] border-t border-paper/15 shadow-[0_-24px_60px_-12px_rgba(0,0,0,0.8)]"
          : ""
      }`}
    >
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
      <div
        ref={veilRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 bg-black opacity-0"
      />
    </div>
  );
}
