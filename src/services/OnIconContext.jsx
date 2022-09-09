import { useContext, createContext } from "react";
import {
  BsApple,
  BsSquareFill,
  BsFillArrowUpRightSquareFill,
} from "react-icons/bs";
import { MdOutlineCancel, MdModeEdit } from "react-icons/md";
import { BiSquare } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
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
      }}
    >
      {children}
    </IconsContext.Provider>
  );
};

export const useIconContext = () => useContext(IconsContext);
