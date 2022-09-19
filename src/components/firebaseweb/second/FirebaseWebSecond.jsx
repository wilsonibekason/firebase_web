import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  darcula,
  arduinoLight,
  atelierDuneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useNavigate } from "react-router-dom";
import { useIconContext } from "../../../services/OnIconContext";
import styles from "../../../styles/firebaseCustomStyles";

const FirebaseWebSecond = () => {
  const {
    flexCol7,
    flexRow,
    flexRow2,
    flexRowMain,
    paragraph11,
    hreftext,
    transitions,
    buttonStyle,
  } = styles;
  const {
    FiCopy,
    AiOutlineQuestionCircle,
    BsFillArrowUpRightSquareFill,
    MdContentCopy,
  } = useIconContext();
  const navigate = useNavigate();
  const data = "$ npm install firebase";
  return (
    <>
      <div className={`${flexCol7} mt-10 pl-6 space-y-10`}>
        <div className={`${flexCol7} space-y-4 `}>
          <div className={`${flexRow2} space-x-10 items-center`}>
            <div className={`${flexRowMain} space-x-2 items-center `}>
              <div class="flex items-center space-x-2 ">
                <input
                  type="radio"
                  value="code"
                  className="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded-full focus:ring-1 "
                />
                <label
                  for="default-radio-1"
                  className={`${paragraph11} capitalize tracking-normal `}
                >
                  use npm
                </label>
              </div>
              {/*  */}
              <div>
                <AiOutlineQuestionCircle className="text-gray-600" />
              </div>
            </div>
            <div className={`${flexRow2} items-center`}>
              <div className={`${flexRowMain} space-x-2 items-center `}>
                <div class="flex items-center space-x-2 ">
                  <input
                    type="radio"
                    value="code"
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded-full focus:ring-1 "
                  />
                  <label
                    for="default-radio-1"
                    className={`${paragraph11} capitalize tracking-normal `}
                  >
                    Use a {"<script>"} tag
                  </label>
                </div>
                {/*  */}
                <div>
                  <AiOutlineQuestionCircle className="text-gray-600 " />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className={`${paragraph11} max-w-[40rem] `}>
              f you're already using{" "}
              <span
                className={` cursor-pointer ${hreftext} ${transitions} hover:underline`}
              >
                npm
              </span>{" "}
              and a module bundler such as{" "}
              <span
                className={` cursor-pointer ${hreftext}  ${transitions} hover:underline`}
              >
                webpack
              </span>{" "}
              or{" "}
              <span
                className={` cursor-pointer ${hreftext} ${transitions} hover:underline`}
              >
                Rollup
              </span>{" "}
              , you can run the following command to install the latest SDK:
            </p>
          </div>
          <div className={`relative`}>
            <SyntaxHighlighter
              language="javascript"
              style={arduinoLight}
              className=" scrollbar-thin scrollbar-track-gray-500 rounded-lg"
            >
              {data}
            </SyntaxHighlighter>
            <MdContentCopy
              className={`absolute right-2 top-3 text-gray-700 hover:text-black ${transitions}`}
              size={20}
            />
          </div>
          <div className="">
            <p className={` ${paragraph11} text-sm`}>
              Then, initialize Firebase and begin using the SDKs for the
              products you'd like to use.
            </p>
          </div>
          <div className={`relative`}>
            <SyntaxHighlighter
              language="javascript"
              style={arduinoLight}
              className=" scrollbar-thin scrollbar-track-gray-500 rounded-lg "
            >
              {`
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
            const analytics = getAnalytics(app)
            `}
            </SyntaxHighlighter>
            {/* copy svg definition */}
            <MdContentCopy
              className={`absolute right-2 bottom-3 text-gray-700 hover:text-black ${transitions}`}
              size={20}
            />
          </div>
          <div>
            <p className={`${paragraph11}`}>
              <span className={`text-gray-800`}> Note</span>: This option uses
              the{" "}
              <span
                className={` cursor-pointer   ${hreftext} ${transitions} hover:underline`}
              >
                modular JavaScript SDK
              </span>{" "}
              , which provides reduced SDK size.
            </p>
          </div>
          <div>
            <p className={`${paragraph11}`}>
              Learn more about Firebase for web:{" "}
              <span
                className={`${hreftext} ${transitions} cursor-pointer hover:underline`}
              >
                Get Started
              </span>
              ,{" "}
              <span
                className={`${hreftext} ${transitions} cursor-pointer hover:underline`}
              >
                Web SDK API Reference
              </span>{" "}
              ,{" "}
              <span
                className={`${hreftext} ${transitions} cursor-pointer hover:underline`}
              >
                Samples
              </span>{" "}
            </p>
          </div>
        </div>
        <div>
          <button
            className={`${buttonStyle}`}
            onClick={() => navigate(`/`, { replace: true })}
          >
            continue to console
          </button>
        </div>
      </div>
    </>
  );
};

export default FirebaseWebSecond;
