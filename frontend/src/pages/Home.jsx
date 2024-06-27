import React from "react";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import Quote from "../components/Quote";
import HomePackages from "../components/HomePackages";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="flex w-full flex-col space-y-10 items-center justify-center min-h-[600px]">
        <h1 className=" bold text-7xl max-w-4xl text-center font-roboto text-black ">
          Let’s enjoy your desired trip with{" "}
          <span className="font-play text-4xl font-bold italic text-[#F64F02]">Travello</span>
        </h1>
        <h1 className="text-xl font-roboto text-gray-400">
        A multinational Travel Management Company with a 25-year long global presence and expertise in business travel sector.
        </h1>
        <button className="rounded-full bg-[#F64F02] hover:bg-[#F64F02] text-white px-7 py-2">
          View Packages
        </button>
      </div>
      <HomePackages/>
      <div className="px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 ">
      <Testimonial />
      </div>

     <Quote/>
      <FAQ/>
    </div>
  );
};

export default Home;
