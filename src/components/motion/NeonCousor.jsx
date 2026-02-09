"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import "../../../src/neonCursor.css";

const NeonCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [pointerType, setPointerType] = useState("mouse");

  const handlePointerMove = useCallback((e) => {
    setPointerType(e.pointerType);
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  const handlePointerDown = useCallback((e) => {
    setPointerType(e.pointerType);
    setActive(true);
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  const handlePointerUp = useCallback(() => {
    setActive(false);
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [handlePointerMove, handlePointerDown, handlePointerUp]);

  // 🧠 Touch devices: show only while touching
  const shouldRender =
    pointerType === "mouse" || (pointerType === "touch" && active);

  return (
    <AnimatePresence>
      {shouldRender && (
        <div className="neon-cursor-container">
          <motion.div
            className="cursor-main"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              x: pos.x - 10,
              y: pos.y - 10,
              scale: active ? 0.9 : 1,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />

          <motion.div
            className="cursor-trail"
            animate={{
              x: pos.x - 25,
              y: pos.y - 25,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          />

          <motion.div
            className="cursor-glow"
            animate={{
              x: pos.x - 30,
              y: pos.y - 30,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 30 }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default NeonCursor;
