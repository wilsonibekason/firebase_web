import React from "react";
import { useIconContext } from "../../services/OnIconContext";
import styles from "../../styles/firebaseCustomStyles";
const Integration = () => {
  const { flexCol2, flexRow2, paragraph5, paragraph9, transitions } = styles;
  const { FaGoogleDrive, GrCheckmark, IoMdArrowForward } = useIconContext();

  return (
    <>
      <div className={`${flexCol2} p-4 `}>
        <div className={`${flexRow2} items-center space-x-2`}>
          <FaGoogleDrive className="text-yellow-600 " size={25} />
          <p
            className={`font-robotoCondensed font-semibold text-[15px] leading-normal text-gray-600  capitalize `}
          >
            google Analytics
          </p>
        </div>
        <div>
          <p className={`${paragraph5}`}>
            Free, unlimited reporting on up to 500 distinct events
          </p>
        </div>
        <div className={`${flexRow2} space-x-1 items-center`}>
          <GrCheckmark />
          <p className={`${paragraph5}`}>Enabled</p>
        </div>
        {/* absolute bottom-2 right-2 TODO: remove all unnecssary files  */}

        <div
          className={`${flexRow2}  space-x-1 justify-end items-center pt-16 pl-24`}
        >
          <div
            className={`${flexRow2} space-x-1 items-center hover:bg-[#58bbe9] rounded-lg py-2 px-2 ${transitions} `}
          >
            <p className={`${paragraph9}`}>Manage</p>
            <IoMdArrowForward className="text-blue-600" size={16} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Integration;
