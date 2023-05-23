import React, { useState, useEffect } from "react";

import HeaderPage from "components/AdminDashboard/Commen/HeaderPage/HeaderPage";
import TitleLesson from "components/AdminDashboard/LessonAd/Titlelesson/TitleLesson";
import LessonAd from "components/AdminDashboard/LessonAd/LessonAd";
import PaginationAdmin from "components/AdminDashboard/PaginationAdmin/PaginationAdmin";

// api
import { getLessons } from "./../../../Services/Admin";
// context
import Loading from "components/commen/Loading/Loading";

const PAGE_SIZE = 6;

const LessonsAd = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const [lessonData, setLessonData] = useState({
    lesson: [],
    count: 0,
  });

  // console.log("nnn",lessonData.lesson)
  useEffect(() => {
    const lessonData = async () => {
      try {
        setLoading(true);
        const { data } = await getLessons(PAGE_SIZE, pageNumber);
        // console.log("response-lessons", data);
        // console.log("response-lessons2", data.result.lessons);
        setLessonData({
          lesson: data.result.lessons,
          count: data.result.count,
        });
        setLoading(false);
      } catch (error) {}
    };
    lessonData();
  }, [pageNumber]);

  return (
    <div className="p-2 md:p-4 lg:p-8">
      <HeaderPage
        btn={"افزودن درس"}
        title={"درس های موجود "}
        link="/admindashboard/adddata/lessons"
      />

      <div className="border-dashed border-t-2 w-full my-7 border-teal-700/20"></div>

      <div className="relative overflow-x-auto cssScrolAdmin">
        {!loading ? (
          lessonData.lesson.length > 0 ? (
            <table className="w-full ">
              <TitleLesson />

              {lessonData.lesson.map((lesson) => {
                return (
                  <React.Fragment key={lesson._id}>
                    <LessonAd lesson={lesson} setLessonData={setLessonData} />
                  </React.Fragment>
                );
              })}
            </table>
          ) : (
            <p>درسی وجود ندارد</p>
          )
        ) : (
          <>
            <Loading />
          </>
        )}

        {lessonData.lesson.length > 0 ? (
          <PaginationAdmin
            count={lessonData.count}
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

export default LessonsAd;











// const [lessons, setLessons] = useState([
//   {
//     id: 1,
//     img: react,
//     titleLesson: "آموزش پروژه محور جاوا اسکریپت",
//   },
//   {
//     id: 2,
//     img: react,
//     titleLesson: "آموزش پروژه   ریکت",
//   },
// ]);
