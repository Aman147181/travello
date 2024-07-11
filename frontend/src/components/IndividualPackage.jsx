import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { dummyPackages } from "../data/Packages";
import { Tabs, Tab } from "@nextui-org/react";
import { Link } from "react-router-dom";
import PackageCard from "./packageCard";
const IndividualPackage = () => {
  const { id } = useParams();
  const packages = dummyPackages.find((pkg) => pkg.id === parseInt(id));
  const similarPackages = dummyPackages.filter(
    (pkg) => pkg.id !== parseInt(id)
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!packages) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center  w-full">
        <h1 className="text-5xl sm:text-7xl md:text-[100px] text-[#F64F02] font-bold font-dance ">
          404
        </h1>
        
        <p className="text-base sm:text-xl md:text-2xl font-roboto text-[#6d6d6d] pb-8">
          We can’t find the Package your are looking for.
        </p>

        <Link
          to="/"
          className=" text-lg sm:text-xl md:text-2xl border border-[#F64F02] hover:text-white hover:bg-[#F64F02] duration-500 rounded-full px-7 py-[3px] text-[#F64F02]  font-roboto"
        >
          Back to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4  sm:px-12 md:px-20 lg:px-28 py-24 xl:px-32 w-full">
      <h1 className="font-mont text-5xl font-medium text-black ">
        {packages.name}
      </h1>
      <div
        className={`grid pb-10 pt-4 grid-cols-2 md:grid-cols-4 text-lg max-w-3xl place-items-start gap-5 gap-x-3 font-roboto`}
      >
        <div className="flex flex-col">
          <h1>Cost</h1>
          <h1 className="font-medium">USD {packages.price}</h1>
        </div>

        <div className="flex flex-col">
          <h1>No. of People</h1>
          <h1 className="font-medium">{packages.numberOfPeople} people</h1>
        </div>
        <div className="flex flex-col">
          <h1>Duration</h1>
          <h1 className="font-medium">{packages.days}</h1>
        </div>
        <div className="flex flex-col">
          <h1>Location</h1>
          <h1 className="font-medium">{packages.location}</h1>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="flex flex-col col-span-5 lg:col-span-3">
          <img
            src={packages.image}
            className="w-full object-cover max-h-[360px] rounded-2xl "
            alt={packages.name}
          />
        </div>
        <div className="flex col-span-5 lg:hidden font-mont text-justify    ">
          {packages.description}
        </div>
        <div className="flex col-span-5 lg:col-span-2 flex-col max-h-[360px] lg:sticky lg:top-20  rounded-2xl bg-white border shadow-sm p-8    border-slate-200  ">
          <h1 className="text-3xl font-mont font-medium pb-4 ">Itinerary</h1>
          <Tabs
            aria-label="Dynamic tabs"
            color="primary"
            variant="solid"
            items={packages.itinerary}
          >
            {(item) => (
              <Tab key={item.name} title={item.name}>
                <ul className="list-disc pl-5">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="mb-1">
                      {highlight}
                    </li>
                  ))}
                </ul>{" "}
              </Tab>
            )}
          </Tabs>
        </div>
        <div className=" hidden lg:flex col-span-5 lg:col-span-3  font-mont text-justify    ">
          {packages.description}
        </div>

        <div className="flex flex-col  col-span-5 lg:col-span-3  font-mont text-justify    ">
          <h1 className="text-3xl font-mont font-medium pb-4 ">
            Package Inclusions
          </h1>
          <ul className="list-disc pl-5">
            {packages.inclusions.map((inclusion, i) => (
              <li key={i} className="mb-1">
                {inclusion}
              </li>
            ))}
          </ul>{" "}
        </div>

        <div className="flex flex-col col-span-5 lg:col-span-3  font-mont text-justify    ">
          <h1 className="text-3xl font-mont font-medium pb-4 ">
            Package Exclusions
          </h1>
          <ul className="list-disc pl-5">
            {packages.exclusions.map((exclusion, i) => (
              <li key={i} className="mb-1">
                {exclusion}
              </li>
            ))}
          </ul>{" "}
        </div>
      </div>
      <h1 className="pt-12 font-mont text-4xl font-medium">Similar Packages</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 pt-6 gap-10">
       
        {similarPackages.slice(0,3).map((packageItem, index) => (
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

export default IndividualPackage;
