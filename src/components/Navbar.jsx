import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalContext } from "../services/OnGlobalContext";
import { ImBell } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
import { UserModal } from "./modals";
import {
  modalState,
  openDropdown,
  openModalDropdown,
} from "../redux/features/globalStateSlice/globalStateSlice";
import { useIconContext } from "../services/OnIconContext";
import styles from "../styles/firebaseCustomStyles";
const Navbar = () => {
  const {
    GiHamburgerMenu,
    setVisibleSidebar,
    AiOutlineArrowDown,
    visibleNav,
    setModalClick,
    onUserModal,
  } = useGlobalContext();
  const { BsFillChatDotsFill } = useIconContext();
  const { transitions } = styles;
  const dispatch = useDispatch();
  const openDropdownRef = () => dispatch(openDropdown());
  const openModalDropdownRef = () => dispatch(openModalDropdown());
  const chatModalState = useSelector(modalState);
  return (
    <>
      {!onUserModal && <UserModal />}
      <nav
        className={`flex flex-row justify-between ${
          !visibleNav ? "navbar-bg-initial" : "navbar-bg-final"
        } sticky`}
      >
        {/* left column */}
        <div className="flex flex-row flex-1 items-center pl-1 md:pl-2 lg:pl-4 desktop:space-x-0 tablet:space-x-2 phone:space-x-0">
          <div className="flex lg:hidden">
            <GiHamburgerMenu
              className="text-lg md:text-2xl mr-0.5 md:mr-1 lg:mr-2"
              onClick={() => setVisibleSidebar((prev) => !prev)}
            />
          </div>
          <div
            className="hidden items-center space-x-1  md:flex"
            onClick={() => setModalClick((prev) => !prev)}
          >
            <h6 className="font-raleway cursor-pointer font-normal text-sm text-gray-200 ">
              linkedIn-app
            </h6>
            <AiOutlineArrowDown
              size={15}
              className="text-white font-semibold"
            />
          </div>
          <div className="font-raleway font-semibold text-sm  capitalize text-gray-300 block desktop:hidden target:block  Xdesktop:hidden phone:hidden">
            overview
          </div>
        </div>
        {/* right column */}
        <div className="flex flex-row gap-2 md:gap-3 lg:gap-4 items-center">
          <h4 className="font-raleway font-semibold text-sm text-white phone:hidden tablet:hidden laptop:block desktop:block Xdesktop:block cursor-pointer hover:text-gray-300 ">
            go to docs
          </h4>

          <div className="relative">
            <ImBell className={`text-2xl ${transitions} hover:text-gray-400`} />
            <div className="absolute inset-y-0 right-2 flex items-center pl-1.5 bg-red-500 w-2 h-2 rounded-full cursor-pointer"></div>
          </div>
          <div
            className="phone:hidden  tablet:hidden laptop:block desktop:block Xdesktop:block cursor-pointer"
            onClick={openModalDropdownRef}
          >
            <BsFillChatDotsFill
              className={`text-2xl  cursor-pointe ${transitions} hover:text-gray-400 ${
                chatModalState && "text-gray-400r"
              }`}
            />
          </div>
          <div className="phone:block tablet:block laptop:hidden desktop:hidden Xdesktop:hidden cursor-pointer">
            <BsThreeDotsVertical
              className={`text-2xl ${transitions} hover:text-gray-400`}
            />
          </div>
          <div onClick={openDropdownRef} className="">
            <img
              src="https://lh3.googleusercontent.com/ogw/AOh-ky0Y0GWS8yodSDtiKJ6FOlNqNxLYt0B--1EThip08A=s32-c-mo"
              alt=""
              className="phone:w-6 phone:h-6  tablet:w-6 tablet:h-6 desktop:w-8 desktop:h-8 Xdesktop:w-[34px] Xdesktop:h-[34px] rounded-full p-1 hover:shadow cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
