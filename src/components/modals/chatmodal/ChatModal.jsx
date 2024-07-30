import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModalDropdown } from "../../../redux/features/globalStateSlice/globalStateSlice";
import { useIconContext } from "../../../services/OnIconContext";
import styles from "../../../styles/firebaseCustomStyles";
import ChatHomeMenu from "./ChatHomeMenu";

const ChatModal = () => {
  const dispatch = useDispatch();
  const modalStates = useSelector((state) => state.GlobalState.onModalopen);
  const closeModalDropdownRef = () => dispatch(closeModalDropdown());

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

  const { BsThreeDots, AiFillEdit, AiOutlineSearch } = useIconContext();

  return (
    <>
      <Transition appear show={modalStates} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeModalDropdownRef}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-400"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center py-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-500"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-400"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-11/12 md:w-3/5 lg:w-1/3 min-h-[45rem] max-h-[80vh] overflow-y-auto bg-white shadow-2xl py-8 px-6 transition-all rounded-lg  ml-[55rem]">
                  <div className="space-y-8">
                    {/* Top chat layout */}
                    <div className="flex justify-between items-center">
                      <div />
                      <h4 className="text-lg text-gray-600">Inbox</h4>
                      <div className="flex space-x-5">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-300 transition cursor-pointer">
                          <BsThreeDots size={25} className="text-gray-800" />
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-300 transition cursor-pointer">
                          <AiFillEdit size={25} className="text-gray-800" />
                        </div>
                      </div>
                    </div>
                    {/* Chat bot header */}
                    <div className="text-left w-[90%]">
                      <h1 className="text-3xl text-gray-800 font-helveticaNeueBlack font-semibold">
                        Share ideas with your friends
                      </h1>
                    </div>
                    {/* Chat bot chat input */}
                    <div className="space-y-2">
                      <div className="relative">
                        <span className="absolute left-3 top-3.5">
                          <AiOutlineSearch
                            size={25}
                            className="text-gray-800"
                          />
                        </span>
                        <input
                          type="text"
                          placeholder="Search by name or email"
                          className="w-full py-3 pl-12 pr-4 rounded-full border-2 border-gray-400 text-gray-800 placeholder:text-gray-800 placeholder:font-helviticaTin placeholder:tracking-wider"
                        />
                      </div>
                      <h4 className="text-sm font-robotoCondensed font-normal text-gray-800 text-start">
                        Suggested
                      </h4>
                    </div>
                    {/* Chat pot friends layout */}
                    <div className="space-y-3 min-h-[100px] max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-600 custom-scrollbar">
                      {Array.from({ length: 10 }, (_, index) => (
                        <ChatHomeMenu key={index} />
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ChatModal;
