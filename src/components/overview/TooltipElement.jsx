import React, { useState } from "react";

const Tooltip = ({ texts, children }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => {
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap mt-4 flex flex-col items-start">
          {texts && texts.map((text, index) => <div key={index}>{text}</div>)}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
