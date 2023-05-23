import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import react from "../../../Assets/images/course/reeact.png";
import { getStudentById } from "Services/Admin";

const ShowStudent = () => {
  const { shId } = useParams();
  console.log("shId", shId);

  const [loading, setLoading] = useState("false");
  const [showStudent, setShowStudent] = useState([]);
  console.log("showStudent", showStudent.courses);

  useEffect(() => {
    const getoneStudent = async () => {
      try {
        setLoading(true);
        const { data } = await getStudentById(shId);
        // console.log("response",response)
        setShowStudent(data.result);
        setLoading(false);
      } catch (error) {}
    };
    getoneStudent();
  }, [shId]);

  return (
    <div className=" bg-[#d6faef] mx-auto p-4 md:p-8 w-9/12 mt-12 mb-8 rounded-lg items-center gap-4">
      <div className="flex  items-center justify-between">
        <div></div>
        <div className="md:col-span-4">
          <img
            src={showStudent.profile}
            alt="img admin"
            className="rounded w-40"
          />
        </div>
        <div>
          <Link to={"/admindashboard/pages/students"}>
            <RiArrowGoBackFill className="text-2xl text-red-500" />
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-8 gap-8 mt-4">
        <div className=" md:col-span-4 bg-[#0eb582] p-6 rounded-lg text-center">
          <ul>
            <li className="py-[0.9rem] text-[1.1rem] text-white  ">
              نام:{" "}
              <span className="text-base text-[#eef5f3]">
                {" "}
                {showStudent.fullName}
              </span>
            </li>
            <li className="py-[0.9rem] text-[1.1rem] text-white  ">
              ایمیل:
              <span className="text-base text-[#eef5f3]">
                {" "}
                {showStudent.email}
              </span>
            </li>
            <li className="py-[0.9rem] text-[1.1rem] text-white  ">
              تلفن:
              <span className="text-base text-[#eef5f3]">
                {" "}
                {showStudent.phoneNumber}{" "}
              </span>
            </li>
          </ul>
        </div>

        <div className=" md:col-span-4 bg-[#0eb582] p-6 rounded-lg text-center">
          <label> دروس خریداری شده :</label>
          <div className="  p-4 rounded-lg ">
            <div className=" border-2 border-solid border-green-400 focus:outline-green-400  rounded-lg mt-4">
              <select
                as="select"
                id="student"
                name="student"
                className="w-full outline-0 rounded-lg  dark:bg-[#1B314C] dark:text-white"
              >
                {showStudent.courses && showStudent.courses.length > 0 ? (
                  showStudent.courses.map((item) => (
                    <option
                      value={item["_id"]}
                      key={item["_id"]}
                      className="cursor-pointer bg-white"
                    >
                      {item.title}
                    </option>
                  ))
                ) : (
                  <option value={""} className="  cursor-pointer">
                    درسی وجود ندارد
                  </option>
                )}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowStudent;
