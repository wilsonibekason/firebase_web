import React from "react";

const ProjectModalView = () => {
  return (
    <div className="overflow-y-auto overflow-x-hidden left-0 right-0 top-0 tablet:inset-0 md:h-full fixed z-50">
      <div className=" my-5 ml-64 relative max-w-[50%] h-full w-full ">
        <div className="relative h-[40%] w-[40%] bg-white rounded-bl-lg">
          {/* rendering contents  current projects */}
          <div className="">
            <p>linkedin app</p>
            <p>see all projects </p>
            <p>Add a new project </p>
          </div>
          {/* rendering recent projects  */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModalView;
