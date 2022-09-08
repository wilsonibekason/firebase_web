import React from "react";
import { useGlobalContext } from "../../services/OnGlobalContext";
import { useIconContext } from "../../services/OnIconContext";

const Tooltip = ({ name, customStyles, hoverType }) => {
  const {
    OnTooltipHover,
    andriodHover,
    appleHover,
    flutterHover,
    toogleSlide,
    unityHover,
    webHover,
  } = useGlobalContext();
  const { BsApple } = useIconContext();
  return (
    <p
      className={` ${
        hoverType ? "hidden" : "block"
      } hidden absolute -ml-2 py-px px-2.5 bg-gray-700 text-gray-200 text-[9px] rounded-md ${customStyles}`}
    >
      {name}
    </p>
  );
};

export default Tooltip;
