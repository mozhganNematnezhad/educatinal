import { toastifuySuccess } from "HelperFunctions/Toastify/Toastify";
import { deleteStudent } from "Services/Admin";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Student = ({ student, setStudents }) => {
  const handelDelete = async (stId) => {
    try {
      const response = await deleteStudent(stId);
      toastifuySuccess("دانشجو با موفقیت حذف شد");
      setStudents((prevStudent) => ({
        ...prevStudent,
        students: prevStudent.students.filter((item) => item._id !== stId),
      }));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <tbody
      className=" text-gray-500 bg-gray-50 md:text-[0.9] xl:text-[17px] 
    border-b-4 border-double content-center text-center 
    dark:bg-gray-300 items-center"
    >
      <tr>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {student.role}
        </th>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {student.fullName}
        </th>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {student.email}
        </th>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {student.phoneNumber}
        </th>
        <th scope="col" className="px-6 py-3">
          <Link
            to={`showstudent/${student._id}`}
            className="flex justify-center"
          >
            <IoEyeSharp />
          </Link>
        </th>
        <th scope="col" className="px-6 py-3">
          <button
            onClick={() => handelDelete(student["_id"])}
            className="flex justify-center"
          >
            <MdDelete />
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default Student;
