import React from "react";
import styles from "../../../styles/firebaseCustomStyles";
import { ProjectDetails } from "../../generalsetting";

const General = () => {
  const { flexRow, flexCol } = styles;
  return (
    <>
      <div className="flex flex-col  mx-40 my-20 space-y-4">
        {/* <div className="mx-auto"> */}
        <div>
          <h4>your project</h4>
        </div>
        <div className="w-[100%] min-h-[80vh] bg-white shadow-md  rounded-md">
          <div className="flex flex-col flex-start flex-start mx-7 my-10">
            {/* projectsetting */}
            <ProjectDetails />
            {/* environments */}
            {/* publicSettings */}
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default General;
