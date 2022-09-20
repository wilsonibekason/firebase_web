import React from "react";
import styles from "../../../styles/firebaseCustomStyles";
import { useNavigate } from "react-router-dom";
const AppCheck = () => {
  const { paragraph8 } = styles;
  const navigate = useNavigate();
  return (
    <>
      <div className={`text-center justify-center mx-auto my-[30vh] `}>
        <p className={`${paragraph8} `}>
          this will take you to a new page{" "}
          <a
            className={` text-blue-500 underline cursor-pointer`}
            onClick={() => navigate("/appcheck", { replace: true })}
          >
            continue
          </a>
        </p>
      </div>
    </>
  );
};

export default AppCheck;
