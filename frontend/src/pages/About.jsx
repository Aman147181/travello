import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Testimonial from "../components/Testimonial";
const About = () => {
  return (
    <div className="w-full pt-12 px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32">
      <h1 className="w-full text-left text-[#F64F02] font-mont text-lg sm:text-2xl pt-12">
        About Us
      </h1>
      <h1 className="text-left font-mont pb-10 text-3xl sm:text-5xl">
        WHO WE ARE
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full pb-10">
        <div className="col-span-1 grid gap-6 grid-rows-1 xl:grid-rows-3">
          <div className="row-span-2">
            <img
              src="/aboutone.jpg"
              alt="hero"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
          <div className="row-span-1 hidden xl:flex flex-col rounded-2xl bg-white border shadow-sm p-4 space-y-8 sm:p-10 border-slate-200">
            <h1 className="font-mont pt-6">
              Whether you're a seasoned globetrotter or a first-time traveler,
              we're here to turn your dream trips into reality. Join our community of thousands of satisfied
              customers and start your next adventure with us today!
            </h1>
            <div className="flex items-center justify-center pt-5 space-x-2">
              <div className="rounded-full px-4 py-1 flex items-center space-x-2 border-black border">
               <h1>30+ Destinations</h1> <h1 className="text-2xl"><CiLocationOn /></h1>
              </div>
              <div className="rounded-full px-4 py-1 flex items-center space-x-2 border-black border">
               <h1>3000+ Satisfactions</h1> <img src="/satisfaction.svg"/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 grid gap-6 grid-row-2 xl:grid-rows-3">
          <div className="row-span-1  flex flex-col rounded-2xl bg-white border shadow-sm p-4 sm:p-10 border-slate-200">
            <h1 className="font-roboto text-2xl">
              Travello is your gateway to a peaceful and luxurious vacation.
            </h1>
            <h1 className="font-mont pt-6">
            We're passionate about making travel accessible, enjoyable, and affordable for everyone. Founded in 2012, our mission is to simplify the travel planning process and inspire wanderlust in our customers.
            </h1>
            <h1 className="font-mont xl:hidden pt-6">
              Whether you're a seasoned globetrotter or a first-time traveler,
              we're here to turn your dream trips into reality. Join our community of thousands of satisfied
              customers and start your next adventure with us today!
            </h1>
            <div className=" xl:hidden flex items-center pt-5  justify-center space-x-2">
              <div className="rounded-full px-4 py-1 flex items-center space-x-2 border-black border">
               <h1>30+ Destinations</h1> <h1 className="text-2xl"><CiLocationOn /></h1>
              </div>
              <div className="rounded-full px-4 py-1 flex items-center space-x-2 border-black border">
               <h1>3000+ Satisfactions</h1> <img src="/satisfaction.svg"/>
              </div>
            </div>
          </div>
          <div className="xl:row-span-2 row-span-1 ">
            <img
              src="/abouttwo.jpg"
              alt="hero"
              className="rounded-2xl w-full xl:h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Testimonial/>
    </div>
  );
};

export default About;
