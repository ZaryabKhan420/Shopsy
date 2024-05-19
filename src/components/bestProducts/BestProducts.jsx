import React from "react";
import { Heading, BestProductsCard } from "../index";
import shirt01 from "../../assets/shirt01.png";
import shirt02 from "../../assets/shirt02.png";
import shirt03 from "../../assets/shirt03.png";
const BestProducts = ({ handleOrderPopup }) => {
  const bestProductsDetails = [
    {
      id: 1,
      img: shirt01,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      id: 2,
      img: shirt02,
      title: "Printed Shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      id: 3,
      img: shirt03,
      title: "Women Shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="container">
        <Heading
          punchLine="Top Rated Products for you"
          title="Best Products"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi"
          className="items-start"
        />
        <div className="container mt-10 ">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
            {bestProductsDetails.map((value) => {
              return (
                <BestProductsCard
                  img={value.img}
                  key={value.id}
                  title={value.title}
                  description={value.description}
                  handleOrderPopup={handleOrderPopup}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
