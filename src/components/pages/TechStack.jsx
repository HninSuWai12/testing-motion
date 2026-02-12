import React from "react";
import Ticker from "../motion/Ticker";
import TechTicker from "../motion/TechTicker";
import oneImg1 from "../../assets/images/Pasted image (11).png";
import oneImg2 from "../../assets/images/Pasted image (12).png";
import oneImg3 from "../../assets/images/Pasted image.png";
const TechStack = () => {
  return (
    <div
      className="h-[90vh] flex flex-col gap-12 items-center text-center  flex-justify "
      style={{ background: "#0e5275" }}
    >
      <div className="w-full flex flex-col gap-6 items-center mt-12 text-center ">
        <p className="  text-2xl fw-bold  mb-4 text-white">Tech Stack</p>
        <h2 className=" text-2xl  font-bold px-16 text-white">
          Work with future proof technologies to power growth
        </h2>
      </div>
      <TechTicker />
      <div className="w-full flex flex-col gap-8 items-center mt-12 text-center ">
        <p className="  text-2xl fw-bold  mb-4 text-white">
          Our Technology Partners
        </p>
        <div className=" px-16 flex flex-justify gap-12">
          <img
            className="w-[27%] h-[27%]  object-cover rounded"
            src={oneImg1}
            alt=""
          />

          <img
            className="w-[27%] h-[27%]  object-cover rounded"
            src={oneImg2}
            alt=""
          />

          <img
            className="w-[27%] h-[27%]  object-cover rounded"
            src={oneImg3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
