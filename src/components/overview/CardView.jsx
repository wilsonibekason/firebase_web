import React from "react";
import { ImCancelCircle } from "react-icons/im";

const CardView = () => {
  return (
    <>
      <div
        className="flex flex-row justify-between  pt-10 mx-2 md:mx-0
      "
      >
        <div className="font-raleway font-semibold text-gray-600 text-xl">
          Store and sync app data in milliseconds
        </div>
        {/* desktop:overflow-hidden Xdesktop:overflow-hidden */}
        <ImCancelCircle className="text-2xl font-bold text-gray-600" />
      </div>
      <div className="overflow-visible overflow-x-auto scrollbar-thin flex flex-row basis-full gap-8 mt-6 mx-2 md:mx-0">
        <div className="flex flex-grow flex-auto w-[30%] gap-4">
          {/* cards */}
          <div className="flex flex-col rounded-lg w-full shadow hover:shadow-xl group ">
            <img
              src="https://www.gstatic.com/mobilesdk/171005_mobilesdk/discovery-cards-crashlytics.png"
              alt=""
              className="rounded-t-xl max-w-full h-auto "
            />
            <div className="bg-white rounded-b-xl px-4 py-4 group-hover:shadow-xl">
              <p className="text-gray-800 text-xl font-robotoCondensed font-normal capitalize">
                Crashlytics
              </p>
              <p className="text-gray-700 text-xss font-raleway capitalize">
                prioritarize and fix deug issues
              </p>
            </div>
          </div>
          {/* flex card container */}
          <div className="flex flex-col rounded-lg w-full shadow hover:shadow-xl group ">
            <img
              src="https://www.gstatic.com/mobilesdk/180326_mobilesdk/discoverycards/performance.png"
              alt=""
              className="rounded-t-xl"
            />
            <div className="bg-white rounded-b-xl px-4 py-4 group-hover:shadow-xl">
              <p className="text-gray-800 text-xl font-robotoCondensed font-normal capitalize">
                performance
              </p>
              <p className="text-gray-700 text-xss font-raleway capitalize">
                prioritarize and fix deug issues
              </p>
            </div>
          </div>
          {/* flex card container */}
        </div>
      </div>
      <div className="flex text-blue-500 justify-end mt-4">
        <a href="" className="hover:underline">
          See all Release & Monitor features
        </a>
      </div>
    </>
  );
};

export default CardView;
