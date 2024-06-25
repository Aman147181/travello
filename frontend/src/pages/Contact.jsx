import React, { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const reviews = [
  {
    review: "This was an amazing experience! Highly recommend to everyone. The service was outstanding, and the itinerary was perfectly planned. From start to finish, everything was seamless and stress-free. I can’t wait to book my next trip!",
    img: "/reviewone.jpg",
    name: "Leah Ray",
    location: "New York, USA",
  },
  {
    review: "A truly unforgettable trip. Everything was perfectly organized, and the attention to detail was exceptional. The accommodations were luxurious, and the excursions were exciting and well-guided. A fantastic experience!",
    img: "/reviewtwo.jpg",
    name: "Jane Smith",
    location: "London, UK",
  },
  {
    review: "The best travel service I’ve ever used. Exceptional support throughout the journey. The team was always available and incredibly helpful. Every aspect of the trip exceeded my expectations. Highly recommended!",
    img: "/reviewthree.jpg",
    name: "Mike Johnson",
    location: "Sydney, Australia",
  },
];


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

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

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const currentReview = reviews[currentReviewIndex];

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-y-8 w-full px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 py-10">
        <div className="col-span-1 flex flex-col ">
          <h1 className="font-garamond pb-5 md:pb-10 font-medium text-black text-2xl sm:text-3xl lg:text-4xl ">
            Book your unforgettable travel journey now!
          </h1>
          <h1 className="text-gray-600 pb-6   font-mont text-sm sm:text-lg">
            Embark on an unforgettable travel journey with our expert
            assistance. Let us handle the details while you focus on creating
            lasting memories. Our dedicated team is here to ensure your trip is
            seamless and stress-free from start to finish. Let us turn your
            travel dreams into reality.
          </h1>
          <img
            src="/contact.jpg"
            alt="hero"
            className="w-full object-cover max-h-80 "
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
      <div className="w-full flex flex-col px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 ">
        <h1 className="w-full text-left text-[#b05441] font-mont text-lg sm:text-2xl pt-12">
          Testimonials
        </h1>
        <h1 className="text-left font-mont text-3xl sm:text-5xl">Customer Reviews</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-3 pb-10 ">
          <div className="col-span-1">
            <img
              src="/testimonial.jpg"
              alt="hero"
              className="w-full rounded-xl max-h-96  "
            />
          </div>
          <div className=" col-span-1 lg:col-span-2 rounded-3xl border-2 p-4 sm:p-8 flex flex-col justify-center    h-full border-[#E5E3DC]">
            <h1 className="pb-6 font-mont text-lg sm:text-xl">{currentReview.review}</h1>
            <hr className=" border-b border-[#E5E3DC] w-full" />
            <div  className="flex justify-between pt-9 sm:pt-12 items-center">
              <div className="flex items-center justify-center space-x-2">
                <div>
                  <img
                    src={currentReview.img}
                    alt="user"
                    className="w-12 aspect-square object-cover rounded-full"
                  />
                </div>
                <div>
                  <h1 className="font-mont text-lg">{currentReview.name}</h1>
                  <p className="font-roboto text-base">{currentReview.location}</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div
                  className="flex justify-center border border-slate-300 sm:hover:bg-[#b05441] duration-500 sm:hover:text-white items-center rounded-full size-8 sm:size-10"
                  onClick={handlePreviousReview}
                >
                  <GrPrevious />
                </div>
                <div
                  className="flex justify-center border border-slate-300 sm:hover:bg-[#b05441] duration-500 sm:hover:text-white items-center rounded-full size-8 sm:size-10"
                  onClick={handleNextReview}
                >
                  <GrNext />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
