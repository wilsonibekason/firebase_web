import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AppCheck,
  CloudMessaging,
  DataPrivacy,
  General,
  Integration,
  ServiceAccount,
  UsersPermission,
} from "./components/destopsidebar/settingComponents";
import { FireWeb, Login, Overview, ProjectSettings, Register } from "./views";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/web" element={<FireWeb />} />
        <Route path="/settings/general" element={<ProjectSettings />}>
          <Route path="general" element={<General />} />
          <Route path="cloudmessaging" element={<CloudMessaging />} />
          <Route path="integration" element={<Integration />} />
          <Route path="serviceaccount" element={<ServiceAccount />} />
          <Route path="dataprivacy" element={<DataPrivacy />} />
          <Route path="userspermission" element={<UsersPermission />} />
          <Route path="appcheck" element={<AppCheck />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
export default App;
