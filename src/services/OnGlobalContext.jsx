import React, {
  useContext,
  createContext,
  useReducer,
  useRef,
  useState,
} from "react";
///
import { GiHamburgerMenu, GiWorld } from "react-icons/gi";
import { ImBell, ImCancelCircle } from "react-icons/im";
import { FaHome, FaCubes, FaRobot } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { BiRightArrow, BiCodeAlt, BiUpArrowAlt } from "react-icons/bi";
import {
  AiOutlineSetting,
  AiOutlineEye,
  AiOutlineMenu,
  AiOutlineArrowLeft,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineArrowRight,
  AiOutlineCodeSandbox,
  AiOutlinePlus,
} from "react-icons/ai";
import { IoIosAppstore } from "react-icons/io";
import { MdPeopleOutline } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { ACTIONTYPES } from "./context/actions";
import { firebaseReducer } from "./context/reducers";
// import GlobalContext from "./context/initialState";
import { chat } from "../assets";
///
//const GlobalContext = createContext({});
const initialState = {
  visibleCustomToolbar: false,
  toogleSlide: false,
  appleHover: false,
  andriodHover: false,
  webHover: false,
  unityHover: false,
  flutterHover: false,
};

const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  // initialise action states
  const {
    TOOGLETABLETSIDEBAR,
    APPLEHOVER,
    ANDROIDHOVER,
    WEBHOVER,
    UNITYHOVER,
    FLUTTERHOVER,
  } = ACTIONTYPES;
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [visibleNav, setVisibleNav] = useState(false);
  const [buildDropdown, setBuildDropdown] = useState(false);
  const [releaseDropdown, setReleaseDropdown] = useState(false);
  const [engageDropdown, setEngageDropdown] = useState(false);
  const [toogleState, setToogleState] = useState(false);
  const [onTooltipHover, setOnTooltipHover] = useState(false);
  const [onModalClick, setModalClick] = useState(false);
  const [onSettingModal, setOnSettingModal] = useState(false);
  const [open, setOpen] = useState(false);
  const loadLazyContent = useRef(null);

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
  /// defined usereducer funtion to add logic and pass chidren props to other parts of our application
  const [firebaseState, dispatch] = useReducer(firebaseReducer, initialState);
  // end of calling the reducer functiion as mentioned above
  //// reducer functions
  const toogleSidebar = () => {
    dispatch({
      type: TOOGLETABLETSIDEBAR,
      payload: !firebaseState.visibleCustomToolbar,
    });
  };
  const appleHovered = () => {
    dispatch({ type: APPLEHOVER, payload: false });
  };
  const androidHovered = () => {
    dispatch({ type: ANDROIDHOVER, payload: true });
  };
  const webHovered = () => {
    dispatch({ type: WEBHOVER, payload: true });
  };
  const unityHovered = () => {
    dispatch({ type: UNITYHOVER, payload: true });
  };
  const flutterHovered = () => {
    dispatch({ type: FLUTTERHOVER, payload: true });
  };
  return (
    <GlobalContext.Provider
      value={{
        GiHamburgerMenu,
        ImBell,
        toogleSlide: firebaseState.toogleSlide,
        toogleSidebar: toogleSidebar,
        // hover sllides
        andriodHover: firebaseState.andriodHover,
        androidHovered,
        webHover: firebaseState.webHover,
        webHovered,
        unityHover: firebaseState.unityHover,
        unityHovered,
        flutterHover: firebaseState.flutterHover,
        flutterHovered,
        appleHovered,
        appleHover: firebaseState.appleHover,
        ///////
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
        AiOutlinePlus,
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
        IoIosAppstore,
        AiOutlineCodeSandbox,
        RiFlutterFill,
        ImCancelCircle,
        FaRobot,
        BiCodeAlt,
        ////states
        setToogleState,
        toogleState,
        onTooltipHover,
        setOnTooltipHover,
        onModalClick,
        setModalClick,
        setOnSettingModal,
        onSettingModal,
        open,
        setOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
