import React from "react";
import { useGlobalContext } from "../../services/OnGlobalContext";
import styles from "../../styles/firebaseCustomStyles";

const DropdownContents = () => {
  const { open, GiWorld } = useGlobalContext();
  return (
    <div
      className={`flex flex-col px-4 bg-gray-900 rounded-b-lg py-3  space-y-4 transition-all duration-300 ease-linear delay-300 border  border-t-gray-700
      ${!open ? "block " : "hidden"}`}
    >
      <div className="flex flex-row gap-x-4 items-center">
        <div>
          <GiWorld />
        </div>
        <div>
          <h5 className={`${styles.paragraph} text-white`}>Hosting </h5>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-row gap-x-4 items-center">
        <div>
          <GiWorld />
        </div>
        <div>
          <h5 className={`${styles.paragraph} text-white`}>Hosting </h5>
        </div>
      </div>
    </div>
  );
};

export default DropdownContents;
