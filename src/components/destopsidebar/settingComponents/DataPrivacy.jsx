import React from "react";
import { useIconContext } from "../../../services/OnIconContext";
import styles from "../../../styles/firebaseCustomStyles";
import { AnalyticsRepresentatives, DataSharing } from "../../dataprivacy";

const DataPrivacy = () => {
  const {} = useIconContext();
  const { flexCol4, flexRow2, flexCentered, paragraph5, paragraph10 } = styles;
  return (
    <>
      <div className={`${flexCol4} space-y-12 px-64 py-20`}>
        <div>
          <DataSharing />
        </div>
        <div>
          <AnalyticsRepresentatives />
        </div>
      </div>
    </>
  );
};

export default DataPrivacy;
