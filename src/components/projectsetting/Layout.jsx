import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/firebaseCustomStyles";
import { tabElements } from "../../utils/data";
import DesktopSidebar from "../DesktopSidebar";
import Navbar from "../Navbar";
import TabletSidebar from "../TabletSidebar";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { header } = styles;
  return (
    <>
      <div className="flex">
        <DesktopSidebar />
        <div className="block desktop:hidden target:block  Xdesktop:hidden">
          <TabletSidebar />
        </div>
        <div className="min-h-[30vh] flex-1">
          <div className=" bg-gray-100 min-h-[50vh] p-3   ">
            {/* header */}
            <div className="">
              <Navbar />
            </div>
            {/* navbar container */}
            {/* tabs elememt */}
            <div className="flex flex-start mb-3">
              <h4 className={`${header} capitalize`}>project settings</h4>
            </div>
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul class="flex flex-wrap -mb-px">
                {/* cursor-not-allowed */}
                {tabElements.map((item, index) => {
                  const { id, link, name, customStyles } = item;
                  return (
                    <li
                      key={id}
                      className={`${customStyles}`}
                      onClick={() => navigate(`${link}`, { replace: true })}
                    >
                      <a class=" text-gray-400 dark:text-gray-500 inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
