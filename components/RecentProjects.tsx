"use client";
import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { projects, Project } from "@/data";

/* ─── Filter ─── */
type Filter = "all" | "web" | "game" | "ai";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all",  label: "All"  },
  { key: "web",  label: "Web"  },
  { key: "game", label: "Game" },
  { key: "ai",   label: "AI"   },
];

/* ─── Tilt card ─── */
function TiltCard({ project, index }: { project: Project; index: number }) {
  const cardRef    = useRef<HTMLDivElement>(null);
  const isFeatured = index === 0;

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x    = (e.clientX - rect.left) / rect.width  - 0.5;
    const y    = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) scale(1.02)`;
  }, []);

  const resetTilt = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
    /* Reset hover styles */
    el.style.borderColor = "var(--card-border)";
    el.style.boxShadow   = "none";
  }, []);

  const onMouseEnter = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.borderColor = "rgba(108,99,255,0.38)";
    el.style.boxShadow   = "0 20px 60px var(--shadow-color), 0 0 30px rgba(108,99,255,0.10)";
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 28, scale: 0.96 }}
      transition={{ duration: 0.38, delay: index * 0.05 }}
      className={`tilt-card ${isFeatured ? "md:col-span-2" : ""}`}
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={resetTilt}
        className="group relative flex flex-col rounded-2xl overflow-hidden h-full"
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          transition: "transform 0.18s ease, border-color 0.28s ease, box-shadow 0.28s ease",
          willChange: "transform",
        }}
      >
        {/* Animated gradient top-line on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--accent-violet), var(--accent-cyan), transparent)",
          }}
        />

        {/* Image */}
        <div
          className={`relative overflow-hidden flex-shrink-0 ${
            isFeatured ? "h-56 md:h-64" : "h-44"
          }`}
        >
          <Image
            src={project.img}
            alt={project.title}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Category badge overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "rgba(5,10,20,0.55)" }}
          >
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{
                color: "var(--accent-cyan)",
                border: "1px solid rgba(0,212,255,0.4)",
                background: "rgba(0,212,255,0.08)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {project.category.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <h3
            className="font-bold text-base leading-snug"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>

          <p
            className="text-xs leading-relaxed flex-1"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            {project.des}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-md"
                style={{
                  color: "var(--accent-violet)",
                  background: "rgba(108,99,255,0.08)",
                  border: "1px solid rgba(108,99,255,0.18)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 pt-1 flex-wrap">
            {project.link && project.link !== "#" ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #6C63FF, #00D4FF)",
                  boxShadow: "0 0 14px rgba(108,99,255,0.28)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <IconExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            ) : (
              <span
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold"
                style={{
                  color: "var(--text-muted)",
                  background: "var(--input-bg)",
                  border: "1px solid var(--card-border)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <IconExternalLink className="w-3.5 h-3.5" />
                Repo Only
              </span>
            )}

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200"
              style={{
                color: "var(--text-muted)",
                background: "var(--input-bg)",
                border: "1px solid var(--card-border)",
                fontFamily: "var(--font-body)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color       = "var(--text-primary)";
                el.style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color       = "var(--text-muted)";
                el.style.borderColor = "var(--card-border)";
              }}
            >
              <IconBrandGithub className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ─── */
export default function RecentProjects() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="project" className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span
            className="block text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--accent-violet)", fontFamily: "var(--font-mono)" }}
          >
            // what I&apos;ve built
          </span>
          <h2 className="section-heading">
            Recent <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="flex items-center justify-center gap-2 mb-10 flex-wrap"
        >
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-220"
              style={{
                fontFamily: "var(--font-mono)",
                color: filter === key ? "#fff" : "var(--text-muted)",
                background:
                  filter === key
                    ? "linear-gradient(135deg, #6C63FF, #00D4FF)"
                    : "var(--input-bg)",
                border:
                  filter === key
                    ? "1px solid transparent"
                    : "1px solid var(--card-border)",
                boxShadow:
                  filter === key ? "0 0 18px rgba(108,99,255,0.28)" : "none",
              }}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Bento grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <TiltCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            // no projects in this category yet
          </motion.p>
        )}
      </div>
    </section>
  );
}
