import React from "react";

import { HiArrowCircleDown, HiX } from "react-icons/hi";

const AccordianUi = ({ id, setIndex, index, title, children }) => {
  const handleSetIndex = (id) => {
    index !== id && setIndex(id);
  };

  // icon close
  const onClose = () => {
    setIndex(!index);
  };
  return (
    <>
      <div
        onClick={() => handleSetIndex(id)}
        className="De-Accordian-All flex group"
      >
        {/* title-question */}
        <div className="flex group cursor-pointer ">
          <div className="De-Acoordian-Title" onClick={onClose}>
            {title}
          </div>
        </div>

        {/* icon */}
        <div className="flex items-center justify-center pr-10">
          {index !== id ? (
            <HiArrowCircleDown className="De-icon dark:text-white" />
          ) : (
            <HiX className="De-icon dark:text-white " onClick={onClose} />
          )}
        </div>
        {/* end icon */}
      </div>
      {/* content */}
      {index === id && <div className="De-Accordian-Content">{children}</div>}
    </>
  );
};

export default AccordianUi;













