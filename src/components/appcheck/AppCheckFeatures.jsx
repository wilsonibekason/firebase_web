import React from "react";
import styles, { Layout } from "../../styles/firebaseCustomStyles";
import { useGlobalContext } from "../../services/OnGlobalContext";
const AppCheckFeatures = () => {
  const { appCheckFeaturesSection } = Layout;

  const { flexCol6, flexRow2, paragraph5, paragraph6, flexCol7, transitions } =
    styles;
  const { open } = useGlobalContext();
  return (
    <>
      <div className={` ${open ? "mx-20" : "mx-44"}`}>
        <div className={`${flexCol6} space-y-8`}>
          <h3 className={`text-xl font-raleway font-medium text-gray-500 `}>
            More features for developers
          </h3>
          <div className={`${appCheckFeaturesSection}`}>
            <div
              className={`${flexCol6} rounded-md shadow-md bg-white hover:shadow-xl ${transitions} cursor-pointer`}
            >
              <div className={` `}>
                <img
                  src="https://www.gstatic.com/mobilesdk/200429_mobilesdk/realtime_database2x.png"
                  alt="feature_image"
                  className="rounded-t-lg "
                />
              </div>

              <div className={`${flexCol6}  justify-center  px-4 py-6`}>
                <div>
                  <h4
                    className={` font-raleway font-semibold text-lg text-gray-800 tracking-normal`}
                  >
                    Realtime Database
                  </h4>
                  <p className={`${paragraph6}`}>
                    Store and sync data in real time{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${flexCol6} rounded-md shadow-md bg-white hover:shadow-xl ${transitions} cursor-pointer`}
            >
              <div className={` `}>
                <img
                  src="https://www.gstatic.com/mobilesdk/200429_mobilesdk/cloud_firestore2x.png"
                  alt="feature_image"
                  className="rounded-t-lg "
                />
              </div>

              <div className={`${flexCol6}  justify-center  px-4 py-6`}>
                <div>
                  <h4
                    className={` font-raleway font-semibold text-lg text-gray-800 tracking-normal`}
                  >
                    Cloud Firestore
                  </h4>
                  <p className={`${paragraph6} leading-normal`}>
                    Realtime updates, powerful queries, and automatic scaling{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${flexCol6} rounded-md shadow-md bg-white hover:shadow-xl ${transitions} cursor-pointer`}
            >
              <div className={` `}>
                <img
                  src="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png"
                  alt="feature_image"
                  className="rounded-t-lg"
                />
              </div>

              <div className={`${flexCol6}  justify-center  px-4 py-6`}>
                <div>
                  <h4
                    className={` font-raleway font-semibold text-lg text-gray-800 tracking-normal`}
                  >
                    Storage
                  </h4>
                  <p className={`${paragraph6}`}>
                    Store and receive user genrated content{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-blue-500 justify-end mt-4">
            <a href="" className="hover:underline cursor-pointer">
              See all Build Features
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCheckFeatures;
