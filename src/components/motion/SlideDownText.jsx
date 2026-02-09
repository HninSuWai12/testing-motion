import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaArrowCircleLeft, FaQuoteLeft } from "react-icons/fa";

export default function SlideDownText() {
  const services = [
    {
      id: "1",
      title: "DIGITAL PRODUCT DESIGN",
      text: "Looking to design a digital products from ground up that are intuitive and easy to use. Got an awesome idea? You are off to a great start.",
    },
    {
      id: "2",
      title: "AGILE DEVELOPMENT TEAM",
      text: "Work with our focused teams dedicated to each project.",
    },
    {
      id: "3",
      title: "WEB DEVELOPMENT",
      text: "Build a website ready for future growth and million of users.",
    },

    {
      id: "4",
      title: "APP DEVELOPMENT",
      text: "Build a mobile product that is both functional and users driven with smooth navigation across all touchpoints.",
    },
    {
      id: "5",
      title: "CLOUD ENGINEERING & DEVOPS",
      text: "Let certified engineers kick-start your cloud operations.",
    },
    {
      id: "6",
      title: "ECOMERCE",
      text: "Ready-to-use eCommerce platforms that are easily accessible and manageable for your online store.",
    },
    {
      id: "7",
      title: "SAAS",
      text: "Unlock your potential, expand your ideas into reality with us.",
    },
    {
      id: "8",
      title: "MANAGED SERVICE",
      text: "Monitor, review and analyze what needs to be improved and maintained.",
    },
  ];
  const [active, setActive] = useState(services[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto px-12 py-38 items-center">
      {/* LEFT CONTENT */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-blue-600 max-w-xl flex flex-col gap-6"
          >
            <FaQuoteLeft className="text-4xl text-blue-600" />
            <p className="text-xl font-bold leading-tight">{active.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT LIST */}
      <div className="space-y-6">
        {services.map((service) => (
          <button
            key={service.id}
            onMouseEnter={() => setActive(service)}
            className={`w-full flex items-center gap-4 text-left text-xl border-b border-black pb-4 transition
              ${
                active.id === service.id
                  ? "text-blue-600 font-semibold"
                  : "text-black"
              }`}
          >
            <FaArrowCircleLeft /> {service.title}
          </button>
        ))}
      </div>
    </div>
  );
}
