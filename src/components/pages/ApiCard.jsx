import React, { useEffect, useState, useRef } from "react";
import { getapiList } from "../../api/commonApi";
import { motion, useScroll, useTransform } from "framer-motion";

const ApiCard = () => {
  const [freeApiList, setFreeApiList] = useState([]);
  const [loading, setLoading] = useState(true);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // This maps the vertical scroll (0 to 1) to horizontal movement
  // Adjust "-70%" to a larger number if you have many cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  useEffect(() => {
    const fetchfreeApiData = async () => {
      try {
        const data = await getapiList();
        setFreeApiList(data?.slice(1, 6) || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchfreeApiData();
  }, []);

  return (
    // 1. The tall container (defines scroll length)
    <section ref={targetRef} className="relative h-[300vh]">
      {/* 2. The sticky wrapper (stays in view) */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {loading ? (
          <div className="w-full text-center text-white">Loading...</div>
        ) : (
          <motion.div style={{ x }} className="flex gap-8 px-[10vw]">
            {freeApiList.map((cart) => {
              const firstProduct = cart.products?.[0];
              return (
                <div
                  key={cart.id}
                  className="group relative h-[450px] w-[450px] overflow-hidden bg-white rounded-lg "
                >
                  <div className="h-2/3 overflow-hidden">
                    <img
                      src={firstProduct?.thumbnail}
                      alt={firstProduct?.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold uppercase text-blue-900">
                        <span className="inline-block mr-2">↖</span>
                        {firstProduct?.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-gray-500 line-clamp-2">
                      Creating an intuitive experience for{" "}
                      {firstProduct?.brand || "our clients"}.
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ApiCard;
