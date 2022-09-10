import React from "react";
import { useIconContext } from "../../services/OnIconContext";
import styles from "../../styles/firebaseCustomStyles";

const AdminSide = () => {
  const {
    flexCol4,
    flexRow2,
    paragraph10,
    flexCentered,
    transitions,
    paragraph8,
    paragraph7,
  } = styles;
  const { FaKey, AiFillDatabase, AiFillSetting, BsSquareFill } =
    useIconContext();

  return (
    <div className={`${flexCol4} my-1`}>
      <div
        className={`${flexRow2} bg-blue-600 py-1 px-4 items-center space-x-2`}
      >
        <div
          className={`${flexCentered} p-2 border border-gray-200 rounded-full`}
        >
          <FaKey />
        </div>
        <h5 className={`${paragraph10}`}>Firebase Admin SDK</h5>
      </div>
      <div className={`${flexCol4} justify-center`}>
        <p className={`${paragraph8} capitalize px-4`}>Legacy credentials</p>
        <div className="group">
          <div
            className={`${flexRow2} group-hover:bg-gray-200 ${transitions} py-1 px-4 items-center space-x-2`}
          >
            <div
              className={`${flexCentered} p-2 border border-gray-400  rounded-full`}
            >
              <AiFillDatabase className={`text-gray-500 `} />
            </div>
            <h5 className={`${paragraph7} `}>Database Secret</h5>
          </div>
        </div>
      </div>
      <div className={`${flexCol4} justify-center`}>
        <p className={`${paragraph8} capitalize px-4`}>All service accounts</p>
        <div className="group">
          <div
            className={`${flexRow2} group-hover:bg-gray-200 ${transitions} py-1 px-4 items-center space-x-2`}
          >
            <div
              className={`${flexCentered} p-2 border border-gray-400  rounded-full`}
            >
              <AiFillSetting className={`text-gray-500 `} />
            </div>
            <div className={`${flexRow2} space-x-1 items-center`}>
              <h5 className={`${paragraph7} `}>10 Service accounts</h5>
              <BsSquareFill size={13} className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSide;
