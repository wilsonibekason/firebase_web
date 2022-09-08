import React from "react";
import styles from "../../styles/firebaseCustomStyles";

const SettingModal = () => {
  return (
    <div className="top-0 left-0 right-0 tablet:inset-0 z-50 md:h-full">
      <div className="absolute max-w-[40%] h-full w-full ">
        <div className="absolute  h-[16%] w-[30%] overflow-visible bg-white  rounded-xl">
          <div className={`${styles.flexCol3} px-2 mt-4`}>
            <p className={`${styles.paragraph4} text-gray-700 `}>
              project setting
            </p>
            <p className={`${styles.paragraph4} text-gray-700`}>
              users and permissions
            </p>
            <p className={`${styles.paragraph4} text-gray-700`}>
              usage and billing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingModal;
