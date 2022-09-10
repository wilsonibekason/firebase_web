import React from "react";
import { useGlobalContext } from "../../../services/OnGlobalContext";
import { useIconContext } from "../../../services/OnIconContext";
import styles from "../../../styles/firebaseCustomStyles";
import { UserSettingPermission } from "../../userpermission";

const UsersPermission = () => {
  const { flexCol4, flexCentered2, paragraph13 } = styles;
  const { BsCheck2Square } = useIconContext();
  const { open } = useGlobalContext();
  return (
    <>
      <div
        className={` ${
          open
            ? "px-28"
            : "phone:px-4 tablet:px-12 laptop:px-16  desktop:px-44 Xdesktop:px-44 min-h-[50vh]"
        } ${flexCol4}  mt-20 mb-72 space-x-4`}
      >
        <div
          className={`  max-w-[100%] min-w-[100%] h-[38vh] max-h-[38vh] shadow-md rounded-md bg-white`}
        >
          <UserSettingPermission />
        </div>
        <div className={`${flexCentered2} justify-end space-x-0.5`}>
          <p className={`${paragraph13} text-blue-700 underline`}>
            Advanced permission setting
          </p>
          <BsCheck2Square className="text-blue-700" />
        </div>
      </div>
    </>
  );
};

export default UsersPermission;
