import React from "react";
import women2 from "../../assets/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const Sale = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="container pt-16 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
          <div className="blue-800 flex justify-center items-center">
            <img
              src={women2}
              alt="Sale"
              loading="lazy"
              className="w-[400px] h-[350px] object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
              data-aos="zoom-in"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-5">
            <h1 className="text-4xl font-bold dark:text-white ">
              Winter Sale upto 50% Off
            </h1>
            <p className="text-gray-500" data-aos="fade-up">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex flex-col pl-2 gap-5">
              <div className="flex gap-8 items-center " data-aos="fade-up">
                <div className="p-4 bg-gray-100 rounded-full dark:bg-violet-400 dark:text-white">
                  <GrSecure />
                </div>

                <h3 className="dark:text-white">Quality Products</h3>
              </div>
              <div className="flex gap-8 items-center" data-aos="fade-up">
                <div className="p-4 bg-primary/20 rounded-full dark:bg-orange-400 dark:text-white">
                  <IoFastFood />
                </div>
                <h3 className="dark:text-white">Fast Delivery</h3>
              </div>
              <div className="flex gap-8 items-center" data-aos="fade-up">
                <div className="p-4 bg-blue-100 rounded-full dark:bg-green-400 dark:text-white">
                  <GiFoodTruck />
                </div>
                <h3 className="dark:text-white ">Easy Payment Method</h3>
              </div>
              <div className="flex gap-8 items-center" data-aos="fade-up">
                <div className="p-4 bg-primary/40 rounded-full dark:bg-yellow-400 dark:text-white">
                  <GiFoodTruck />
                </div>
                <h3 className="dark:text-white">Get Offers</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
