"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/effects/reveal";
import { Briefcase } from "lucide-react";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="container py-24 sm:py-32">
      <SectionHeading index="04." title="Experience" subtitle="Where I've shipped production software." />

      <div ref={ref} className="relative mx-auto max-w-3xl pl-10 sm:pl-14">
        <div className="absolute left-3 top-2 h-full w-px bg-white/10 sm:left-5" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-3 top-2 h-full w-px origin-top bg-gradient-to-b from-terminal via-azure to-transparent sm:left-5"
        />

        <div className="space-y-12">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.period} delay={i * 0.05}>
              <div className="relative">
                <span className="absolute -left-[2.1rem] top-1 grid size-7 place-items-center rounded-full border border-white/15 bg-background sm:-left-[2.6rem]">
                  <Briefcase className="size-3.5 text-azure" />
                </span>
                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <span className="font-mono text-xs text-terminal">{e.period}</span>
                  </div>
                  <p className="text-sm text-azure">
                    {e.company} · {e.location}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-terminal" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
