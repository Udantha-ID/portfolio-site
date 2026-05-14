"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="page-loader"
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 0.5 }}
            className="loader-text"
          >
            DevNest
          </motion.div>
          <div className="loader-bar-track">
            <div className="loader-bar" />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            // initializing portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
