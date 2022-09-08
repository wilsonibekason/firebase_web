import React from "react";
import { AiOutlineQuestion } from "react-icons/ai";
import { useNavigate, NavLink } from "react-router-dom";
import { useGlobalContext } from "../../services/OnGlobalContext";
import styles from "../../styles/firebaseCustomStyles";
import { tabElements } from "../../utils/data";
import DesktopSidebar from "../DesktopSidebar";
import Navbar from "../Navbar";
import TabletSidebar from "../TabletSidebar";

const Layout = ({ children }) => {
  const { AiOutlineArrowRight, AiOutlineArrowLeft } = useGlobalContext();
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
          <div className=" bg-gray-100 min-h-[100vh] p-3">
            {/* header */}
            <div className="">
              <Navbar />
            </div>
            {/* navbar container */}
            {/* tabs elememt */}
            <div className="px-4 mt-4 md:mt-4 lg:mt-2">
              <div className="flex flex-row justify-between mb-3">
                <h4 className={`${header} capitalize`}>project settings</h4>
                <div className="py-[2px] px-[10px] rounded-full justify-center items-center flex bg-gray-600">
                  <AiOutlineQuestion size={14} />
                </div>
              </div>
              {/* tablte scrollbar */}
              <div className="relative text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
                <div className="absolute phone:hidden desktop:hidden Xdesktop:hidden tablet:block left-0 top-2">
                  {" "}
                  <AiOutlineArrowLeft size={20} className="" />
                </div>
                <div className="absolute phone:hidden desktop:hidden Xdesktop:hidden tablet:block right-0 top-2">
                  {" "}
                  <AiOutlineArrowRight size={20} className="" />
                </div>
                <ul className="flex  -mb-px overflow-x-auto desktop:w-full tablet:w-[800px] desktop:flex-wrap tablet:whitespace-nowrap tablet:overflow-x-auto scrollbar-none space-x-2">
                  {/* cursor-not-allowed */}
                  {tabElements.map((item, index) => {
                    const { id, link, name, customStyles } = item;
                    return (
                      <li
                        key={id}
                        className={`${customStyles} `}
                        //   onClick={() => navigate(`${link}`, { replace: true })}
                      >
                        <NavLink
                          className=" text-gray-700 inline-block py-2 px-4 rounded-t-sm border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 capitalize font-raleway font-semibold hover:bg-gray-300"
                          to={link}
                        >
                          {name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* end of tab element */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
