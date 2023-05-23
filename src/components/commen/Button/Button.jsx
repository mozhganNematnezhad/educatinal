import React from "react";

const Button = ({children ,customClass ,icon}) => {
  return (
    <button  className={` Ba-btn ${customClass}`}>
      <span className=" ml-2 md:text-2xl">{icon}</span>
      {children}
    </button>
  );
};

export default Button;








