import React from "react";
import { useIconContext } from "../../../services/OnIconContext";
import styles from "../../../styles/firebaseCustomStyles";

const ChatHomeMenu = () => {
  const {
    flexRowMain,
    flexCentered,
    flexCol7,
    flexStart,
    flexBetween,
    transitions2,
  } = styles;
  const { AiOutlineClose } = useIconContext();

  return (
    <div className="group cursor-pointer">
      <div
        className={`${flexBetween} items-center p-2 rounded-lg shadow transition-all duration-300 ease-in-out group-hover:bg-gray-100`}
      >
        <div className={`${flexRowMain} items-center space-x-4`}>
          <div>
            <img
              src="https://image.shutterstock.com/image-photo/profile-picture-smiling-young-african-260nw-1873784920.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div className={`${flexCol7} ${flexStart}`}>
            <h2 className="text-md text-gray-800 font-robotoCondensed font-normal tracking-normal">
              WILSON IBEKASON
            </h2>
            <h4 className="text-sm text-gray-800 font-robotoCondensed font-normal tracking-wide">
              Following
            </h4>
          </div>
        </div>
        <div className="pr-4">
          <AiOutlineClose
            size={20}
            className="invisible group-hover:visible transition-opacity duration-300 ease-in-out text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatHomeMenu;
