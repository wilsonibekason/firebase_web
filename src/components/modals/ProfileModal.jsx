import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { closeDropdown } from "../../redux/features/globalStateSlice/globalStateSlice";
import styles from "../../styles/firebaseCustomStyles";
import { useIconContext } from "../../services/OnIconContext";
import { wilsonImg } from "../../assets/images";

const ProfileModal = () => {
  const dispatch = useDispatch();
  const dropdownState = useSelector(
    (state) => state.GlobalState.onOpenDropdown
  );
  const closeDropdownRef = () => dispatch(closeDropdown());

  const [hiddenAccounts, setHiddenAccounts] = useState(new Set());

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

  const handleHideAccount = (index) => {
    setHiddenAccounts((prev) => new Set(prev).add(index));
  };

  return (
    <Transition appear show={dropdownState} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeDropdownRef}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-400"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30"></div>
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
              <Dialog.Panel className="w-96 min-h-[30rem] max-h-[80vh] overflow-y-auto bg-white p-6 rounded-lg shadow-lg ml-[65rem]">
                <div className="space-y-6">
                  {/* Profile Info */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                      <img
                        src={wilsonImg}
                        alt="Profile"
                        className="w-16 h-16 object-cover rounded-full cursor-pointer"
                      />
                      <div className="absolute bottom-0 right-0 p-1 bg-white rounded-full shadow-lg">
                        <AiFillCamera
                          className="text-black cursor-pointer hover:opacity-50 transition duration-150"
                          size={20}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-gray-900 text-lg">Wilson Ibekason</h4>
                      <h4 className="text-gray-500 text-sm">
                        wilsonibekason@gmail.com
                      </h4>
                    </div>
                    <div>
                      <button className="py-2 px-4 rounded-full bg-gray-100 text-gray-700 font-semibold">
                        Manage your Google account
                      </button>
                    </div>
                  </div>

                  {/* Accounts List */}
                  <div className="space-y-4">
                    {Array.from(
                      { length: 5 },
                      (_, index) =>
                        !hiddenAccounts.has(index) && (
                          <div
                            key={index}
                            className="flex items-center justify-between space-x-3"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-gray-800">W</span>
                              </div>
                              <div className="text-start">
                                <h4 className="text-gray-800 text-sm">
                                  wilsonibekason
                                </h4>
                                <h4 className="text-gray-600 text-xs">
                                  wanbekgithub@gmail.com
                                </h4>
                              </div>
                            </div>
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleHideAccount(index)}
                            >
                              Hide
                            </button>
                          </div>
                        )
                    )}
                    <div className="flex items-center space-x-3">
                      <FiUserPlus className="text-gray-600" />
                      <h4 className="text-gray-600 cursor-pointer">
                        Add another account
                      </h4>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <button className="py-2 px-4 rounded-full bg-gray-100 text-gray-700 font-semibold">
                        Sign out of all devices
                      </button>
                    </div>
                    <div className="flex justify-between text-gray-500 text-sm">
                      <p className="cursor-pointer">Privacy Policy</p>
                      <p className="cursor-pointer">Terms of Service</p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProfileModal;
