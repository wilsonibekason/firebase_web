import { useContext, createContext } from "react";
import {
  BsApple,
  BsSquareFill,
  BsFillArrowUpRightSquareFill,
  BsBoxArrowUpRight,
  BsThreeDotsVertical,
  BsCheck2Square,
  BsEmojiSmile,
  BsInfoLg,
  BsFillChatDotsFill,
  BsThreeDots,
} from "react-icons/bs";
import { MdOutlineCancel, MdModeEdit, MdContentCopy } from "react-icons/md";
import { BiSquare, BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { FiCheckSquare, FiCopy, FiUserPlus } from "react-icons/fi";
import { FaGoogleDrive, FaKey } from "react-icons/fa";
import { TbUserPlus } from "react-icons/tb";
import { GrCheckmark } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import {
  AiOutlineQuestionCircle,
  AiOutlineCaretDown,
  AiFillDatabase,
  AiFillSetting,
  AiOutlineSearch,
  AiOutlineArrowRight,
  AiFillCamera,
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
        BsCheck2Square,
        BiUpArrowAlt,
        AiOutlineSearch,
        BiDownArrowAlt,
        BsEmojiSmile,
        BsInfoLg,
        AiOutlineArrowRight,
        FiCopy,
        MdContentCopy,
        FiUserPlus,
        AiFillCamera,
        BsFillChatDotsFill,
        BsThreeDots,
      }}
    >
      {children}
    </IconsContext.Provider>
  );
};

export const useIconContext = () => useContext(IconsContext);
