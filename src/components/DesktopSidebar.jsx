import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import {} from "react-icons/io";
import { Navbar } from "./../components";
import { useGlobalContext } from "./../services/OnGlobalContext";
import TabletSidebar from "./../components/TabletSidebar";

import {
  DropdownContainer,
  FeatureAnalysis,
  FeatureHeader,
  FirebaseCard,
} from "./../components/overview";
import { control, firebaseLogo } from "./../assets";
import styles from "../styles/firebaseCustomStyles";
import SettingModal from "./../components/overview/SettingModal";

const DesktopSidebar = () => {
  const navigate = useNavigate();
  // const [open, setOpen] = useState(true);
  const {
    GiHamburgerMenu,
    setVisibleSidebar,
    visibleSidebar,
    toogleSidebar,
    FaHome,
    FcSettings,
    BiRightArrow,
    AiOutlineSetting,
    MdPeopleOutline,
    FaIndustry,
    AiOutlineEye,
    AiOutlineMenu,
    FaCubes,
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiOutlineArrowDown,
    GiWorld,
    AiOutlineArrowUp,
    setDropdown,
    dropdown,
    buildDropdown,
    setBuildDropdown,
    releaseDropdown,
    setReleaseDropdown,
    setOnSettingModal,
    onSettingModal,
    setOpen,
    open,
  } = useGlobalContext();
  return (
    <div
      className={` ${
        open ? "w-64 duration-300 " : "w-16 duration-500"
      } hidden md:hidden lg:block bg-[#00001a] h-auto transition-all ease-linear   pt-1 relative  `}
    >
      <img
        src={control}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
     border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      {/* gap-x-4 */}
      <Link to={"/"}>
        <div className="flex gap-x-4 items-center px-5 py-2">
          <img
            // src="./src/assets/logo.png"
            onClick={() => navigate("/", { replace: true })}
            src={firebaseLogo}
            className={`cursor-pointer duration-500 w-7 h-7 ${
              open && "rotate-[360deg]"
            }`}
          />

          <h1
            className={`text-white origin-left font-medium text-xl duration-200 capitalize ${
              !open && "scale-0"
            }`}
          >
            firebase
          </h1>
        </div>
      </Link>
      {/* <hr className="w-full h-px text-gray-300" /> */}
      <div className="w-full h-px border-[0.001px] border-gray-900" />
      {/* scrollable sections */}
      <div
        className={` h-[78vh] ${
          !open
            ? ""
            : "scrollbar-thumb-gray-400 scrollbar-thin scrollbar-thumb-rounded overflow-visible overflow-y-auto"
        }   `}
      >
        <div
          className={`flex flex-row justify-between items-center transition-all ease-linear duration-100 ${
            !open ? "hidden scale-0" : "flex "
          }`}
        >
          <div
            className={`flex items-center space-x-2 hover:bg-gray-900 focus:bg-gray-900 active:bg-gray-900 py-4 pl-5`}
          >
            <FaHome className="sidetext-color " size={20} />
            <h4 className="sidetext-color font-raleway font-medium whitespace-nowrap text-sm pr-6">
              project overview
            </h4>
            <div className="h-6 border-x-[1px] border-gray-800 " />
          </div>

          <div
            className={`flex items-center group mr-5`}
            onClick={() => setOnSettingModal((prev) => !prev)}
          >
            <AiOutlineSetting
              size={20}
              className="text-white"
              // onClick={() => setOnSettingModal((prev) => !prev)}
            />
            <BiRightArrow
              className="text-white invisible group-hover:visible invert-0 transition ease-in duration-300"
              size={10}
            />
          </div>
        </div>
        {/* project overview section  */}
        <div className="w-full h-px border-[0.001px] border-gray-900" />
        {/* project shortcuts sections */}
        <div className={`py-4 ${open ? "block " : "hidden "}`}>
          <h4 className="font-raleway font-medium text-xss text-gray-400  capitalize ml-4 mb-4">
            project section 
          </h4>
          <div className="mr-1.5 ml-2.5 space-y-2">
            <div className="group">
              <div
                className="flex items-center justify-between group-hover:bg-gray-900 
            transition-all duration-700 ease-linear delay-75 py-2.5 rounded-lg
        "
              >
                <div className="flex items-center pl-2">
                  <MdPeopleOutline size={20} />
                  <p className="font-raleway font-semibold text-xss text-gray-200 capitalize ml-2">
                    authentication
                  </p>
                </div>
                <div className=" mr-2 hidden group-hover:block">
                  <AiOutlineMenu
                    className="  transition-all duration-700 ease-linear delay-100"
                    size={10}
                  />
                </div>
                <div className="mr-2">
                  <AiOutlineEye className="hidden group-hover:block   transition-all duration-700 ease-linear delay-100" />
                </div>
              </div>
            </div>
            {/* sections 2 */}
            <div className="group ">
              <div
                className="flex items-center justify-between  group-hover:bg-gray-900 
        transition-all duration-700 ease-linear delay-75 py-2.5 rounded-lg
        "
              >
                <div className="flex items-center pl-2">
                  <FaIndustry />

                  <p className="font-raleway font-semibold text-xss text-gray-200 capitalize ml-2">
                    extensions
                  </p>
                </div>
                <div className=" mr-2 hidden group-hover:block">
                  <AiOutlineMenu
                    className="  transition-all duration-700 ease-linear delay-100"
                    size={10}
                  />
                </div>
                <div className="mr-2">
                  <AiOutlineEye className="hidden group-hover:block   transition-all duration-700 ease-linear delay-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px border-[0.001px] border-gray-900" />
        {/* products categories section */}
        <div className={`py-4 px-3 ${open ? "block" : "hidden"}`}>
          <h4 className="font-raleway font-medium text-xss text-gray-400  capitalize ml-4 mb-4">
            project categories
          </h4>
          {/* contanier trigger */}
          {/* <DropdownContainer /> */}
          <div
            className="px-4 bg-gray-900 flex justify-between rounded-t-lg py-3 focus:bg-gray-700 hover:bg-gray-700"
            onClick={() => setDropdown((prev) => !prev)}
          >
            <div>
              <h4 className="font-raleway font-semibold text-sm text-white capitalize">
                Analytics
              </h4>
            </div>
            <div>
              {!dropdown ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
            </div>
          </div>
          {/* hidden containrer contents */}
          <div
            className={`flex flex-col bg-gray-900 ${
              dropdown || releaseDropdown ? "" : "rounded-b-lg"
            }  py-3  transition-all duration-300 ease-linear delay-300 ${
              dropdown ? "block " : "hidden"
            }`}
          >
            <div className="flex flex-row gap-x-4 items-center hover:bg-gray-700  px-4 py-2 rounded-lg">
              <div>
                <GiWorld />
              </div>
              <div>
                <h5 className={`${styles.paragraph} text-white`}>Hosting </h5>
              </div>
            </div>
            <div className="flex flex-row gap-x-4 items-center hover:bg-gray-700  px-4 py-2 rounded-lg">
              <div>
                <GiWorld />
              </div>
              <div>
                <h5 className={`${styles.paragraph} text-white`}>Hosting </h5>
              </div>
            </div>
            {/*  */}
          </div>
          {/* hidden containrer contents */}
          <div className="w-full  border-[0.0003px] border-gray-500" />
          {/* contanier trigger */}
          <div
            className="px-4 bg-gray-900 flex justify-between py-3 focus:bg-gray-700 hover:bg-gray-700"
            onClick={() => setReleaseDropdown((prev) => !prev)}
          >
            <div>
              <h4 className="font-raleway font-semibold text-sm text-white capitalize">
                release & monitor
              </h4>
            </div>
            <div>
              {!releaseDropdown ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
            </div>
          </div>
          {/* hidden containrer contents */}
          <div
            className={`flex flex-col bg-gray-900 ${
              dropdown || releaseDropdown ? "" : "rounded-b-lg"
            }  py-3  transition-all duration-300 ease-linear delay-300 ${
              releaseDropdown ? "block " : "hidden"
            }`}
          >
            <div className="flex flex-row gap-x-4 items-center hover:bg-gray-700  px-4 py-2 rounded-lg">
              <div>
                <GiWorld />
              </div>
              <div>
                <h5 className={`${styles.paragraph} text-white`}>Hosting </h5>
              </div>
            </div>
            <div className="flex flex-row gap-x-4 items-center hover:bg-gray-700  px-4 py-2 rounded-lg">
              <div>
                <GiWorld />
              </div>
              <div>
                <h5 className={`${styles.paragraph} text-white`}>Hosting </h5>
              </div>
            </div>
            {/*  */}
          </div>
          {/* hidden containrer contents */}
          <div className="w-full h-px border-[0.001px] border-gray-600" />

          {/* contanier trigger */}
          <div
            className={`px-4 bg-gray-900 flex justify-between ${
              !buildDropdown ? "rounded-b-lg" : ""
            }  py-3 focus:bg-gray-700 hover:bg-gray-700 `}
            onClick={() => setBuildDropdown((prev) => !prev)}
          >
            <div>
              <h4 className="font-raleway font-semibold text-sm text-white capitalize">
                build
              </h4>
            </div>
            <div>
              {!buildDropdown ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
            </div>
          </div>
          {/* hidden containrer contents */}
          <div
            className={`flex flex-col bg-gray-900 ${
              dropdown || releaseDropdown ? "" : "rounded-b-lg"
            } py-3  transition-all duration-300 ease-linear delay-300 ${
              buildDropdown ? "block " : "hidden"
            }`}
          >
            <div className="flex flex-row gap-x-4 items-center hover:bg-gray-700  px-4 py-2 rounded-lg">
              <div>
                <GiWorld />
              </div>
              <div>
                <h5 className={`${styles.paragraph} text-white`}>Hosting </h5>
              </div>
            </div>
            <div className="flex flex-row gap-x-4 items-center hover:bg-gray-700  px-4 py-2 rounded-lg">
              <div>
                <GiWorld />
              </div>
              <div>
                <h5 className={`${styles.paragraph} text-white`}>Hosting </h5>
              </div>
            </div>
            {/*  */}
          </div>
          {/* hidden containrer contents */}
        </div>
        {/* products categories section */}
        {/* endo of product section */}
        <div className={` group ${open ? "block " : "hidden"}`}>
          <div className="flex gap-x-4 items-center group-hover:bg-gray-900 pl-4 py-4">
            <FaCubes />
            <h4 className="font-raleway font-semibold text-xss text-gray-400 capitalize">
              All products
            </h4>
          </div>
        </div>
        {/* badge container  */}
        <div
          className={`m-4 bg-gray-900 px-4 py-6 rounded-lg shadow-md space-y-4 ${
            !open ? "hidden" : "block"
          }`}
        >
          <div>
            <h3 className="font-raleway font-semibold text-sm text-white ">
              <span className="capitalize">customize</span> your nav!
            </h3>
          </div>
          <div>
            <p className="font-raleway font-semibold text-xss text-gray-200   leading-snug">
              <span className="capitalize">you</span> can now focus your console
              experience by customizing your navigation{" "}
            </p>
          </div>
          <div className="flex flex-start items-center space-x-4">
            <h4 className="font-raleway font-semibold text-sm text-blue-300 py-2 px-3 rounded-lg hover:bg-gray-700 active:bg-gray-700 transition duration-100  ">
              Learn more
            </h4>
            <h4 className="font-raleway font-semibold text-sm text-blue-300 py-2 px-3 rounded-lg hover:bg-gray-700 active:bg-gray-700 transition duration-100 ">
              Got it
            </h4>
          </div>
        </div>
        {/* badge container  */}
        <ul className={` ${open ? "hidden" : " block p-3 pt-4"}`}>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center hover:bg-gray-900 `}
          >
            <FaHome size={20} />
          </li>
          {/* <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center ${styles.ulbg} `}
          >
            <AiOutlineSetting size={20} />
          </li> */}
          <div
            className={`flex items-center group    rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm  `}
            onClick={() => setOnSettingModal((prev) => !prev)}
          >
            <AiOutlineSetting
              size={20}
              className="text-white"
              // onClick={() => setOnSettingModal((prev) => !prev)}
            />
            <BiRightArrow
              className="text-white hidden group-hover:block invert-0 transition ease-in duration-300"
              size={10}
            />
          </div>
          <div className="w-full  border-[0.0003px] border-gray-500" />

          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center ${styles.ulbg} `}
          >
            <MdPeopleOutline size={20} />
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center ${styles.ulbg} `}
          >
            <FaIndustry size={20} />
          </li>
          <div className="w-full  border-[0.0003px] border-gray-500" />

          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center ${styles.ulbg} `}
          >
            <AiOutlineMenu size={20} />
          </li>
          <div className="w-full  border-[0.0003px] border-gray-500" />

          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center ${styles.ulbg} `}
          >
            <AiOutlineArrowRight
              size={20}
              onClick={() => setOpen((prev) => !prev)}
            />
          </li>
        </ul>
      </div>
      {/* end of scrollable container  */}
      <div className="w-full h-px border-[0.001px] border-gray-900" />
      {/* spark container  */}
      <div className={`flex justify-around py-2 ${open ? "block" : "hidden"}`}>
        <div className="flex flex-col">
          <p className="font-raleway font-semibold text-xss text-gray-500 capitalize">
            spark
          </p>
          <p className="text-gray-700 text-xss font-raleway capitalize">
            no-cost $0/month{" "}
          </p>
        </div>
        <div>
          <p className="font-raleway font-semibold text-sm text-gray-400 py-2 px-3 rounded-lg hover:bg-gray-700 active:bg-gray-700 transition duration-100">
            upgrade
          </p>
        </div>
      </div>
      <div className="w-full h-px border-[0.001px] border-gray-900" />

      {/* spark container  */}
      {/* close arrow div */}
      <div
        className={`flex justify-end items-center py-3 pr-5 ${
          open ? "block" : "hidden"
        }`}
      >
        <AiOutlineArrowLeft
          size={20}
          className="text-gray-800 hover:text-white transition ease-in duration-100"
          onClick={() => setOpen((prev) => !prev)}
        />

        {/* <AiOutlineArrowLeft
      size={20}
      className="text-gray-800 hover:text-white transition ease-in duration-100"
      onClick={() => setOpen((prev) => !prev)}
    /> */}
      </div>
      {/* close arrow div */}
      {/*  */}
    </div>
  );
};

export default DesktopSidebar;
