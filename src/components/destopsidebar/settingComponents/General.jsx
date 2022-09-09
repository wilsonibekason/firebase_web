import React from "react";
import styles from "../../../styles/firebaseCustomStyles";
import { Environments, ProjectDetails } from "../../generalsetting";

const General = () => {
  const { flexRow, flexCol, borderBottom, paragraph7 } = styles;
  return (
    <>
      <div className="flex flex-col  mx-40 my-20 space-y-4">
        {/* <div className="mx-auto"> */}
        <div>
          <h4 className={`${paragraph7}`}>your project</h4>
        </div>
        <div className="w-[100%] min-h-[80vh] bg-white shadow-md  rounded-lg">
          <div className="flex flex-col flex-start flex-start my-10">
            {/* projectsetting */}
            <div className="mx-7 ">
              <ProjectDetails />
            </div>
            <div className="border-b border-solid border-gray-300" />
            {/* environments */}
            <div className="mx-7">
              <Environments />
            </div>
            <div className={borderBottom} />
            {/* publicSettings */}
            <div className="mx-7"></div>
            <div className={borderBottom} />
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default General;
