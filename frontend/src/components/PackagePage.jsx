import React from 'react';
import { Link } from 'react-router-dom';
import PackageCard from './packageCard';
import { dummyPackages } from "../data/Packages";

const PackagePage = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col pt-24 pb-16 px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 w-full min-h-96">
      <div className="flex flex-col w-full max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-garamond">Explore Our Tours</h1>
        <h1 className="text-xl lg:text-2xl pt-5 font-mont">
          Dive into adventure with our curated selection of tours, offering
          unforgettable experiences in destinations around the globe.
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 pt-10 gap-y-12 gap-x-16">
        {dummyPackages.map((packageItem, index) => (
          <div className="col-span-1" key={index}>
            <Link to={`/packages/${packageItem.id}`}>
              <PackageCard
                name={packageItem.name}
                price={packageItem.price}
                description={packageItem.description}
                image={packageItem.image}
                days={packageItem.days}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagePage;
