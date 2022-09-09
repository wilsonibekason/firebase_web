import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { flexCol, flexCol2, flexCol3, flexRow, flexRow2 } = styles;
  return (
    <>
      <div className="flex max-w-full min-h-screen bg-gray-200 tablet:py-10 desktop:py-20 Xdesktop:py-20 tablet:px-0 desktop:px-40 Xdesktop:px-40">
        <div>
          <div
            className={`flex tablet:flex-row-reverse  desktop:flex-row Xdesktop:flex-row  justify-center tablet:justify-end  space-x-8`}
          >
            <div
              className="tablet:justify-end"
              onClick={() => navigate("/", { replace: true })}
            >
              <MdOutlineCancel
                size={30}
                className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-200"
              />
            </div>
            <div className={`${styles.flexCol} space-y-10`}>
              <div>
                <h4
                  className={`font-raleway font-semibold phone:text-md tablet:text-lg laptop:text-2xl desktop:text-3xl Xdesktop:text-3xl text-gray-700 `}
                >
                  Add firebase to your web app
                </h4>
              </div>
              <div>
                <div className={`${styles.flexRow2} space-x-2 -ml-2 mb-1`}>
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
                  <div className={`${flexRow2} items-center space-x-1`}>
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
                      className="border border-solid border-gray-500 outline-none bg-white w-[26rem] py-1.5 px-2 rounded  placeholder:font-light placeholder:font-raleway placeholder:text-gray-500 focus:border-blue-400 focus:border-2 text-gray-800 font-raleway font-normal"
                    />
                  </div>
                  <div
                    className={`${flexRow2} items-center ml-3 space-x-2 mb-8`}
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
                      className={`${flexRow2} items-center space-x-1 font-robotoCondensed font-normal text-sm text-gray-900 `}
                    >
                      <a href="" className="text-blue-500 underline">
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
                      className={`py-2 px-3 bg-gray-300 rounded-lg font-raleway font-normal text-sm `}
                    >
                      Register app
                    </button>
                  </div>
                </div>
                <div
                  className={`${styles.flexRow2} items-center space-x-2 -ml-2 mt-1`}
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
