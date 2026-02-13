import React from "react";
import { motion } from "framer-motion";

const ContactFooter = () => {
  return (
    <footer className="w-full bg-[#f8f7f2] py-32 md:py-48 flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="tracking-[0.2em] text-sm font-bold text-gray-800 uppercase"
        >
          Seeking partners in change?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-8xl font-semibold text-[#7c3aed] leading-tight"
        >
          Let's talk about <br /> your project.
        </motion.h2>

        {/* Outlined Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-10"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 border border-blue-600 px-8 py-4 text-xs font-bold tracking-widest text-blue-600 uppercase transition-all hover:bg-blue-600 hover:text-white"
          >
            Get In Touch
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactFooter;
