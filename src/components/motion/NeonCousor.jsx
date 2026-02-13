"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useCursor } from "../../Context/CursorContext";
import "../../../src/neonCursor.css"; // Ensure your CSS has .cursor-main, .cursor-trail, .cursor-glow

const NeonCursor = () => {
  const { cursorType } = useCursor();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const trailControls = useAnimation();
  const glowControls = useAnimation();

  // --- Pointer/Mouse Movement Logic ---
  const handleMouseMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseDown = () => setIsClicking(true);
  const handleMouseUp = () => setIsClicking(false);

  // --- Hover Logic for interactive elements ---
  const handleMouseOver = useCallback(
    (e) => {
      const target = e.target;
      if (target.matches('a, button, input, [data-hover="true"]')) {
        setIsHovering(true);
        void trailControls.start({
          scale: 1.5,
          borderColor: "rgb(94, 83, 195)",
          borderWidth: "3px",
        });
        void glowControls.start({
          scale: 2,
          opacity: 0.8,
        });
      }
    },
    [trailControls, glowControls],
  );

  const handleMouseOut = useCallback(() => {
    setIsHovering(false);
    void trailControls.start({
      scale: 1,
      borderColor: "rgb(19, 24, 86)",
      borderWidth: "2px",
    });
    void glowControls.start({
      scale: 1,
      opacity: 0.4,
    });
  }, [trailControls, glowControls]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence mode="wait">
        {/* MODE 1: Default Neon Dot (Hero/General) */}
        {cursorType === "default" && (
          <motion.div
            key="default"
            initial={{ scale: 0 }}
            animate={{ scale: 1, x: pos.x - 10, y: pos.y - 10 }}
            exit={{ scale: 0 }}
            className="w-5 h-5 bg-lime-300 rounded-full shadow-[0_0_15px_rgba(190,242,100,0.8)]"
          />
        )}

        {/* MODE 2: "View" Circle (Horizontal Cards) */}
        {cursorType === "view" && (
          <motion.div
            key="view"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, x: pos.x - 40, y: pos.y - 40 }}
            exit={{ scale: 0, opacity: 0 }}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#0E5276] text-xs font-bold border border-white/20 shadow-xl"
          >
            View
          </motion.div>
        )}

        {/* MODE 3: "First" Complex Triple Layer (ScrollTwoLayer section) */}
        {cursorType === "first" && (
          <div key="first" className="neon-cursor-container absolute inset-0">
            <motion.div
              key="first"
              className="cursor-main"
              animate={{
                x: pos.x - 10,
                y: pos.y - 10,
                scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 400,
                mass: 0.5,
              }}
            />

            <motion.div
              className="cursor-trail"
              animate={{ x: pos.x - 20, y: pos.y - 20 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                mass: 0.8,
              }}
            />

            <motion.div
              className="cursor-glow"
              animate={{ x: pos.x - 30, y: pos.y - 30 }}
              transition={{
                type: "spring",
                damping: 40,
                stiffness: 150,
                mass: 1,
              }}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NeonCursor;
