import React from "react";
import { useIconContext } from "../../services/OnIconContext";
import styles from "../../styles/firebaseCustomStyles";
import Tooltip from "../overview/TooltipElement";

const ProjectDetails = () => {
  const {
    flexCol4,
    flexRow,
    flexRowAround,
    flexCentered,
    paragraph5,
    paragraph6,
    iconColor,
  } = styles;
  const { AiOutlineQuestionCircle, MdModeEdit } = useIconContext();
  return (
    <>
      <div className={`${flexCol4} w-[60%] max-w-[60%] mb-6`}>
        <div className={`${flexRow}`}>
          <div className={`${paragraph6}`}>Project name</div>
          <div className={`${flexCentered} space-x-1`}>
            <p className={`${paragraph5} `}>linkedin_app</p>
            <MdModeEdit
              className={`${iconColor} flex-start cursor-pointer`}
              size={20}
            />
          </div>
        </div>
        <div className={`${flexRow}`}>
          <div className={`${flexCentered} space-x-2 `}>
            <p className={`${paragraph6}`}>Project id</p>
            <Tooltip texts={["your project id"]}>
              <AiOutlineQuestionCircle
                className={`${iconColor} cursor-pointer`}
                size={16}
              />
            </Tooltip>
          </div>
          <div>
            <p className={`${paragraph5} flex-start`}>linkedin-app-d5d09</p>
          </div>
        </div>
        <div className={`${flexRow}`}>
          <div className={`${flexCentered} space-x-2`}>
            <p className={`${paragraph6}`}>Project number</p>
            <AiOutlineQuestionCircle className={`${iconColor}`} size={16} />
          </div>
          <div>
            <p className={`${paragraph5} flex-start`}>984646627879</p>
          </div>
        </div>
        <div className={`${flexRow}`}>
          <div className={`${flexCentered} space-x-2`}>
            <p className={`${paragraph6}`}>Default GCP resource location </p>
            <AiOutlineQuestionCircle className={`${iconColor}`} size={16} />
          </div>
          <div className="flex justify-end">
            <p className={`${paragraph5} flex-start`}>nam5 (us-central)</p>
          </div>
        </div>
        <div className={`${flexRow}`}>
          <div className={`${flexCentered} space-x-2`}>
            <p className={`${paragraph6}`}>Web api key </p>
            <AiOutlineQuestionCircle className={`${iconColor}`} size={16} />
          </div>
          <div className="flex justify-end">
            <p className={`${paragraph5}`}>AIzaSyCau5PkLcUkxF0MNHPUpkDe73Ek</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
