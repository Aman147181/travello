import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="bg-[#365140] flex w-full text-white  justify-center items-center space-y-10 flex-col min-h-[500px]">
        <h1 className="text-center font-garamond text-6xl">Contact us</h1>
        <div className="text-center font-mont text-2xl w-full px-4 max-w-3xl">
          Feel free to reach out to us at any time! Whether you have questions,
          feedback, or inquiries about our services, our team is here to assist
          you.
        </div>
      </div>
    </div>
  );
};

export default Contact;
