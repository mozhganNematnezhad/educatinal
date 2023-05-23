import React, { useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import { Form } from "formik";
import { ConsumeAllDataState } from "Context/AllData/AllData";
import { useEffect } from "react";
import { getAllStudents } from "Services/Admin";

const StudentToCourse = () => {
  const { data } = ConsumeAllDataState();
  // console.log("myData", data.course);
  // console.log("myData", data);

  const [students, setStudents] = useState([]);
  console.log("students", students);

  useEffect(() => {
    const fetchAllteacher = async () => {
      try {
        const { data } = await getAllStudents();
        console.log("response-teacher", data.result);
        setStudents(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllteacher();
  }, []);

  const initialValues = {};

  const submitHandler = () => {};
  return (
    <>
      <div className="text-center mt-12 justify-between flex items-center  mx-12  ">
        <div></div>
        <h3 className="text-2xl text-gray-700">دانشجو و دوره</h3>
        <div>
          <Link to={"/admindashboard/pages/courses"}>
            <RiArrowGoBackFill className="text-2xl text-red-500" />
          </Link>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        // validationSchema={EditLessonSchema}
        onSubmit={submitHandler}
      >
        {(props) => (
          <Form>
            {/* row1---add */}
            <div className="bg-green-50 p-5 mt-12 mx-8 rounded-md dark:bg-rose-50/25">
              <div className="text-end text-white">
                <button className="bg-[#0eb582] rounded-lg py-[0.3rem] px-4">
                  افزودن
                </button>
              </div>
              <div className="grid grid-cols-2 items-end ">
                <form>
                  <label> افزودن دانشجو به دوره</label>
                  <div className="  p-4 rounded-lg ">
                    <div className=" border-2 border-solid border-green-500 focus:outline-green-500  rounded-lg mt-4">
                      <select
                        as="select"
                        id="course"
                        name="course"
                        className="w-full outline-0 rounded-lg text-gray-900  dark:bg-[#1B314C] dark:text-white"
                      >
                        <option className="text-[#0eb582]  text-center disabled dark:text-white">
                          -- انتخاب دوره مورد نظر.--
                        </option>

                        {data.course.length > 0 ? (
                          data.course.map((co) => (
                            <option
                              value={co["_id"]}
                              key={co["_id"]}
                              className="cursor-pointer bg-white"
                            >
                              {co.title}
                            </option>
                          ))
                        ) : (
                          <option value={""} className="  cursor-pointer">
                            دوره ای وجود ندارد
                          </option>
                        )}
                      </select>
                    </div>
                    <div className="my-1 w-full md:w-[80%]">
                      <ErrorMessage
                        render={(msg) => (
                          <div className="text-red-400 text-[0.8rem]">
                            {msg}
                          </div>
                        )}
                        name="course"
                      />
                    </div>
                  </div>
                </form>

                <form>
                  <div className="  p-4 rounded-lg ">
                    <div className=" border-2 border-solid border-green-500 focus:outline-green-500  rounded-lg mt-4">
                      <select
                        as="select"
                        id="students"
                        name="student"
                        className="w-full outline-0 rounded-lg  text-gray-900 dark:bg-[#1B314C] dark:text-white"
                      >
                        <option className="text-[#0eb582] text-center disabled dark:text-white">
                          -- انتخاب دانشجوی مورد نظر.--
                        </option>
                        {students.length > 0 ? (
                          students.map((st) => (
                            <option
                              value={st["_id"]}
                              key={st["_id"]}
                              className="cursor-pointer bg-white"
                            >
                              {st.fullName}
                            </option>
                          ))
                        ) : (
                          <option value={""} className="  cursor-pointer">
                            دانشجویی وجود ندارد
                          </option>
                        )}
                      </select>
                    </div>

                    <div className="my-1 w-full md:w-[80%]">
                      <ErrorMessage
                        render={(msg) => (
                          <div className="text-red-400 text-[0.8rem]">
                            {msg}
                          </div>
                        )}
                        name="course"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* row 2---delete */}
            <div className="bg-green-50 p-5 mt-12 mx-8 rounded-md dark:bg-rose-50/25">
              <div className="text-end text-white">
                <button className="bg-red-600 rounded-lg py-[0.3rem] px-4">
                  حذف
                </button>
              </div>
              <div className="grid grid-cols-2 items-end ">
                <div>
                  <label> حذف دانشجو از دوره</label>
                  <div className="p-4 rounded-lg ">
                    <div className=" border-2 border-solid border-red-500 focus:outline-green-500  rounded-lg mt-4">
                      <select
                        as="select"
                        id="course"
                        name="course"
                        className="w-full outline-0 rounded-lg text-gray-900  dark:bg-[#1B314C] dark:text-white"
                      >
                        <option className="text-[#0eb582]  text-center disabled dark:text-white">
                          -- انتخاب دوره مورد نظر.--
                        </option>

                        {data.course.length > 0 ? (
                          data.course.map((co) => (
                            <option
                              value={co["_id"]}
                              key={co["_id"]}
                              className="cursor-pointer bg-white"
                            >
                              {co.title}
                            </option>
                          ))
                        ) : (
                          <option value={""} className="  cursor-pointer">
                            دوره ای وجود ندارد
                          </option>
                        )}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="  p-4 rounded-lg ">
                    <div className=" border-2 border-solid border-red-500 focus:outline-green-500  rounded-lg mt-4">
                      <select
                        as="select"
                        id="students"
                        name="student"
                        className="w-full outline-0 rounded-lg  text-gray-900 dark:bg-[#1B314C] dark:text-white"
                      >
                        <option className="text-[#0eb582] text-center disabled dark:text-white">
                          -- انتخاب دانشجوی مورد نظر.--
                        </option>
                        {students.length > 0 ? (
                          students.map((st) => (
                            <option
                              value={st["_id"]}
                              key={st["_id"]}
                              className="cursor-pointer bg-white"
                            >
                              {st.fullName}
                            </option>
                          ))
                        ) : (
                          <option value={""} className="  cursor-pointer">
                            دانشجویی وجود ندارد
                          </option>
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StudentToCourse;









// course ====دوره -ترم
// lesson=== درس

// {/* <option
// value=" "
// className="option text-center text-gray-500 cursor-pointer  dark:text-white"
// >
// {" "}
// جاوا
// </option>
// <option
// value=" "
// className="option text-center text-gray-500 cursor-pointer  dark:text-white"
// >
// {" "}
// ریکت
// </option> */}
