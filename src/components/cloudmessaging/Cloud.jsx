import React from "react";
import { useIconContext } from "../../services/OnIconContext";
import styles from "../../styles/firebaseCustomStyles";
const Cloud = () => {
  const {
    flexCol2,
    flexCol3,
    flexRow2,
    flexRow,
    flexCentered2,
    paragraph6,
    hreftext,
    paragraph8,
  } = styles;
  const { FiCheckSquare, BsBoxArrowUpRight, BsThreeDotsVertical } =
    useIconContext();
  return (
    <>
      <div className={`${flexCol2} mx-10`}>
        <div className={`${flexRow}`}>
          <div className={`${flexRow2} space-x-2`}>
            <p
              className={`font-robotoCondensed font-medium text-md text-gray-800 `}
            >
              {" "}
              Cloud Messsaging API (Legacy)
            </p>
            <span
              className={`${flexCentered2} font-robotoCodensed font-medium text-md text-violet-800 space-x-1`}
            >
              <FiCheckSquare className="text-violet-800" size={20} />

              <p>Enabled</p>
            </span>
          </div>
          <div>
            <BsThreeDotsVertical size={20} className={"text-black"} />
          </div>
        </div>
        {/* second documents */}
        <div className={`${flexRow2} space-x-2 pr-10`}>
          <p className={`${paragraph6} `}>
            If you are newly integrating messaging into your app, use the latest
            Firebase Cloud Messaging API (V1). If you are an existing user of
            Cloud Messaging API (Legacy), consider migrating to the latest
            Firebase Cloud Messaging API (V1){" "}
            <span className={`${hreftext} underline`}>
              learnmore{" "}
              {/* <BsBoxArrowUpRight className="text-blue-400" size={13} /> */}
            </span>
          </p>
        </div>
        {/*  */}
        <div className={`flex flex-col `}>
          <div className="border border-solid border-gray-400 rounded-t-lg py-2 px-6 bg-gray-100">
            <div className={`${flexRow2} space-x-16`}>
              <div>
                <p className={`${paragraph8}`}>Key</p>
              </div>
              <div>
                <p className={`${paragraph8}`}>Token</p>
              </div>
            </div>
          </div>
          <div
            className={`border border-t-0 border-solid border-gray-400 py-3 px-6 hover:bg-gray-200 transition duration-500 pr-10 w-full`}
          >
            <div className={`${flexRow2} space-x-9`}>
              <div className="items-center flex flex-wrap">
                <p className={`${paragraph8} `}>Server Key</p>
              </div>
              <div>
                <p
                  className={`${hreftext} underline line-clamp-2 break-all break-words`}
                >
                  AAAA5UGDMic:APA91bGAUGj9OrJBXc5D2aWceK9ufqhLFX2D5geuSZ0AXwlSFaX3QGg1Odi12pQDA4uDuEFoekq1evfJYBqYtqskQbBtjEGeJC55dzb21j9JildkOdNNrwZBU4KZZL0KtHWC1LQYP2q_...
                </p>
              </div>
            </div>
          </div>
          <div className="border border-solid border-gray-400  py-2 px-6 bg-gray-100">
            {/* <div className={`${flexRow2} space-x-16`}> */}
            <div class>
              <p className={`${paragraph8}`}>Sender ID</p>
            </div>

            {/* </div> */}
          </div>
          <div
            className={`border border-t-0 border-solid border-gray-400 rounded-b-lg py-3 px-6 hover:bg-gray-200 transition duration-500`}
          >
            {/* <div className={`${flexRow2} space-x-9`}> */}
            <div className="items-center ">
              <p className={`${paragraph8}`}>984646627879</p>
            </div>

            {/* </div> */}
          </div>
        </div>
        {/* end of border box */}
        <div className="flex justify-end">
          <button className="py-2 px-3 bg-blue-500  rounded-lg font-raleway font-medium text-gray-200 text-sm capitalize hover:bg-blue-700 transition duration-300 ease-in-out">
            add server key
          </button>
        </div>
      </div>
    </>
  );
};

export default Cloud;
