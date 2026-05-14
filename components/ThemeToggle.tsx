"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconMoon, IconSun, IconDeviceDesktop } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

type Mode = "dark" | "light" | "system";

const CYCLE: Mode[] = ["dark", "light", "system"];

const CONFIG: Record<Mode, { icon: React.ReactNode; label: string; tooltip: string }> = {
  dark:   { icon: <IconMoon   size={13} strokeWidth={2} />, label: "Dark",   tooltip: "Switch to Light"  },
  light:  { icon: <IconSun    size={13} strokeWidth={2} />, label: "Light",  tooltip: "Switch to System" },
  system: { icon: <IconDeviceDesktop size={13} strokeWidth={2} />, label: "System", tooltip: "Switch to Dark"   },
};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => setMounted(true), []);

  /* Avoid hydration mismatch — render placeholder on server */
  if (!mounted) {
    return (
      <div
        className="theme-toggle opacity-0 select-none"
        style={{ width: "76px", height: "28px" }}
        aria-hidden="true"
      />
    );
  }

  const current = (CYCLE.includes(theme as Mode) ? theme : "system") as Mode;
  const next    = CYCLE[(CYCLE.indexOf(current) + 1) % CYCLE.length];
  const cfg     = CONFIG[current];

  return (
    <div className="relative" onMouseEnter={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme(next)}
        aria-label={cfg.tooltip}
      >
        {/* Icon — swaps with a tiny spin/fade */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current}
            initial={{ opacity: 0, rotate: -20, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0,   scale: 1   }}
            exit={{    opacity: 0, rotate:  20, scale: 0.7 }}
            transition={{ duration: 0.17, ease: "easeOut" }}
            className="flex items-center"
          >
            {cfg.icon}
          </motion.span>
        </AnimatePresence>

        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem" }}>
          {cfg.label}
        </span>
      </button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 px-2.5 py-1 rounded-lg text-xs whitespace-nowrap pointer-events-none z-50"
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--glass-border)",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
              boxShadow: "0 4px 20px var(--shadow-color)",
            }}
          >
            {cfg.tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
