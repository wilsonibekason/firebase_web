import React from "react";
import styles from "../../styles/firebaseCustomStyles";
import { recentProjects } from "../../utils/data";

const ProjectModalView = () => {
  return (
    <div className="overflow-visible overflow-y-auto left-0 right-0 top-0 tablet:inset-0 md:h-full  z-50">
      <div className="  ml-1 absolute max-w-[50%] h-full w-full ">
        <div className="absolute h-[40%] w-[40%] bg-white rounded-l-lg  overflow-visible overflow-y-auto  scrollbar-thumb-gray-400  scrollbar-thumb-rounded ">
          {/* rendering contents  current projects scrollbar-corner-white scrollbar-track-white*/}
          <div className={`${styles.flexCol2} p-4`}>
            <p
              className={`font-robotoCondensed font-semibold text-xss capitalize} text-blue-800`}
            >
              Recent Projects{" "}
            </p>
            <p className={`${styles.paragraph3} text-gray-800`}>
              see all projects{" "}
            </p>
            <p className={`${styles.paragraph3} text-gray-800`}>
              Add a new project{" "}
            </p>
          </div>
          <div className="border-t border-solid w-full " />
          {/* rendering recent projects  */}
          <div className={`${styles.flexCol2} p-4`}>
            <p
              className={`font-robotoCondensed font-semibold text-xss capitalize text-blue-800`}
            >
              linkedin app
            </p>
            {recentProjects.map((item, index) => (
              <p className={`${styles.paragraph3} text-gray-800`} key={index}>
                {item}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModalView;
