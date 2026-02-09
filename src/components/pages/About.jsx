import React from "react";
import NavImg from "../../assets/images/image.png";
const About = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="relative w-full  text-center px-8 mt-12">
        <div
          className="bg-blue-600 py-16 h-[35vh] rounded-xl shadow-xl w-full
             flex flex-col justify-center items-center text-center gap-12"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 80px) 0, 100% 80px, 100% 100%, 0 100%)",
            borderRadius: "16px",
          }}
        >
          <p className=" text-white text-2xl fw-bold uppercase mb-4">
            WHO ARE WE
          </p>
          <h2 className="text-yellow-300 text-2xl md:text-4xl font-semibold">
            We are a full-service tech company designing and building impactful
            digital products, brands, and meaningful experiences.
          </h2>
        </div>

        <div className="absolute top-2 right-8">
          <img
            src={NavImg}
            alt=""
            className="w-20 h-20 rounded-full object-cover "
          />{" "}
        </div>
      </div>
      <div className="w-full flex flex-col gap-8 items-center text-center ">
        <p className=" text-white text-2xl fw-bold uppercase mb-4">
          WHAT DO WE DO
        </p>
        <h2 className="text-yellow-500 text-2xl md:text-4xl font-semibold px-16">
          We do a lot here - no matter what our project size is, we all strive
          to understand and partner with our clients to create something new and
          exciting.
        </h2>
      </div>
    </div>
  );
};

export default About;
