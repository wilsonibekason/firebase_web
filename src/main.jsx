import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScrollToTop from "./hooks/scrollToTop";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </React.StrictMode>
);
