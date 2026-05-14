"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ─── Data ─── */
const skills = [
  { name: "HTML / CSS",            pct: 0.95 },
  { name: "JavaScript / TypeScript", pct: 0.90 },
  { name: "React.js / Next.js",    pct: 0.85 },
  { name: "Java",                  pct: 0.80 },
  { name: "Node.js / Express",     pct: 0.75 },
  { name: "Python",                pct: 0.72 },
  { name: "SQL Databases",         pct: 0.70 },
  { name: "Cloud Platforms",       pct: 0.60 },
];

export const Experiences = [
  {
    title: "Programming",
    year: "2024",
    role: "Junior Full Stack Development",
    description:
      "Java: A widely-used programming language known for running on different platforms. C: A low-level language used for building systems and applications. C++: An upgraded version of C with object-oriented features, ideal for high-performance tasks. Python: A simple, versatile language popular in web development, data science, and automation.",
    technologies: ["Java", "C", "C++", "Python"],
  },
  {
    title: "Web Development",
    year: "2024",
    role: "Junior Full Stack Development",
    description:
      "HTML5: The newest version of the language for building web pages and apps. CSS3: The latest version of CSS for styling web pages, with features like animations and flexbox. JavaScript: A language for adding interactivity to websites. PHP: A server-side language for creating dynamic web pages.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
  },
  {
    title: "Frameworks",
    year: "2024",
    role: "Junior Full Stack Development",
    description:
      "Node.js: A runtime environment for running JavaScript on the server. React.js: A library for creating user interfaces using a component-based approach. Next.js: A React framework for server-side rendering and static site generation. TailwindCSS: A utility-first CSS framework. Spring Boot: A Java-based framework for building production-ready apps.",
    technologies: ["Node.js", "React.js", "Next.js", "Bootstrap", "Vite.js", "TailwindCSS", "Spring Boot"],
  },
  {
    title: "Mobile Development",
    year: "2024",
    role: "Junior Full Stack Development",
    description:
      "Android Studio: An IDE for creating Android apps using Java or Kotlin. Kotlin: A modern language for Android development that works seamlessly with Java.",
    technologies: ["Android Studio", "Kotlin"],
  },
  {
    title: "Cloud Platforms",
    year: "2024",
    role: "Junior Full Stack Developer",
    description:
      "Google Cloud Platform (GCP): A suite of cloud computing services for deploying and managing applications. AWS Serverless: A cloud-native model for building apps without managing servers, using Lambda, API Gateway, and DynamoDB.",
    technologies: ["Google Cloud Platform", "AWS Serverless"],
  },
  {
    title: "Database",
    year: "2024",
    role: "Junior Full Stack Development",
    description:
      "MongoDB: A NoSQL database storing data in a flexible, document-based format. MySQL: A fast and reliable relational database management system. SQLite: A lightweight, serverless database engine for embedded applications.",
    technologies: ["MongoDB", "MySQL", "SQLite"],
  },
  {
    title: "Version Control",
    year: "2024",
    role: "Junior Full Stack Development",
    description:
      "Git: A distributed version control system used to track changes in source code. GitHub: A platform that hosts Git repositories, enabling collaboration and sharing of code.",
    technologies: ["Git", "GitHub"],
  },
];

/* ─── Animated Skill Bar ─── */
function SkillBar({ name, pct, delay = 0 }: { name: string; pct: number; delay?: number }) {
  const barRef  = useRef<HTMLDivElement>(null);
  const fired   = useRef(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          /* Small delay stagger before animating */
          setTimeout(() => {
            el.style.setProperty("--fill", String(pct));
            el.classList.add("animate");
          }, delay * 1000);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct, delay]);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span
          className="text-xs font-medium"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
        >
          {name}
        </span>
        <span
          className="text-xs"
          style={{ color: "var(--accent-violet)", fontFamily: "var(--font-mono)" }}
        >
          {Math.round(pct * 100)}%
        </span>
      </div>
      <div className="skill-bar-track">
        <div ref={barRef} className="skill-bar-fill" />
      </div>
    </div>
  );
}

/* ─── Timeline card ─── */
function TimelineItem({
  exp,
  index,
}: {
  exp: typeof Experiences[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="flex gap-4 mb-8 last:mb-0"
    >
      {/* Dot + vertical line */}
      <div className="flex flex-col items-center pt-1 flex-shrink-0">
        <div
          className="w-3 h-3 rounded-full ring-2 ring-violet-500/25 flex-shrink-0"
          style={{
            background: "var(--accent-violet)",
            boxShadow: "0 0 10px rgba(108,99,255,0.6)",
          }}
        />
        {index < Experiences.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              background:
                "linear-gradient(180deg, rgba(108,99,255,0.5), rgba(108,99,255,0.05))",
              minHeight: "2.5rem",
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="glass p-5 rounded-xl flex-1 mb-2 transition-all duration-300 group"
        style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(108,99,255,0.25)";
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 0 20px rgba(108,99,255,0.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
          <h3
            className="text-white font-semibold text-sm"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {exp.title}
          </h3>
          <span
            className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
            style={{
              color: "var(--accent-cyan)",
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.2)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {exp.year}
          </span>
        </div>
        <p
          className="text-xs mb-2"
          style={{ color: "var(--accent-violet)", fontFamily: "var(--font-mono)" }}
        >
          {exp.role}
        </p>
        <p
          className="text-xs leading-relaxed mb-3"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
        >
          {exp.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-md"
              style={{
                color: "var(--accent-violet)",
                background: "rgba(108,99,255,0.08)",
                border: "1px solid rgba(108,99,255,0.16)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main component ─── */
export default function Experincec() {
  return (
    <section className="py-24" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="block text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--accent-violet)", fontFamily: "var(--font-mono)" }}
          >
            // what I know
          </span>
          <h2 className="section-heading">
            Skills &amp; <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Skill bars ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div
              className="glass p-8 rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="block text-xs tracking-widest uppercase mb-6"
                style={{ color: "var(--accent-violet)", fontFamily: "var(--font-mono)" }}
              >
                // proficiency
              </span>
              <div className="flex flex-col gap-5">
                {skills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} pct={s.pct} delay={i * 0.08} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Timeline ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span
              className="block text-xs tracking-widest uppercase mb-6"
              style={{ color: "var(--accent-violet)", fontFamily: "var(--font-mono)" }}
            >
              // experience timeline
            </span>
            <div>
              {Experiences.map((exp, index) => (
                <TimelineItem key={index} exp={exp} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
