import React from "react";
import { useGlobalContext } from "../../services/OnGlobalContext";
import { BuildContents } from "./DropdownContents";
const BuildContainer = () => {
  const { AiOutlineArrowUp, AiOutlineArrowDown, setDropdown, dropdown } =
    useGlobalContext();
  return (
    <>
      <div
        className="px-4 bg-gray-900 flex justify-between rounded-t-lg py-3 focus:bg-gray-700 hover:bg-gray-700"
        onClick={() => setDropdown((prev) => !prev)}
      >
        <div>
          <h4 className="font-raleway font-semibold text-sm text-white capitalize">
            build
          </h4>
        </div>
        <div>{!dropdown ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}</div>
      </div>
      <BuildContents />
    </>
  );
};
const ReleaseContainer = () => {
  const { AiOutlineArrowUp, AiOutlineArrowDown, setDropdown, dropdown } =
    useGlobalContext();
  return (
    <>
      <div
        className="px-4 bg-gray-900 flex justify-between rounded-t-lg py-3 focus:bg-gray-700 hover:bg-gray-700"
        onClick={() => setDropdown((prev) => !prev)}
      >
        <div>
          <h4 className="font-raleway font-semibold text-sm text-white capitalize">
            build
          </h4>
        </div>
        <div>{!dropdown ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}</div>
      </div>
    </>
  );
};
const AnalyticsContainer = () => {
  const { AiOutlineArrowUp, AiOutlineArrowDown, setDropdown, dropdown } =
    useGlobalContext();
  return (
    <>
      <div
        className="px-4 bg-gray-900 flex justify-between rounded-t-lg py-3 focus:bg-gray-700 hover:bg-gray-700"
        onClick={() => setDropdown((prev) => !prev)}
      >
        <div>
          <h4 className="font-raleway font-semibold text-sm text-white capitalize">
            build
          </h4>
        </div>
        <div>{!dropdown ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}</div>
      </div>
    </>
  );
};
const EngageContainer = () => {
  const { AiOutlineArrowUp, AiOutlineArrowDown, setDropdown, dropdown } =
    useGlobalContext();
  return (
    <>
      <div
        className="px-4 bg-gray-900 flex justify-between rounded-t-lg py-3 focus:bg-gray-700 hover:bg-gray-700"
        onClick={() => setDropdown((prev) => !prev)}
      >
        <div>
          <h4 className="font-raleway font-semibold text-sm text-white capitalize">
            build
          </h4>
        </div>
        <div>{!dropdown ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}</div>
      </div>
    </>
  );
};

const DropdownContainer = () => {
  const { AiOutlineArrowUp, AiOutlineArrowDown, setDropdown, dropdown } =
    useGlobalContext();
  return (
    <>
      <BuildContainer />
      <ReleaseContainer />
      <AnalyticsContainer />
      <EngageContainer />
    </>
  );
};

export default DropdownContainer;
