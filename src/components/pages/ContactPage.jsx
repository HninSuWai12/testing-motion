import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="w-full h-screen bg-[#f8f7f2] font-sans selection:bg-blue-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-40">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
          {/* Left Side: Headline */}
          <div className="w-full lg:w-1/2">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl  font-bold text-blue-600 leading-[1.1] tracking-tight max-w-md"
            >
              We’re ready if you are. Let’s get to it
            </motion.h1>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-1/2 relative">
            <form className="space-y-12">
              <div className="space-y-10">
                <InputField label="Name" type="text" />
                <InputField label="Business" optional />
                <InputField label="Phone" type="tel" />
                <InputField label="Email" type="email" />
                <InputField label="Tell us about your project" isTextArea />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-6">
                <button className="group flex items-center gap-4 border border-blue-600 px-10 py-3 text-sm font-bold tracking-widest text-blue-600 uppercase transition-all hover:bg-blue-600 hover:text-white">
                  Send
                  <svg
                    width="20"
                    height="20"
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
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Input Component for the Underline Style
const InputField = ({
  label,
  type = "text",
  optional = false,
  isTextArea = false,
}) => {
  return (
    <div className="relative w-full group">
      {isTextArea ? (
        <textarea
          rows="1"
          placeholder=" "
          className="peer w-full bg-transparent border-b border-gray-300 py-3 outline-none focus:border-blue-600 transition-colors resize-none"
        />
      ) : (
        <input
          type={type}
          placeholder=" "
          className="peer w-full bg-transparent border-b border-gray-300 py-3 outline-none focus:border-blue-600 transition-colors"
        />
      )}
      <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest text-xs font-bold">
        {label}{" "}
        {optional && <span className="text-[10px] opacity-60">(OPTIONAL)</span>}
      </label>
    </div>
  );
};

export default ContactPage;
