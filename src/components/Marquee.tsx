import { marqueeItems } from "@/lib/data";

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative -mx-2 -rotate-1 border-y border-line bg-accent py-3 text-ink">
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center whitespace-nowrap">
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center font-display text-sm font-bold uppercase tracking-wide"
            >
              <span className="px-6">{item}</span>
              <span aria-hidden>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
