import React from "react";
import { useIconContext } from "../../services/OnIconContext";
import styles from "../../styles/firebaseCustomStyles";

const DataSharing = () => {
  const {} = useIconContext();
  const {
    flexCentered,
    flexCol4,
    paragraph5,
    paragraph7,
    paragraph6,
    borderBottom,
    paragraph12,
    buttonStyles2,
  } = styles;

  return (
    <>
      <div className={`${flexCol4} space-y-4`}>
        <div>
          <p className={paragraph5}> Public representatives</p>
        </div>
        <div
          className={`border border-solid rounded-lg shadow-lg w-full min-h-[80vh] bg-white`}
        >
          <div className={` px-3 py-4`}>
            <p className={`${paragraph12} text-gray-500 font-normal`}>
              Under the General Data Protection Regulation (GDPR), developers
              collecting or processing user data at "large scale", collecting or
              processing certain types of sensitive data, or who are a "public
              authority or body" may need to designate a data protection officer
              (DPO) and/or an EU representative.{" "}
              <span className="text-blue-600 underline">Learn more</span>
            </p>
          </div>
          <div className={`${borderBottom}`} />
          <div
            className={`${flexCol4} items-center space-y-3 py-8 justify-center`}
          >
            <div>
              <img
                src="https://www.gstatic.com/mobilesdk/180221_mobilesdk/privacy_contact_empty@2x.png"
                alt=""
                className="w-52"
              />
            </div>
            <div className="pb-3">
              <p className={`${paragraph6} px-20 max-w-sm `}>
                There isn't a data privacy representative assigned for your
                project yet
              </p>
            </div>
            <div>
              <button className={`${buttonStyles2} py-1.5 px-6`}>
                Enter contact info
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataSharing;
