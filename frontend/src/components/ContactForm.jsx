import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending data to server
    console.log("Form data submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-y-8 w-full px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 py-10">
      <div className="col-span-1 flex flex-col ">
        <h1 className="font-garamond pb-5 md:pb-10 font-medium text-black text-2xl sm:text-3xl lg:text-4xl ">
          Book your unforgettable travel journey now!
        </h1>
        <h1 className="text-gray-600 pb-6   font-mont text-sm sm:text-lg">
          Embark on an unforgettable travel journey with our expert assistance.
          Let us handle the details while you focus on creating lasting
          memories. Our dedicated team is here to ensure your trip is seamless
          and stress-free from start to finish. Let us turn your travel dreams
          into reality.
        </h1>
        <img
          src="/contact.jpg"
          alt="hero"
          className="w-full object-cover max-h-[420px] "
        />
      </div>

      <div className="col-span-1 bg-white border shadow-sm p-4 sm:p-10 border-slate-200 rounded-lg flex space-y-7 sm:space-y-10 flex-col">
        <h2 className="text-4xl font-medium font-garamond text-center">
          Send Us A Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-6">
          <div>
            <input
              placeholder="Enter your name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm  focus:ring-[#b05441] focus:border-[#b05441]"
              required
            />
          </div>
          <div>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#b05441] focus:border-[#b05441]"
              required
            />
          </div>
          <div>
            <input
              placeholder="Enter your phone number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#b05441] focus:border-[#b05441]"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#b05441] focus:border-[#b05441]"
              rows="6"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-[#b05441] rounded-md shadow-sm hover:bg-[#964737] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
