import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../../api/projects";
import { useCursor } from "../../../Context/CursorContext";

const Cards = () => {
  const { setCursorType } = useCursor();

  // 1. Get unique categories from your data
  const categories = [...new Set(projects.map((p) => p.category))];

  return (
    <div className="w-full bg-[#f8f7f2] min-h-screen font-sans">
      <div className="sticky top-0 z-50 bg-[#f8f7f2]/80 backdrop-blur-md px-6 md:px-12 py-10 border-t border-gray-200">
        <div className="w-full mx-12 flex gap-10 border-b border-gray-300 pb-4 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#${cat}`}
              className="tracking-widest text-sm font-bold text-gray-400 hover:text-black transition-all whitespace-nowrap"
            >
              {cat}{" "}
              <span className="ml-1 opacity-50">
                [{projects.filter((p) => p.category === cat).length}]
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Sections Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {categories.map((category) => (
          <section
            key={category}
            id={category}
            className="py-20 border-b border-gray-200 last:border-none"
          >
            <h2
              className="text-6xl md:text-8xl font-bold uppercase mb-16 opacity-30 pointer-events-none select-none"
              style={{
                WebkitTextStroke: "1px #7c3aed",
                color: "transparent",
              }}
            >
              {category}
            </h2>

            {/* List of projects for THIS category */}
            <div className="flex flex-col gap-40 w-full">
              {projects
                .filter((p) => p.category === category)
                .map((project, index) => (
                  <div
                    key={`${project.id}-${index}`}
                    className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${
                      project.align === "right" ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image Block */}
                    <motion.div
                      className="w-full md:w-3/5 relative overflow-hidden aspect-[16/10] bg-gray-200 cursor-none rounded-sm"
                      onMouseEnter={() => setCursorType("view")}
                      onMouseLeave={() => setCursorType("default")}
                    >
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>

                    {/* Text Block */}
                    <div className="w-full md:w-2/5 space-y-6">
                      <h3 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] leading-[1.1] tracking-tight">
                        {project.description}
                      </h3>
                      <p className="text-xl text-gray-500 font-medium">
                        {project.title}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Cards;
