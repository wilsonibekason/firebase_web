import { useContext, createContext } from "react";
import {
  BsApple,
  BsSquareFill,
  BsFillArrowUpRightSquareFill,
  BsBoxArrowUpRight,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { MdOutlineCancel, MdModeEdit } from "react-icons/md";
import { BiSquare } from "react-icons/bi";
import { FiCheckSquare } from "react-icons/fi";
import { FaGoogleDrive, FaKey } from "react-icons/fa";
import { GrCheckmark } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import {
  AiOutlineQuestionCircle,
  AiOutlineCaretDown,
  AiFillDatabase,
  AiFillSetting,
} from "react-icons/ai";
import { SiGooglechrome, SiGoogleassistant, SiSlack } from "react-icons/si";
const IconsContext = createContext({});

export const IconProvider = ({ children }) => {
  return (
    <IconsContext.Provider
      value={{
        BsApple,
        MdOutlineCancel,
        BsSquareFill,
        BiSquare,
        AiOutlineQuestionCircle,
        BsFillArrowUpRightSquareFill,
        MdModeEdit,
        AiOutlineCaretDown,
        FiCheckSquare,
        BsBoxArrowUpRight,
        BsThreeDotsVertical,
        FaGoogleDrive,
        GrCheckmark,
        IoMdArrowForward,
        SiGooglechrome,
        SiGoogleassistant,
        SiSlack,
        FaKey,
        AiFillDatabase,
        AiFillSetting,
      }}
    >
      {children}
    </IconsContext.Provider>
  );
};

export const useIconContext = () => useContext(IconsContext);
