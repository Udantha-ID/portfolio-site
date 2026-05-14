"use client";
import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: "🎯",
    title: "Client Focus",
    text: "I focus on working closely with clients, ensuring clear communication to understand their needs and deliver effective solutions.",
  },
  {
    icon: "💼",
    title: "Career Goal",
    text: "I'm focusing on a Software Engineering internship to grow practical industry skills and contribute to real-world projects.",
  },
  {
    icon: "🚀",
    title: "Current Work",
    text: "Currently building Web Development projects and exploring AI & ML — passionate about scalable, modern architectures.",
  },
  {
    icon: "⚡",
    title: "Passion",
    text: "Passionate about building scalable solutions with modern tech, clean design, and performance-first engineering.",
  },
];

const techStack = [
  "Java", "Python", "JavaScript", "TypeScript",
  "React.js", "Next.js", "Node.js", "Spring Boot",
  "TailwindCSS", "MongoDB", "MySQL", "AWS",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function Grid() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">

        {/* Section header */}
        <motion.div
          {...fadeUp()}
          className="text-center mb-16"
        >
          <span
            className="block text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--accent-violet)", fontFamily: "var(--font-mono)" }}
          >
            // who I am
          </span>
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: Profile + Tech ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            {/* Profile card */}
            <div
              className="glass p-7 rounded-2xl"
              style={{ border: "1px solid rgba(108,99,255,0.18)" }}
            >
              {/* Avatar + name */}
              <div className="flex items-start gap-5 mb-5">
                <div className="relative flex-shrink-0">
                  {/* Gradient avatar */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-extrabold text-white select-none"
                    style={{
                      background: "linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%)",
                      boxShadow: "0 0 28px rgba(108,99,255,0.45)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    IU
                  </div>
                  {/* Glow ring */}
                  <div
                    className="absolute -inset-1 rounded-2xl -z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(108,99,255,0.35), rgba(0,212,255,0.25))",
                      filter: "blur(8px)",
                    }}
                  />
                </div>

                <div>
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Induru Udantha
                  </h3>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: "var(--accent-violet)", fontFamily: "var(--font-mono)" }}
                  >
                    Software Engineer
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    SLIIT · Faculty of Computing
                  </p>
                </div>
              </div>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
              >
                I&apos;m an undergraduate Software Engineering student with a passion for building
                modern web applications and exploring cutting-edge technologies. I focus on
                delivering clean, scalable, and user-centric solutions.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="group relative overflow-hidden px-5 py-2 rounded-lg text-sm font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #6C63FF, #00D4FF)",
                    boxShadow: "0 0 18px rgba(108,99,255,0.32)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span className="relative z-10">Download Resume</span>
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                    }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/induru-udantha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                  style={{
                    color: "var(--text-muted)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "var(--font-body)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(108,99,255,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  LinkedIn →
                </a>
              </div>
            </div>

            {/* Tech stack tags */}
            <div
              className="glass p-6 rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="block text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--accent-violet)", fontFamily: "var(--font-mono)" }}
              >
                // tech stack
              </span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full transition-all duration-200"
                    style={{
                      color: "var(--text-muted)",
                      background: "rgba(108,99,255,0.07)",
                      border: "1px solid rgba(108,99,255,0.14)",
                      fontFamily: "var(--font-mono)",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--accent-violet)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(108,99,255,0.4)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(108,99,255,0.14)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(108,99,255,0.14)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(108,99,255,0.07)";
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Highlight cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08 + 0.2)}
                className="glass p-6 rounded-2xl group transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(108,99,255,0.3)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 24px rgba(108,99,255,0.10)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h4
                  className="text-white text-sm font-semibold mb-2 transition-colors duration-200 group-hover:text-[var(--accent-violet)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}

            {/* Project CTA card */}
            <motion.div
              {...fadeUp(0.5)}
              className="sm:col-span-2 p-6 rounded-2xl text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(108,99,255,0.10), rgba(0,212,255,0.07))",
                border: "1px solid rgba(108,99,255,0.25)",
              }}
            >
              <p
                className="text-sm mb-3"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
              >
                Have a project in mind?
              </p>
              <a
                href="#contact"
                className="text-sm font-semibold transition-colors duration-200"
                style={{ color: "#fff", fontFamily: "var(--font-display)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--accent-violet)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#fff")
                }
              >
                Do you want to start a project together..? →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
