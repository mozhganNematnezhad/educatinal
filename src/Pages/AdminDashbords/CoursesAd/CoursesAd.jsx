import React, { useState, useEffect } from "react";
import CourseAd from "components/AdminDashboard/CourseAd/CourseAd";
import TitleCourse from "components/AdminDashboard/CourseAd/TitleCourse/TitleCourse";
import HeaderPage from "components/AdminDashboard/Commen/HeaderPage/HeaderPage";
import { getCourse } from "Services/Admin";
import PaginationAdmin from "components/AdminDashboard/PaginationAdmin/PaginationAdmin";
import Loading from "components/commen/Loading/Loading";

const PAGE_SIZE = 4;

const CoursesAd = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const [courseData, setCourseData] = useState({
    courses: [],
    count: 0,
  });

  // console.log("MMM", courseData.courses);
  // console.log("count", courseData.count);

  useEffect(() => {
    const courseDate = async () => {
      try {
        setLoading(true);
        const { data } = await getCourse(PAGE_SIZE, pageNumber);
        // console.log("res",response)
        //  console.log("res",response.data.data.result.courses)
        // console.log("res", data);
        setCourseData({
          courses: data.result.courses,
          count: data.result.count,
        });
        setLoading(false);
      } catch (error) {}
    };

    courseDate();
  }, [pageNumber]);

  return (
    <div className="p-2 md:p-4 lg:p-8">
      <HeaderPage
        btn={"افزودن دوره"}
        title={"دوره (ترم های) موجود"}
        link="/admindashboard/adddata/courses"
      />

      <div className="border-dashed border-t-2 w-full my-7 border-teal-700/20"></div>

      <div className="relative overflow-x-auto cssScrolAdmin">
        {!loading ? (
          courseData.courses.length > 0 ? (
            <table className="w-full ">
              <TitleCourse />

              {courseData.courses.map((course) => {
                return (
                  <CourseAd
                    key={course._id}
                    course={course}
                    setCourseData={setCourseData}
                  />
                );
              })}
            </table>
          ) : (
            <p>ترمی وجود ندارد</p>
          )
        ) : (
          <>
            {" "}
            <Loading />{" "}
          </>
        )}
      </div>

      {courseData.courses.length > 0 ? (
        <PaginationAdmin
          count={courseData.count}
          pageSize={PAGE_SIZE}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      ) : (
        ""
      )}
    </div>
  );
};



export default CoursesAd;
