import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo1 from "../../assets/images/logo11.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";

const Award = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start start", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["#ffffff", "#0e5275"],
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["#000000", "#ffffff"],
  );

  return (
    <motion.section
      ref={ref}
      style={{
        backgroundColor,
        color: textColor,
      }}
      transition={{ duration: 0.4 }}
      className="w-full px-6 md:px-20 py-20 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-8">
          RECOGNITION
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                Merit Award winners for the "Heal by Pun Hlaing"
              </h1>

              <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-widest">
                <span>In the Category</span>
                <span className="font-semibold">
                  Public Sector & Social Innovation
                </span>
              </div>
            </div>

            <div className="flex items-center lg:gap-6 md:gap-6 gap-3">
              <img src={logo3} className="h-12 object-contain" alt="" />
              <img src={logo1} className="h-10 w-10 object-contain" alt="" />
              <img src={logo2} className="h-12  object-contain" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-6 leading-relaxed text-lg">
            <p>
              We are happy and so excited to share that the telemedicine app
              called <span className="font-semibold">"Heal by Pun Hlaing"</span>
              .
            </p>
            <p>
              Built by <span className="font-semibold">onenex</span>, it was
              selected as one of the Merit Awardees in the Category "Public
              Sector & Social Innovation".
            </p>
            <p>
              Big applause to our developers, engineers and analysts who
              contributed their best efforts to bring this app to life.
            </p>
          </div>
        </div>

        {/* <div className="mt-16 relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"> */}
        <motion.div
          ref={videoRef}
          className="mt-16 relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/xFrfv4WReKY"
            title="YouTube video player"
            allowFullScreen
          />
        </motion.div>
        {/* </div> */}
      </div>
    </motion.section>
  );
};

export default Award;
