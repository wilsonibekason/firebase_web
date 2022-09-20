import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import GlobalStateReducer from "../features/globalStateSlice/globalStateSlice";
const logger = createLogger();
const store = configureStore({
  reducer: {
    GlobalState: GlobalStateReducer,
  },
  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(logger),
});
export default store;
