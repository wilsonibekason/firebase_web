import React from "react";
import styles, { Layout } from "../../styles/firebaseCustomStyles";
import { useIconContext } from "../../services/OnIconContext";
import { useGlobalContext } from "../../services/OnGlobalContext";
const AppCheckFooter = () => {
  const { transitions } = styles;
  const { AiOutlineArrowRight } = useIconContext();
  const { open } = useGlobalContext();
  return (
    <>
      <div className={`bg-blue-100 py-12 mt-5`}>
        <div
          className={` ${
            open ? "mx-80" : "mx-[30rem]"
          } ${transitions} flex flex-row space-x-4   py-3 rounded-lg items-center justify-center  hover:bg-blue-200 `}
        >
          <h2
            className={`font-medium font-raleway text-xl text-blue-500 cursor-pointer`}
          >
            See all Firebase features
          </h2>

          <AiOutlineArrowRight className={`text-xl text-blue-500`} />
        </div>
      </div>
    </>
  );
};

export default AppCheckFooter;
