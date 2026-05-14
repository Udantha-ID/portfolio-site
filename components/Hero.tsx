"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/* ─── Typewriter hook ─── */
const ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "AI Enthusiast",
  "SLIIT Undergraduate",
];

function useTypewriter(texts: string[], speed = 75, pause = 1800) {
  const [display, setDisplay]   = useState("");
  const [idx, setIdx]           = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const delay   = deleting ? speed / 2 : speed;
    const id = setTimeout(() => {
      if (!deleting) {
        if (display.length < current.length) {
          setDisplay(current.slice(0, display.length + 1));
        } else {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        if (display.length > 0) {
          setDisplay(current.slice(0, display.length - 1));
        } else {
          setDeleting(false);
          setIdx((i) => (i + 1) % texts.length);
        }
      }
    }, delay);
    return () => clearTimeout(id);
  }, [display, deleting, idx, texts, speed, pause]);

  return display;
}

/* ─── Particle canvas ─── */
type Particle = {
  x: number; y: number; vx: number; vy: number;
  r: number; opacity: number; color: string;
};

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const COLORS = ["rgba(108,99,255,", "rgba(0,212,255,", "rgba(255,107,107,"];
    let animId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const init = () => {
      resize();
      particles = Array.from({ length: 65 }, () => ({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        vx:      (Math.random() - 0.5) * 0.28,
        vy:      (Math.random() - 0.5) * 0.28,
        r:       Math.random() * 1.4 + 0.4,
        opacity: Math.random() * 0.45 + 0.08,
        color:   COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(108,99,255,${0.07 * (1 - dist / 110)})`;
            ctx.lineWidth   = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    init(); draw();
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", init); };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.65 }}
      aria-hidden="true"
    />
  );
}

/* ─── Syntax-highlighted code card ─── */
const CODE_LINES: { indent: number; tokens: { t: string; c: string }[] }[] = [
  { indent: 0, tokens: [{ t: "const",   c: "kw" }, { t: " developer",  c: "var" }, { t: " = {",      c: "pl" }] },
  { indent: 1, tokens: [{ t: "name",    c: "pr" }, { t: ": ",          c: "pl"  }, { t: '"Induru Udantha"', c: "str" }, { t: ",", c: "pl" }] },
  { indent: 1, tokens: [{ t: "role",    c: "pr" }, { t: ": ",          c: "pl"  }, { t: '"Software Engineer"', c: "str" }, { t: ",", c: "pl" }] },
  { indent: 1, tokens: [{ t: "skills",  c: "pr" }, { t: ": [",         c: "pl"  }] },
  { indent: 2, tokens: [{ t: '"React"', c: "str" }, { t: ", ",         c: "pl"  }, { t: '"Next.js"',   c: "str" }, { t: ", ", c: "pl" }, { t: '"TypeScript"', c: "str" }, { t: ",", c: "pl" }] },
  { indent: 2, tokens: [{ t: '"Node.js"', c: "str" }, { t: ", ",       c: "pl"  }, { t: '"Java"',      c: "str" }, { t: ", ", c: "pl" }, { t: '"Python"',     c: "str" }] },
  { indent: 1, tokens: [{ t: "],",      c: "pl"  }] },
  { indent: 1, tokens: [{ t: "available", c: "pr" }, { t: ": ",        c: "pl"  }, { t: "true",        c: "kw"  }, { t: ",",  c: "pl" }] },
  { indent: 0, tokens: [{ t: "};",      c: "pl"  }] },
];
const TC: Record<string, string> = {
  kw:  "#00D4FF",
  var: "#6C63FF",
  pr:  "#8BE9FD",
  str: "#50FA7B",
  pl:  "#8892A4",
};

/* ─── Stat counter ─── */
function StatCounter({ end, label }: { end: number; label: string }) {
  const [count, setCount] = useState(0);
  const wrapRef  = useRef<HTMLDivElement>(null);
  const fired    = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          let n = 0;
          const step = () => {
            n = Math.min(n + Math.ceil(end / 38), end);
            setCount(n);
            if (n < end) requestAnimationFrame(step);
          };
          step();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={wrapRef} className="text-center select-none">
      <div
        className="gradient-text text-3xl md:text-4xl font-extrabold"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {count}+
      </div>
      <div
        className="mt-1 text-xs uppercase tracking-widest"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
      >
        {label}
      </div>
    </div>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  const typed = useTypewriter(ROLES);
  const [glitching, setGlitching] = useState(false);

  const { scrollY }  = useScroll();
  const rawY         = useTransform(scrollY, [0, 600], [0, -120]);
  const parallaxY    = useSpring(rawY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const id = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 560);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">

      {/* Full-width particle canvas */}
      <ParticleCanvas />

      {/* Floating blurred orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 560, height: 560,
            top: "-10%", left: "-12%",
            background: "radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 65%)",
            filter: "blur(60px)",
            animation: "orb-float-1 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 400, height: 400,
            top: "30%", right: "-8%",
            background: "radial-gradient(circle, rgba(0,212,255,0.14) 0%, transparent 65%)",
            filter: "blur(60px)",
            animation: "orb-float-2 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 320, height: 320,
            bottom: "5%", left: "35%",
            background: "radial-gradient(circle, rgba(255,107,107,0.10) 0%, transparent 65%)",
            filter: "blur(50px)",
            animation: "orb-float-3 22s ease-in-out infinite",
          }}
        />
      </div>

      {/* Grid overlay with radial fade mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(108,99,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,99,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 80%)",
        }}
      />

      {/* Parallax content wrapper */}
      <motion.div
        style={{ y: parallaxY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10"
      >
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-6">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs w-fit"
              style={{
                fontFamily: "var(--font-mono)",
                color:      "var(--accent-violet)",
                background: "rgba(108,99,255,0.08)",
                border:     "1px solid rgba(108,99,255,0.28)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--accent-cyan)",
                  boxShadow:  "0 0 6px var(--accent-cyan)",
                  animation:  "pulse-glow 2s ease-in-out infinite",
                }}
              />
              Available for opportunities
            </motion.div>

            {/* Name — glitch effect */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className={`section-heading glitch-text${glitching ? " glitching" : ""}`}
              data-text="Induru Udantha"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Induru Udantha
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-2.5 h-10"
            >
              <span
                className="text-base md:text-xl"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                &gt;_
              </span>
              <span
                className="text-lg md:text-xl font-semibold gradient-text"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {typed}
                <span
                  style={{
                    color:     "var(--accent-violet)",
                    animation: "loader-pulse 0.8s step-end infinite",
                  }}
                >
                  |
                </span>
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-sm md:text-base max-w-md leading-relaxed"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
            >
              Undergraduate at{" "}
              <span style={{ color: "var(--accent-cyan)", fontWeight: 500 }}>
                Faculty of Computing, SLIIT
              </span>{" "}
              — crafting modern digital experiences with clean code and bold design.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-3 mt-1"
            >
              <a
                href="#about"
                className="group relative overflow-hidden px-8 py-3.5 rounded-xl font-semibold text-sm text-white"
                style={{
                  background: "linear-gradient(135deg, #6C63FF, #00D4FF)",
                  boxShadow:  "0 0 28px rgba(108,99,255,0.40)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Show My Work
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                  }}
                />
              </a>

              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{
                  color:      "var(--text-muted)",
                  border:     "1px solid rgba(255,255,255,0.1)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color       = "#fff";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color       = "var(--text-muted)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* ── Right column: floating code card ── */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.75 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div
              className="relative w-full max-w-md"
              style={{ animation: "code-float 6s ease-in-out infinite" }}
            >
              {/* Glow halo */}
              <div
                className="absolute -inset-4 rounded-3xl -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(108,99,255,0.22) 0%, transparent 65%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Card */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background:          "rgba(8,13,28,0.88)",
                  border:              "1px solid rgba(108,99,255,0.28)",
                  boxShadow:
                    "0 24px 80px rgba(0,0,0,0.50), 0 0 40px rgba(108,99,255,0.14)",
                  backdropFilter:      "blur(20px)",
                  WebkitBackdropFilter:"blur(20px)",
                }}
              >
                {/* Window chrome */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    background:   "rgba(255,255,255,0.025)",
                  }}
                >
                  <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
                  <span
                    className="ml-3 text-xs"
                    style={{
                      color:      "rgba(136,146,164,0.55)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    developer.ts
                  </span>
                </div>

                {/* Code body */}
                <div className="p-5 select-none">
                  {CODE_LINES.map((line, li) => (
                    <div
                      key={li}
                      className="flex"
                      style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                    >
                      <span
                        className="mr-4 text-xs flex-shrink-0"
                        style={{
                          color:      "rgba(136,146,164,0.30)",
                          minWidth:   "1.2rem",
                          fontFamily: "var(--font-mono)",
                          lineHeight: "1.75rem",
                        }}
                      >
                        {li + 1}
                      </span>
                      <span style={{ lineHeight: "1.75rem" }}>
                        {line.tokens.map((tok, ti) => (
                          <span
                            key={ti}
                            style={{
                              color:      TC[tok.c],
                              fontFamily: "var(--font-mono)",
                              fontSize:   "0.8rem",
                            }}
                          >
                            {tok.t}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}

                  {/* Blinking cursor line */}
                  <div className="flex mt-0.5">
                    <span
                      className="mr-4 text-xs flex-shrink-0"
                      style={{
                        color:      "rgba(136,146,164,0.30)",
                        minWidth:   "1.2rem",
                        fontFamily: "var(--font-mono)",
                        lineHeight: "1.75rem",
                      }}
                    >
                      {CODE_LINES.length + 1}
                    </span>
                    <span
                      style={{
                        color:      "var(--accent-violet)",
                        animation:  "loader-pulse 0.8s step-end infinite",
                        fontFamily: "var(--font-mono)",
                        fontSize:   "0.8rem",
                        lineHeight: "1.75rem",
                      }}
                    >
                      ▌
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82 }}
          className="flex items-center gap-8 md:gap-16 pb-12 pt-8 justify-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <StatCounter end={5}  label="Projects"      />
          <div className="h-8 w-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <StatCounter end={7}  label="Tech Areas"    />
          <div className="h-8 w-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <StatCounter end={2}  label="Years Learning" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8"
        style={{
          left:      "50%",
          animation: "bounce-arrow 2.2s ease-in-out infinite",
        }}
      >
        <div className="flex flex-col items-center gap-1.5">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            scroll
          </span>
          <svg
            className="w-4 h-4"
            style={{ color: "var(--accent-violet)" }}
            fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
