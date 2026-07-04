import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  index,
  title,
  hint,
}: {
  index: string;
  title: string;
  hint?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {index} —
          </span>
          <h2 className="display mt-3 text-5xl font-bold uppercase md:text-7xl">
            {title}
          </h2>
        </div>
        {hint && (
          <p className="hidden max-w-xs pb-2 text-right font-mono text-xs uppercase tracking-widest text-muted md:block">
            {hint}
          </p>
        )}
      </div>
    </Reveal>
  );
}
