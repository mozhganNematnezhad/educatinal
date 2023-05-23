import React from "react";

import spinner from "../../../Assets/images/spinner/Spinner.gif"

const Spinner = () => {
  return (
    <>
      <img src={spinner} alt="" className='block m-auto w-[200px] mt-10 text-center'  />
    </>
  );
};

export default Spinner;
