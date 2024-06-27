import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 items-center w-full h-16 bg-[#FFF9F9] z-[20] fixed top-0">
      <h1 className="text-xl text-[#F64F02] italic font-bold font-play">
        <Link to="/">Travello</Link>
      </h1>
      <div className="sm:flex items-center hidden  justify-center font-roboto space-x-5 md:space-x-10">
        <Link to="/">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button className="text-lg border border-[#F64F02] hover:text-white hover:bg-[#F64F02] duration-500 rounded-full px-7 py-[3px] text-[#F64F02]  font-roboto">
        login
      </button>
    </div>
  );
};

export default Header;
