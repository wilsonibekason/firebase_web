import { createSlice, createReducer } from "@reduxjs/toolkit";
const initialState = {
  onOpenDropdown: false,
  onModalopen: false,
};
const GlobalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    openDropdown: (state) => {
      state.onOpenDropdown = true;
    },
    closeDropdown: (state) => {
      state.onOpenDropdown = false;
    },
    closeModalDropdown: (state) => {
      state.onModalopen = false;
    },
    openModalDropdown: (state) => {
      state.onModalopen = true;
    },
  },
});
export default GlobalStateSlice.reducer;
export const {
  openDropdown,
  closeDropdown,
  openModalDropdown,
  closeModalDropdown,
} = GlobalStateSlice.actions;
export const realState = (state) => state.GlobalState.onOpenDropdown;
export const modalState = (state) => state.GlobalState.onModalopen;
