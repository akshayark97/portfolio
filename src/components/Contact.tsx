import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <footer id="contact" className="border-t border-line px-6 pt-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            05 — Contact
          </span>
          <h2 className="display mt-6 text-[clamp(2.5rem,8vw,7rem)] font-bold uppercase">
            Let’s build
            <br />
            something <span className="text-accent">great</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-3 text-xl text-muted transition-colors hover:text-accent md:text-2xl"
            >
              {site.email}
              <ArrowUpRight
                size={22}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
            <a
              href={site.resumeUrl}
              download
              className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-ink transition-transform hover:scale-105"
            >
              <ArrowDownToLine size={14} />
              Download resume
            </a>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col gap-6 border-t border-line py-8 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            © {site.year} {site.name}. {site.location} · {site.timezone}
          </span>
          <ul className="flex gap-6">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#top"
            className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-paper"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
