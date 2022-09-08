import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FireWeb, Overview } from "./views";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/web" element={<FireWeb />} />
      </Routes>
    </>
  );
};
export default App;
