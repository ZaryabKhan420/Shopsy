import React from "react";
import { RxCross2 } from "react-icons/rx";
const PopUp = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen bg-black/50 fixed top-0 left-0 flex justify-center items-center z-50">
            <div className="p-3 rounded-lg sm:w-80 bg-white dark:bg-gray-900 flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <h3 className="text-md font-semi-bold text-black dark:text-white">
                  Order Now
                </h3>
                <RxCross2
                  className="text-xl text-black dark:text-white cursor-pointer"
                  onClick={() => {
                    setOrderPopup(false);
                  }}
                />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="border text-black dark:text-white border-gray-300 dark:border-gray-500 p-2 rounded-full bg-white dark:bg-gray-800 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 dark:border-gray-500  p-2 rounded-full text-black dark:text-white bg-white dark:bg-gray-800 outline-none"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="border border-gray-300 dark:border-gray-500 p-2 rounded-full text-black dark:text-white bg-white dark:bg-gray-800 outline-none"
                />
                <div className="text-center">
                  <button className="bg-gradient-to-r from-primary to-secondary  text-white py-2 px-4 rounded-full">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
