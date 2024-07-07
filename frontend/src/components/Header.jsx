import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/packages", text: "Packages" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <div className="w-full fixed top-0 z-[20]">
      <div className="flex justify-between px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 items-center w-full h-16 bg-[#FFF9F9]">
        <h1 className="text-xl text-[#F64F02] italic font-bold font-play">
          <Link to="/">Travello</Link>
        </h1>
        <div className="hidden md:flex items-center justify-center font-roboto space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-[#F64F02] transition-colors duration-300 ${
                location.pathname === link.to ? "text-[#F64F02]" : "text-gray-700"
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <button className="hidden md:block text-lg border border-[#F64F02] hover:text-white hover:bg-[#F64F02] duration-500 rounded-full px-7 py-[3px] text-[#F64F02] font-roboto">
          login
        </button>
        <button
          className="md:hidden text-[#F64F02]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#FFF9F9] w-full absolute top-16 left-0 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4 font-roboto">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={toggleMenu}
              className={`hover:text-[#F64F02] transition-colors duration-300 ${
                location.pathname === link.to ? "text-[#F64F02]" : "text-gray-700"
              }`}
            >
              {link.text}
            </Link>
          ))}
          <button className="text-lg border border-[#F64F02] hover:text-white hover:bg-[#F64F02] duration-500 rounded-full px-7 py-[3px] text-[#F64F02] font-roboto">
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;