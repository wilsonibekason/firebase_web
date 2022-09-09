import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import {
  AppCheck,
  CloudMessaging,
  DataPrivacy,
  General,
  Integration,
  ServiceAccount,
  UsersPermission,
} from "../components/destopsidebar/settingComponents";

const ProjectSettings = () => {
  return (
    <>
      <Layout>
        <Outlet />
        {/* <Routes>
        <Route path="/settings/general/general" element={<General />} />
        <Route
          path="/settings/general/cloudmessaging"
          element={<CloudMessaging />}
        />
        <Route path="/settings/general/integration" element={<Integration />} />
        <Route
          path="/settings/general/serviceaccount"
          element={<ServiceAccount />}
        />
        <Route path="/settings/general/dataprivacy" element={<DataPrivacy />} />
        <Route
          path="/settings/general/userspermission"
          element={<UsersPermission />}
        />
        <Route path="/settings/general/appcheck" element={<AppCheck />} />
      </Routes> */}
      </Layout>
    </>
  );
};

export default ProjectSettings;
