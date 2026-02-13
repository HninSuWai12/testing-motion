import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "BUILDING BRAND IDENTITIES THAT LAST",
    subtitle: "YOMA BANK",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000",
  },
  {
    title: "REDEFINING RESIDENTIAL COMMUNITIES",
    subtitle: "STARCITY RESIDENTIAL APP",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
  },
  {
    title: "MAKING BOLD INITIATIVES FOR COMMUNITIES",
    subtitle: "RECYCLE MYANMAR",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000",
  },
  {
    title: "PUSHING BOUNDARIES",
    subtitle: "MAHA MFI",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
  },
];

const ProjectScroll = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background shifts to white as the last card finishes
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.6, 0.7],
    ["#00e5ff", "#00e5ff", "#ffffff"],
  );

  const paragraph1 =
    "Every small details matter to us. Your colors, Typefaces? How does your customer service handle complaints? All of the above and More?";
  const paragraph2 =
    "This is where we start. Your digital product big or small should be unique and should tell the right stories and solve the right problems to create the right connections.";

  return (
    <motion.main
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative"
    >
      {/* SECTION 1: STACKING CARDS (STAY STICKY) */}
      <div className="flex flex-col items-center">
        {projects.map((project, i) => (
          <Card key={i} i={i} {...project} />
        ))}
      </div>

      {/* SECTION 2: STATIC SCROLLING TEXT */}
      {/* We use a large padding to give the "reading" space */}
      <section className="py-[20vh] flex flex-col items-center gap-[40vh] px-6">
        {/* Paragraph 1 */}
        <div className="max-w-4xl">
          <p className="flex flex-wrap text-4xl md:text-5xl font-medium justify-center text-center">
            {paragraph1.split(" ").map((word, i) => {
              // Range starts after cards (0.7) and ends halfway through text (0.85)
              const start = 0.7 + (i / paragraph1.split(" ").length) * 0.12;
              const end = start + 0.02;
              return (
                <Word
                  key={`p1-${i}`}
                  progress={scrollYProgress}
                  range={[start, end]}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

        {/* Paragraph 2 */}
        <div className="max-w-4xl">
          <p className="flex flex-wrap text-4xl md:text-5xl font-medium justify-center text-center">
            {paragraph2.split(" ").map((word, i) => {
              // Range follows Paragraph 1 (starts at 0.85, ends at 0.98)
              const start = 0.85 + (i / paragraph2.split(" ").length) * 0.12;
              const end = start + 0.02;
              return (
                <Word
                  key={`p2-${i}`}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isPurple
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </section>

      <div className="h-[20vh]" />
    </motion.main>
  );
};

const Card = ({ i, title, subtitle, image }) => (
  <div className="h-screen flex items-center justify-center sticky top-0 w-full">
    <motion.div
      className="relative w-[92vw] md:w-[75vw] h-[45vh] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center p-10 text-center text-white">
        <p className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase opacity-80">
          {subtitle}
        </p>
        <h3 className="max-w-3xl text-3xl md:text-6xl font-black leading-none tracking-tighter">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const Word = ({ children, progress, range, isPurple }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const activeColor = isPurple ? "#6366f1" : "#03bcd4";
  const color = useTransform(progress, range, ["#d1d5db", activeColor]);

  return (
    <motion.span style={{ opacity, color }} className="mr-3 mb-2">
      {children}
    </motion.span>
  );
};

export default ProjectScroll;
