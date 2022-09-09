import React from "react";
import styles from "../../../styles/firebaseCustomStyles";
import { ProjectDetails } from "../../generalsetting";

const General = () => {
  const { flexRow, flexCol } = styles;
  return (
    <>
      <div className="flex flex-col  mx-44 my-20 space-y-4">
        <div>
          <h4>your project</h4>
        </div>
        <div className="w-full min-h-[80vh] bg-white border border-black rounded-md">
          <div className="flex flex-col flex-start flex-start">
            {/* projectsetting */}
            <ProjectDetails />
            {/* environments */}
            {/* publicSettings */}
          </div>
        </div>
      </div>
    </>
  );
};

export default General;
