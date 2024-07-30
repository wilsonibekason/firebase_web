import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/firebaseCustomStyles";

const SettingModal = () => {
  const navigate = useNavigate();
  return (
    <div className="top-0 left-0 right-0 tablet:inset-0 md:h-full">
      <div className="absolute max-w-[40%] h-full w-full">
        <div className="absolute z-50 h-[16%] w-[30%] overflow-visible bg-white rounded-xl shadow-lg p-4">
          <div className="space-y-4">
            <p
              className={`${styles.paragraph4} text-gray-700 cursor-pointer transition-transform transform hover:scale-105 hover:text-blue-500`}
              onClick={() => navigate("/settings/general", { replace: true })}
            >
              Project Setting
            </p>
            <p
              className={`${styles.paragraph4} text-gray-700 cursor-pointer transition-transform transform hover:scale-105 hover:text-blue-500`}
            >
              Users and Permissions
            </p>
            <p
              className={`${styles.paragraph4} text-gray-700 cursor-pointer transition-transform transform hover:scale-105 hover:text-blue-500`}
            >
              Usage and Billing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;
