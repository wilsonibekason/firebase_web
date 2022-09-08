import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { BrowserRouter as Router } from "react-router-dom";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/primereact.css";
// import "primeflex/primeflex.css";
// import ScrollToTop from "./hooks/scrollToTop";
import "./index.css";
import { GlobalProvider } from "./services/OnGlobalContext";
import { IconProvider } from "./services/OnIconContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <IconProvider>
          {/* <ScrollToTop> */}
          <App />
          {/* </ScrollToTop> */}
        </IconProvider>
      </GlobalProvider>
    </Router>
  </React.StrictMode>
);
