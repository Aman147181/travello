import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

const faqContent = [
  {
    question: "What is the cancellation policy?",
    answer: "You can cancel your trip up to 30 days before the departure date for a full refund. Cancellations made within 30 days of departure may incur a cancellation fee. Please refer to our terms and conditions for more details."
  },
  {
    question: "Are there any discounts for group bookings?",
    answer: "Yes, we offer discounts for group bookings of 10 or more people. Please contact our customer service team for more information and to get a personalized quote."
  },
  {
    question: "What should I pack for my trip?",
    answer: "Packing recommendations vary depending on your destination and the season. We suggest bringing comfortable clothing, suitable footwear for excursions, and any personal items you may need. A detailed packing list will be provided upon booking confirmation."
  },
  {
    question: "Is travel insurance included?",
    answer: "Travel insurance is not included in the package, but we highly recommend purchasing it for your peace of mind. We offer a comprehensive travel insurance plan that you can add to your booking."
  },
  {
    question: "Can I customize my travel itinerary?",
    answer: "Absolutely! We specialize in creating personalized travel itineraries to match your preferences and interests. Please reach out to our travel consultants to start planning your custom trip."
  }
];

const FAQ = () => {
  return (
    <div className="w-full flex flex-col px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 ">
      <h1 className="w-full text-left text-[#b05441] font-mont text-lg sm:text-2xl pt-12">
        FAQs
      </h1>
      <h1 className="text-left font-mont text-3xl sm:text-5xl">HAVE ANY QUESTIONS?</h1>
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 pt-3 pb-10 ">
        <div className="col-span-1 lg:col-span-3">
          <img
            src="/FAQ.jpg"
            alt="hero"
            className="w-full rounded-xl object-cover max-h-96  lg:max-h-full"
          />
        </div>
        <div className="col-span-1 lg:col-span-5 font-mont">
          <Accordion>
            {faqContent.map((faq, index) => (
              <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} title={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
