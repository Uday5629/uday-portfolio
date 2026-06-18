"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { useSectionSpy } from "@/hooks/use-section-spy";
import { cn } from "@/lib/utils";

const ids = navLinks.map((l) => l.id);

export function Navbar() {
  const active = useSectionSpy(ids);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <nav className="container mt-4">
        <div className="glass flex items-center justify-between rounded-full px-4 py-2.5">
          <a href="#home" className="flex items-center gap-2 pl-2 font-semibold tracking-tight">
            <Terminal className="size-4 text-terminal" />
            <span>{profile.name}</span>
            <span className="font-mono text-terminal">~$</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.id} className="relative">
                <a
                  href={`#${l.id}`}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors",
                    active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.resumeUrl}
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-glow transition hover:brightness-110 md:inline-block"
          >
            Resume
          </a>

          <button
            aria-label="Toggle menu"
            className="rounded-full p-2 text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              className="glass mt-2 overflow-hidden rounded-2xl p-2 md:hidden"
            >
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm transition-colors",
                      active === l.id ? "bg-white/[0.06] text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  className="mt-1 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
                >
                  Download Resume
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
