import React from "react";
import { useIconContext } from "../../services/OnIconContext";
import styles from "../../styles/firebaseCustomStyles";
import { recentProjects } from "../../utils/data";

const ProjectModalView = () => {
  const { visibleSidebar } = useIconContext();
  return (
    <div
      className={`${
        visibleSidebar ? "relative" : ""
      } overflow-visible overflow-y-auto left-0 right-0 top-0 tablet:inset-0 md:h-full custom-scrollbar`}
    >
      <div className="absolute max-w-[50%] h-full w-full ml-1">
        <div className="absolute h-[40%] w-[40%] bg-white rounded-l-lg overflow-visible overflow-y-auto custom-scrollbar scrollbar-thumb-gray-400 scrollbar-thumb-rounded z-50 shadow-lg">
          {/* Rendering contents */}
          <div className={`${styles.flexCol2} p-4`}>
            <p className="font-robotoCondensed font-semibold text-xs capitalize text-blue-800">
              Recent Projects
            </p>
            <p className={`${styles.paragraph3} cursor-pointer text-gray-800`}>
              See all projects
            </p>
            <p className={`${styles.paragraph3} cursor-pointer text-gray-800`}>
              Add a new project
            </p>
          </div>
          <div className="border-t border-solid w-full" />
          {/* Rendering recent projects */}
          <div className={`${styles.flexCol2} p-4`}>
            <p className="font-robotoCondensed font-semibold text-xs capitalize text-blue-800">
              LinkedIn App
            </p>
            {recentProjects.map((item, index) => (
              <p
                className={`${styles.paragraph3} cursor-pointer text-gray-800`}
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModalView;
