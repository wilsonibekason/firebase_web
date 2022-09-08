import { useContext, createContext } from "react";

const IconsContext = createContext({});

export const IconProvider = ({ children }) => {
  return <IconsContext.Provider>{children}</IconsContext.Provider>;
};

export const useIconContext = () => useContext(IconsContext);
