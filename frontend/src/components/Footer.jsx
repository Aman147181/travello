import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex justify-start min-h-96 items-center w-full flex-col pt-12 pb-8  px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 space-y-6 bg-[#365140]">
      <div className="flex items-center w-full  text-white justify-between font-mont space-x-10">
        <Link to="/">
          <h1 className="text-4xl  font-bold font-dance">Travello</h1>
        </Link>
        <div className="flex items-center justify-center space-x-5">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
          <hr className=" border-b border-[#4A6353] w-full" />
          <div className="w-full grid grid-cols-1 gap-y-5  sm:grid-cols-2">
              <div className="col-span-1 ">
                  <h1 className="font-garamond font-medium text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">LET'S HAVE A <br /> CONVERSATION</h1>
                  <h1 className="text-white pt-6  font-roboto text-sm sm:text-base pl-4 sm:pl-10">Travello specializes in efficient booking services and crafting <br/>personalized itineraries for seamless and unforgettable travel experiences.</h1>
              </div>
              <div className="col-span-1 flex flex-col items-end ">
                  <h1 className="font-garamond font-medium text-white  text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">Follow Us</h1>
                  <div className="flex items-center justify-start space-x-5 pt-3 sm:pt-6">
                      <a href="https://www.facebook.com/"><FaFacebook className="text-white hover:text-[#b05441] lg:text-2xl" /></a> 
                      <a href="https://www.instagram.com/"><FaInstagram className="text-white hover:text-[#b05441] lg:text-2xl" /></a>
                      <a href="https://twitter.com/"><FaTwitter className="text-white hover:text-[#b05441] lg:text-2xl" /></a>
                  </div>
              </div>
          </div>
      <hr className=" border-b border-[#4A6353] w-full" />
          
      <p className="text-white font-roboto text-base sm:text-lg">
        Copyright © 2022 Travello. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
