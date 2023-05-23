import React from "react";
import { ErrorMessage, Field } from "formik";

const InputFeild = ({ id, name, icon, label, type }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-[1.2rem] ">
      <div className="flex flex-row-reverse  w-full md:w-[80%]">
        <label htmlFor={id} className="label pr-2">
          {label} :
        </label>
        <span className="text-[#0eb582]">{icon}</span>
      </div>
      <div className="relative flex justify-center w-full md:w-[80%]">
        <Field type={type} id={id} name={name} className="Input" />
        <span className="borderLeft"></span>
      </div>
      <div className="my-1 w-full md:w-[80%]">
        <ErrorMessage
          render={(msg) => (
            <div className="text-red-400 text-[0.8rem]">{msg}</div>
          )}
          name={name}
        />
      </div>
    </div>
  );
};

export default InputFeild;
