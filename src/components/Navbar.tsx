import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" max-w-7xl m-auto flex items-center justify-between flex-wrap px-6 py-5">
      <a href="#hero">
        <img
          className="transform hover:scale-105 md:hover:scale-125 transition duration-500"
          src={Logo}
          alt=""
        />
      </a>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-[#5D5F79] border-teal-800 hover:text-[#E9AB53] hover:border-[#E9AB53]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full h-screen  lg:h-3 lg:mx-auto block flex-grow lg:flex lg:justify-end lg:w-auto ml-3`}
      >
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#E9AB53] mr-4 transform hover:scale-105 lg:hover:scale-125 transition duration-500"
        >
          Home
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#E9AB53] mr-4 transform hover:scale-105 lg:hover:scale-125 transition duration-500"
        >
          New
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#E9AB53] mr-4 transform hover:scale-105 lg:hover:scale-125 transition duration-500"
        >
          Popular
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#E9AB53] mr-4 transform hover:scale-105 lg:hover:scale-125 transition duration-500"
        >
          Trending
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#E9AB53] mr-4 transform hover:scale-105 lg:hover:scale-125 transition duration-500"
        >
          Categories
        </a>
      </div>
    </div>
  );
};

export default Navbar;

//
