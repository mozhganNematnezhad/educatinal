import BoxPannel from "components/AdminDashboard/Commen/BoxPannel/BoxPannel";
import { boxDashboard } from "components/AdminDashboard/Data/Data";
import React from "react";

const BoxDashboard = () => {
  return (
    <div className="grid  md:grid-cols-6 lg:grid-cols-12 gap-2 mx-4 mt-14">
      {boxDashboard.map((item, index) => {
        return (
          <React.Fragment  key={index}>
            <BoxPannel text1={item.text1} text2={item.text2} color={item.color} />
          </React.Fragment>
        );
      })}

     
    </div>
  );
};

export default BoxDashboard;
