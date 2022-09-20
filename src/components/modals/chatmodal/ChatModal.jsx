import React from "react";
import styles, { Layout } from "../../../styles/firebaseCustomStyles";

const ChatModal = () => {
  const {} = styles;
  const {} = Layout;
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
                    className={`w-1/4 min-h-[30rem] overflow-y-auto scrollbar-thumb-slate-400 scrollbar-thin scrollbar-thumb-rounded-lg my-20 ml-[50rem] bg-white py-4    transition-all rounded-lg`}
                  >
                    <div className="text-black"> hello world</div>
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
