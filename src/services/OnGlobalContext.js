import React, { useContext, createContext, useReducer } from "react";
///
import { GiHamburgerMenu } from "react-icons/gi";
import { ACTIONTYPES } from "./context/actions";
import { firebaseReducer } from "./context/reducers";
///
const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // initialise action states
  const { TOOGLETABLETSIDEBAR } = ACTIONTYPES;
  const [firebaseState, dispatch] = useReducer(firebaseReducer, {});
  const toogleSidebar = () => {
    dispatch({
      type: TOOGLETABLETSIDEBAR,
      payload: !firebaseState.sidebar,
    });
  };
  return (
    <GlobalContext.Provider
      value={{ GiHamburgerMenu, toogleSidebar: toogleSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
