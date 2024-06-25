import React from "react";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";


const Contact = () => {
  

  return (
    <div className="min-h-screen w-full  flex flex-col">
      <div className="bg-[#365140] px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 flex w-full text-white  justify-center items-center space-y-10 flex-col min-h-[500px]">
        <h1 className="text-center font-garamond text-6xl">Contact us</h1>
        <div className="text-center font-mont text-xl w-full px-4 max-w-2xl">
          Feel free to reach out to us at any time! Whether you have questions,
          feedback, or inquiries about our services, our team is here to assist
          you.
        </div>
      </div>
      
      <Testimonial />
      <FAQ/>
    </div>
  );
};

export default Contact;
