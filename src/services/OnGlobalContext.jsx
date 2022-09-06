import React, {
  useContext,
  createContext,
  useReducer,
  useRef,
  useState,
} from "react";
///
import { GiHamburgerMenu } from "react-icons/gi";
import { ImBell } from "react-icons/im";
import { ACTIONTYPES } from "./context/actions";
import { firebaseReducer } from "./context/reducers";
import GlobalContext from "./context/initialState";
import { chat } from "../assets";
///
//const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // initialise action states
  const { TOOGLETABLETSIDEBAR } = ACTIONTYPES;
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const [visibleNav, setVisibleNav] = useState(false);
  const loadLazyContent = useRef(null);
  const [firebaseState, dispatch] = useReducer(firebaseReducer, {});
  const scrollChange = () => {
    if (window.screenY >= 392) {
      setVisibleNav((prev) => !prev);
    } else {
      setVisibleNav(false);
    }
  };
  /// callfunctiom
  window.addEventListener("scroll", scrollChange);
  const toogleSidebar = () => {
    dispatch({
      type: TOOGLETABLETSIDEBAR,
      payload: !firebaseState.visibleCustomToolbar,
    });
  };
  const onProjectChange = (e) => setSelectedProject(e.value);
  const projectOptionTemplate = (option) => {
    return (
      <div className="  ">
        <div className="flex items-center">
          <img
            alt={option.name}
            src={chat}
            onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            className={`align-middle flag-${option.code.toLowerCase()}`}
          />
          <div className="font-raleway text-xss font-normal  text-gray-700 ">
            {option.name}
          </div>
        </div>
      </div>
    );
  };

  const selectedProjectTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <img
            alt={option.name}
            src={chat}
            onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            className={`flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };
  const groupedItemTemplate = (option) => {
    return (
      <div className="flex items-center bg-black">
        <img
          alt={option.label}
          src={chat}
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.label}</div>
      </div>
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        GiHamburgerMenu,
        ImBell,
        toogleSidebar: toogleSidebar,
        projectOptionTemplate: projectOptionTemplate,
        groupedItemTemplate: groupedItemTemplate,
        onProjectChange,
        selectedProject: selectedProject,
        selectedProjectTemplate: selectedProjectTemplate,
        setVisibleSidebar,
        visibleSidebar,
        visibleNav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
