import React from "react";

import { ErrorMessage, Field } from "formik";

const InputFeildEdit = ({ id, name,label, type}) => {
  return (
    <div>
      <div className="py-2 lg:py-4 flex flex-col px-4 md:flex md:items-center md:flex-row md:pr-0">
        <label htmlFor={id} className="dark:text-gray-300"> {label} : </label>
        <Field 
        type={type}
        id={id}
        name={name}
        className="Input dark:bg-[rgb(27,49,76)] dark:text-white"
         />
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

export default InputFeildEdit;
