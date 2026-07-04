import { about, stats } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section className="px-6 pb-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="display text-3xl font-medium leading-tight md:text-4xl">
              “<span className="text-accent">{about.statement}</span>”
            </p>
          </Reveal>

          <div className="space-y-6">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.1 + i * 0.08}>
                <p className="leading-relaxed text-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="bg-ink p-8">
              <Reveal delay={i * 0.08}>
                <span className="display block text-5xl font-bold text-accent md:text-6xl">
                  {stat.value}
                </span>
                <span className="mt-3 block font-mono text-xs uppercase tracking-widest text-muted">
                  {stat.label}
                </span>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
