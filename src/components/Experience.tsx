import { experience } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="03" title="Experience" />

        <div className="mt-16 border-t border-line">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8">
                <span className="font-mono text-sm text-muted md:col-span-3">
                  {job.period}
                </span>
                <div className="md:col-span-4">
                  <h3 className="display text-2xl font-bold">{job.role}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">
                    {job.company}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted md:col-span-5">
                  {job.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
