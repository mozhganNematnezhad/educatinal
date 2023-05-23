import { ConsumeAllDataState } from "Context/AllData/AllData";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";

const ShowCourse = () => {
  const { shId } = useParams();
  // console.log("shId", shId);

  const { data } = ConsumeAllDataState();
  // console.log("myObject" ,myObject)
  // console.log("myObject", data.course);

  const courseItem = data.course.find((course) => course._id === shId);
  // console.log("courseItem", courseItem);

  return (
    <>
      <div className=" bg-[#d6faef] mx-auto p-8 w-9/12 mt-12 mb-8 rounded-lg items-center gap-4">
        <div className="flex  items-center justify-between">
          <div></div>
          <div className="md:col-span-4">
            <img src={courseItem.lesson.image} alt="" className="rounded w-[50%] lg:w-[35%] mx-auto" />
          </div>
          <div>
            <Link to={"/admindashboard/pages/courses"}>
              <RiArrowGoBackFill className="text-2xl text-red-500" />
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-6 gap-8 mt-4">
          <div className="col-span-3  bg-[#0eb582] p-4 rounded-lg text-center">
            <ul>
              <li className="py-[0.9rem] text-[1.1rem] text-white  ">
                نام استاد:{" "}
                <span className="text-base text-[#eef5f3]">
                  {" "}
                  {courseItem.teacher.fullName}
                </span>
              </li>
              <li className="py-[0.9rem] text-[1.1rem] text-white  ">
                نام دوره :
                <span className="text-base text-[#eef5f3]">
                  {" "}
                  {courseItem.title}
                </span>
              </li>
              <li className="py-[0.9rem] text-[1.1rem] text-white  ">
                نام درس ارایه شده :
                <span className="text-base text-[#eef5f3]">
                  {" "}
                  {courseItem.lesson.lessonName}
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-3 bg-[#0eb582] p-4 rounded-lg text-center">
            <ul>
              <li className="py-[0.9rem] text-[1.1rem] text-white  ">
                ایمیل استاد :
                <span className="text-base text-[#eef5f3] ">
                  {courseItem.teacher.email}
                </span>
              </li>
              <li className="py-[0.9rem] text-[1.1rem] text-white   ">
                قیمت دوره :
                <span className="text-base text-[#eef5f3] ">
                  {courseItem.cost}{" "}
                </span>
              </li>
              <li className="py-[0.9rem] text-[1.1rem] text-white   ">
                ظرفیت دوره :
                <span className="text-base text-[#eef5f3] ">
                  {courseItem.capacity}{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:w-[50%] mx-auto bg-[#0eb582] p-4 rounded-lg text-center mt-4">
          <ul>
            <li className="py-[0.9rem] text-[1.1rem] text-white   ">
              دانشجویان این دوره :
              {courseItem.students.length > 0 &&
                courseItem.students.map((student) => {
                  return (
                    <div
                      className="flex md:flex-col  lg:justify-between mt-4 "
                      key={student._id}
                    >
                      <p className="text-base text-[#eef5f3] ">
                        {student.email}
                      </p>
                      <p className="text-base text-[#eef5f3] ">
                        {student.fullName}
                      </p>
                    </div>
                  );
                })}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShowCourse;
