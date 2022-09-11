import React from "react";
import { useIconContext } from "../../services/OnIconContext";
import styles, { Layout } from "../../styles/firebaseCustomStyles";
import { useGlobalContext } from "../../services/OnGlobalContext";
const AppCheckLearnMore = () => {
  const {
    appCheckGridSectionChild,
    appCheckGridSectionChild2,
    appCheckGridSectionLayout,
  } = Layout;
  const {
    flexCol6,
    paragraph5,
    flexRow2,
    transitions,
    paragraph6,
    borderBottom,
  } = styles;
  const { BsEmojiSmile, BsInfoLg, AiFillSetting } = useIconContext();
  const { open } = useGlobalContext();
  return (
    <>
      <div className={` ${!open ? "mx-44" : "mx-20"} my-20`}>
        <div className={`${flexCol6} space-y-10`}>
          <h3 className={`text-xl font-raleway font-medium text-gray-500 `}>
            Learn more
          </h3>
          <div className={`${appCheckGridSectionLayout}`}>
            <div className={`${appCheckGridSectionChild}`}>
              <div className={`${flexCol6}`}>
                {/* container first one  */}
                <div
                  className={` group bg-white rounded-t-lg border-b-2 shadow-md`}
                >
                  <div
                    className={` group-hover:bg-gray-200 rounded-t-lg ${transitions}`}
                  >
                    <div
                      className={`${flexRow2} px-5 py-6 space-x-2 items-center`}
                    >
                      {/* inner di */}
                      <div
                        className={`py-3 px-3 flex items-center justify-center bg-blue-500 rounded-full`}
                      >
                        <AiFillSetting size={30} />
                      </div>
                      {/* inner di */}
                      <div className={`${flexCol6}`}>
                        <h4 className={`${paragraph5} w-40`}>
                          How do i get started?
                        </h4>
                        <p className={`${paragraph6}`}>view the docs</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* container one */}
                <div className={` group bg-white border-b-2 shadow-md`}>
                  <div className={` group-hover:bg-gray-200  ${transitions}`}>
                    <div
                      className={`${flexRow2} px-5 py-6 space-x-2 items-center`}
                    >
                      {/* inner di */}
                      <div
                        className={`py-3 px-3 flex items-center justify-center bg-blue-500 rounded-full`}
                      >
                        <BsInfoLg size={30} />
                      </div>
                      {/* inner di */}
                      <div className={`${flexCol6}`}>
                        <h4 className={`${paragraph5} w-40`}>
                          How does app check work?
                        </h4>
                        <p className={`${paragraph6}`}>view the docs</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* container two */}
                <div className={` group bg-white rounded-b-lg shadow-md`}>
                  <div
                    className={` group-hover:bg-gray-200 rounded-b-lg ${transitions}`}
                  >
                    <div
                      className={`${flexRow2} px-5 py-6 space-x-2 items-center`}
                    >
                      {/* inner di */}
                      <div
                        className={`py-3 px-3 flex items-center justify-center bg-green-400 rounded-full`}
                      >
                        <BsEmojiSmile size={30} />
                      </div>
                      {/* inner di */}
                      <div className={`${flexCol6}`}>
                        <h4 className={`${paragraph5} w-40`}>
                          What can App Check do for me?
                        </h4>
                        <p className={`${paragraph6}`}>Learn more</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${appCheckGridSectionChild2}`}>
              <div
                className={`w-full shadow-md rounded-md border-2 border-spacing-2 border-solid bg-white h-[47vh]`}
              >
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src={"https://www.youtube.com/watch?v=DiSvq5SgLMI"}
                ></iframe>
              </div>
            </div>
          </div>
          <div className={`${borderBottom}`} />
        </div>
      </div>
    </>
  );
};

export default AppCheckLearnMore;
