import React from "react";
import { useIconContext } from "../../services/OnIconContext";
import styles from "../../styles/firebaseCustomStyles";
const FirebaseCloud = () => {
  const {
    flexCol2,
    flexCol3,
    flexRow2,
    flexRow,
    flexCentered2,
    paragraph6,
    hreftext,
    paragraph8,
  } = styles;
  const { FiCheckSquare, BsBoxArrowUpRight, BsThreeDotsVertical } =
    useIconContext();
  return (
    <>
      <div className={`${flexCol2} mx-10`}>
        <div className={`${flexRow}`}>
          <div className={`${flexRow2} space-x-2`}>
            <p
              className={`font-robotoCondensed font-medium text-md text-gray-800 `}
            >
              {" "}
              Firebase Cloud Messaging API(V1)
            </p>
            <span
              className={`${flexCentered2} font-robotoCodensed font-medium text-md text-violet-800 space-x-1`}
            >
              <FiCheckSquare className="text-violet-800" size={20} />

              <p>Enabled</p>
            </span>
          </div>
          <div>
            <BsThreeDotsVertical size={20} className={"text-black"} />
          </div>
        </div>
        <div className={`${flexRow2} space-x-2`}>
          <p className={`${paragraph6}`}>Recommended for most use cases</p>
          <div className={`${flexCentered2} space-x-1 underline`}>
            <a className={`${hreftext}`}>Learn more</a>
            <BsBoxArrowUpRight className="text-blue-400" size={13} />
          </div>
        </div>
        <div className={`flex flex-col `}>
          <div className="border border-solid border-gray-400 rounded-t-lg py-2 px-6 bg-gray-100">
            <div className={`${flexRow2} space-x-16`}>
              <div>
                <p className={`${paragraph8}`}>Sender ID</p>
              </div>
              <div>
                <p className={`${paragraph8}`}>Service Account</p>
              </div>
            </div>
          </div>
          <div
            className={`border border-t-0 border-solid border-gray-400 rounded-b-lg py-3 px-6 hover:bg-gray-200 transition duration-500`}
          >
            <div className={`${flexRow2} space-x-9`}>
              <div className="items-center ">
                <p className={`${paragraph8}`}>984646627879</p>
              </div>
              <div className={`${flexCentered2} space-x-1 `}>
                <p className={`${hreftext} underline`}>
                  Manage Service Accounts
                </p>
                <BsBoxArrowUpRight className="text-blue-400" size={13} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirebaseCloud;
