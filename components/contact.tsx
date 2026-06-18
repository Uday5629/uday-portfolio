"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/effects/reveal";
import { Magnetic } from "@/components/effects/magnetic";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  }

  const items = [
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Github, label: "GitHub", value: "View profile", href: profile.github },
    { icon: Linkedin, label: "LinkedIn", value: "Connect", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <SectionHeading index="05." title="Let's build something" subtitle="Open to backend, infrastructure, and platform-engineering roles." />

      <Reveal>
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Have a role or a system worth scaling?
              </h3>
              <p className="mt-3 text-muted-foreground">
                The fastest way to reach me is email. I usually reply within a day.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground ring-glow transition hover:brightness-110"
                  >
                    <Mail className="size-4" /> {profile.email}
                  </a>
                </Magnetic>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full glass px-4 py-3 text-sm transition hover:bg-white/[0.08]"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="size-4 text-terminal" /> : <Copy className="size-4" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            <div className="grid gap-3">
              {items.map((it) => {
                const Icon = it.icon;
                return (
                  <motion.a
                    key={it.label}
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-azure/40"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-white/[0.05] text-azure">
                      <Icon className="size-5" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{it.label}</p>
                      <p className="text-sm text-muted-foreground">{it.value}</p>
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:text-foreground" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
