import React from "react";
import { useIconContext } from "../../services/OnIconContext";
import styles from "../../styles/firebaseCustomStyles";

const PublicSetting = () => {
  const {
    flexCol4,
    paragraph7,
    paragraph6,
    flexRow,
    flexCentered,
    iconColor,
    paragraph5,
  } = styles;
  const { AiOutlineCaretDown, AiOutlineQuestionCircle, MdModeEdit } =
    useIconContext();
  return (
    <>
      <div className={`${flexCol4}  w-[60%] max-w-[50%] mt-6`}>
        <div>
          <p className={`${paragraph7}`}>Environments</p>
        </div>
        {/* desc */}
        <div>
          <p className={`${paragraph6}`}>
            This setting customizes your project for different stages of the app
            lifecycle
          </p>
        </div>
        <div className={`${flexRow}`}>
          <div className={`${flexCentered} space-x-2`}>
            <p className={`${paragraph6}`}>project-984646627879</p>
            <AiOutlineQuestionCircle className={`${iconColor}`} size={16} />
          </div>
          <div className={`${flexCentered} space-x-1`}>
            <p className={`${paragraph5} `}>Public_facing name</p>
            <MdModeEdit className={`${iconColor} flex-start`} size={20} />
          </div>
        </div>
        <div className={`${flexRow}`}>
          <div className={`${flexCentered} space-x-2`}>
            <p className={`${paragraph6}`}>Support email</p>
            <AiOutlineQuestionCircle className={`${iconColor}`} size={16} />
          </div>
          <div
            className={`${flexRow} space-x-16 items-center border border-solid border-gray-400 p-2 rounded focus:border-blue-400`}
          >
            <p className={`${paragraph5} `}>Public_facing name</p>
            <AiOutlineCaretDown className={`${iconColor}`} size={14} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicSetting;
