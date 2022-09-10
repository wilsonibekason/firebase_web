import React from "react";
import styles from "../../styles/firebaseCustomStyles";
import Navbar from "../Navbar";

const AppCheckHeader = () => {
  const {} = styles;

  return (
    <>
      <div className="min-h-[50vh]  appcheck-bg z-[999]">
        {/* navbar */}
        <div className="py-3">
          <Navbar />
        </div>
        <div className=" relative px-44 pt-20 pb-32 flex ">
          <div className={`flex items-start flex-col space-y-6 justify-center`}>
            <h2 className={`text-[40px] font-raleway font-semibold text-white`}>
              App check
            </h2>
            <p
              className={`font-raleway font-semibold text-lg text-white tracking-wide`}
            >
              Protect your backend resources from <br /> abuse, such as billing
              fraud and phishing
            </p>
            <button
              className={`py-2 px-6 font-raleway font-semibold text-xss bg-white text-gray-800 rounded-lg items-center tracking-normal mt-2`}
            >
              Get Started
            </button>
          </div>
          <div className="absolute  top-0 flex right-0">
            <img
              src="https://www.gstatic.com/mobilesdk/220310_mobilesdk/app_check_fore.png"
              alt=""
              className="items-end"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCheckHeader;
