import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../services/OnGlobalContext";
import styles from "../../styles/firebaseCustomStyles";
import ProjectModalView from "./ProjectModalView";
import SettingModal from "./SettingModal";
import { ProfileModal, UserModal } from "../modals";
import Tooltip from "./TooltipElement";

const FeatureHeader = () => {
  const {
    AiOutlinePlus,
    AiOutlineArrowRight,
    IoIosAppstore,
    AiOutlineCodeSandbox,
    RiFlutterFill,
    ImCancelCircle,
    FaRobot,
    BiCodeAlt,
    setToogleState,
    toogleState,
    onTooltipHover,
    setOnTooltipHover,
    toogleSlide,
    //// return login states
    androidHovered,
    webHovered,
    unityHovered,
    flutterHovered,
    appleHovered,
    andriodHover,
    appleHover,
    flutterHover,

    unityHover,
    webHover,
    onModalClick,
    setModalClick,
    onSettingModal,
    onUserModal,
  } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <>
      {onModalClick && <ProjectModalView />}
      {onSettingModal && <SettingModal />}
      <ProfileModal />
      {/* {!onUserModal && <UserModal />} */}
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
        {/* second flex for options application click */}
        <div
          className={` ${
            toogleState ? "flex" : "hidden"
          }  flex-1 flex-row items-center mt-3 space-x-2  transition-all ease-linear duration-700 delay-500`}
        >
          <div
            className="p-2 flex items-center justify-center rounded-full bg-blue-800 text-white hover:bg-blue-900 transition ease-in duration-150 focus:bg-blue-900"
            onClick={() => setToogleState((prev) => !prev)}
          >
            <ImCancelCircle size={20} />
          </div>
          <div className={`${styles.flexCol}`}>
            <div className={`${styles.iconBox} `} onClick={() => appleHovered}>
              <IoIosAppstore size={20} />
            </div>
            <Tooltip
              name={"apple"}
              customStyles="capitalize"
              hoverType={appleHover}
            />
          </div>
          <div className={`${styles.flexCol}`}>
            <div className={`${styles.iconBox}`}>
              <FaRobot size={20} />
            </div>
            <Tooltip name={"apple"} customStyles="capitalize" />
          </div>
          <div
            className={`${styles.flexCol}`}
            onClick={() => navigate("/web", { replace: true })}
          >
            <div className={`${styles.iconBox}`}>
              <BiCodeAlt size={20} />
            </div>
            <Tooltip name={"apple"} customStyles="capitalize" />
          </div>
          <div className={`${styles.iconBox2} flex flex-col space-y-2`}>
            <AiOutlineCodeSandbox size={20} />
          </div>
          <div className={`${styles.flexCol}`}>
            <div className={`${styles.iconBox2}`}>
              <RiFlutterFill size={20} />
            </div>
            <Tooltip name={"apple"} customStyles="capitalize" />
          </div>
          <div className={`${styles.flexCol}`}>
            <h5 className={`${styles.paragraph2}`}>select a platform</h5>
          </div>
        </div>
        {/* second flex index for app click */}
        <div
          className={` ${
            !toogleState ? "flex" : "hidden"
          }  flex-1 flex-row items-center mt-3 gap-4 transition-all ease-linear duration-700 delay-500`}
        >
          <span className="flex w-36 h-5 py-4 pr-2 rounded-2xl items-center gap-1  text-white font-raleway font-semibold text-sm bg-blue-700 hover:bg-blue-900 transition ease-in duration-150 focus:bg-blue-900">
            <div className="flex justify-center items-center bg-purple-600  rounded-full p-1.5 ">
              <AiOutlinePlus className="text-white text-lg font-bold" />
            </div>
            linkedIn rebuilt
          </span>
          <span
            className="flex w-28 h-5 py-4 rounded-2xl items-center text-white font-robotoCondensed font-normal text-sm bg-blue-700 capitalize px-4 hover:bg-blue-900 transition ease-in duration-150 focus:bg-blue-900"
            onClick={() => setToogleState((prev) => !prev)}
          >
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
