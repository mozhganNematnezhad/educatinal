import React from "react";
import dot from "Assets/images/nav/dot.json";
import Lottie from "lottie-react";

const Dot = () => {
  return (
    <div className="w-[8px]">
      <Lottie animationData={dot} loop={true} />
    </div>
  );
};

export default Dot;
