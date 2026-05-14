"use client";
import React from "react";
import { SiLinkedin, SiGithub, SiFacebook, SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";

const socials = [
  { icon: <SiLinkedin />, href: "https://www.linkedin.com/in/induru-udantha/", label: "LinkedIn" },
  { icon: <SiGithub />,   href: "https://github.com/Udantha-ID",              label: "GitHub" },
  { icon: <SiFacebook />, href: "https://web.facebook.com/iduru.udantha",      label: "Facebook" },
  { icon: <SiWhatsapp />, href: "https://wa.me/94763904365",                   label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 pb-8 pt-12">
      {/* Gradient separator line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(108,99,255,0.5) 30%, rgba(0,212,255,0.5) 70%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <span
            className="text-lg font-extrabold gradient-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DevNest
          </span>
          <p
            className="text-xs mt-1"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            © {new Date().getFullYear()} Induru Udantha. All rights reserved.
          </p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-base transition-all duration-200"
              style={{
                color: "var(--text-muted)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent-violet)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 16px rgba(108,99,255,0.35)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(108,99,255,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.07)";
              }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Built with */}
        <p
          className="text-xs text-center sm:text-right"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
        >
          Built with{" "}
          <span style={{ color: "var(--accent-violet)" }}>Next.js</span>
          {" "}& Tailwind ❤️
        </p>
      </div>
    </footer>
  );
}
