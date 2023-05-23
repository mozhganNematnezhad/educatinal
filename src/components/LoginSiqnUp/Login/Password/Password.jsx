import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Field } from "formik";

// react-icon
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";


const Password = () => {
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
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="flex items-center  justify-between w-full md:w-[80%]">
        {/* label */}
        <div className="flex items-center flex-row-reverse w-full md:w-[80%]">
          {/* label */}
          <label htmlFor="password" className="label pr-2">
            پسورد:
          </label>
          {/*icon  */}
          <span className="text-[#0eb582]">
            <RiLockPasswordFill />
          </span>
        </div>

        {/* show pass */}
        <div className="w-full md:w-[80%] flex justify-end">
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
      <div className="relative flex justify-center w-full md:w-[80%]">
        <Field id="password" name="password" type={showPass} />
        <span className="borderLeft"></span>
      </div>

      <Link
        to="/forgetpassword"
        className=" text-[0.75rem] md:text-[0.8rem] text-[rgba(100,116,139,1)] w-[80%] mt-4"
      >
        فراموش کرده اید؟
      </Link>

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

export default Password;
