import React from "react";
import { useIconContext } from "../../services/OnIconContext";
import styles from "../../styles/firebaseCustomStyles";

const AnalyticsRepresentatives = () => {
  const { flexCol4, flexRow2, flexCentered, paragraph5, paragraph6 } = styles;
  const {} = useIconContext();
  return (
    <>
      <div className={`${flexCol4} space-y-4 `}>
        <div>
          <p className={paragraph5}>Google Analytics data sharing</p>
        </div>
        <div className={`min-h-[10vh] shadow-md rounded-md px-4 py-5 bg-white`}>
          <div className={`${flexRow2} space-x-3 items-center`}>
            <img
              src="https://www.gstatic.com/mobilesdk/180717_mobilesdk/logos/analytics_icon.svg"
              alt=""
              className="w-12 h-12"
            />
            <p className={`${paragraph6}`}>
              To control how Analytics data is shared with Firebase and other
              Google products, visit{" "}
              <span className="text-blue-500 capitalize text-sm underline">
                analysis setting
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsRepresentatives;
