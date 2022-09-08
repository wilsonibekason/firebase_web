import React from "react";
import { useGlobalContext } from "../../services/OnGlobalContext";

const FeatureHeader = () => {
  const { AiOutlinePlus } = useGlobalContext();
  return (
    <>
      <div
        className={` flex flex-start flex-col  transition duration-100 pt-5 phone:px-4 desktop:px-20 Xdesktop:px-20 tablet:px-10`}
      >
        <div className="flex flex-row items-center gap-4">
          <h1 className="font-raleway font-semibold text-3xl header-text">
            linkedin_app
          </h1>
          <span className=" font-raleway font-semibold border border-solid border-gray-300 w-24 h-5 py-2.5 rounded-xl flex justify-center items-center text-xss bg-blue-700 capitalize text-white shadow hover:bg-blue-300 transition ease-in duration-150 focus:bg-blue-300">
            spark plan
          </span>
        </div>
        <div className="flex flex-1 flex-row items-center mt-3 gap-4">
          <span className="flex w-36 h-5 py-4 pr-2 rounded-2xl items-center gap-1  text-white font-raleway font-semibold text-sm bg-blue-700 hover:bg-blue-900 transition ease-in duration-150 focus:bg-blue-900">
            <div className="flex justify-center items-center bg-purple-600  rounded-full p-1.5 ">
              <AiOutlinePlus className="text-white text-lg font-bold" />
            </div>
            linkedIn rebuilt
          </span>
          <span className="flex w-28 h-5 py-4 rounded-2xl items-center text-white font-robotoCondensed font-normal text-sm bg-blue-700 capitalize px-4 hover:bg-blue-900 transition ease-in duration-150 focus:bg-blue-900">
            <div className="">
              <AiOutlinePlus className="text-white text-xl font-black " />
            </div>
            Add app
          </span>
        </div>
      </div>
    </>
  );
};

export default FeatureHeader;
