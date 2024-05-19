import React from "react";

const OrderButton = ({ handleOrderPopup }) => {
  return (
    <div className="text-center">
      <button
        className="bg-gradient-to-r from-primary to-secondary  text-white py-2 px-4 rounded-full"
        onClick={() => {
          handleOrderPopup();
        }}
      >
        Order Now
      </button>
    </div>
  );
};

export default OrderButton;
