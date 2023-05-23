import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTeacherById } from "Services/Admin";

import teacherimg from "../../../Assets/images/teacher/teacher.svg";

// import react-icons
import { FaBirthdayCake } from "react-icons/fa";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { ImAddressBook } from "react-icons/im";

const MoreTeacher = () => {
  const { tchId } = useParams();
  // console.log(params);
  const [detailsTeacher, setDetailsTeacher] = useState([]);

  useEffect(() => {
    const OneTeachers = async () => {
      try {
        const response = await getTeacherById(tchId);
        // console.log("response-oneteachers", response);
        setDetailsTeacher(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    OneTeachers();
  }, [tchId]);

  return (
    <div className="bg-white  shadow-lg m-8  border border-solid border-[#ecf4ec] rounded-lg 
    dark:bg-[#001E3C] dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]">
      <div className=" flex flex-col md:flex-row md:grid md:grid-cols-12 md:items-center">
        <div className="md:col-span-2">
          <div className="m-4 w-[50%] mx-auto  ">
            <img
              src={detailsTeacher.profile}
              className="border border-[#0eb582] border-solid rounded-lg"
              alt="teacher"
            />
          </div>
        </div>
        <div className="md:col-span-4 p-4 m-auto md:text-right">
          <div className=" ">
            <p className="text-[#0eb582] text-2xl font-bold dark:text-white">
              {detailsTeacher.fullName}
            </p>
          </div>
          {/* <div className="flex pt-4">
            <p> نام درس :</p>
            <p> {detailsTeacher?.courses[0]?.title}</p>
          </div> */}

          <div className="pt-4 flex ">
            <div>
              <FaBirthdayCake className="text-[#0eb582] ml-2 barrelRoll text-xl" />
            </div>
            <p className="dark:text-gray-300">{detailsTeacher.birthDate}</p>
          </div>

          <div className="pt-4 flex">
            <BsFillTelephoneForwardFill className="text-[#0eb582] ml-2" />
            <p className="dark:text-gray-300">{detailsTeacher.phoneNumber}</p>
          </div>

          <div className="pt-4 flex">
            <AiTwotoneMail className="text-[#0eb582] ml-2" />
            <p className="dark:text-gray-300">{detailsTeacher.email}</p>
          </div>

          <div className="pt-4 flex">
            <ImAddressBook className="text-[#0eb582] ml-2" />
            <p className="dark:text-gray-300">{detailsTeacher.address}</p>
          </div>
        </div>

        <div className="md:col-span-6 p-4 ">
          <div className="w-full">
            <img src={teacherimg} alt="" className="w-[80%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreTeacher;
