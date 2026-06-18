"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/effects/tilt-card";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <SectionHeading index="03." title="Featured projects" subtitle="Distributed systems I've designed, shipped, and kept running." />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <TiltCard className="h-full">
              <div className="glass-strong flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-start justify-between gap-3">
                  <Badge variant={p.accent}>{p.accent === "terminal" ? "Linux · Microservices" : "Cloud · Azure"}</Badge>
                  {p.links?.[0] && (
                    <a
                      href={p.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} source`}
                      className="text-muted-foreground transition hover:text-foreground"
                    >
                      <Github className="size-5" />
                    </a>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>

                <ul className="mt-4 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-foreground/80">
                      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-terminal" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-xs text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
