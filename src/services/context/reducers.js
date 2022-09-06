import { ACTIONTYPES } from "./actions";
const { TOOGLEDESKTOPSIDEBAR, TOOGLETABLETSIDEBAR } = ACTIONTYPES;

const toogleGlobalSidebar = (state) => {
  let customToolbar = [...state.visibleCustomToolbar];
  this.state = {
    ...this.state,
    visibleCustomToolbar: !customToolbar,
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
    default:
      return state;
  }
};
