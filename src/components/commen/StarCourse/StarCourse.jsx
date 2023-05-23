import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarCourse = () => {
  let randomStart = Math.floor(Math.random() * 4);
//   console.log("randomStart",randomStart)
  let completStar = [];
//   console.log("completStar",completStar);
  let lineStar = [];
//   console.log("lineStar",lineStar);

  for (let i = 0; i <= randomStart; i++) {
    completStar.push(1);
  }

  for (let i = 0; i <= 4 - completStar.length; i++) {
    lineStar.push(1);
  }
  return (
    <div className=" flex gap-2">
      {completStar.map((it,index) => (
        <AiFillStar key={index} />
      ))}
      {lineStar.map((it ,index) => (
        <AiOutlineStar key={index} />
      ))}
    </div>
  );
};

export default StarCourse;
