import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  closeDropdown,
  openDropdown,
} from "../../redux/features/globalStateSlice/globalStateSlice";
import styles from "../../styles/firebaseCustomStyles";
import { useIconContext } from "../../services/OnIconContext";
import { profile } from "../../assets";
import { wilsonImg } from "../../assets/images";
const ProfileModal = () => {
  const dispatch = useDispatch();
  const dropdownState = useSelector(
    (state) => state.GlobalState.onOpenDropdown
  );
  const closeDropdownRef = () => dispatch(closeDropdown());
  const {
    flexCol7,
    flexRowMain,
    flexBetween,
    flexCentered,
    paragraph13,
    paragraph12,
    flexStart,
  } = styles;
  const { FiUserPlus, AiFillCamera } = useIconContext();
  return (
    <>
      <div>
        <Transition appear show={dropdownState} as={Fragment}>
          <Dialog
            as="div"
            className={`relative z-10`}
            onClose={closeDropdownRef}
          >
            <Transition.Child
              as={Fragment}
              enter={"ease-out duration-500 "}
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-400"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className={`fixed inset-0 bg-black bg-opacity-0`}></div>
            </Transition.Child>
            <div className={`fixed top-0  overflow-y-auto `}>
              <div className="flex min-h-full max-h-max w-screen items-center justify-center py-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter={"ease-out duration-500 "}
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-400 "
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel
                    className={`w-1/4 min-h-[30rem] overflow-y-auto scrollbar-thumb-slate-400 scrollbar-thin scrollbar-thumb-rounded-lg my-7 ml-[65rem] bg-white py-4    transition-all rounded-lg`}
                  >
                    <div className={`${flexCol7}`}>
                      {/* first container content */}
                      <div className={`${flexCol7} px-6 py-4 space-y-3`}>
                        <div className={`${flexCentered}    `}>
                          <div
                            className={`border border-solid border-gray-500 p-3 rounded-full relative`}
                          >
                            <img
                              src={wilsonImg}
                              alt=""
                              className="w-16 h-16 object-cover rounded-full cursor-pointer"
                            />
                            <div
                              className={`absolute right-0 bottom-1 p-1 bg-white shadow-lg rounded-full`}
                            >
                              <AiFillCamera
                                className={`text-black cursor-pointer hover:opacity-50 transition duration-150 `}
                                size={20}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={`${flexCol7} items-center`}>
                          <h4 className={`${paragraph13} text-gray-900`}>
                            {" "}
                            wilson ibekason
                          </h4>
                          <h4 className={`${paragraph13} text-gray-500`}>
                            {" "}
                            wilsonibekason@gmail.com
                          </h4>
                        </div>
                        <div className={`${flexCentered}`}>
                          <div className={`py-1 px-3 rounded-lg shadow `}>
                            <h4
                              className={`${paragraph13} text-gray-500 font-helveticaNeueMed font-bold tracking-wider cursor-pointer`}
                            >
                              manage your google account
                            </h4>
                          </div>
                        </div>
                      </div>
                      {/* border  */}
                      <div
                        className={`border-t border-solid border-gray-200`}
                      />
                      <div
                        className={`${flexCol7} px-6 ${flexCentered} space-y-3 py-4`}
                      >
                        <div
                          className={`${flexRowMain} items-center space-x-3`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full shadow ${flexCentered}`}
                          >
                            <p
                              className={`${paragraph12} text-gray-800 text-lg`}
                            >
                              w
                            </p>
                          </div>
                          <div
                            className={`${flexCol7} ${flexStart} leading-tight`}
                          >
                            <h4
                              className={`${paragraph13} text-gray-600 font-robotoCondensed tracking-wider font-normal `}
                            >
                              wilsonibekason
                            </h4>
                            <h4
                              className={`${paragraph13} text-gray-600 font-helveticaNeueMed tracking-wider font-normal`}
                            >
                              wanbekgithub.com
                            </h4>
                          </div>
                        </div>
                        <div
                          className={`${flexRowMain} items-center space-x-3`}
                        >
                          <div>
                            <FiUserPlus className={`text-gray-600`} />
                          </div>
                          <div className={`${flexCol7}`}>
                            <h4
                              className={`${paragraph13} text-gray-600 font-robotoCondensed cursor-pointer`}
                            >
                              Add another account
                            </h4>
                          </div>
                        </div>
                      </div>
                      {/* border  */}
                      <div
                        className={`border-t border-solid border-gray-200`}
                      />
                      <div className={`${flexCol7} px-6 py-4 space-y-3`}>
                        <div className={`${flexCentered}`}>
                          <div className={`py-1 px-3 rounded-lg shadow`}>
                            <h4
                              className={`${paragraph13} text-gray-500 font-robotoCondensed font-normal cursor-pointer`}
                            >
                              {" "}
                              sign out of all devices
                            </h4>
                          </div>
                        </div>
                        <div className={`${flexBetween}`}>
                          <p
                            className={`${paragraph13} text-gray-500 font-robotoCondensed font-normal tracking-wide cursor-pointer`}
                          >
                            privacy policy
                          </p>
                          <p
                            className={`${paragraph13} text-gray-500 font-robotoCondensed font-normal tracking-wide cursor-pointer`}
                          >
                            terms of services
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default ProfileModal;
