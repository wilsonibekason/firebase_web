import React from "react";
import DesktopSidebar from "../DesktopSidebar";
import Navbar from "../Navbar";
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
          <div className=" bg-gray-100 min-h-[100vh] ">
            {/* header */}
            {/* <div className="py-3">
              <Navbar />
            </div> */}
            {/* main content  */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
