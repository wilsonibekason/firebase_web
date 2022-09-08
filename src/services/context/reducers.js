import { ACTIONTYPES } from "./actions";
const {
  TOOGLEDESKTOPSIDEBAR,
  TOOGLETABLETSIDEBAR,
  TOOGLESLIDE,
  ANDROIDHOVER,
  APPLEHOVER,
  FLUTTERHOVER,
  UNITYHOVER,
  WEBHOVER,
} = ACTIONTYPES;

const toogleGlobalSidebar = (state) => {
  let customToolbar = [...state.visibleCustomToolbar];
  this.state = {
    ...this.state,
    visibleCustomToolbar: !customToolbar,
  };
};

const toogleState = (state) => {
  let toogleSlide = [...state.toogleSlide];
  this.state = {
    ...this.state,
    toogleSlide: toogleSlide,
  };
};

export const firebaseReducer = (state, action) => {
  switch (action.type) {
    case ACTIONTYPES.SET_APP_DATA:
      return {
        ...state,
        data: action.data,
      };
    case TOOGLETABLETSIDEBAR:
      return toogleGlobalSidebar(state);
    case TOOGLESLIDE:
      return toogleState(state);
    case APPLEHOVER:
      return { ...state, appleHover: action.payload };
    case ANDROIDHOVER:
      return { ...state, andriodHover: action.payload };
    case WEBHOVER:
      return { ...state, webHover: action.payload };
    case UNITYHOVER:
      return { ...state, unityHover: action.payload };
    case FLUTTERHOVER:
      return { ...state, flutterHover: action.payload };
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
};
