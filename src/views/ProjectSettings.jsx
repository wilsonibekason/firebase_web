import React, { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "../components";

const ProjectSettings = () => {
  const redirectPath = "/settings/general/general";
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (navigate) {
  //     // Check if navigate is available
  //     navigate(redirectPath, { replace: true });
  //   }
  // }, [navigate, redirectPath]);
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default ProjectSettings;
