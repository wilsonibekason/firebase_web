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

export const recentProjects = [
  "linked-clone",
  "whatsapp-clone",
  "twitter-clone",
  "amazon-clone",
  "facebook-clone",
  "pinterest-clone",
];

export const tabElements = [
  {
    name: "general",
    id: 1,
    link: "general",
    customStyles: "",
  },
  {
    name: "cloud messaging",
    id: 2,
    link: "cloudmessaging",
    customStyles: "",
  },
  {
    name: "integration",
    id: 3,
    link: "integration",
    customStyles: "",
  },
  {
    name: "service account",
    id: 4,
    link: "serviceaccount",
    customStyles: "",
  },
  {
    name: "data privacy",
    id: 5,
    link: "dataprivacy",
    customStyles: "",
  },
  {
    name: "user permission",
    id: 6,
    link: "userpermission",
    customStyles: "",
  },
  {
    name: "app check",
    id: 7,
    link: "appcheck",
    customStyles: "",
  },
];
