import { IoMdPeople } from "react-icons/io";
import {
  BsShieldCheck,
  BsFillCloudSnowFill,
  BsCardChecklist,
} from "react-icons/bs";
import { ImDatabase } from "react-icons/im";
import { GiWorld } from "react-icons/gi";
import { GrDocumentPerformance } from "react-icons/gr";
import { RiFileSettingsLine } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
export const projects = [
  { name: "diarryApp", code: "AU" },
  { name: "learnChatApp", code: "EF" },
  { name: "tutorial", code: "F" },
  { name: "blog", code: "EF" },
  { name: "docs", code: "EEF" },
  { name: "ecommerceSnippet", code: "RF" },
  { name: "amazonCheckout", code: "RT" },
];

// const db = <ImDatabase />;
// const check = <BsCardChecklist />;
// const dash = <MdOutlineDashboardCustomize />;
// const setting = <RiFileSettingsLine />;
// const world = <GiWorld />;
export const sidebarDropdown = [
  {
    name: "Authentication",
    icon: "",
  },
  {
    name: "App Check",
    icon: "",
  },
  {
    name: "Firebase Database",
    icon: "",
  },

  {
    name: "Storage",
    icon: "",
  },
  {
    name: "Hosting",
    icon: "",
  },
];
/**
 * npm install -g gltf-pipeline >npx gltfjsx earth.gltf
 *  <ul className={` ${!open ? "pl-2 pt-1" : "p-5 pt-4"}`}>
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
 */
