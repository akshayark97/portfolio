"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A sticky stacking layer. Sections pin when fully scrolled and the next
 * layer slides up over them like a card; scrolling up peels them back off.
 * Layers taller than the viewport pin at a negative top offset so all of
 * their content is scrollable before they hold.
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
  const [top, setTop] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const overflow = el.offsetHeight - window.innerHeight;
      setTop(overflow > 0 ? -overflow : 0);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ top, zIndex: index }}
      className={`sticky bg-ink ${
        card
          ? "rounded-t-[2rem] border-t border-line shadow-[0_-24px_60px_-12px_rgba(0,0,0,0.8)]"
          : ""
      }`}
    >
      {children}
    </div>
  );
}
