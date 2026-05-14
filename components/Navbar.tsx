"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { id: "",        title: "Home"    },
  { id: "about",   title: "About"   },
  { id: "project", title: "Project" },
  { id: "contact", title: "Contact" },
];

export default function Navbar() {
  const [active, setActive]         = useState("Home");
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 640) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── Main bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          padding: scrolled ? "0.55rem 0" : "1rem 0",
          background: scrolled ? "var(--nav-bg-scrolled)" : "transparent",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid var(--nav-border)" : "none",
          boxShadow: scrolled ? `0 4px 40px var(--shadow-color)` : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => { setActive("Home"); window.scrollTo(0, 0); }}
            className="group relative flex items-center gap-2.5 flex-shrink-0"
          >
            <span
              className="gradient-text text-xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              DevNest
            </span>
            <span
              className="text-xs px-1.5 py-0.5 rounded transition-all"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--accent-violet)",
                background: "rgba(108,99,255,0.10)",
                border: "1px solid rgba(108,99,255,0.22)",
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
              }}
            >
              SE
            </span>
            <span
              className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(108,99,255,0.10), transparent 70%)",
              }}
            />
          </Link>

          {/* Desktop links + toggle */}
          <div className="hidden sm:flex items-center gap-7">
            <ul className="flex items-center gap-7">
              {navLinks.map((nav) => (
                <li key={nav.id} className="relative group">
                  <Link
                    href={`#${nav.id}`}
                    onClick={() => setActive(nav.title)}
                    className="text-sm font-medium py-1 transition-colors duration-200"
                    style={{
                      color:
                        active === nav.title
                          ? "var(--text-primary)"
                          : "var(--text-muted)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {nav.title}
                  </Link>

                  {active === nav.title && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute -bottom-0.5 left-0 right-0 h-px"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--accent-violet), var(--accent-cyan))",
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                    />
                  )}

                  {active !== nav.title && (
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      style={{ background: "rgba(108,99,255,0.38)" }}
                    />
                  )}
                </li>
              ))}
            </ul>

            {/* Theme toggle sits right of nav links */}
            <ThemeToggle />
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="flex sm:hidden items-center gap-3">
            <ThemeToggle />

            <button
              type="button"
              className="flex flex-col justify-center gap-1.5 p-1.5"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span
                className="block h-0.5 w-5 transition-all duration-300 origin-center"
                style={{
                  background: "var(--text-primary)",
                  transform: mobileOpen ? "rotate(45deg) translate(2px, 3px)" : "none",
                }}
              />
              <span
                className="block h-0.5 w-5 transition-all duration-300"
                style={{
                  background: "var(--text-primary)",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-0.5 w-5 transition-all duration-300 origin-center"
                style={{
                  background: "var(--text-primary)",
                  transform: mobileOpen ? "rotate(-45deg) translate(2px, -3px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 sm:hidden"
              style={{
                background: "rgba(5,10,20,0.5)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-64 z-50 sm:hidden"
              style={{
                background: "var(--drawer-bg)",
                WebkitBackdropFilter: "blur(30px)",
                backdropFilter: "blur(30px)",
                borderLeft: "1px solid var(--glass-border)",
              }}
            >
              <div className="flex flex-col h-full px-8 pt-20 pb-10">
                <ul className="flex flex-col gap-5">
                  {navLinks.map((nav, i) => (
                    <li key={nav.id}>
                      <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 + 0.08 }}
                      >
                        <Link
                          href={`#${nav.id}`}
                          onClick={() => { setActive(nav.title); setMobileOpen(false); }}
                          className="flex items-center gap-3 text-base font-medium py-1 transition-colors duration-200"
                          style={{
                            color:
                              active === nav.title
                                ? "var(--text-primary)"
                                : "var(--text-muted)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.7rem",
                              color: "var(--accent-violet)",
                            }}
                          >
                            0{i + 1}.
                          </span>
                          {nav.title}
                          {active === nav.title && (
                            <span
                              className="ml-auto w-1.5 h-1.5 rounded-full"
                              style={{ background: "var(--accent-cyan)" }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div
                    className="h-px w-full mb-4"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--accent-violet), var(--accent-cyan))",
                    }}
                  />
                  <p
                    className="text-xs"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    // Software Engineer · SLIIT
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
