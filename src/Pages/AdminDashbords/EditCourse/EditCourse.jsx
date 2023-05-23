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



// *********************
// *********************
// *********************
// *********************

// selsect ِبود

//  {/* <Field
//                       type="text"
//                       id="lesson"
//                       name="lesson"
//                       className="Input dark:bg-[rgb(27,49,76)] dark:text-white"
//                     /> */}

// getAlllesson
// ِیه روت عمومی هست وپابلیک هست
// چون ما توکنی پاس ندادیم پس پابلیک هست


// *********************
// *********************
// *********************
// *********************

// 💥💥💥💥💥
// 9:23  برای اخظاری که امد در payload

// مشکل اینجاست که ما توی فرممون
// Tile
// اسمی که کاربر وارد میکنه میزنیم
// موقعی که اطلاعات رومیخوایم سابمیت کنیم
// این دو تا اروری که الان داریم برای اینه که
// به این دلیل هست که باید ایدی
// استاد  و ایدی کورس بفرستیم سمت بک
// نه اینکه
// بیایم اسم خودمون 
// وارد کنیم و
// اسمی که میخوایم
// باهاش بفرستیم
// این ارور هم برای همین هست چیزی که باید وارد کنیم ایدی هست که
// هم توش عدد هست
// هم توش حروف هست
// وچیزی که ما وارد کردیم یه متن ساده هست
// و این اشتباه هست
// این دو تا ارور برای استاد و درس هست
// یعنی برای دو تا 
// select option
// ما اینجا داریم خود متن جاوا رومیفرستیم
// اینجا باید بگیم که هر درسی که انتخاب کرد ایدی ما پیدا کنیم و ایدیشو بفرستیم
// که این ارورش برطرف بشه
// الان داخل 
// payload
// اومدیم خود متن جاوا رو فرستادیم 
// واومدیم داخل معلعم خود  معلم نوشتیم 
// باید ایدی معلم وباید ای دی اون 
// lessson
// باشه
// هر درس یا استادی که کاربر انتخاب کرد
// ما ایدیشومیخوایم
// پس استاد هم باید سلکت باشه که   بتونه انتخاب کنه
// باید اسم تیچر ها روبگیریم وبعدروش مپ بزنیم
// پس ما لیست همه تیچرها رو میخوایم برای همین دوباره  
// getAllteacher
// گرفتیم
// پس یا میتونیم به 
// context
// لیست معلم ها رو اضاقه کنیم با به ضورت دستی دوباره 
// fetch
// بزنیم و دیتا رو بگیریم

// اول دوره ای که میخوایم ابدیت بشه  رو انتخاب میکتیم
// 44:00 min

// هنورداریم متن ومیفرستیم ولی باید ایدیشو بفرستیم

// تایتل دوره برای تایتل جدیدی که میخواد ابدیت بشه=title
// lesson===درس مورد نظر
// اونی هست که ایدی داخلش قرار میگیره

//***** مهم مهم مهم مهم ******
// عنوان دوره ما  دوره جدید رومیخوایم وارد کنیم 
// عنوانی رواز قبل انتخاب نمیکنیم

// ما اول باید بگیم کدوم دوره رو میخوایم ابدیت کنیم

// توی
// selectoption
// میگیم کدوم درس 
// ودر اینپوت بالا میگیم
// اون درسی  که میخوام اسم جدیدش اینه
// 💕💕💕💕💕💕
// title=== اسم جدید دورهمون
// node js
// است
// حالا کدوم دورمون میخواد 
// node js
// بشه
// داخل 
// lesson
// اون ایدی میزنیم
// بعد اینکه 
// Send
// میزنیم
// دوره ای که این ایدی رو داره
// اسمش به 
// nodejs
// تعییر میکنه

// دوتا سلکت داریم  یکی اسم معلم  ویکی اسم اون درس که میخوایم ابدیت
// کنیم
// به صورت عادی 
// text
// داخل 
// initiLVlue
// داخل ابشن ها دخیره میشه
// الان میخوایم عادیشونو دخیره کنیم
//👸👸👸👸
// چه جوری میتونیم به جای تکس 
// ایدی که میخوایم
// دخیره کنیم ؟