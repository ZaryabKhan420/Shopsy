import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Light from "../../assets/light-mode-button.png";
import Dark from "../../assets/dark-mode-button.png";
import { FaCaretDown } from "react-icons/fa6";
const Header = ({ handleOrderPopup }) => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 5,
      name: "Electronics",
      link: "/#",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <div className="pt-3 bg-primary/40">
        <div className="flex items-center justify-between container">
          <div className="flex justify-center items-center gap-2">
            <Link to="/">
              <img className="w-10" src={Logo} alt="Logo" />
            </Link>
            <h2 className="font-bold text-2xl sm:text-3xl">Shopsy</h2>
          </div>
          <div className="flex justify-center gap-3 items-center">
            <div className="group items-center relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] rounded-full p-1 transition-all  duration-300 group-hover:w-[300px] border border-gray-400 focus:outline-none focus:border-1 focus:border-orange-400 dark:text-gray-500  dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group:hover:text-primary absolute top-1/2 right-2 translate-x-[-50%] translate-y-[-50%]" />
            </div>
            <button
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-in-out text-white  py-1 px-4 rounded-full flex items-center gap-3 group bg-orange-400 "
              fdprocessedid="inzy4"
              onClick={() => handleOrderPopup()}
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                className="text-xl text-white drop-shadow-sm cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
              </svg>
            </button>

            <div
              className="group light-dark transition-all duration-300"
              onClick={() => {
                document.querySelector("#html").classList.toggle("dark");
              }}
            >
              <img
                className="h-6 cursor-pointer block dark:hidden drop-shadow-[1px_1px_1px_rgbe(0,0,0,0.1)] transition-all duration-300"
                src={Light}
                alt="Light Mode"
              />
              <img
                className="h-6 hidden cursor-pointer dark:block drop-shadow-[1px_1px_1px_rgbe(0,0,0,0.1)] transition-all duration-300"
                src={Dark}
                alt="Dark Mode"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 dark:text-white text-black py-3 mt-3 md:flex items-center justify-center gap-10 hidden">
          {Menu.map((data) => {
            return (
              <Link
                to={data.link}
                key={data.id}
                className="hover:text-primary transition-all duration-300"
              >
                {data.name}
              </Link>
            );
          })}

          <Link
            to="#"
            className="flex items-center justify-center gap-1 pl-2 pr-10 relative group cursor-pointer"
          >
            Trending Products
            <div>
              <FaCaretDown
                className="block transition-all duration-300 group-hover:rotate-180"
                id="dropdown-icon"
              />
            </div>
            <div className="absolute top-[100%] left-0 z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              {DropdownLinks.map((value) => {
                return (
                  <Link
                    key={value.id}
                    to={value.link}
                    className="py-2 px-4 w-full inline-block hover:bg-primary/20 pl-2 pr-10"
                  >
                    {value.name}
                  </Link>
                );
              })}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
