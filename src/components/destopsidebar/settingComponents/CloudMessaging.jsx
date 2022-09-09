import React from "react";
import styles from "../../../styles/firebaseCustomStyles";
import { FirebaseCloud, Cloud } from "../../cloudmessaging";
const CloudMessaging = () => {
  const { paragraph7, borderBottom } = styles;

  return (
    <>
      <div className={`flex flex-col mx-40 my-20 space-y-4`}>
        <div className="w-[100%] min-h-[80vh] bg-white shadow-md  rounded-lg">
          <div className={`flex flex-col my-5 `}>
            {/* firebaseCloud */}
            <FirebaseCloud />
            <div className={`${borderBottom}`} />
            {/* cloud */}
            <Cloud />
          </div>
        </div>
        <div>
          <h4 className={`${paragraph7}`}>Apple app configuration</h4>
        </div>
      </div>
    </>
  );
};

export default CloudMessaging;
