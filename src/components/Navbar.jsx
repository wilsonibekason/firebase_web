import React from "react";
import { Dropdown } from "primereact/dropdown";
import { useGlobalContext } from "../services/OnGlobalContext";
import { projects } from "../utils/data";

const Navbar = () => {
  const {
    GiHamburgerMenu,
    selectedProject,
    onProjectChange,
    projectOptionTemplate,
    groupedItemTemplate,
    selectedProjectTemplate,
  } = useGlobalContext();
  return (
    <>
      <nav className="flex flex-row justify-between">
        {/* left column */}
        <div className="flex flex-row flex-1 items-center pl-4">
          <GiHamburgerMenu className="text-sm md:text-2xl mr-3 md:hidden block" />
          <div className="pr-20">
            <Dropdown
              value={selectedProject}
              options={projects}
              onChange={onProjectChange}
              valueTemplate={selectedProjectTemplate}
              itemTemplate={projectOptionTemplate}
              filter
              optionLabel="name"
              showClear
              filterBy="name"
              filterInputAutoFocus
              placeholder="Select a project"
              className="text-sm pr-20"
            />
          </div>
        </div>
        {/* right column */}
        <h1>i am right</h1>
      </nav>
    </>
  );
};

export default Navbar;
