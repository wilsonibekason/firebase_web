import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../services/OnGlobalContext";
import styles from "../../styles/firebaseCustomStyles";
import ProjectModalView from "./ProjectModalView";
import SettingModal from "./SettingModal";
import { ChatModal, ProfileModal, UserModal } from "../modals";
import Tooltip from "./TooltipElement";
import { useStore } from "../../redux/app/zodStore";
// import { useStore } from "zustand";

const FeatureHeader = () => {
  const {
    AiOutlinePlus,
    IoIosAppstore,
    AiOutlineCodeSandbox,
    RiFlutterFill,
    ImCancelCircle,
    FaRobot,
    BiCodeAlt,
    setToogleState,
    toogleState,
    appleHovered,
    onModalClick,
    onSettingModal,
  } = useGlobalContext();
  const navigate = useNavigate();
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);

  return (
    <>
      {onModalClick && <ProjectModalView />}
      {onSettingModal && <SettingModal />}
      <ProfileModal />
      <ChatModal />
      {/* <h1>{count}</h1>
      <button onClick={increase}>Increase</button> */}

      <div
        className={`relative flex flex-start flex-col transition duration-100 pt-5 phone:px-4 desktop:px-20 Xdesktop:px-20 tablet:px-10`}
      >
        <div className="flex flex-row items-center gap-4">
          <h1 className="font-raleway font-semibold text-3xl header-text">
            linkedin_app
          </h1>
          <span className="font-raleway font-semibold border border-solid border-gray-300 w-24 h-5 py-2.5 rounded-xl flex justify-center items-center text-xss bg-blue-700 capitalize text-white shadow hover:bg-blue-300 transition ease-in duration-150 focus:bg-blue-300 cursor-pointer">
            spark plan
          </span>
        </div>
        {/* Container for both toggle states */}
        <div className="relative w-full py-10">
          {/* Slide-in and slide-out flex for options application click */}
          <div
            className={`absolute top-0 left-0 w-full transform transition-transform duration-300 pt-3 ${
              toogleState
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100px] opacity-0"
            } flex flex-1 flex-row items-center mt-3 space-x-2`}
          >
            <Tooltip texts={["cancel"]}>
              <div
                className="p-2 flex items-center justify-center rounded-full bg-blue-800 text-white hover:bg-blue-900 transition ease-in duration-150 focus:bg-blue-900 cursor-pointer"
                onClick={() => setToogleState((prev) => !prev)}
              >
                <ImCancelCircle size={20} />
              </div>
            </Tooltip>

            <div className={`${styles.flexCol} cursor-pointer`}>
              <Tooltip texts={["apple"]}>
                <div
                  className={`${styles.iconBox}`}
                  onClick={() => appleHovered}
                >
                  <IoIosAppstore size={20} />
                </div>
              </Tooltip>
            </div>
            <div className={`${styles.flexCol} cursor-pointer`}>
              <Tooltip texts={["robot"]}>
                <div className={`${styles.iconBox}`}>
                  <FaRobot size={20} />
                </div>
              </Tooltip>
            </div>
            <div
              className={`${styles.flexCol} cursor-pointer`}
              onClick={() => navigate("/web", { replace: true })}
            >
              <Tooltip texts={["web"]}>
                <div className={`${styles.iconBox}`}>
                  <BiCodeAlt size={20} />
                </div>
              </Tooltip>
            </div>
            <Tooltip texts={["codesandbox"]}>
              <div
                className={`${styles.iconBox2} flex flex-col space-y-2 cursor-pointer`}
              >
                <AiOutlineCodeSandbox size={20} />
              </div>
            </Tooltip>

            <div className={`${styles.flexCol} cursor-pointer`}>
              <Tooltip texts={["flutter"]}>
                <div className={`${styles.iconBox2}`}>
                  <RiFlutterFill size={20} />
                </div>
              </Tooltip>
            </div>
            <div className={`${styles.flexCol}`}>
              <h5 className={`${styles.paragraph2}`}>select a platform</h5>
            </div>
          </div>
          {/* Slide-in and slide-out flex for app click */}
          <div
            className={`absolute top-0 left-0 w-full transform transition-transform duration-300 ${
              !toogleState
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100px] opacity-0"
            } flex flex-1 flex-row items-center mt-3 gap-4`}
          >
            <span className="flex w-36 h-5 py-4 pr-2 rounded-2xl items-center gap-1 text-white font-raleway font-semibold text-sm bg-blue-700 hover:bg-blue-900 transition ease-in duration-150 focus:bg-blue-900 cursor-pointer">
              <div className="flex justify-center items-center bg-purple-600 rounded-full p-1.5">
                <AiOutlinePlus className="text-white text-lg font-bold" />
              </div>
              linkedIn rebuilt
            </span>
            <Tooltip texts={["Add App"]}>
              <span
                className="flex w-28 h-5 py-4 rounded-2xl items-center text-white font-robotoCondensed font-normal text-sm bg-blue-700 capitalize px-4 hover:bg-blue-900 transition ease-in duration-150 focus:bg-blue-900 cursor-pointer"
                onClick={() => setToogleState((prev) => !prev)}
              >
                <div>
                  <AiOutlinePlus className="text-white text-xl font-black " />
                </div>
                Add app
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureHeader;
