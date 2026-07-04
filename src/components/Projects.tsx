import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  return (
    <section className="px-6 pb-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-line">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <a
                href={project.href}
                className="group relative grid grid-cols-1 gap-6 border-b border-line py-10 transition-colors hover:bg-ink-soft md:grid-cols-12 md:items-center md:gap-8"
              >
                <span className="font-mono text-sm text-muted md:col-span-1">
                  {project.index}
                </span>

                <div className="md:col-span-5">
                  <h3 className="display text-4xl font-bold uppercase transition-colors group-hover:text-accent md:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-muted md:col-span-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 md:col-span-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between md:col-span-1 md:justify-end md:gap-4">
                  <span className="font-mono text-sm text-muted">
                    {project.year}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                  />
                </div>

                {/* Floating art preview on hover (desktop only) */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute right-24 top-1/2 z-10 hidden h-44 w-64 -translate-y-1/2 rotate-3 rounded-xl bg-gradient-to-br opacity-0 shadow-2xl transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100 lg:block ${project.art}`}
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
