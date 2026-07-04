import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section className="px-6 pb-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <div key={group.label} className="bg-ink p-8">
              <Reveal delay={i * 0.08}>
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-3 text-2xl font-bold uppercase">
                  {group.label}
                </h3>
                <ul className="mt-6 space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="group flex items-center gap-3 text-sm text-muted transition-colors hover:text-paper"
                    >
                      <span className="h-1 w-1 rounded-full bg-line transition-colors group-hover:bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
