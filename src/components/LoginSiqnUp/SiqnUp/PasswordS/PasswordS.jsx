import React, { useState } from "react";
import {Field, ErrorMessage } from "formik";

// react-icon
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";

const PasswordS = () => {
  // show hide password
  const [showPass, setShowPass] = useState("password");

  const handelShowPass = () => {
    if (showPass === "password") {
      setShowPass("text");
    }
    if (showPass === "text") {
      setShowPass("password");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mb-[1.2rem]  ">
      <div className="flex items-center justify-between  w-full md:w-[80%]">
        {/* label */}
        <div className="flex flex-row-reverse  items-center w-full md:w-[80%]">
          <label htmlFor="password" className="label pr-2">
            پسورد:
          </label>
          {/*icon  */}
          <span className="text-[#0eb582]">
            <RiLockPasswordFill />
          </span>
        </div>

        {/* show password */}
        <div className=" w-full md:w-[80%] flex justify-end">
          {showPass === "password" ? (
            <BsFillEyeFill
            onClick={handelShowPass}
              className="text-[#0eb582] text-xl"
            />
          ) : (
            <BsFillEyeSlashFill
              onClick={handelShowPass}
              className="text-[#0eb582] text-xl"
            />
          )}
        </div>
      </div>

      {/* input password */}
      <div className="relative flex justify-center w-full md:w-[80%]">
        <Field
          type={showPass}
          id="password"
          name="password"
          className="Input"
        />
        <span className="borderLeft"></span>
      </div>
      {/* error */}
      <div className="my-1 w-full md:w-[80%]">
        <ErrorMessage
          render={(msg) => (
            <div className="text-red-400 text-[0.8rem]">{msg}</div>
          )}
          name="password"
        />
      </div>
    </div>
  );
};

export default PasswordS;
