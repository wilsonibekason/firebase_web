import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import {
  docco,
  a11yDark,
  gruvboxLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useIconContext } from "../../services/OnIconContext";
import styles from "../../styles/firebaseCustomStyles";

import { highlightData } from "../../utils/data";

const AdminSDK = () => {
  const {
    flexCol4,
    paragraph7,
    paragraph6,
    paragraph5,
    paragraph11,
    borderBottom,
    flexCol3,
    flexCol5,
    buttonStyle,
    flexRow2,
  } = styles;
  const {} = useIconContext();
  const codeString = "(num) => num + 1";
  const java = "";
  return (
    <div className={`${flexCol4} pt-4 `}>
      <div className={`${flexCol4} px-8`}>
        <div>
          <h5 className={`${paragraph7} `}>Firebase Admin SDK</h5>
        </div>
        <div>
          <p className={`${paragraph6} leading-normal`}>
            Your Firebase service account can be used to authenticate multiple
            Firebase features, such as Database, Storage and Auth,
            programmatically via the unified Admin SDK. <span>Learn more</span>
          </p>
        </div>
        <div className={`${flexCol5}`}>
          <p className={`${paragraph6} `}>Firebase service account</p>
          <h4 className={`${paragraph7}`}>
            firebase-adminsdk-dz1mb@linkedin-app-d5d09.iam.gserviceaccount.com
          </h4>
        </div>
      </div>
      <div className={`${borderBottom}`} />
      <div className={`px-8`}>
        <div className={` ${flexRow2} space-x-4`}>
          {highlightData.map((item, index) => (
            <div className="flex items-center mb-4 space-x-2 " key={index}>
              <input
                type="radio"
                value="code"
                className="w-6 h-6 text-blue-600 focus:ring-blue-500 rounded-full focus:ring-1 "
              />
              <label
                htmlFor="default-radio-1"
                className={`${paragraph11} font-helviticaTin capitalize tracking-normal `}
              >
                {item.name}
              </label>
            </div>
          ))}
        </div>
        <SyntaxHighlighter
          language="javascript"
          style={gruvboxLight}
          className="scrollbar-thin scrollbar-thumb-gray-500 "
        >
          {` 
           var admin = require("firebase-admin");
           var serviceAccount = require("path/to/serviceAccountKey.json");
           admin.initializeApp({credential: admin.credential.cert(serviceAccount)})
         `}
        </SyntaxHighlighter>
      </div>

      {/* third container  */}
      <div className={`justify-start px-8 pt-8`}>
        <button className={`${buttonStyle}`}>Generate new private key</button>
      </div>
    </div>
  );
};

export default AdminSDK;
