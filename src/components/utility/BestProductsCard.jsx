import React from "react";
import { FaStar } from "react-icons/fa";
import { OrderButton } from "../index";
const BestProductsCard = ({ img, title, description, handleOrderPopup }) => {
  return (
    <div className="relative" data-aos="zoom-in">
      <div className="flex flex-col gap-1 justify-center items-center px-5 relative  py-2 group ">
        <img
          src={img}
          alt="Product Image"
          loading="lazy"
          className="w-[140px] z-[6] group-hover:scale-[1.1] transition-all duration-300"
        />
        <div className="h-[270px] w-[300px] rounded-2xl flex flex-col gap-1 justify-end items-center mt-[-30%] z-[5] dark:bg-gray-800 py-5 group-hover:bg-gray-800 dark:group-hover:bg-primary">
          <div className="flex group-hover:scale-[1.1] transition-all duration-300">
            <FaStar className="text-primary" />{" "}
            <FaStar className="text-primary" />{" "}
            <FaStar className="text-primary" />{" "}
            <FaStar className="text-primary" />
          </div>
          <h3 className="dark:text-white text-lg font-bold text-center group-hover:text-white transition-all duration-300">
            {title}
          </h3>
          <p className="dark:text-gray-500 text-sm text-center group-hover:text-white transition-all duration-300">
            {description}
          </p>
          <div className="mt-3">
            <OrderButton handleOrderPopup={handleOrderPopup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProductsCard;
