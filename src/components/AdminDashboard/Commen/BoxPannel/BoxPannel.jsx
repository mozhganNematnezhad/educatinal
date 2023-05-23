import React from "react";

const BoxPannel = ({ text1, text2,color }) => {
  return (
    <div className={`${color} col-span-3 justify-center flex flex-col items-center p-[2.5rem] rounded-lg `}>
      <p className="text-gray-900 text-xl">{text1}</p>
      <p className="text-gray-600 pt-4 text-lg ">{text2}</p>
    </div>
  );
};

export default BoxPannel;
