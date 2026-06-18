"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";
import { profile, stats, education, certifications } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/effects/reveal";
import { GraduationCap, BadgeCheck } from "lucide-react";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <SectionHeading index="01." title="About me" subtitle="Backend engineer who cares about what happens after the code ships." />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="glass rounded-2xl p-8">
          <p className="text-lg leading-relaxed text-foreground/90">{profile.summary}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I gravitate toward the parts of a system that have to stay up: API gateways, service discovery, database
            performance, containerized deployments and observability. I like turning a noisy, failure-prone service into
            something boring and dependable.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 size-5 shrink-0 text-azure" />
              <div>
                <p className="font-medium">{education.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {education.school} · {education.period} · {education.detail}
                </p>
              </div>
            </div>
            {certifications.map((c) => (
              <div key={c} className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-terminal" />
                <p className="text-sm text-foreground/90">{c}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid h-full grid-cols-2 gap-4">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4 }}
                className="glass flex flex-col justify-center rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-gradient sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
