"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { Magnetic } from "@/components/effects/magnetic";
import { useMounted } from "@/hooks/use-mounted";
import { TerminalCard } from "@/components/terminal";

const ParticleField = dynamic(() => import("@/components/effects/particle-field"), { ssr: false });

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setText(words[0]);
      return;
    }
    const word = words[i % words.length];
    const speed = del ? 35 : 75;
    const t = setTimeout(() => {
      const next = del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      setText(next);
      if (!del && next === word) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((v) => v + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, reduce]);

  return text;
}

export function Hero() {
  const mounted = useMounted();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-bg" />
      {mounted && !reduce && (
        <div aria-hidden className="absolute inset-0 opacity-70">
          <ParticleField />
        </div>
      )}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -z-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px] animate-gradient-pan"
      />

      <motion.div style={{ y: yText, opacity }} className="container relative z-10 grid items-center gap-12 py-28 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="size-2 animate-pulse rounded-full bg-terminal" />
            Available for backend / infrastructure roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-4 h-8 font-mono text-lg text-sky-300 sm:text-xl"
          >
            <span className="text-muted-foreground">$ </span>
            {typed}
            <span className="ml-0.5 inline-block h-5 w-2 translate-y-0.5 animate-blink bg-sky-300/80 align-middle" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground ring-glow transition hover:brightness-110"
              >
                View my work <ArrowRight className="size-4" />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition hover:bg-white/[0.08]"
              >
                <Download className="size-4" /> Download CV
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex items-center gap-5 text-muted-foreground"
          >
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-foreground">
              <Github className="size-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-foreground">
              <Linkedin className="size-5" />
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin className="size-4" /> {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <TerminalCard />
        </motion.div>
      </motion.div>
    </section>
  );
}

