import React from "react";

import "./Loading.css"

const Loading = () => {
  return (
    <div>
      <div className="h-screen bg-gray-50 dark:bg-[rgb(27,52,77)]">
        <div className="lds-ring   ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
