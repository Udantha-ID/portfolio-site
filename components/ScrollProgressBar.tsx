"use client";
import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 32, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, var(--accent-violet), var(--accent-cyan))",
        zIndex: 9996,
        boxShadow: "0 0 10px rgba(108, 99, 255, 0.55)",
        willChange: "transform",
      }}
    />
  );
}
