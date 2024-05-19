import React from "react";
import { Heading, ProductCard } from "../index";
import women from "../../assets/women.png";
import women2 from "../../assets/women2.jpg";
import women3 from "../../assets/women3.jpg";
import women4 from "../../assets/women4.jpg";

const Product = () => {
  const productDetails = [
    {
      id: 1,
      img: women,
      title: "Women Ethnic",
      rating: 5,
      author: "white",
      aosDelay: 0,
    },
    {
      id: 2,
      img: women2,
      title: "Women Western",
      rating: 4.5,
      author: "Red",
      aosDelay: 200,
    },
    {
      id: 3,
      img: women3,
      title: "Goggles",
      rating: 4.7,
      author: "brown",
      aosDelay: 400,
    },
    {
      id: 4,
      img: women4,
      title: "Printed T-Shirt",
      rating: 4.4,
      author: "Yellow",
      aosDelay: 600,
    },
    {
      id: 5,
      img: women2,
      title: "Fasion T-Shirt",
      rating: 4.5,
      author: "Pink",
      aosDelay: 800,
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <Heading
        title="Products"
        punchLine="Top Selling Products for you"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi"
      />
      <div className="container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-16 place-items-center gap-5">
          {productDetails.map((value) => {
            return (
              <ProductCard
                key={value.id}
                title={value.title}
                author={value.author}
                rating={value.rating}
                img={value.img}
                aosDelay={value.aosDelay}
              />
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="text-white bg-primary px-4 py-2 rounded-lg">
          View All Button
        </button>
      </div>
    </div>
  );
};

export default Product;
