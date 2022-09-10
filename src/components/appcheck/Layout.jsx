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
          <div className=" bg-gray-100 min-h-[100vh] p-3">
            {/* header */}
            <div className="">
              <Navbar />
            </div>
            {/* main content  */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
