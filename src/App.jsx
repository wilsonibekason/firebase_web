import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { AiOutlinePlus } from "react-icons/ai";
import {} from "react-icons/io";
import { Navbar } from "./components";
import { useGlobalContext } from "./services/OnGlobalContext";
import TabletSidebar from "./components/TabletSidebar";
import "./App.css";
import { FirebaseCard } from "./components/overview";
import { firebaseLogo } from "./assets";
const App = () => {
  const {
    GiHamburgerMenu,
    setVisibleSidebar,
    visibleSidebar,
    toogleSidebar,
    FaHome,
    FcSettings,
    BiRightArrow,
    AiOutlineSetting,
  } = useGlobalContext();
  const [open, setOpen] = useState(true);
  console.log(toogleSidebar);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  // bg-dark-purple
  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-64" : "w-16"
        } hidden md:hidden lg:block bg-[#00001a] h-auto   pt-1 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        {/* gap-x-4 */}
        <div className="flex gap-x-4 items-center px-5 py-2">
          <img
            // src="./src/assets/logo.png"
            src={firebaseLogo}
            className={`cursor-pointer duration-500 w-7 h-7 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 capitalize ${
              !open && "scale-0"
            }`}
          >
            firebase
          </h1>
        </div>
        {/* <hr className="w-full h-px text-gray-300" /> */}
        <div className="w-full h-px border-[0.001px] border-gray-900" />
        {/* scrollable sections */}
        <div className="overflow-visible overflow-y-auto h-[50vh]   scrollbar-thumb-gray-400 scrollbar-thin scrollbar-thumb-rounded ">
          <div
            className={`flex flex-row justify-between items-center transition-all ease-linear duration-100 ${
              !open ? "hidden scale-0" : "flex "
            }`}
          >
            <div
              className={`flex items-center space-x-2 hover:bg-gray-900 focus:bg-gray-900 active:bg-gray-900 py-4 pl-5`}
            >
              <FaHome className="sidetext-color " size={20} />
              <h4 className="sidetext-color font-raleway font-medium  text-sm pr-6">
                project overview
              </h4>
              <div className="h-6 border-x-[1px] border-gray-800 " />
            </div>

            <div className={`flex items-center group mr-5`}>
              <AiOutlineSetting size={20} className="text-white" />
              <BiRightArrow
                className="text-white hidden group-hover:block invert-0 transition ease-in duration-300"
                size={10}
              />
            </div>
          </div>
          {/* project overview section  */}

          <div className="w-full h-px border-[0.001px] border-gray-900" />

          <ul className={` ${!open ? "pl-2 pt-1" : "p-5 pt-4"}`}>
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-3" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img
                  src={`./src/assets/${Menu.src}.png`}
                  className="w-5 h-5 object-cover"
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/*  */}
      </div>

      {/* tablet sidebar  */}
      <div className="block desktop:hidden target:block  Xdesktop:hidden">
        <TabletSidebar />
      </div>
      {/*   */}
      <div className="min-h-[30vh] flex-1">
        <div className=" header-bg min-h-[50vh] p-3   ">
          {/* header */}
          <div className="">
            <Navbar />
            {/* ${
              open ? "desktop:left-96" : "desktop:left-40"desktop:absolute
            }  */}
          </div>
          <div
            className={` flex flex-start flex-col  transition duration-100 pt-5 phone:px-4 desktop:px-20 Xdesktop:px-20 tablet:px-10`}
          >
            <div className="flex flex-row items-center gap-4">
              <h1 className="font-raleway font-semibold text-3xl header-text">
                linkedin_app
              </h1>
              <span className=" font-raleway font-semibold border border-solid border-gray-300 w-24 h-5 py-2.5 rounded-xl flex justify-center items-center text-xss bg-blue-700 capitalize text-white shadow">
                spark plan
              </span>
            </div>
            <div className="flex flex-1 flex-row items-center mt-3 gap-4">
              <span className="flex w-36 h-5 py-4 pr-2 rounded-2xl items-center gap-1  text-white font-raleway font-semibold text-sm bg-blue-700 ">
                <div className="flex justify-center items-center bg-purple-600  rounded-full p-1.5">
                  <AiOutlinePlus className="text-white text-lg font-bold" />
                </div>
                linkedIn rebuilt
              </span>
              <span className="flex w-28 h-5 py-4 rounded-2xl items-center text-white font-robotoCondensed font-normal text-sm bg-blue-700 capitalize px-4">
                <div className="">
                  <AiOutlinePlus className="text-white text-xl font-black " />
                </div>
                Add app
              </span>
            </div>
          </div>
          <img
            src="	https://www.gstatic.com/mobilesdk/190805_mobilesdk/illustration-b-waiting@2x.png"
            alt=""
            className="bg-no-repeat bg-bottom bg-cover mt-0  w-[2000px] h-full"
          />
        </div>
        <div className="py-5 bg-gray-200 items-center h-10 flex justify-center">
          <h1 className="text-sm font-robotoCondensed font-normal text-gray-800">
            waiting for Analytics data ...
          </h1>
        </div>
        <div className="min-h-[300vh]  phone:px-4 tablet:px-4 desktop:px-40 Xdesktop:px-40 ">
          <FirebaseCard />
        </div>
      </div>
    </div>
  );
};
export default App;
