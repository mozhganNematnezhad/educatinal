import React, { useEffect ,useState } from "react";

import react from "../../../Assets/images/course/reeact.png";
import { Link, useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { getTeacherById } from "Services/Admin";

const ShowEmploye = () => {

 const {shId}=useParams()
//  console.log("params",params)
const [loading ,setLoading]=useState("false")
const [showEmploy ,setShowEmploy]=useState([])


useEffect(() => {
  const EmployData = async () => {
    try {
      setLoading(true);
      const {data} = await getTeacherById(shId);
      // console.log("response-employs", data);
      // console.log("response-lessons", data.result);
      setShowEmploy(data.result)   
      setLoading(false);
    } catch (error) {
      setLoading(false)
    }
  };
  EmployData();
}, [shId]);




  return (
    <div className=" bg-[#d6faef] mx-auto p-4 md:p-8 w-9/12 mt-12 mb-8 rounded-lg items-center gap-4">
      <div className="flex  items-center justify-between">
        <div></div>
        <div className="md:col-span-4">
          <img src={showEmploy.profile} alt="img admin" className="rounded w-[30%] mx-auto" />
        </div>
        <div>
          <Link to={"/admindashboard/pages/employes"}>
            <RiArrowGoBackFill className="text-2xl text-red-500" />
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-8 gap-8 mt-4">
        <div className=" md:col-span-4 bg-[#0eb582] p-6 rounded-lg text-center">
          <ul>
            <li className="py-[0.9rem] text-[1.1rem] text-white  ">
              نقش: <span className="text-base text-[#eef5f3]"> {showEmploy.role}</span>
            </li>
            <li className="py-[0.9rem] text-[1.1rem] text-white  ">
              نام کاربری:
              <span className="text-base text-[#eef5f3]"> {showEmploy.fullName}</span>
            </li>
            <li className="py-[0.9rem] text-[1.1rem] text-white  ">
              ادرس:
              <span className="text-base text-[#eef5f3]"> {showEmploy.address}</span>
            </li>
          </ul>
        </div>

        <div className=" md:col-span-4 bg-[#0eb582] p-6 rounded-lg text-center">
          <ul>
            <li className="py-[0.9rem] text-[1.1rem] text-white  ">
              ایمیل:{" "}
              <span className="text-base text-[#eef5f3]">
                {" "}
                {showEmploy.email}
              </span>
            </li>
            <li className="py-[0.9rem] text-[1.1rem] text-white  ">
              تلفن:
              <span className="text-base text-[#eef5f3]"> {showEmploy.phoneNumber}</span>
            </li>
            <li className="py-[0.9rem] text-[1.1rem] text-white  ">
              شماره ملی:
              <span className="text-base text-[#eef5f3]"> {showEmploy.nationalId}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShowEmploye;
