import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { AiOutlinePlus } from "react-icons/ai";
import { Navbar } from "./components";
import { useGlobalContext } from "./services/OnGlobalContext";
import TabletSidebar from "./components/TabletSidebar";
import "./App.css";
import { FirebaseCard } from "./components/overview";
const App = () => {
  const { GiHamburgerMenu, setVisibleSidebar, visibleSidebar } =
    useGlobalContext();
  const [open, setOpen] = useState(true);
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

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-52" : "w-20"
        } hidden md:hidden lg:block bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
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
            className={` flex flex-start flex-col  transition duration-100 pt-5 phone:px-4 desktop:px-40 Xdesktop:px-40 tablet:px-10`}
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
        <div className="min-h-[300vh] px-40">
          <FirebaseCard />
          <FirebaseCard />
          <FirebaseCard />
        </div>
      </div>
    </div>
  );
};
export default App;
