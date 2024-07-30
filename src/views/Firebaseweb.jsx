import React from "react";
import { useNavigate } from "react-router-dom";
import FirebaseWebSecond from "../components/firebaseweb/second/FirebaseWebSecond";
import { useIconContext } from "../services/OnIconContext";
import styles from "../styles/firebaseCustomStyles";
import Tooltip from "../components/overview/TooltipElement";

const FireWeb = () => {
  const {
    MdOutlineCancel,
    BsSquareFill,
    AiOutlineQuestionCircle,
    BsFillArrowUpRightSquareFill,
  } = useIconContext();
  const navigate = useNavigate();
  const { flexCol, flexRow2 } = styles;

  return (
    <div className="flex max-w-full min-h-screen bg-gray-200 py-10 px-0 desktop:py-20 desktop:px-40">
      <div className="flex flex-col items-center w-full">
        <div className="flex justify-between w-full mb-8">
          <MdOutlineCancel
            size={30}
            className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-200 cursor-pointer"
            onClick={() => navigate("/", { replace: true })}
          />
        </div>
        <div className={`${styles.flexCol} space-y-10`}>
          <h4 className="font-raleway font-semibold text-lg desktop:text-3xl text-gray-700">
            Add Firebase to your web app
          </h4>
          <div className="space-y-6">
            <div className={`${styles.flexRow2} space-x-2 mb-1`}>
              <div className="flex justify-center items-center py-0 px-2 bg-blue-600 rounded-full">
                <p className="text-xss text-white">1</p>
              </div>
              <h4 className="font-raleway font-normal text-sm text-gray-700">
                Register app
              </h4>
            </div>
            <div className="pl-8 border-l-2 border-gray-300 py-3">
              <div className={`${flexRow2} items-center space-x-1`}>
                <p className="font-raleway font-light text-xss text-gray-900">
                  App nickname
                </p>
                <Tooltip texts={["your app name"]}>
                  <AiOutlineQuestionCircle className="text-gray-700" />
                </Tooltip>
              </div>
              <input
                type="text"
                placeholder="My web app"
                className="border border-gray-500 outline-none bg-white w-[26rem] py-1.5 px-2 rounded placeholder:font-light placeholder:font-raleway placeholder:text-gray-500 focus:border-blue-400 focus:border-2 text-gray-800 font-raleway font-normal mt-2 mb-4"
              />
              <div className={`${flexRow2} items-center ml-3 space-x-2 mb-8`}>
                <BsSquareFill
                  className="border border-solid border-gray-700 rounded"
                  size={20}
                />
                <h5 className="font-raleway font-normal text-sm text-gray-900">
                  Also set up{" "}
                  <a href="#" className="text-black font-semibold capitalize">
                    Firebase hosting
                  </a>{" "}
                  for this app
                </h5>
                <div className={`${flexRow2} items-center space-x-1`}>
                  <a href="#" className="text-blue-500 underline">
                    Learn more
                  </a>
                  <BsFillArrowUpRightSquareFill className="text-blue-500" />
                </div>
              </div>
              <p className="ml-8 font-raleway font-normal text-[10px] text-gray-900">
                Hosting can also be set up later. There is no cost to get
                started anytime.
              </p>
              <button
                disabled
                className="mt-4 py-2 px-3 bg-gray-300 rounded-lg font-raleway font-normal text-sm cursor-not-allowed"
              >
                Register app
              </button>
            </div>
            <div className={`${styles.flexRow2} items-center space-x-2 -ml-2`}>
              <div className="flex justify-center items-center py-0 px-2 bg-blue-600 rounded-full">
                <p className="text-xss text-white">2</p>
              </div>
              <h4 className="font-raleway font-normal text-sm text-gray-700">
                Add Firebase SDK
              </h4>
            </div>
            <FirebaseWebSecond />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireWeb;
