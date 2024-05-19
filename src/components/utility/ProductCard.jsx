import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ title, author, rating, img, aosDelay }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={aosDelay}>
      <div>
        <img
          src={img}
          loading="lazy"
          alt="Product Image"
          className="h-[220px] w-[150px] object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col mt-4 gap-1 ">
        <h3 className="font-semibold dark:text-white">{title}</h3>
        <p className="text-sm text-gray-400">{author}</p>
        <p className="flex justify-start items-center gap-2 dark:text-white text-md ">
          {" "}
          <FaStar className="text-primary" /> {rating}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
