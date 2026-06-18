"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { staggerContainer, staggerItem } from "@/components/effects/reveal";

export function Skills() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <SectionHeading index="02." title="Skills & stack" subtitle="The tools I reach for to build resilient, observable backend systems." />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:ring-glow"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-white/[0.05] text-azure">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-semibold">{group.title}</h3>
              </div>
              <motion.ul
                variants={staggerContainer}
                className="mt-4 flex flex-wrap gap-2"
              >
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={staggerItem}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-foreground/80 transition-colors hover:border-azure/40 hover:text-foreground"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
