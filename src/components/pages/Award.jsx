import React from "react";
import logo1 from "../../assets/images/logo11.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";

const Award = () => {
  return (
    <div className="flex flex-col items-start gap-6 px-20">
      <h1 className="text-blue-600 text-4xl ">RECOGNITION</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-20 ">
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2">
          <div className="">
            <h1>Merit Award winners for the "Heal by Pun Hlaing"</h1>
            <p>IN THE CATEGORY</p>
            <p>PUBLIC SECTOR & SOCIAL INNOVATION</p>
          </div>
          <div className="grid grid-cols-3">
            <img src={logo3} className="w-35 h-30 object-cover" alt="" />
            <img src={logo1} className="w-20 h-20 object-cover" alt="" />
            <img src={logo2} className="w-35 h-30 object-cover" alt="" />
          </div>
        </div>
        <div className="">
          <p>
            We are happy and so excited to share that the telemedicine app
            called "Heal by Pun Hlaing".
          </p>
          <p>
            Built by onenex was selected as one of the Merit Awardees in the
            Category "Public Sector & Social Innovation" at the Asia Smart App
            Award which is organized by The Hong Kong Wireless Technology
            Industry Association.
          </p>
          <p>
            Big applause to our developers, engineers and analysts who
            contributed their best efforts to bring this heal app alive.
          </p>
        </div>
      </div>
      <div className="">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xFrfv4WReKY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Award;
