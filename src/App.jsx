import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Overview } from "./views";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </>
  );
};
export default App;
