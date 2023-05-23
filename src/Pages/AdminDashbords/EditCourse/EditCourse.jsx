import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ErrorMessage, Field, Form } from "formik";
// import { FiUploadCloud } from "react-icons/fi";
// import InputFeildEdit from "Pages/UserDashboard/EditUserAccount/InputFeildEdit/InputFeildEdit";
// import { EditDataDashbord } from "components/AdminDashboard/Data/Data";

import { Formik } from "formik";
import { RiArrowGoBackFill } from "react-icons/ri";
import { ConsumeAllDataState } from "Context/AllData/AllData";
import { handelDate } from "Utils";
import { EditCourseSchema, EditLessonSchema } from "components/LoginSiqnUp/Validation/ValidationAdminSchema/ValidationAdminSchema";
import { updateCourse } from "Services/Admin";
import { getAllTeachers } from "Services/Public";

const EditCourse = () => {
  const { shId } = useParams();
  const { data } = ConsumeAllDataState();
  console.log("myObject", data); //article course lesson
  // console.log("myObject11", data.course);
  // console.log("lesson", data.lesson);

  const courseItem = data.course.find((course) => course._id === shId);
  // console.log("courseItem--editCourse", courseItem);
  // console.log("courseItem--lesson", courseItem.lesson.lessonName);

  const [startDate, setStartDate] = useState(handelDate(courseItem.startDate));
  const [endDate, setEndDate] = useState(handelDate(courseItem.endDate));

  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    const fetchAllteacher = async () => {
      try {
        const {data} = await getAllTeachers();
        // console.log("response-teacher", data);
        setTeacher(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllteacher();
  }, []);


  const initialValues = {
    title: courseItem.title,
    cost: courseItem.cost,
    teacher: courseItem.teacher.fullName,
    lesson: courseItem.lesson.lessonName,
    startDate: startDate,
    endDate: endDate,
    capacity: courseItem.capacity,
  };

  const submitHandler = async (values) => {
    // console.log("values11111",values)
    // alert("text")
    try {
      const response = await updateCourse(shId, values);
      console.log("response22222", response);
    } catch (error) {}
  };

  return (
    <div className="Da_Edit   ">
      <div className=" mt-16 mx-8 text-[#2d3339]  border-b-4 border-solid border-[#00ffb1] ">
        <div className="flex  items-center justify-between">
          <div></div>
          <div>
            <h3 className="text-center pb-4 text-base dark:text-white">
              {" "}
              ویرایش ترم {courseItem.title}
            </h3>
          </div>

          <div>
            <Link to={"/admindashboard/pages/courses"}>
              <RiArrowGoBackFill className="text-2xl text-red-500" />
            </Link>
          </div>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={EditLessonSchema}
        onSubmit={submitHandler}
      >
        {(props) => (
          <div
            className="Da_edit rounded-lg my-8 mx-8 shadow-xl md:px-[40px]  py-[10px] border border-solid border-[#ecf0f4]
      dark:bg-[rgb(27,52,77)]
        dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]
      "
          >
            <Form className="">
              <div className="grid md:grid-cols-2 items-center">
                {/* title */}
                <div className="py-2 lg:py-4 flex flex-col px-4 md:pr-0">
                  <div className="flex flex-row  items-baseline">
                    <label htmlFor="title" className="dark:text-gray-300">
                      {" "}
                      عنوان  دوره:
                    </label>
                    <Field
                      type="text"
                      id="title"
                      name="title"
                      className="Input dark:bg-[rgb(27,49,76)] dark:text-white"
               
                    />
                  </div>

                  <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="title"
                    />
                  </div>
                </div>
                {/* cost */}
                <div className="py-2 lg:py-4 flex flex-col px-4  md:pr-0">
                  <div className="flex flex-row  items-baseline">
                    <label htmlFor="cost" className="dark:text-gray-300">
                      {" "}
                      قیمت ترم (تومان) :
                    </label>
                    <Field
                      type="text"
                      id="cost"
                      name="cost"
                      className="Input dark:bg-[rgb(27,49,76)] dark:text-white"
                      // value={courseItem.cost}
                    />
                  </div>

                  <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="cost"
                    />
                  </div>
                </div>
                {/* teacher */}
                <div className="py-2 lg:py-4 flex flex-col px-4 md:pr-0">
                  <div className="flex flex-row  items-baseline">
                    <label htmlFor="teacher" className="dark:text-gray-300">
                      {" "}
                    استاد مورد نظر:
                    </label>

                    <select
                      as="select"
                      id="teacher"
                      name="teacher"
                      className="InputAdmin dark:bg-[rgb(27,49,76)] dark:text-white"
                      // onChange={(e)=>console.log("e",e)}
                      // onChange={(e)=>alert("text")}
                    >
                      {/* <option value={teacher._id} className="  cursor-pointer bg-white">
                        {teacher.fullName}
                        {console.log("uuu",teacher._id)}
                      </option> */}

                      {teacher.length>0 ? (
                        teacher.map((th) => (
                          <option
                            value={th["_id"]}
                            key={th["_id"]}
                            className="cursor-pointer bg-white"
                          >
                            {th.fullName}
                           {/* { console.log(th._id)} */}
                          </option>
                        ))
                      ) : (
                        <option value={""} className="  cursor-pointer">
                          معلمی وجود ندارد
                        </option>
                      )}
                    </select>
                  </div>

                  <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="teacher"
                    />
                  </div>
                </div>
               
                {/* lesson */}
                <div className="py-2 lg:py-4 flex flex-col px-4 md:pr-0">
                  <div className="flex flex-row  items-baseline">
                    <label htmlFor="lesson" className="dark:text-gray-300">
                      {" "}
                      درس مورد نظر:
                    </label>

                    <select
                      as="select"
                      id="lesson"
                      name="lesson"
                      className="InputAdmin dark:bg-[rgb(27,49,76)] dark:text-white"
                    >
                      {/* <option value={""} className="  cursor-pointer bg-white">
                        {courseItem.lesson.lessonName}
                      </option> */}

                      {data.lesson.length ? (
                        data.lesson.map((lesson) => (
                          <option
                            value={lesson["_id"]}
                            key={lesson["_id"]}
                            className="cursor-pointer bg-white"
                          >
                            {lesson.lessonName}
                          </option>
                        ))
                      ) : (
                        // <option value={""} className="  cursor-pointer">
                        //   درسی وجود ندارد
                        // </option>
                        <> sssssss</>
                      )}
                    </select>
                  </div>

                  <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="lesson"
                    />
                  </div>
                </div>

                {/* startDate */}
                <div className="py-2 lg:py-4 flex flex-col px-4 md:pr-0">
                  <div className="flex flex-row  items-baseline">
                    <label htmlFor="startDate" className="dark:text-gray-300">
                      {" "}
                      شروع ترم:
                    </label>
                    <Field
                      type="text"
                      id="startDate"
                      name="startDate"
                      className="Input dark:bg-[rgb(27,49,76)] dark:text-white"
                      //   value={startDate}
                      // onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>

                  <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="startDate"
                    />
                  </div>
                </div>
                {/* endDate */}
                <div className="py-2 lg:py-4 flex flex-col px-4 md:pr-0">
                  <div className="flex flex-row  items-baseline">
                    <label htmlFor="endDate" className="dark:text-gray-300">
                      {" "}
                      پایان ترم:
                    </label>
                    <Field
                      type="text"
                      id="endDate"
                      name="endDate"
                      className="Input dark:bg-[rgb(27,49,76)] dark:text-white"
                      // value={endDate}
                      // onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>

                  <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="endDate"
                    />
                  </div>
                </div>
                {/* capacity */}
                <div className="py-2 lg:py-4 flex flex-col px-4 md:pr-0">
                  <div className="flex flex-row  items-baseline">
                    <label htmlFor="capacity" className="dark:text-gray-300">
                      {" "}
                      ظرفیت ترم:
                    </label>
                    <Field
                      type="text"
                      id="capacity"
                      name="capacity"
                      // value={courseItem.capacity}
                      className="Input dark:bg-[rgb(27,49,76)] dark:text-white"
                    />
                  </div>

                  <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="capacity"
                    />
                  </div>
                </div>

                 {console.log("1", props.values)}
                {console.log("3", props.errors)} 
              </div>

              <div className="flex justify-center mt-8 mb-6">
                <button
                  type="submit"
                  className="btn text-[#fff] bg-[#00ffb1] py-[0.5rem] px-4 rounded-lg"
                >
                  ویرایش تغییرات
                </button>

                <Link
                  to={"/admindashboard/pages/courses"}
                  className="btn text-[#fff] bg-[#ff2929] py-[0.5rem] px-4 rounded-lg mr-4"
                >
                  انصراف از تغییر
                </Link>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default EditCourse;

