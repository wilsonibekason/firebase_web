import React from "react";
import { useIconContext } from "../../../services/OnIconContext";
import styles from "../../../styles/firebaseCustomStyles";

const ChatHomeMenu = () => {
  const {
    flexRowMain,
    flexCentered,
    flexCol7,
    flexStart,
    transitions,
    flexBetween,
    transitions2,
  } = styles;
  const { AiOutlineClose } = useIconContext();
  return (
    <>
      <div className={`group`}>
        <div
          className={`${flexBetween}  group-hover:bg-gray-200 shadow rounded ${transitions2} items-center`}
        >
          {/* justify content 1 */}
          <div className={`${flexRowMain} items-center space-x-4 p-2`}>
            <div>
              <img
                src="https://image.shutterstock.com/image-photo/profile-picture-smiling-young-african-260nw-1873784920.jpg"
                alt=""
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
          {/* justify content 2 */}
          <div className="pr-4">
            <AiOutlineClose
              size={20}
              className={`invisible group-hover:visible ${transitions2} text-gray-800 font-bold `}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatHomeMenu;
