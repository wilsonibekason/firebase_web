import React from "react";
import DesktopSidebar from "../DesktopSidebar";
import TabletSidebar from "../TabletSidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <DesktopSidebar />
        <div className="block desktop:hidden target:block  Xdesktop:hidden">
          <TabletSidebar />
        </div>
        <div className="min-h-[30vh] flex-1">
          <div className=" header-bg min-h-[50vh] p-3   ">
            {/* header */}
            <div className="">
              <Navbar />
            </div>
            {/* navbar container */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
