import React from "react";
import { useIconContext } from "../services/OnIconContext";
import styles from "../styles/firebaseCustomStyles";
const FireWeb = () => {
  const {
    MdOutlineCancel,
    BsSquareFill,
    BiSquare,
    AiOutlineQuestionCircle,
    BsFillArrowUpRightSquareFill,
  } = useIconContext();
  const { flexCol, flexCol2, flexCol3, flexRow } = styles;
  return (
    <>
      <div className="flex max-w-full min-h-screen bg-gray-200 py-20 px-40">
        <div>
          <div className={`${styles.flexRow} items-center space-x-8`}>
            <div>
              <MdOutlineCancel size={30} />
            </div>
            <div className={`${styles.flexCol} space-y-10`}>
              <div>
                <h4
                  className={`font-raleway font-semibold text-3xl text-gray-700 `}
                >
                  Add firebase to your web app
                </h4>
              </div>
              <div>
                <div className={`${styles.flexRow} space-x-2 -ml-2 mb-1`}>
                  <div
                    className={`flex justify-center items-center py-0 px-2 bg-blue-600 rounded-full `}
                  >
                    <p className="text-xss">1</p>
                  </div>
                  <h4 className="font-raleway font-normal text-sm text-gray-700">
                    Register app
                  </h4>
                </div>
                <div
                  className={`pl-8 border-l-2 border-solid border-spacing-1 border-gray-300 py-3`}
                >
                  {" "}
                  <div className={`${flexRow} items-center space-x-1`}>
                    <p className="font-raleway font-light text-xss text-gray-900">
                      App nickname
                    </p>
                    <AiOutlineQuestionCircle className="text-gray-700" />
                  </div>
                  <div className=" mb-10">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="My web app"
                      className="border border-solid border-gray-500 outline-none bg-white w-[26rem] py-1.5 px-2 rounded placeholder:text-ellipsis placeholder:font-light placeholder:font-raleway"
                    />
                  </div>
                  <div
                    className={`${flexRow} items-center ml-3 space-x-2 mb-8`}
                  >
                    <BsSquareFill
                      className="border border-solid border-gray-700 rounded"
                      size={20}
                    />
                    <h5
                      className={`font-raleway font-normal text-sm text-gray-900 `}
                    >
                      Also set up{" "}
                      <a
                        href=""
                        className="text-black font-semibold capitalize"
                      >
                        firebase hosting
                      </a>{" "}
                      for this app
                    </h5>
                    <div
                      className={`${flexRow} items-center space-x-1 font-robotoCondensed font-normal text-sm text-gray-900 `}
                    >
                      <a
                        href=""
                        className="text-blue-500 border-b border-blue-500"
                      >
                        Learn more
                      </a>
                      <BsFillArrowUpRightSquareFill className="text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <p
                      className={` ml-8 font-raleway font-normal text-[10px] text-gray-900 `}
                    >
                      Hosting can also be set up later. There is no cost to get
                      started anytime.
                    </p>
                  </div>
                  <div className="mt-10">
                    <button
                      aria-disabled
                      className={`py-2 px-3 bg-gray-400 rounded-lg font-raleway font-normal text-sm `}
                    >
                      Register app
                    </button>
                  </div>
                </div>
                <div
                  className={`${styles.flexRow} items-center space-x-2 -ml-2 mt-1`}
                >
                  <div
                    className={`flex justify-center items-center py-0 px-2 bg-blue-600 rounded-full `}
                  >
                    <p className="text-xss">2</p>
                  </div>
                  <h4 className="font-raleway font-normal text-sm text-gray-700">
                    Add firebase SDK
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FireWeb;
