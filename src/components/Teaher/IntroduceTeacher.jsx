import React, { useEffect, useState } from "react";
// import api
import { getAllTeachers } from "Services/Public";

// import components
import RotateCircle from "components/commen/RotateCircle/RotateCircle";
import Loading from "components/commen/Loading/Loading";
import Professor from "./Professor";
// import av
import Ellipse from "Assets/images/teacher/Ellipsele.svg";
import Ellipse1 from "Assets/images/teacher/Ellipsele1.svg";

import "../Teaher/IntroduceTeacher.css";


const IntroduceTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemPerPage, setPerPageItems] = useState(3);

  useEffect(() => {
    const allTeachers = async () => {
      try {
        const response = await getAllTeachers();
        // console.log("response-teachers", response);
        setTeachers(response.data.result);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    allTeachers();
  }, []);

  const showMoreItems = () => {
    setPerPageItems((prevValue) => prevValue + 3);
  };
  return (
    <div className="!container !mx-auto">
      <div className="titleTeacher text-[#534f4f] mt-[3rem] border-b-2 border-solid border-[#0eb582] pb-[0.5rem] text-[2.2rem]">
        <h1 className="pr-4 lg:pr-0 dark:text-white">معرفی اساتید</h1>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="">
          {teachers.slice(0,itemPerPage).map((teacher) => {
            return (
              <React.Fragment key={teacher._id}>
                {/* grid grid-cols-2 items-center */}
                <div className="teacher  mt-12 md:mt-8 lg:mt-8 md:pb-[4rem] ">
                  <div>
                    <Professor teacher={teacher} />
                  </div>
                  <div className="circle z-[-1] flex justify-center mt-4  ">
                    <RotateCircle
                      img={teacher.profile}
                      Ellipse1={Ellipse}
                      Ellipse2={Ellipse1}
                    />
                  </div>
                </div>
              </React.Fragment>
            );
          })}

          <div className="text-center my-8">
            <button
              className="bg-[#0eb582]  text-white  py-2 px-4 rounded-lg outline-none border-none"
              onClick={showMoreItems}
            >
              بیشتر
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroduceTeacher;
