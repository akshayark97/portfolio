"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowDownToLine } from "lucide-react";
import { site } from "@/lib/data";
import { ParticleField } from "@/components/ParticleField";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-end px-6 pb-16 pt-32 lg:px-10">
      <ParticleField />
      {/* Fade the field out behind the text so the name stays legible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink via-ink/70 to-transparent"
      />
      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted"
        >
          <span>Portfolio — {site.year}</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">{site.location}</span>
          {site.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-accent">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-accent" />
              {site.availableText}
            </span>
          )}
        </motion.div>

        <h1 className="display font-bold uppercase">
          {site.firstName.split("").map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              className="inline-block text-[clamp(3.5rem,14.5vw,13rem)]"
              initial={{ opacity: 0, y: 90, rotate: 4 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.05 * i, ease }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            className="ml-4 inline-block align-top font-mono text-[clamp(1rem,3vw,2rem)] font-normal text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            ®
          </motion.span>
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            <span className="text-paper">{site.role}.</span> {site.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease }}
            className="flex shrink-0 items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-accent hover:text-accent"
            >
              View work
              <ArrowDown
                size={14}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-ink transition-transform hover:scale-105"
            >
              <ArrowDownToLine size={14} />
              Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
