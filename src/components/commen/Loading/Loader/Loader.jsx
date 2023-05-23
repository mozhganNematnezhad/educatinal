import React from "react";

import loading from "../../../../Assets/images/spinner/Spinner.gif"

const Loader = () => {
  

  return (
    <>
      {/* {loading ? ( */}
        <div className=" mx-auto fixed top-0 right-0 bg-black/70 flex justify-center items-center w-full h-full z-[2000]">
          <img
            src={loading}
            className=" w-[20%]"
            alt="loading"
          />
        </div>
      {/* ) : null} */}
    </>
  );
};

export default Loader;
