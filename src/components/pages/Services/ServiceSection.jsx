import React, { useState, useEffect, useRef } from "react";

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 },
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(value);
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, value, duration]);

  return <span ref={countRef}>{count}</span>;
};

const ServiceSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f3f0ff] via-[#d8ccff] to-[#7c3aed] min-h-screen py-24 px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <h2 className="text-4xl font-medium uppercase  text-black">
            We are with you for the <br /> long haul
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 max-w-md">
              As you scale, launch your products, and go into new markets, we
              continue to support your business.
            </p>
            <div className="text-6xl font-bold text-[#7c3aed]">
              <AnimatedNumber value="2.3" /> YEARS
              <p className="text-sm font-normal text-gray-600 uppercase mt-2">
                Industry average length of client
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <h2 className="text-4xl font-medium uppercase  text-black">
            We know what it <br /> takes to launch
          </h2>
          <div className="flex gap-16">
            <div>
              <div className="text-6xl font-bold text-[#7c3aed]">
                <AnimatedNumber value="150" />+
              </div>
              <p className="text-sm font-normal text-gray-600 uppercase mt-2">
                Product Launch
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold text-[#7c3aed]">
                <AnimatedNumber value="30" />
              </div>
              <p className="text-sm font-normal text-gray-600 uppercase mt-2">
                Industries Sector
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 (Full Width Center) */}
        <div className="text-center space-y-8 pt-20 border-t border-white/20">
          <h2 className="text-4xl  font-bold uppercase  text-white max-w-5xl mx-auto">
            We’re an extension of your team. One goal, one team and one big
            product.
          </h2>
          <div>
            <div className="text-8xl font-bold text-cyan-300">
              <AnimatedNumber value="70" />+
            </div>
            <p className="text-white uppercase tracking-widest mt-4">
              Team Members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
