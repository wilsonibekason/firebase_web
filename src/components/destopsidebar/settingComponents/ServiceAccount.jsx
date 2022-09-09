import React from "react";
import { useIconContext } from "../../../services/OnIconContext";
import styles, { Layout } from "../../../styles/firebaseCustomStyles";
const ServiceAccount = () => {
  const { BiSquare } = useIconContext();
  const { gridSectionLayout, gridSectionChild, gridSectionChild2 } = Layout;
  const { paragraph9, flexEnd } = styles;
  return (
    <>
      <div className={`flex flex-col mx-40 my-20 space-y-4 `}>
        <div className={`${flexEnd}`}>
          <h4 className={`${paragraph9} underline`}>
            Manage service account permissions
          </h4>
          <BiSquare className="text-blue-600" />
        </div>
        {/* main component layout */}
        <div className={` ${gridSectionLayout}  `}>
          <div
            className={`${gridSectionChild} bg-gray-50 rounded-l-lg shadow-lg`}
          >
            hdhdhdhd
          </div>
          <div className={`${gridSectionChild2} bg-white rounded-r-lg shadow`}>
            hello section 3
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ServiceAccount;
