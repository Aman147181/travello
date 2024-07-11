import React,{ useState } from 'react'

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
const Testimonial = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    
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
    <div className="w-full flex flex-col  ">
    <h1 className="w-full text-left text-[#F64F02] font-mont text-lg sm:text-2xl pt-12">
      Testimonials
    </h1>
    <h1 className="text-left font-mont text-3xl sm:text-5xl">Customer Reviews</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-6 pb-10 ">
      <div className="col-span-1">
        <img
          src="/testimonial.jpg"
          alt="hero"
          className="w-full rounded-xl max-h-96  "
        />
      </div>
      <div className=" col-span-1 lg:col-span-2 rounded-3xl border-2 p-4 sm:p-8 flex flex-col justify-center    h-full border-[#E5E3DC]">
        <h1 className="pb-6 font-mont text-lg sm:text-xl">" {currentReview.review} "</h1>
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
              className="flex justify-center border border-slate-300 sm:hover:bg-[#F64F02] duration-500 sm:hover:text-white items-center rounded-full size-8 sm:size-10"
              onClick={handlePreviousReview}
            >
              <GrPrevious />
            </div>
            <div
              className="flex justify-center border border-slate-300 sm:hover:bg-[#F64F02] duration-500 sm:hover:text-white items-center rounded-full size-8 sm:size-10"
              onClick={handleNextReview}
            >
              <GrNext />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonial