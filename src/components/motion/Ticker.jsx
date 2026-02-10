// Ticker.jsx
import { motion } from "framer-motion";
import dashboardPhoto from "../../assets/images/Pasted image (7).png";
import oneImg1 from "../../assets/images/Pasted image (11).png";
import oneImg2 from "../../assets/images/Pasted image (12).png";
import oneImg3 from "../../assets/images/Pasted image.png";

const Ticker = () => {
  const duration = 20;
  const items = [
    <img
      className="w-[80%] h-[80%]  object-cover"
      src={dashboardPhoto}
      alt=""
    />,
    <img className="w-[80%] h-[80%]  object-cover" src={oneImg1} alt="" />,
    <img className="w-[80%] h-[80%]  object-cover" src={oneImg2} alt="" />,
    <img className="w-[80%] h-[80%]  object-cover" src={oneImg3} alt="" />,
  ];
  return (
    <div className="overflow-hidden w-full flex flex-col gap-6 flex-justify">
      <motion.div
        className="flex gap-3 whitespace-nowrap h-[10vh]"
        animate={{ x: ["0%", "-50%"] }} // move left
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {/* duplicate items for seamless looping */}
        {items.map((item, idx) => (
          <div
            key={`first-${idx}`}
            className="flex-shrink-0"
            style={{ width: "15%" }}
          >
            {item}
          </div>
        ))}
        {items.map((item, idx) => (
          <div
            key={`second-${idx}`}
            className="flex-shrink-0"
            style={{ width: "15%" }}
          >
            {item}
          </div>
        ))}
        {items.map((item, idx) => (
          <div
            key={`second-${idx}`}
            className="flex-shrink-0"
            style={{ width: "15%" }}
          >
            {item}
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-3 whitespace-nowrap"
        animate={{ x: ["-50%", "0%"] }} // move left
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {/* duplicate items for seamless looping */}
        {items.map((item, idx) => (
          <div key={`first-${idx}`} className="inline-block">
            {item}
          </div>
        ))}
        {items.map((item, idx) => (
          <div key={`second-${idx}`} className="inline-block">
            {item}
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-3 whitespace-nowrap h-[10vh]"
        animate={{ x: ["0%", "-50%"] }} // move left
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {items.map((item, idx) => (
          <div
            key={`first-${idx}`}
            className="flex-shrink-0"
            style={{ width: "15%" }}
          >
            {item}
          </div>
        ))}
        {items.map((item, idx) => (
          <div
            key={`second-${idx}`}
            className="flex-shrink-0"
            style={{ width: "15%" }}
          >
            {item}
          </div>
        ))}
        {items.map((item, idx) => (
          <div
            key={`second-${idx}`}
            className="flex-shrink-0"
            style={{ width: "15%" }}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
