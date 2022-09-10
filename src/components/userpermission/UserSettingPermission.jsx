import React from "react";
import { useIconContext } from "../../services/OnIconContext";
import styles from "../../styles/firebaseCustomStyles";

const UserSettingPermission = () => {
  const {
    BiUpArrowAlt,
    AiOutlineSearch,
    AiFillSetting,
    BiDownArrowAlt,
    BsThreeDotsVertical,
    MdOutlineCancel,
  } = useIconContext();

  const {
    flexCol4,
    flexRow2,
    flexCol3,
    flexCol5,
    flexCol6,
    flexCentered2,
    buttonStyles3,
    borderBottom,
    paragraph6,
    paragraph13,
    paragraph12,
    transitions,
  } = styles;
  return (
    <div className={`${flexCol6} `}>
      {/* first container  */}
      <div>
        <div className={`${flexCol4} px-4 bg-gray-50 py-1.5`}>
          <div className={`${flexRow2} justify-between items-center`}>
            {/* input code */}

            <div className="relative text-gray-600 focus-within:text-gray-400 ">
              {/* input search */}
              <span className="absolute inset-y-1 flex items-center pl-2 ">
                <button type="submit" class="p-1 ">
                  <AiOutlineSearch size={20} />
                </button>
              </span>
              <input
                type="text"
                placeholder="Search members"
                className={`max-w-[300px] w-80 p-1.5 rounded-lg pl-10 bg-gray-200 focus-within:bg-white text-sm font-raleway font-normal text-gray-500 focus-within:text-gray-200 border border-solid  focus-within:border-blue-400 focus-within:outline-blue-400 focus:text-gray-400 focus:border-none `}
              />
              <span className="absolute inset-y-1 right-0 items-center  ">
                <button type="submit" class="p-1 ">
                  <MdOutlineCancel size={20} />
                </button>
              </span>
            </div>
            {/* end of input */}
            <div>
              <button
                className={` ${buttonStyles3} text-white py-2 px-3 font-semibold`}
              >
                Add member
              </button>
            </div>
          </div>
          {/*  */}
          <div className={`${flexRow2} space-x-80`}>
            <div className={`${flexCentered2} `}>
              <p className={`${paragraph6}`}>Member</p>
              <BiDownArrowAlt className="text-gray-400" />
            </div>
            <div className={`text-center `}>
              <p className={`${paragraph6}`}>Roles</p>
            </div>
          </div>
          {/*  */}
        </div>
        <div className={`${borderBottom}`} />
      </div>

      {/* second container */}
      <div className="group">
        <div className={` ${transitions} group-hover:bg-gray-100`}>
          <div
            className={`px-4 ${flexRow2} items-center justify-between  py-2`}
          >
            {/* user layout */}
            <div className={`${flexRow2} space-x-2 items-center`}>
              <div>
                <img
                  src="https://lh3.googleusercontent.com/a-/AFdZucr3cJniYKEEFGVNeh7pYWz9w8-zUXjcrxVnH1DlPQ=s64"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className={`${flexCol6} leading-tight`}>
                <h4 className={`${paragraph12}  text-gray-500 font-medium`}>
                  Wilson Ibekason
                </h4>
                <p className={`${paragraph6}`}>wilsonibekason@gmail.com</p>
              </div>
            </div>
            {/*  */}
            <div className={`${flexRow2} items-center space-x-1`}>
              <p className={`${paragraph6} capitalize`}>owner</p>
              <AiFillSetting className="text-gray-400" />
            </div>
            <div className={` ${transitions} invisible group-hover:visible `}>
              <BsThreeDotsVertical className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* hidden containrer contents*/}
      <div>
        <div className={`${borderBottom}`} />
        <div className="py-10 " />
        <div className={`${borderBottom}`} />
      </div>

      {/* third container  */}
      <div className="">
        <div className={`px-4   pt-2`}>
          <p className={`${paragraph6} mb-10`}>
            {" "}
            <span className="text-blue-500 underline">
              9 service accounts
            </span>{" "}
            also have access to this project
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSettingPermission;
