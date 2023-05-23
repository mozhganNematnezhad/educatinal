import { toastifuySuccess } from "HelperFunctions/Toastify/Toastify";
import { deleteTeacher } from "Services/Admin";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const EmployAd = ({ employe,setEmployes }) => {
  // console.log("employe",employe)

  const deleteThecher=async (thId)=>{
    try {
      const response =await deleteTeacher(thId)
      console.log("response",response)
      toastifuySuccess("معلم با موفقیت حذف شد");
      setEmployes((prevCourse) => ({
        ...prevCourse,
        employees: prevCourse.employees.filter((item) => item._id !== thId),
      }));
      
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <tbody
      className=" text-gray-500 bg-gray-50 md:text-[0.9] xl:text-[17px] 
border-b-4 border-double content-center text-center 
dark:bg-gray-300 items-center"
    >
      <tr>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {employe.role}
        </th>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {employe.name}
        </th>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {employe.email}
        </th>

        <th scope="col" className="px-6 py-3">
          <Link
            to={`showemploye/${employe._id}`}
            className="flex justify-center"
          >
            <IoEyeSharp />
          </Link>
        </th>
        <th scope="col" className="px-6 py-3 flex justify-center">
          <button className="flex justify-center" onClick={()=>deleteThecher(employe._id)}>
            <MdDelete />
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default EmployAd;
