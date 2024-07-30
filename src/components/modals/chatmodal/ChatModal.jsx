import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModalDropdown } from "../../../redux/features/globalStateSlice/globalStateSlice";
import { useIconContext } from "../../../services/OnIconContext";
import styles, { Layout } from "../../../styles/firebaseCustomStyles";
import ChatHomeMenu from "./ChatHomeMenu";

const ChatModal = () => {
  const dispatch = useDispatch();
  const {
    flexCol7,
    flexBetween,
    flexRowMain,
    paragraph12,
    paragraph13,
    flexCentered,
    transitions,
    flexStart,
  } = styles;
  const {} = Layout;
  const { BsThreeDots, AiFillEdit, AiOutlineSearch } = useIconContext();
  const modalStates = useSelector((state) => state.GlobalState.onModalopen);
  const closeModalDropdownRef = () => dispatch(closeModalDropdown());
  console.log("the modal state is", modalStates);
  return (
    <>
      <div>
        <Transition appear show={modalStates} as={Fragment}>
          <Dialog
            as="div"
            className={`relative z-10`}
            onClose={closeModalDropdownRef}
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
              <div className={`fixed inset-0 bg-black bg-opacity-0`} />
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
                    className={`w-[28%]  min-h-[45rem] overflow-y-auto scrollbar-thumb-slate-400 scrollbar-thin scrollbar-thumb-rounded-lg my-10 ml-[60rem] bg-white shadow-2xl  py-8 px-4  transition-all rounded-lg`}
                  >
                    <div className={``}>
                      <div className={`${flexCol7} space-y-8`}>
                        {/* top chat layout */}
                        <div className={`${flexBetween} items-center`}>
                          <div></div>
                          <div>
                            <h4 className={`text-lg text-gray-600`}>inbox</h4>
                          </div>
                          <div className={`${flexRowMain} space-x-5`}>
                            {/* icon one */}
                            <div
                              className={`w-12 h-12 ${flexCentered}  rounded-full ${transitions} hover:bg-gray-300`}
                            >
                              <BsThreeDots
                                size={25}
                                className={`text-gray-800`}
                              />
                            </div>
                            {/* icon two */}
                            <div
                              className={`w-12 h-12 ${flexCentered}  rounded-full ${transitions} hover:bg-gray-300`}
                            >
                              <AiFillEdit
                                size={25}
                                className={`text-gray-800`}
                              />
                            </div>
                          </div>
                        </div>
                        {/* chat bot header  */}
                        <div className={`${flexStart} w-[90%]`}>
                          <div>
                            <h1
                              className={`text-4xl  text-gray-800 font-robotoCondensed font-semibold tracking-wide `}
                            >
                              share ideas with your friends
                            </h1>
                          </div>
                        </div>
                        {/* chat bot chat input */}
                        <div className={`${flexCol7} space-y-3`}>
                          <div className={`relative`}>
                            <span className={`absolute left-3 top-4`}>
                              <AiOutlineSearch
                                size={25}
                                className={`text-gray-800 `}
                              />
                            </span>
                            <input
                              type="text"
                              placeholder="Search by name or email"
                              className={`w-full py-3 rounded-full placeholder:text-center placeholder:text-gray-800 placeholder:font-robotoCondensed placeholder:font-light placeholder:tracking-wider border-2 border-gray-400 text-gray-800 text-center font-robotoCondensed tracking-wider `}
                            />
                          </div>
                          <div>
                            <h4
                              className={`${paragraph12} font-robotoCondensed font-normal text-gray-800 text-start`}
                            >
                              Suggested
                            </h4>
                          </div>
                        </div>
                        {/* chat pot friends layout */}
                        <div
                          className={`${flexCol7} space-y-3 min-h-[100px] h-[220px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-600`}
                        >
                          {Array(10)
                            .fill("")
                            .map((_) => (
                              <ChatHomeMenu key={_ + "dd"} />
                            ))}
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

export default ChatModal;
