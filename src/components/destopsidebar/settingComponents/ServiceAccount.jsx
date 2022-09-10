import React from "react";
import { useIconContext } from "../../../services/OnIconContext";
import styles, { Layout } from "../../../styles/firebaseCustomStyles";
import { AdminSDK, AdminSide } from "../../serviceaccount";
const ServiceAccount = () => {
  const { BiSquare, BsCheck2Square } = useIconContext();
  const { gridSectionLayout, gridSectionChild, gridSectionChild2 } = Layout;
  const { paragraph9, flexEnd } = styles;
  return (
    <>
      <div className={`flex flex-col mx-40 my-20 space-y-4 `}>
        <div className={`${flexEnd} space-x-0.5`}>
          <h4 className={`${paragraph9} underline`}>
            Manage service account permissions
          </h4>
          <BsCheck2Square className="text-blue-500" size={13} />
        </div>
        {/* main component layout */}
        <div className={` ${gridSectionLayout}  `}>
          <div
            className={`${gridSectionChild} bg-gray-50 rounded-l-lg shadow-lg`}
          >
            <AdminSide />
          </div>
          <div className={`${gridSectionChild2} bg-white rounded-r-lg shadow`}>
            <AdminSDK />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ServiceAccount;
