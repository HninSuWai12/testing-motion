import React, { useState, useEffect, useRef } from "react";

// Reusable wrapper for the fade-in effect
const Reveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 },
    ); // Trigger when 10% is visible

    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } h-screen`}
    >
      {children}
    </div>
  );
};

const ServicePage = () => {
  return (
    <div className="bg-[#6333FF] text-white font-sans ">
      {/* Branding Section */}
      <section className="h-[40vh] p-12 border-b border-white/20">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-6xl font-bold text-cyan-400 mb-8 uppercase">
                Branding
              </h2>
              <p className="max-w-md text-lg text-white/80">
                Figuring out who you are and what you're really about. We help
                come up with a branding creative that tells your story.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-cyan-400 font-bold uppercase tracking-widest">
                Service Detail
              </h3>
              <ul className="space-y-2 text-xl">
                <li>Findings & Opportunities</li>
                <li>Brand Strategy</li>
                <li>Identity Development</li>
                <li>Digital Collateral</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Discovery Section */}
      <section className="h-[40vh] p-12 border-b border-white/20">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-6xl font-bold text-cyan-400 mb-8 uppercase">
                Discovery
              </h2>
              <p className="max-w-md text-lg text-white/80">
                We uncover insights and design products through a process of
                exploration to achieve user-centric products.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold uppercase tracking-widest">
                Service Detail
              </h3>
              <p className="mt-4 text-white/70">
                We help build digital products and solutions that enhance
                consumer's lives...
              </p>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="h-[40vh] p-12 border-b border-white/20">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-6xl font-bold text-cyan-400 mb-8 uppercase">
                Branding
              </h2>
              <p className="max-w-md text-lg text-white/80">
                Figuring out who you are and what you're really about. We help
                come up with a branding creative that tells your story.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-cyan-400 font-bold uppercase tracking-widest">
                Service Detail
              </h3>
              <ul className="space-y-2 text-xl">
                <li>Findings & Opportunities</li>
                <li>Brand Strategy</li>
                <li>Identity Development</li>
                <li>Digital Collateral</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Discovery Section */}
      <section className="h-[40vh] p-12">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-6xl font-bold text-cyan-400 mb-8 uppercase">
                Discovery
              </h2>
              <p className="max-w-md text-lg text-white/80">
                We uncover insights and design products through a process of
                exploration to achieve user-centric products.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold uppercase tracking-widest">
                Service Detail
              </h3>
              <p className="mt-4 text-white/70">
                We help build digital products and solutions that enhance
                consumer's lives...
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default ServicePage;
