import React, {
  useContext,
  createContext,
  useReducer,
  useRef,
  useState,
} from "react";
///
import { GiHamburgerMenu, GiWorld } from "react-icons/gi";
import { ImBell } from "react-icons/im";
import { FaHome, FaCubes } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { BiRightArrow } from "react-icons/bi";
import {
  AiOutlineSetting,
  AiOutlineEye,
  AiOutlineMenu,
  AiOutlineArrowLeft,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";
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
  const [dropdown, setDropdown] = useState(false);
  const [visibleNav, setVisibleNav] = useState(false);
  const [buildDropdown, setBuildDropdown] = useState(false);
  const [releaseDropdown, setReleaseDropdown] = useState(false);
  const [engageDropdown, setEngageDropdown] = useState(false);
  const loadLazyContent = useRef(null);
  const [firebaseState, dispatch] = useReducer(firebaseReducer, {});
  const scrollChange = () => {
    if (window.screenY >= 392) {
      setVisibleNav((prev) => !prev);
    } else {
      setVisibleNav(false);
    }
  };

  // firebase logo
  const firebaseLogo =
    "https://icon2.cleanpng.com/20180609/ryh/kisspng-firebase-cloud-messaging-google-cloud-messaging-api-as-a-service-5b1bf782ac0ca2.2103995315285594907047.jpg";
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
        firebaseLogo,
        FaHome,
        FcSettings,
        BiRightArrow,
        AiOutlineSetting,
        MdPeopleOutline,
        FaIndustry,
        AiOutlineEye,
        AiOutlineMenu,
        FaCubes,
        AiOutlineArrowLeft,
        AiOutlineArrowDown,
        GiWorld,
        AiOutlineArrowUp,
        setDropdown,
        dropdown,
        //////
        buildDropdown,
        setBuildDropdown,
        releaseDropdown,
        setReleaseDropdown,
        engageDropdown,
        setEngageDropdown,
        AiOutlineArrowRight,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
