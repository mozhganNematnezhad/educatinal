import HeaderPage from "components/AdminDashboard/Commen/HeaderPage/HeaderPage";
import TitleStudent from "components/AdminDashboard/Student/TitleStudent/TitleStudent";
import Student from "components/AdminDashboard/Student/Student";
import React, { useState, useEffect } from "react";
import { getStudents } from "Services/Admin";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import PaginationAdmin from "components/AdminDashboard/PaginationAdmin/PaginationAdmin";

const PAGE_SIZE = 6;

const StudentsAd = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [studentsData, setStudents] = useState({
    students: [],
    count: 0,
  });

  useEffect(() => {
    const StudentsData = async () => {
      try {
        setLoading(true);
        const {data} = await getStudents(PAGE_SIZE, pageNumber);
        // console.log("response-students", data);
        // console.log("response-lessons", data.result.students);
        setStudents({
          students: data.result.students,
          count: data.result.count,
        });
        setLoading(false);
      } catch (error) {}
    };
    StudentsData();
  }, [pageNumber]);

  return (
    <div className=" p-2 md:p-4 lg:p-8">
      <HeaderPage
        btn={"افزودن دانشجو"}
        title={"دانشجویان"}
        link="/admindashboard/adddata/students"
      />

      <div className="border-dashed border-t-2 w-full my-7 border-teal-700/20"></div>

      <div className="relative overflow-x-auto cssScrolAdmin">
         {!loading ? (
          studentsData.students.length > 0 ? (
            <table className="w-full ">
              <TitleStudent />

              {studentsData.students.map((student) => {
                return (
                  <React.Fragment key={student._id}>
                    <Student student={student} setStudents={setStudents}  />
                  </React.Fragment>
                );
              })}
            </table>
          ) : (
            <>خبری وجود ندارد</>
          )
        ) : (
          <AiOutlineLoading3Quarters />
        )}

         {studentsData.students.length > 0 ? (
          <PaginationAdmin
            count={studentsData.count}
            pageSize={PAGE_SIZE}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        ) : (
          ""
        )}  
      </div>
    </div>
  );
};

export default StudentsAd;

