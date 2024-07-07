import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { IoPricetag } from "react-icons/io5";
const packageCard = (props) => {
  return (
    <div className="w-full flex flex-col">
      <img
        src={props.image}
        alt=""
        className="w-full object-cover max-h-96 rounded-t-3xl"
      />
      <div className="flex justify-between pt-3 items-center">
        <div className="text-xl flex items-center justify-center space-x-1 font-mont"><FaRegClock/><span>{props.days}</span></div>
        <div className="text-xl flex items-center justify-center space-x-1 font-mont"><IoPricetag/><span>{props.price}</span></div>
      </div>
      <h1 className="text-2xl sm:text-3xl font-garamond pt-4">{props.name}</h1>
      <h1 className="text-lg sm:text-xl font-mont pt-1">{props.description}</h1>
    </div>
  );
};

export default packageCard;
