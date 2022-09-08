import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FireWeb, Login, Overview, ProjectSettings, Register } from "./views";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/web" element={<FireWeb />} />
        <Route path="/settings/general" element={<ProjectSettings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
export default App;
