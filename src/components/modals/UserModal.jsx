import React from "react";
import { useGlobalContext } from "../../services/OnGlobalContext";
import styles from "../../styles/firebaseCustomStyles";
const UserModal = () => {
  const { flexCol7, paragraph13 } = styles;
  const { onUserModal } = useGlobalContext();
  return (
    <>
      <div className={`hidden  right-0  md:h-full`}>
        <div className={`absolute max-w-[30%] h-full w-full`}>
          <div className={`w-4 h-4 bg-inherit ml-[146px] rounded-t-full`} />

          <div
            className={`absolute h-[10%] w-[40%] overflow-visible bg-black rounded-b rounded-tl`}
          >
            <div className={`${flexCol7} tracking-tight -space-y-2 p-2`}>
              <h4
                className={`${paragraph13} font-raleway font-normal text-white `}
              >
                Google Account
              </h4>
              <h4
                className={`${paragraph13} font-raleway font-normal text-gray-300 `}
              >
                wilson ibekason{" "}
              </h4>
              <h4
                className={`${paragraph13} font-raleway font-normal text-gray-300 `}
              >
                wilsonibekason@gmaail.com
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
