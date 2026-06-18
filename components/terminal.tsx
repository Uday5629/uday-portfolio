"use client";
import { motion, useReducedMotion } from "framer-motion";
import { terminalLines } from "@/lib/data";

export function TerminalCard() {
  const reduce = useReducedMotion();
  return (
    <div className="glass-strong overflow-hidden rounded-2xl shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="size-3 rounded-full bg-red-400/80" />
        <span className="size-3 rounded-full bg-yellow-400/80" />
        <span className="size-3 rounded-full bg-green-400/80" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">uday@infra: ~/portfolio</span>
      </div>
      <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
        {terminalLines.map((line, i) => (
          <motion.div
            key={line.cmd}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i, duration: 0.4 }}
          >
            <div className="flex gap-2">
              <span className="text-terminal">➜</span>
              <span className="text-sky-300">~</span>
              <span className="text-foreground/90">{line.cmd}</span>
            </div>
            <div className="pl-6 text-muted-foreground">{line.out}</div>
          </motion.div>
        ))}
        <div className="flex gap-2 pt-1">
          <span className="text-terminal">➜</span>
          <span className="text-sky-300">~</span>
          <span className="inline-block h-4 w-2 animate-blink bg-foreground/80" />
        </div>
      </div>
    </div>
  );
}
