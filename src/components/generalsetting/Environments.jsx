import React from "react";
import { useIconContext } from "../../services/OnIconContext";
import styles from "../../styles/firebaseCustomStyles";

const Environments = () => {
  const {
    paragraph7,
    flexCol4,
    paragraph6,
    flexRow,
    flexCentered,
    iconColor,
    paragraph5,
  } = styles;
  const { MdModeEdit } = useIconContext();

  return (
    <>
      <div className={`${flexCol4} w-[60%] max-w-[50%] my-6`}>
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
          <div className={`${paragraph6}`}>Environment Type</div>
          <div className={`${flexCentered} space-x-1`}>
            <p className={`${paragraph5} `}>unspecified</p>
            <MdModeEdit className={`${iconColor} flex-start`} size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Environments;
