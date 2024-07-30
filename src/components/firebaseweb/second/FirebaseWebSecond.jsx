import React, { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useNavigate } from "react-router-dom";
import { useIconContext } from "../../../services/OnIconContext";
import styles from "../../../styles/firebaseCustomStyles";

const FirebaseWebSecond = () => {
  const {
    flexCol7,
    flexRow2,
    flexRowMain,
    paragraph11,
    hreftext,
    transitions,
    buttonStyle,
  } = styles;
  const { AiOutlineQuestionCircle, MdContentCopy } = useIconContext();
  const navigate = useNavigate();
  const npmData = "$ npm install firebase";
  const firebaseConfig = `
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCau5PkLcUkxF0MNHPUpkDe73EkWGKhi9Y",
  authDomain: "linkedin-app-d5d09.firebaseapp.com",
  projectId: "linkedin-app-d5d09",
  storageBucket: "linkedin-app-d5d09.appspot.com",
  messagingSenderId: "984646627879",
  appId: "1:984646627879:web:b8e2a6948d841e5bb51402",
  measurementId: "G-39YRZXFGBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  `;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className={`${flexCol7} mt-10 pl-6 space-y-10`}>
      <div className={`${flexCol7} space-y-4`}>
        <div className={`${flexRow2} space-x-10 items-center`}>
          <div className={`${flexRowMain} space-x-2 items-center`}>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="installMethod"
                value="npm"
                className="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded-full focus:ring-1"
              />
              <label className={`${paragraph11} capitalize`}>Use npm</label>
            </div>
            <AiOutlineQuestionCircle className="text-gray-600" />
          </div>
          <div className={`${flexRow2} items-center`}>
            <div className={`${flexRowMain} space-x-2 items-center`}>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="installMethod"
                  value="scriptTag"
                  className="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded-full focus:ring-1"
                />
                <label className={`${paragraph11} capitalize`}>
                  Use a {"<script>"} tag
                </label>
              </div>
              <AiOutlineQuestionCircle className="text-gray-600" />
            </div>
          </div>
        </div>
        <p className={`${paragraph11} max-w-[40rem]`}>
          If you're already using{" "}
          <span
            className={`cursor-pointer ${hreftext} ${transitions} hover:underline`}
          >
            npm
          </span>{" "}
          and a module bundler such as{" "}
          <span
            className={`cursor-pointer ${hreftext} ${transitions} hover:underline`}
          >
            webpack
          </span>{" "}
          or{" "}
          <span
            className={`cursor-pointer ${hreftext} ${transitions} hover:underline`}
          >
            Rollup
          </span>
          , you can run the following command to install the latest SDK:
        </p>
        <div className="relative">
          <SyntaxHighlighter
            language="javascript"
            style={arduinoLight}
            className="scrollbar-thin scrollbar-track-gray-500 rounded-lg"
          >
            {npmData}
          </SyntaxHighlighter>
          <MdContentCopy
            size={20}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
            onClick={() => copyToClipboard(npmData)}
          />
        </div>
      </div>
      <div className={`${flexCol7} space-y-5`}>
        <div className={`${flexRow2} space-x-2 items-center`}>
          <div className="flex justify-center items-center py-0 px-2 bg-blue-600 rounded-full">
            <p className="text-xss text-white">3</p>
          </div>
          <h4 className="font-raleway font-normal text-sm text-gray-700">
            Initialize Firebase in your app
          </h4>
        </div>
        <p className={`${paragraph11} max-w-[40rem]`}>
          Copy the following code into the top of your app's main JavaScript
          file to initialize Firebase:
        </p>
        <div className="relative">
          <SyntaxHighlighter
            language="javascript"
            style={arduinoLight}
            className="scrollbar-thin scrollbar-track-gray-500 rounded-lg"
          >
            {firebaseConfig}
          </SyntaxHighlighter>
          <MdContentCopy
            size={20}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
            onClick={() => copyToClipboard(firebaseConfig)}
          />
        </div>
      </div>
      <div className={`${flexRow2} items-center justify-between mt-10`}>
        <button
          onClick={() => navigate("/firewebsecond")}
          className={`bg-blue-500 text-white ${buttonStyle} hover:bg-blue-600`}
        >
          Next
        </button>
        <button
          onClick={() => navigate("/")}
          className={`bg-gray-300 text-gray-700 ${buttonStyle} hover:bg-gray-400`}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default FirebaseWebSecond;
