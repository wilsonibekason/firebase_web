import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import ScrollToTop from "./hooks/scrollToTop";
import "./index.css";
import { GlobalProvider } from "./services/OnGlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      {/* <ScrollToTop> */}
      <App />
      {/* </ScrollToTop> */}
    </GlobalProvider>
  </React.StrictMode>
);
