import React, {
  useContext,
  createContext,
  useReducer,
  useRef,
  useState,
} from "react";
///
import { GiHamburgerMenu } from "react-icons/gi";
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
  const loadLazyContent = useRef(null);
  const [firebaseState, dispatch] = useReducer(firebaseReducer, {});
  const toogleSidebar = () => {
    dispatch({
      type: TOOGLETABLETSIDEBAR,
      payload: !firebaseState.visibleCustomToolbar,
    });
  };
  const onProjectChange = (e) => setSelectedProject(e.value);
  const projectOptionTemplate = (option) => {
    return (
      <div className="flex flex-start">
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
      <div className="flex items-center ">
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
        toogleSidebar: toogleSidebar,
        projectOptionTemplate: projectOptionTemplate,
        groupedItemTemplate: groupedItemTemplate,
        onProjectChange,
        selectedProject: selectedProject,
        selectedProjectTemplate: selectedProjectTemplate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
