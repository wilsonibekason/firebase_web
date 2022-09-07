import React from "react";
import { useGlobalContext } from "../../services/OnGlobalContext";
import styles from "../../styles/firebaseCustomStyles";
import { sidebarDropdown } from "../../utils/data";

export const BuildContents = () => {
  return (
    <>
      <div
        className={`flex flex-col px-4 bg-gray-900 rounded-b-lg py-3  space-y-4 transition-all duration-300 ease-linear delay-300 border  border-t-gray-700
      ${!open ? "block " : "hidden"}`}
      >
        {sidebarDropdown?.map((item, index) => (
          <div className="flex flex-row gap-x-4 items-center" key={index}>
            <div>{item?.icon}</div>
            <div>
              <h5 className={`${styles.paragraph} text-white`}>{item.name} </h5>
            </div>
          </div>
        ))}

        {/*  */}
      </div>
    </>
  );
};
export const ReleaseContents = () => {
  return <></>;
};
export const AnalyticsContents = () => {
  return <></>;
};

export const EngageContents = () => {
  return <></>;
};
const DropdownContents = () => {
  const { open, GiWorld } = useGlobalContext();
  return <></>;
};

export default DropdownContents;
