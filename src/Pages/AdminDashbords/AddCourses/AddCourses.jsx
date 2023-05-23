import React, { useState, useEffect } from "react";
import { NavLink ,useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addCourseSchema } from "components/LoginSiqnUp/Validation/ValidationAdminSchema/ValidationAdminSchema";
import { getAllTeachers } from "Services/Public";
import { createCourse } from "Services/Admin";
import { ConsumeAllDataState } from "Context/AllData/AllData";
// date
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/transition";
import "react-multi-date-picker/styles/colors/teal.css";
import { toastifuyErr, toastifuySuccess } from "HelperFunctions/Toastify/Toastify";

const AddCourses = () => {
  const navigate= useNavigate()
  const [teacher, setTeacher] = useState([]);
  // data picker
  let [datePickerStart, setDatePickerStart] = useState();
  let [datePickerEnd, setDatePickerEnd] = useState();
  // console.log("datePickerStart", datePickerStart);
  // console.log("datePickerEnd", datePickerEnd);

  const { data, loading, setLoading } = ConsumeAllDataState();

  const initialValues = {
    title: "",
    cost: 0,
    capacity: 0,
    teacher: "",
    lesson: "",
  };

  useEffect(() => {
    const fetchAllteacher = async () => {
      try {
        const { data } = await getAllTeachers();
        // console.log("response-teacher", data);
        setTeacher(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllteacher();
  }, []);

  const submiteHandler = async (values) => {
    // console.log("values", values);
    const { Smonth, Syear, Sday } = {
      Smonth:
        datePickerStart.month.number > 10
          ? datePickerStart.month.number
          : `0${datePickerStart.month.number}`,
      Syear: datePickerStart.year,
      Sday:
        datePickerStart.day > 10
          ? datePickerStart.day
          : `0${datePickerStart.day}`,
    };
    const { Emonth, Eyear, Eday } = {
      Emonth:
        datePickerEnd.month.number > 10
          ? datePickerEnd.month.number
          : `0${datePickerEnd.month.number}`,
      Eyear: datePickerEnd.year,
      Eday:
        datePickerEnd.day > 10 ? datePickerEnd.day : `0${datePickerEnd.day}`,
    };

    let course = {
      ...values,
      startDate: Syear + "/" + Smonth + "/" + Sday,
      endDate: Eyear + "/" + Emonth + "/" + Eday,
    };

    try {
      setLoading(true)
      const response = await createCourse(course);
      // console.log("response", response);
      toastifuySuccess("درس با موفقیت ساخته شد")
      setLoading(false)
      navigate("/admindashboard/pages/courses")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addCourseSchema}
      onSubmit={submiteHandler}
    >
      {(props) => (
        <Form>
        <div className="bg-rose-50 p-5 mt-12 mx-8 rounded-md dark:bg-rose-50/25">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8  ">
            {/* title */}
            <li className="">
              <label className="text-gray-600">نام ترم</label>
              <Field
                name="title"
                id="title"
                label="title"
                className=' w-full rounded mt-2 h-10 focus:outline-rose-400  text-gray-500 px-4"'
              />
              <ErrorMessage name={"title"}>
                {(err) => (
                  <span className=" text-gray-600 mb-5 text-[13px]">
                    {err}
                  </span>
                )}
              </ErrorMessage>
            </li>
            {/* price */}
            <li className="">
              <label className="text-gray-600"> :قیمت ترم(تومان)</label>
              <Field
                name="cost"
                id="cost"
                label="cost"
                type="number"
                className=' w-full rounded mt-2 h-10 focus:outline-rose-400  text-gray-500 px-4"'
              />
              <ErrorMessage name={"cost"}>
                {(err) => (
                  <span className=" text-gray-600 mb-5 text-[13px]">
                    {err}
                  </span>
                )}
              </ErrorMessage>
            </li>
            {/* stardate */}
            <li className="">
              <label className="text-gray-600">شروع کلاس: </label>
              <div className="Input relative">
                <DatePicker
                  id="startDate"
                  name="startDate"
                  type={"date"}
                  value={datePickerStart}
                  onChange={setDatePickerStart}
                  calendar={persian}
                  locale={persian_fa}
                  animations={[opacity()]}
                  className="teal"
                  calendarPosition="bottom-right"
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    width: "90%",
                    boxShadow: "none",
                    border: "0",
                    outline: "none",
                    padding: "20px 10px",
                    focus: "outline-rose-400",
                  }}
                />
              </div>

              {/* {!datePickerStart ? (
              <p className="text-red-400 mt-8 text-[0.8rem]">لطغا تاریخ شروع را انتخاب کنید</p>
            ) : null} */}
            </li>
          
            {/* enddate */}
            <li className="">
              <label className="text-gray-600">پایان کلاس : </label>
              <div className="Input relative">
                <DatePicker
                  id="endDate"
                  name="endDate"
                  type={"date"}
                  value={datePickerEnd}
                  onChange={setDatePickerEnd}
                  calendar={persian}
                  locale={persian_fa}
                  animations={[opacity()]}
                  className="teal"
                  calendarPosition="bottom-right"
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    width: "90%",
                    boxShadow: "none",
                    border: "0",
                    outline: "none",
                    padding: "20px 10px",
                    focus: "outline-rose-400",
                  }}
                />
              </div>
            </li>

            {/* teacher */}
            <li>
              <div className="py-2 lg:py-4 flex flex-col px-4 md:pr-0">
                <label htmlFor="teacher" className="dark:text-gray-300">
                  {" "}
                  استاد مورد نظر:
                </label>
                <div className="flex flex-row  items-baseline">
                  <Field
                    as="select"
                    id="teacher"
                    name="teacher"
                    className="InputAdmin w-full outline-none  rounded-lg mt-4"
                  >
                    {teacher.length > 0 ? (
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
                  </Field>
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
            </li>
            {/* lesson */}
            <li>
              <div className="py-2 lg:py-4 flex flex-col px-4 md:pr-0">
                <label htmlFor="teacher" className="dark:text-gray-300">
                  {" "}
                  درس مورد نظر:
                </label>
                <div className="rounded-lg flex flex-row  items-baseline ">
                  <Field
                    as="select"
                    id="lesson"
                    name="lesson"
                    className="InputAdmin w-full dark:bg-[rgb(27,49,76)] dark:text-white"
                  >
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
                      <option value={""} className="  cursor-pointer">
                        درسی وجود ندارد
                      </option>
                    )}
                  </Field>
                </div>

                <ErrorMessage name={"lesson"}>
                  {(err) => (
                    <span className=" text-gray-600 mb-5 text-[13px]">
                      {err}
                    </span>
                  )}
                </ErrorMessage>
              </div>
            </li>

            {/* capacity */}
            <li className="">
              <label className="text-gray-600"> ظرفیت ترم</label>
              <Field
                id="capacity"
                label="capacity"
                name="capacity"
                type="number"
                className=" w-full rounded mt-2 h-10 focus:outline-rose-400  text-gray-500 px-4"
              />

              <ErrorMessage name={"capacity"}>
                {(err) => (
                  <span className=" text-gray-600 mb-5 text-[13px]">
                    {err}
                  </span>
                )}
              </ErrorMessage>
            </li>
          </ul>

          {/* {console.log("1", props.values)} */}
          {/* {console.log("3", props.errors)} */}

          <div className="mt-16 text-center text-white ">
            <button
              type="submit"
              className="bg-teal-600 px-6 py-3 rounded-lg ml-4 "
            >
              ساخت ترم جدید
            </button>
            <button className="bg-red-500 px-6 py-3 rounded-lg">
              <NavLink to="/admindashboard/pages/courses">
                انصراف ازساخت
              </NavLink>{" "}
            </button>
          </div>
        </div>
      </Form>
      )}
    </Formik>
  );
};

export default AddCourses;
