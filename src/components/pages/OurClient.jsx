import React from "react";
import Ticker from "../motion/Ticker";

const OurClient = () => {
  return (
    <div className="h-[64vh] flex flex-col gap-12 items-center text-center  flex-justify bg-gray-100">
      <div className="w-full flex flex-col gap-8 items-center mt-12 text-center ">
        <p className="  text-2xl fw-bold  mb-4">OUR CLIENTS</p>
        <h2 className=" text-2xl  font-bold px-16">
          We make a great partner for companies who need a scalable design
          system, solution partner, or a team for start-to-finish development -
          everything you need.
        </h2>
      </div>
      <Ticker />
    </div>
  );
};

export default OurClient;
