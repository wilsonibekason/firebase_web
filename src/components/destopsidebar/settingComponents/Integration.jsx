import React from "react";
import { useGlobalContext } from "../../../services/OnGlobalContext";
import { useIconContext } from "../../../services/OnIconContext";
import styles from "../../../styles/firebaseCustomStyles";
import { IntegrationCard, IntegrationCard2 } from "../../integrations";

const Integration = () => {
  const {} = styles;
  const {} = useIconContext();
  const { open } = useGlobalContext();
  return (
    <>
      <div className={`my-20  max-w-full `}>
        <div
          className={` ${
            open ? " mx-10" : "  mx-40"
          } grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-4 Xdesktop:grid-cols-4 gap-10`}
        >
          <div
            className={`  w-[14rem] h-[15rem] bg-white rounded-lg shadow-lg`}
          >
            <IntegrationCard />
          </div>
          <div className={`w-[14rem] h-[15rem] bg-white rounded-lg shadow-lg`}>
            <IntegrationCard2 />
          </div>
          <div className={`w-[14rem] h-[15rem] bg-white rounded-lg shadow-lg`}>
            <IntegrationCard />
          </div>
          <div className={`w-[14rem] h-[15rem] bg-white rounded-lg shadow-lg`}>
            <IntegrationCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Integration;
