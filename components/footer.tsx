"use client";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-terminal">uday@infra ~ $ logout</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Designed & built by {profile.name}. Next.js · TypeScript · Tailwind · Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition hover:text-foreground">
            <Github className="size-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition hover:text-foreground">
            <Linkedin className="size-5" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted-foreground transition hover:text-foreground">
            <Mail className="size-5" />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid size-9 place-items-center rounded-full glass transition hover:bg-white/[0.08]"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
