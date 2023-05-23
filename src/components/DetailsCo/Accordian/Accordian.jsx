import React, { useState } from "react";

import { Data } from "../Data/Data";
import AccordianUi from "./AccordianUi";

// md:mt-32  py-20 bg-gray-50

const Accordian = () => {
  const [index, setIndex] = useState(false);
  return (
    <div className="flex flex-col  justify-center items-center mt-8 md:mt-0  md:p-12 rounded-xl h-auto ">
      {/* map data */}
      {Data.map((data) => {
        return (
          <React.Fragment key={data.id}>
            <AccordianUi
              title={data.question}
              id={data.id}
              children={data.answer}
              index={index}
              setIndex={setIndex}
            ></AccordianUi>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Accordian;
