import React from "react";
import orangePattern from "../../assets/orange-pattern-w2kUn2Xh.jpg";
const Subscribe = () => {
  return (
    <div
      className="py-10 bg-red-500 flex flex-col gap-5 justify-center items-center relative"
      style={{
        backgroundImage: `url(${orangePattern})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      data-aos="zoom-in-up"
    >
      <h1 className="text-3xl font-bold text-center text-white">
        Get Notified About New Products
      </h1>
      <input
        type="text"
        placeholder="Enter your email"
        className="w-[45%] p-3"
        data-aos="fade-up"
      />
    </div>
  );
};

export default Subscribe;
