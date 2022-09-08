import React from "react";
import { Dropdown } from "primereact/dropdown";
import { Badge } from "primereact/badge";
import { useGlobalContext } from "../services/OnGlobalContext";
import { projects } from "../utils/data";
import { ImBell } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
const Navbar = () => {
  const {
    GiHamburgerMenu,
    selectedProject,
    onProjectChange,
    projectOptionTemplate,
    groupedItemTemplate,
    selectedProjectTemplate,
    setVisibleSidebar,
    visibleNav,
  } = useGlobalContext();
  return (
    <>
      <nav
        className={`flex flex-row justify-between ${
          !visibleNav ? "navbar-bg-initial" : "navbar-bg-final"
        } sticky`}
      >
        {/* left column */}
        <div className="flex flex-row flex-1 items-center pl-1 md:pl-2 lg:pl-4">
          <div className="flex lg:hidden">
            <GiHamburgerMenu
              className="text-lg md:text-2xl mr-0.5 md:mr-1 lg:mr-2"
              onClick={() => setVisibleSidebar((prev) => !prev)}
            />
          </div>
          <div className="font-raleway font-semibold text-sm  capitalize text-gray-300 block desktop:hidden target:block  Xdesktop:hidden">
            overview
          </div>
          <div className="pr-0 md:pr-20 lg:scroll-pr-20 rounded-tl-xl">
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
              className="text-sm pr-20 font-robotoCondensed space-x-1 font-semibold capitalise"
            />
          </div>
        </div>
        {/* right column */}
        <div className="flex flex-row gap-2 md:gap-3 lg:gap-4 items-center">
          <h4 className="font-raleway font-semibold text-sm text-white phone:hidden tablet:hidden laptop:block desktop:block Xdesktop:block">
            go to docs
          </h4>

          <div className="relative">
            <ImBell className="font-bold text-2xl " />
            <div className="absolute inset-y-0 right-2 flex items-center pl-1.5 bg-red-500 w-2 h-2 rounded-full"></div>
          </div>
          <div className="phone:block tablet:block laptop:hidden desktop:hidden Xdesktop:hidden">
            <BsThreeDotsVertical className="text-2xl" />
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/ogw/AOh-ky0Y0GWS8yodSDtiKJ6FOlNqNxLYt0B--1EThip08A=s32-c-mo"
              alt=""
              className="phone:w-6 phone:h-6  tablet:w-6 tablet:h-6 desktop:w-8 desktop:h-8 Xdesktop:w-[34px] Xdesktop:h-[34px] rounded-full "
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
