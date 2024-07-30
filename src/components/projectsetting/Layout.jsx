import React, { useEffect } from "react";
import { AiOutlineQuestion } from "react-icons/ai";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../services/OnGlobalContext";
import styles from "../../styles/firebaseCustomStyles";
import { tabElements } from "../../utils/data";
import DesktopSidebar from "../DesktopSidebar";
import Navbar from "../Navbar";
import TabletSidebar from "../TabletSidebar";
import Tooltip from "../overview/TooltipElement";
import { useStore } from "../../redux/app/zodStore";

const Layout = ({ children }) => {
  const { AiOutlineArrowRight, AiOutlineArrowLeft } = useGlobalContext();
  const { header } = styles;
  const navigate = useNavigate();
  const location = useLocation();

  const { activeTabId, setActiveTabId, setLastEndpoint, lastEndpoint } =
    useStore((state) => ({
      activeTabId: state.activeTabId,
      setActiveTabId: state.setActiveTabId,
      setLastEndpoint: state.setLastEndpoint,
      lastEndpoint: state.lastEndpoint,
    }));
  const toogleNav = (link, id) => {
    navigate(`/settings/general/${link}`, {
      replace: true,
    });
    setActiveTabId(id);
  };
  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const last = pathSegments[pathSegments.length - 1];
    setLastEndpoint(last);
  }, [location.pathname, setLastEndpoint]);

  console.log("endpoint", lastEndpoint);

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
                  <Tooltip texts={["Question", ""]}>
                    <AiOutlineQuestion size={14} className="cursor-pointer" />
                  </Tooltip>
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
                      <li key={id} className={`${customStyles} cursor-pointer`}>
                        <div
                          className={`text-gray-700 inline-block py-2 px-4 rounded-t-sm border-b-2  capitalize ${
                            activeTabId === id && lastEndpoint === link
                              ? "border-gray-600 text-gray-600 font-raleway font-semibold bg-gray-300"
                              : "border-transparent"
                          } `}
                          to={link}
                          onClick={() => toogleNav(link, id)}
                        >
                          {name}
                        </div>
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
