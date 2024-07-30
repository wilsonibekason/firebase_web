import React from "react";
import { ImCancelCircle } from "react-icons/im";
import CardView from "./CardView";

const FirebaseCard = () => {
  return (
    <>
      <CardView />
      <CardView />
      <CardView />
      <div
        className="flex flex-row justify-between pt-10
      "
      >
        <div className="font-raleway font-semibold text-gray-600 text-xl">
          Deploy extended functionality to your app quickly{" "}
        </div>
        {/* desktop:overflow-hidden Xdesktop:overflow-hidden */}
        <ImCancelCircle className="text-2xl font-bold text-gray-600 cursor-pointer" />
      </div>
      <div className="w-full h-auto flex flex-col mt-4 ">
        <img
          src="https://www.gstatic.com/mobilesdk/190913_mobilesdk/extensions_wide.png"
          alt=""
          className="rounded-t-xl"
        />
        <div className="bg-white rounded-b-xl px-4 py-4 group-hover:shadow-xl">
          <p className="text-gray-800 text-xl font-robotoCondensed font-normal capitalize">
            Extensions{" "}
          </p>
          <p className="text-gray-700 text-xss font-raleway capitalize">
            Extensions Pre-packaged solutions that save you time{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default FirebaseCard;
