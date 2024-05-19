import React from "react";
import { Heading, TestimonialCard } from "../index";
import img1 from "../../assets/90-104x104.jpg";
import img2 from "../../assets/330-103x103.jpg";
import img3 from "../../assets/829-101x101.jpg";
import img4 from "../../assets/1004-103x103.jpg";
import img5 from "../../assets/1025-101x101.jpg";
import img6 from "../../assets/1054-102x102.jpg";
import img7 from "../../assets/1079-102x102.jpg";
import Slider from "react-slick";
const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "John Doe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img1,
    },
    {
      id: 2,
      name: "Noah",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img2,
    },
    {
      id: 3,
      name: "George",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img3,
    },
    {
      id: 4,
      name: "Arthur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img4,
    },
    {
      id: 5,
      name: "Aaron Paul",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img5,
    },
    {
      id: 6,
      name: "Oliver",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img6,
    },
    {
      id: 7,
      name: "Muhammad",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni consequuntur, tenetur atque obcaecati blanditiis.",
      img: img7,
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="container ">
        <div className="py-16 ">
          <Heading
            punchLine="What our customers are saying"
            title="Testimonials"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
"
          />
          <div className="grid grid-cols-1 mt-24" data-aos="zoom-in">
            <Slider {...settings}>
              {testimonialData.map((value) => {
                return <TestimonialCard value={value} key={value.id} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
