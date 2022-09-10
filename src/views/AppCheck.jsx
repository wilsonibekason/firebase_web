import React from "react";
import {
  AppCheckFeatures,
  AppCheckFooter,
  AppCheckHeader,
  AppCheckLearnMore,
  Layout,
} from "../components/appcheck";

const FirebaseAppCheck = () => {
  return (
    <>
      <Layout>
        <AppCheckHeader />
        <AppCheckLearnMore />
        <AppCheckFeatures />
        <AppCheckFooter />
      </Layout>
    </>
  );
};

export default FirebaseAppCheck;
