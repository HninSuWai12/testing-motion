import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "../pages/Footer";
import Idea from "../pages/Idea";
// import "./App.css";
// import { GradualSpacing } from "./components/motion/text-animation";

export default function TechIdea() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll → animation values
  const y = useTransform(scrollYProgress, [1, 0], [-300, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <div
      ref={containerRef}
      className="flex-1 flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black via-[#0E5276] to-[#0E5275]   h-[120vh]"
    >
      <Idea />
    </div>
  );
}
