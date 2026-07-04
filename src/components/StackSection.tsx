"use client";

import { useEffect, useRef, useState } from "react";

const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

/**
 * Card-deck scroll layer. Each card docks directly below the fixed header
 * the moment its top touches it and stays pinned there for the rest of
 * the scroll — cards are direct siblings inside <main>, so their sticky
 * range never expires.
 *
 * Inside a docked card the `heading` stays pinned while the body content
 * scrolls 1:1 beneath it, so tall sections keep their title visible and
 * nothing is unreachable. After the body finishes, the card holds clean
 * (no blur, no newcomer) for a dwell distance, then the next card rises;
 * only during that take-over does the docked card dim, blur, and recede.
 * The hidden body overflow plus the dwell are re-added as bottom margin
 * so the page keeps a natural scroll length. A "next section" pill at the
 * card's bottom edge hints at what's coming and fades during take-over.
 */
export function StackSection({
  index,
  card = true,
  heading,
  next,
  children,
}: {
  index: number;
  card?: boolean;
  heading?: React.ReactNode;
  next?: string;
  children: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const [navH, setNavH] = useState(0);
  const [marginB, setMarginB] = useState(0);

  useEffect(() => {
    const cardEl = cardRef.current;
    const body = bodyRef.current;
    const inner = innerRef.current;
    const veil = veilRef.current;
    if (!cardEl || !body || !inner || !veil) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const headerH = () =>
      card ? (document.querySelector("header")?.offsetHeight ?? 0) : 0;
    const maxShift = () =>
      Math.max(inner.offsetHeight - body.clientHeight, 0);

    const measure = () => {
      setNavH(headerH());
      // Scroll length for content hidden inside the frame, plus a dwell
      // so the docked card holds clean before the next card rises.
      const dwell = next ? Math.round(window.innerHeight * 0.45) : 0;
      setMarginB(maxShift() + dwell);
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

      // Scroll the body inside the pinned frame, 1:1 with the page.
      const shift = clamp(window.scrollY - (flowTop() - top), 0, maxShift());
      inner.style.transform = `translate3d(0, ${-shift}px, 0)`;

      if (reduced) return;

      // Take-over feedback: 0 → next card still below, 1 → next docked.
      // Skip non-card siblings (anchor targets) when looking ahead.
      let sibling = cardEl.nextElementSibling;
      while (sibling && !(sibling instanceof HTMLElement && sibling.dataset.stack)) {
        sibling = sibling.nextElementSibling;
      }
      let cover = 0;
      if (sibling) {
        const nextTop = sibling.getBoundingClientRect().top;
        cover = clamp((vh - nextTop) / Math.max(vh - top, 1), 0, 1);
      }
      cardEl.style.transform = cover > 0 ? `scale(${1 - cover * 0.05})` : "";
      cardEl.style.filter =
        cover > 0 ? `blur(${(cover * 5).toFixed(2)}px)` : "";
      veil.style.opacity = String(cover * 0.6);
      if (hintRef.current) {
        hintRef.current.style.opacity = String(clamp(1 - cover * 2.5, 0, 1));
      }
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
    observer.observe(body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [card, next]);

  return (
    <div
      ref={cardRef}
      data-stack
      style={{
        top: navH,
        height: `calc(100svh - ${navH}px)`,
        marginBottom: marginB,
        zIndex: index,
      }}
      className={`sticky flex flex-col overflow-hidden bg-ink will-change-transform ${
        card
          ? "rounded-t-[2rem] border-t border-paper/15 shadow-[0_-24px_60px_-12px_rgba(0,0,0,0.8)]"
          : ""
      }`}
    >
      {heading && (
        <div className="shrink-0 px-6 pb-8 pt-14 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">{heading}</div>
        </div>
      )}
      <div ref={bodyRef} className="relative min-h-0 flex-1 overflow-hidden">
        <div ref={innerRef} className="will-change-transform">
          {children}
        </div>
        {heading && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-ink to-transparent"
          />
        )}
      </div>
      {next && (
        <div
          ref={hintRef}
          className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex justify-center"
        >
          <span className="flex items-center gap-2 rounded-full border border-line bg-ink/80 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted backdrop-blur">
            Next — {next}
            <span className="animate-bounce text-accent">↓</span>
          </span>
        </div>
      )}
      <div
        ref={veilRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 bg-black opacity-0"
      />
    </div>
  );
}
