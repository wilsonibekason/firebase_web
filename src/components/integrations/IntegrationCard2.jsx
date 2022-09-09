import React from "react";
import { useIconContext } from "../../services/OnIconContext";
import styles from "../../styles/firebaseCustomStyles";
const Integration2 = () => {
  const {
    flexCol2,
    flexRow2,
    paragraph5,
    paragraph9,
    transitions,
    paragraph6,
  } = styles;
  const {
    FaGoogleDrive,
    GrCheckmark,
    IoMdArrowForward,
    SiGooglechrome,
    AiOutlineQuestionCircle,
  } = useIconContext();

  return (
    <>
      <div className={`${flexCol2} p-4 `}>
        <div className={`${flexRow2} items-center space-x-2`}>
          <SiGooglechrome className="text-blue-600 " size={25} />
          <p
            className={`font-robotoCondensed font-semibold text-[15px] leading-normal text-gray-600  capitalize `}
          >
            Admob
          </p>
        </div>
        <div>
          <p className={`${paragraph5}`}>
            Show ads from millions of Google advertisers
          </p>
        </div>
        <div className={`${flexRow2}  items-start`}>
          <p className={`${paragraph9} underline`}>learn more</p>
        </div>
        {/* absolute bottom-2 right-2 TODO: remove all unnecssary files  */}

        <div className={`${flexRow2} space-x-1 items-center pt-16`}>
          <p className={`${paragraph6}`}>Required permissions missing</p>
          <AiOutlineQuestionCircle className="text-blue-600" size={16} />
        </div>
      </div>
    </>
  );
};

export default Integration2;
