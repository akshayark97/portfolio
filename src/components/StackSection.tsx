"use client";

import { useEffect, useRef, useState } from "react";

const clamp01 = (n: number) => Math.min(Math.max(n, 0), 1);

/**
 * A sticky stacking layer. Sections pin when fully scrolled and the next
 * layer slides up over them like a card; scrolling up peels them back off.
 * Layers taller than the viewport pin at a negative top offset so all of
 * their content is scrollable before they hold.
 *
 * While a layer is being covered by the next card it scales down and a
 * dark veil fades in — scroll-linked depth feedback. Styles are written
 * directly in a rAF scroll handler and only touch transform/opacity
 * (composited), so the effect stays smooth on mobile.
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
  const ref = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const veil = veilRef.current;
    if (!el || !veil) return;

    const update = () => {
      const overflow = el.offsetHeight - window.innerHeight;
      setTop(overflow > 0 ? -overflow : 0);
    };

    // 0 → not covered yet, 1 → fully covered by the next card. The layer
    // is pinned once its bottom reaches the viewport bottom; the next
    // sibling then takes one viewport height of scroll to slide over it.
    let frame = 0;
    const apply = () => {
      frame = 0;
      const vh = window.innerHeight;
      // offsetTop of a stuck sticky element includes its sticky
      // displacement, so derive the true flow position from the parent's
      // document offset plus the heights of the preceding siblings.
      const parent = el.parentElement;
      if (!parent) return;
      let flowTop = parent.getBoundingClientRect().top + window.scrollY;
      for (
        let sib = parent.firstElementChild;
        sib && sib !== el;
        sib = sib.nextElementSibling
      ) {
        flowTop += (sib as HTMLElement).offsetHeight;
      }
      const pinAt = flowTop + el.offsetHeight - vh;
      const covered = clamp01((window.scrollY - pinAt) / vh);
      el.style.transform = covered > 0 ? `scale(${1 - covered * 0.07})` : "";
      veil.style.opacity = String(covered * 0.65);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    update();
    apply();
    const observer = new ResizeObserver(() => {
      update();
      onScroll();
    });
    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const rounded = card ? "rounded-t-[2rem]" : "";

  return (
    <div
      ref={ref}
      style={{ top, zIndex: index }}
      className={`sticky bg-ink will-change-transform ${rounded} ${
        card
          ? "border-t border-paper/15 shadow-[0_-24px_60px_-12px_rgba(0,0,0,0.8)]"
          : ""
      }`}
    >
      {children}
      <div
        ref={veilRef}
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-20 bg-black opacity-0 ${rounded}`}
      />
    </div>
  );
}
