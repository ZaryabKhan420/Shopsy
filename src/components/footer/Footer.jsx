import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import footerImage from "../../assets/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
function Footer() {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/#",
    },
    {
      id: 2,
      name: "About",
      path: "/#",
    },
    {
      id: 3,
      name: "Contact",
      path: "/#",
    },
    {
      id: 4,
      name: "Blog",
      path: "/#",
    },
  ];

  return (
    <div
      className="min-h-[50rem] sm:min-h-[40rem] md:min-h-[35rem] lg:min-h-[27rem] w-full py-12 px-5"
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16  items-start"
          data-aos="zoom-in"
        >
          <div className="flex flex-col justify-center items-start gap-3">
            <div className="flex justify-center items-center gap-2">
              <Link to="/">
                <img className="w-12" src={Logo} alt="Logo" />
              </Link>
              <h2 className="font-bold text-2xl sm:text-3xl text-white">
                Shopsy
              </h2>
            </div>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          <div className="flex justify-between w-3/5 sm:w-full">
            <div className="flex flex-col gap-3">
              <h2 className="text-white text-xl font-bold mb-2">
                Important Links
              </h2>
              {links.map((value) => {
                return (
                  <Link
                    to={value.path}
                    key={value.id}
                    className="text-white w-fit hover:text-primary hover:translate-x-2 transition-all duration-300"
                  >
                    {value.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-xl font-bold mb-2">Links</h2>
              {links.map((value) => {
                return (
                  <Link
                    to={value.path}
                    key={value.id}
                    className="text-white hover:text-primary hover:translate-x-2 transition-all w-fit duration-300"
                  >
                    {value.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-start items-start sm:items-center gap-3 ">
            <div className="flex items-center gap-3 justify-start mb-3 w-full lg:w-2/4">
              <FaInstagram className="text-white text-3xl" />
              <FaFacebook className="text-white text-3xl" />
              <FaLinkedin className="text-white text-3xl" />
            </div>
            <div className="flex items-center  gap-3 justify-start   w-full lg:w-2/4	">
              <FaLocationArrow className="text-white text-xl" />
              <h2 className="text-white">Gujrat, Pakistan</h2>
            </div>

            <div className="flex items-center justify-start gap-3 w-full lg:w-2/4">
              <FaMobileAlt className="text-white text-xl" />
              <h2 className="text-white">+92 123456789</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
