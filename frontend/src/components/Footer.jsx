import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex justify-start min-h-96 items-center w-full flex-col pt-12 pb-8 px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 space-y-6 bg-[#151515]">
      <Link to="/" className="text-white text-4xl italic font-play">
        Travello
      </Link>
      <div className="grid grid-cols-1 min-h-72 border-x-0 lg:grid-cols-2 border-2 border-[#262626] w-full">
        <div className="col-span-1 pr-5 text-white border-b-2 lg:border-b-0 lg:border-r-2 border-[#262626]">
          <div className="flex flex-col h-full items-center lg:items-start justify-start pt-10 w-full lg:max-w-lg pb-12 lg:pb-0">
            <h1 className="text-slate-200 uppercase text-base font-roboto">
              join our newsletter
            </h1>
            <h1 className="text-slate-100 text-2xl pt-1 font-mont">
              Keep Up With The Latest News And Updates From Travello
            </h1>
            <div className="flex items-center mt-6 justify-between pl-3 max-w-lg rounded-full w-full border-2 border-[#262626] p-1 focus-within:border-[#4f4e4e]">
              <input
                className="bg-inherit focus:outline-none flex-grow text-white"
                placeholder="Enter your email"
              />
              <button className="text-white bg-[#F64F02] px-7 py-2 rounded-full">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 text-white flex">
          <div className="flex justify-center items-start w-full space-x-32 p-10">
            <div className="flex  flex-col space-y-1">
              <h1 className="font-mont ">PAGES</h1>
              <Link to="/" className="font-roboto hover:text-[#F64F02]">
                Home
              </Link>
              <Link to="/about" className="font-roboto hover:text-[#F64F02]">
                About
              </Link>
              <Link to="/contact" className="font-roboto hover:text-[#F64F02]">
                Contact
              </Link>
            </div>
            <div className="flex col-span-1 flex-col space-y-1">
              <h1 className="font-mont ">CONNECTED</h1>
              <a
                href="https://facebook.com"
                className="font-roboto hover:text-[#F64F02]"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                className="font-roboto hover:text-[#F64F02]"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                className="font-roboto hover:text-[#F64F02]"
              >
                Twitter
              </a>
              <a
                href="tel:+911234567890"
                className="font-roboto hover:text-[#F64F02]"
              >
                (+91) 1234567890
              </a>
              <a
                href="mailto:info@example.com"
                className="font-roboto hover:text-[#F64F02]"
              >
                info@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-gray-200 font-roboto">© 2024 Travello. All rights reserved.</h1>
    </div>
  );
};

export default Footer;
