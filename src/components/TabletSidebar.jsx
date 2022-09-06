import React from "react";
import { Sidebar } from "primereact/sidebar";
import { useGlobalContext } from "../services/OnGlobalContext";

const TabletSidebar = () => {
  const { GiHamburgerMenu, visibleSidebar, setVisibleSidebar } =
    useGlobalContext();
  return (
    <>
      <Sidebar
        visible={visibleSidebar}
        onHide={() => setVisibleSidebar((prev) => !prev)}
        className="bg-black w-20 block desktop:hidden target:block  Xdesktop:hidden"
        // icons={customIcons}
      >
        <h3>Sidebar with custom icons</h3>
      </Sidebar>
    </>
  );
};

export default TabletSidebar;
