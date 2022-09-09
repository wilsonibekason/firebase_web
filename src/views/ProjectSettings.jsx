import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "../components";

const ProjectSettings = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default ProjectSettings;
