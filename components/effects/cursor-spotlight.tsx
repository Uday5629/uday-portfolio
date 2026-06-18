"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/** A soft radial glow that follows the cursor across the whole viewport. */
export function CursorSpotlight() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    let tx = -500;
    let ty = -500;
    let cx = -500;
    let cy = -500;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      if (ref.current) {
        ref.current.style.setProperty("--sx", `${cx}px`);
        ref.current.style.setProperty("--sy", `${cy}px`);
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        background:
          "radial-gradient(28rem 28rem at var(--sx, -500px) var(--sy, -500px), hsl(199 89% 56% / 0.08), transparent 70%)",
      }}
    />
  );
}
