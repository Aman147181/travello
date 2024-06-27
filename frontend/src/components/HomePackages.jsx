import React from "react";
import PackageCard from "./packageCard";
const dummyPackages = [
  {
    name: "Amazing Adventure",
    price: "$1500",
    description: "An amazing adventure through the mountains and rivers.",
    image: "/baku.jpg",
    days: "4 Days",
    itinerary: [
      {
        name: "Day 1: Arrival",
        highlights: [
          "Arrive at the destination",
          "Check into the hotel",
          "Welcome dinner",
        ],
      },
      {
        name: "Day 2: Mountain Hike",
        highlights: [
          "Breakfast at the hotel",
          "Guided mountain hike",
          "Picnic lunch",
          "Return to hotel",
        ],
      },
      {
        name: "Day 3: River Rafting",
        highlights: [
          "Breakfast at the hotel",
          "Drive to river",
          "River rafting",
          "Lunch at riverside",
          "Return to hotel",
        ],
      },
      {
        name: "Day 4: Departure",
        highlights: [
          "Breakfast at the hotel",
          "Pack and check out",
          "Transfer to airport",
        ],
      },
    ],
  },
  {
    name: "Beach Paradise",
    price: "$2000",
    description: "Enjoy the sun and sand on this tropical beach getaway.",
    image: "/thailand.jpg",
    days: "5 Days",
    itinerary: [
      {
        name: "Day 1: Arrival",
        highlights: [
          "Arrive at the beach resort",
          "Check into the resort",
          "Welcome cocktail",
        ],
      },
      {
        name: "Day 2: Beach Day",
        highlights: [
          "Breakfast at the resort",
          "Relax on the beach",
          "Beach volleyball",
          "Dinner by the sea",
        ],
      },
      {
        name: "Day 3: Snorkeling Adventure",
        highlights: [
          "Breakfast at the resort",
          "Snorkeling trip",
          "Lunch on the boat",
          "Return to resort",
        ],
      },
      {
        name: "Day 4: Island Tour",
        highlights: [
          "Breakfast at the resort",
          "Guided island tour",
          "Lunch at a local restaurant",
          "Return to resort",
        ],
      },
      {
        name: "Day 5: Departure",
        highlights: [
          "Breakfast at the resort",
          "Pack and check out",
          "Transfer to airport",
        ],
      },
    ],
  },
  {
    name: "City Escape",
    price: "$1200",
    description:
      "Discover the hidden gems of the city with this exciting package.",
    image: "/bali.png",
    days: "3 Days",
    itinerary: [
      {
        name: "Day 1: Arrival",
        highlights: [
          "Arrive at the city hotel",
          "Check into the hotel",
          "Welcome dinner",
        ],
      },
      {
        name: "Day 2: City Tour",
        highlights: [
          "Breakfast at the hotel",
          "Guided city tour",
          "Lunch at a local restaurant",
          "Free evening",
        ],
      },
      {
        name: "Day 3: Departure",
        highlights: [
          "Breakfast at the hotel",
          "Pack and check out",
          "Transfer to airport",
        ],
      },
    ],
  },
  {
    name: "Nature Retreat",
    price: "$1800",
    description: "Reconnect with nature on this serene and peaceful retreat.",
    image: "/china.png",
    days: "5 Days",
    itinerary: [
      {
        name: "Day 1: Arrival",
        highlights: [
          "Arrive at the retreat center",
          "Check into your cabin",
          "Welcome meditation",
        ],
      },
      {
        name: "Day 2: Nature Walk",
        highlights: [
          "Breakfast at the retreat center",
          "Guided nature walk",
          "Lunch at the retreat",
          "Afternoon yoga",
        ],
      },
      {
        name: "Day 3: Lake Day",
        highlights: [
          "Breakfast at the retreat center",
          "Canoeing on the lake",
          "Picnic lunch",
          "Return to retreat",
        ],
      },
      {
        name: "Day 4: Forest Exploration",
        highlights: [
          "Breakfast at the retreat center",
          "Forest exploration hike",
          "Lunch in the forest",
          "Return to retreat",
        ],
      },
      {
        name: "Day 5: Departure",
        highlights: [
          "Breakfast at the retreat center",
          "Pack and check out",
          "Transfer to airport",
        ],
      },
    ],
  },
];

const HomePackages = () => {
  return (
    <div className="flex flex-col px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 w-full min-h-96 ">
      <div className="flex flex-col w-full max-w-4xl">
        <h1 className="text-5xl font-garamond">Explore Our Tours</h1>
        <h1 className="text-2xl pt-5 font-mont">
          Dive into adventure with our curated selection of tours, offering
          unforgettable experiences in destinations around the globe.
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 pt-10 gap-y-12 gap-x-16">
        {dummyPackages.map((packageItem, index) => (
          <div className="col-span-1" key={index}>
            <PackageCard
              name={packageItem.name}
              price={packageItem.price}
              description={packageItem.description}
              image={packageItem.image}
              days={packageItem.days}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePackages;
