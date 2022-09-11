import React from "react";
import styles, { Layout } from "../../styles/firebaseCustomStyles";
import { useIconContext } from "../../services/OnIconContext";

const AppCheckFooter = () => {
  const { transitions } = styles;
  const { AiOutlineArrowRight } = useIconContext();
  return (
    <>
      <div className={`bg-blue-100 py-12 mt-5`}>
        <div
          className={` ${transitions} flex flex-row space-x-4  mx-[30rem] py-3 rounded-lg items-center justify-center  hover:bg-blue-200 `}
        >
          <h2 className={`font-medium font-raleway text-xl text-blue-500`}>
            See all Firebase features
          </h2>

          <AiOutlineArrowRight className={`text-xl text-blue-500`} />
        </div>
      </div>
    </>
  );
};

export default AppCheckFooter;
