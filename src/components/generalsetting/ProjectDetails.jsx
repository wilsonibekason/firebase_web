import React from "react";
import styles from "../../styles/firebaseCustomStyles";

const ProjectDetails = () => {
  const { flexCol, flexRow } = styles;
  return (
    <>
      <div className={`${flexCol} bg-black`}>
        <div className={`${flexRow}`}>
          <div>hello world</div>
          <div>hello world</div>
        </div>
        <div className={`${flexRow}`}>
          <div>hello world</div>
          <div>hello world</div>
        </div>
        <div className={`${flexRow}`}>
          <div>hello world</div>
          <div>hello world</div>
        </div>
        <div className={`${flexRow}`}>
          <div>hello world</div>
          <div>hello world</div>
        </div>
        <div className={`${flexRow}`}>
          <div>hello world</div>
          <div>hello world</div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
