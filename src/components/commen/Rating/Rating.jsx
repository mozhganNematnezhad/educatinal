import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Rating = () => {
  
    const [rate, setRate] = useState(5);

  return (
    <div className="flex justify-center">
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => setRate(i + 1)}>
          {rate > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
