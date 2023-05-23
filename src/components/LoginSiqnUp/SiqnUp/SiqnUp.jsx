import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as shamsi from "shamsi-date-converter";
import { Formik, Form, Field } from "formik";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
// date
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/transition";
import "react-multi-date-picker/styles/colors/teal.css";

// toast
import {
  toastifuyErr,
  toastifuySuccess,
} from "HelperFunctions/Toastify/Toastify";

// react-icon
import { BsFillCalendarDateFill } from "react-icons/bs";

// import
import { registerSchema } from "./../Validation/ValidationSchema";
import { registerData } from "./registerationData/registerationData";
import { userRegister } from "Services/Student";
import InputFeild from "../SiqnUp/InputFeild/InputFeild";
import PasswordS from "./PasswordS/PasswordS";
import { frozenGlass } from "components/LoginSiqnUp/Constants/Particles";
import Terms from "../Terms/Terms";

// css
import "./SIqnUp.css";

const SiqnUp = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  // data picker
  let [datePicker, setDatePicker] = useState();
  console.log("date-sign-up",datePicker)

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    nationalId: "",
  };

  const submiteHandler = async (values) => {

    
    const { month, year, day } = {
      month:
        datePicker.month.number > 10
          ? datePicker.month.number
          : `0${datePicker.month.number}`,
      year: datePicker.year,
      day: datePicker.day > 10 ? datePicker.day : `0${datePicker.day}`,
    };

    let user = {
      ...values,
      // birthDate: birthDateShamsi,
      birthDate: year + "/" + month + "/" + day,
    };
    // console.log("user--siqnup" ,user);
    // user:{fullName: 'سارا', email: 'sara233@gmail.com', password: '987654321Mn@',…}
    // url :http://localhost:5000/api/auth/register

    try {
      let newResult = await userRegister(user);
      console.log("newResult", newResult);
      // console.log("fullName",newResult.data.result.fullName);
      // console.log("newResult.status",newResult.status);
      if (newResult.status === 200) {
        toastifuySuccess(
          `ثبت نام ${newResult.data.result.fullName} در توریتور با موفقیت انحام شد`
        );
        setTimeout(() => {
          navigate("/login");
        }, 600);
      }
    } catch (err) {
      if (err.response.status === 403) {
        toastifuyErr("ایمیل یا رمزعبور نادرست است");
      } else if (err.response.status === 401) {
        toastifuyErr("ایمیل یا کد ملی در سیستم موجود است");
      } else {
        toastifuyErr("مشکلی پیش آمده لطفا دوباره اطلاعات خود را چک کنید");
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  });

  return (
    <div className="siqnUp">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={frozenGlass}
      />
      <div className="container mx-auto  flex  justify-center items-center pt-8 pb-20 md:py-8">
        <div className="formSiqnup bg-white mx-auto  py-9  px-5 rounded-2xl shadow-sm w-[85%] lg:w-[60%] xl:w-[50%]   ">
          {/* title */}
          <div className="flex flex-col">
            <h1 className="text-[rgba(86,86,86)] text-xl md:text-2xl text-center">
              ثبت نام در توریتور
            </h1>
            <span className="text-[rgba(149,160,177,1)] text-[0.8rem] md:text-base mt-4 text-center">
              به توریتور خوش اومدی ! برای عضویت ثبت نام کنید
            </span>
          </div>

          {/* input siqu-up */}
          <div className="mt-10 SiqnUpForm">
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={(values) => {
                  // کاربر حتما تاریح تولد خودشووارد کنه
                  // داخل فرمیک چگ نکردیم برای همین این جا چکو گزاشتم
                  // این چگبرای اون ترم هست
                  //if (birthDateShamsi !== "" && checked) {
                  if (datePicker !== "" && checked) {
                    console.log("values", values);
                    submiteHandler(values);
                  } else {
                    toastifuyErr(
                      "مشکلی پیش آمده لطفا دوباره اطلاعات خود را چک کنید "
                    );
                  }
                }}
              >
                <Form>
                  {registerData.map((item) => {
                    return (
                      <InputFeild
                        label={item.label}
                        id={item.id}
                        key={item.id}
                        icon={item.icon}
                        name={item.name}
                      />
                    );
                  })}

                  {/***birthDate ****/}
                  <div className="flex flex-col justify-center items-center mb-[1.2rem]  ">
                    {/* label */}
                    <div className="flex flex-row-reverse  w-full md:w-[80%]">
                      <label htmlFor="birthDate" className="label pr-2">
                        {" "}
                        تاریخ تولد :
                      </label>
                      {/* icon */}
                      <span className="text-[#0eb582]">
                        <BsFillCalendarDateFill />
                      </span>
                    </div>
                    {/* input */}
                    <div className="relative flex justify-center w-full md:w-[80%]">
                      {/* <Field
                        type={"date"}
                        id="birthDate"
                        name="birthDate"
                        className="Input pl-4"
                        value={birthDate}
                        onChange={(e) => handelBirthDate(e)}
                      /> */}

                      <div className="Input relative">
                        <DatePicker
                          value={datePicker}
                          onChange={setDatePicker}
                          calendar={persian}
                          locale={persian_fa}
                          animations={[opacity()]}
                          className="teal"
                          calendarPosition="bottom-right"
                          style={{
                            background: "transparent",
                            position: "absolute",
                            top: "0",
                            right: "0",
                            width: "90%",
                            boxShadow: "none",
                            border: "0",
                            outline: "none",
                            padding: "20px 10px",
                          }}
                        />
                      </div>

                      {/* {!datePicker && (
                        <span className="text-green-600  -z-0 text-[17px] absolute right-11  top-[1rem]">
                          تاریخ تولد
                        </span>
                      )} */}
                      <span className="borderLeft"></span>
                    </div>
                  </div>

                  {/***password ****/}
                  <PasswordS />

                  {/***terms ***/}
                  <Terms
                    name="checkbox"
                    label="شرایط و قوانین را میپذیرم"
                    id="checkbox"
                    type="checkbox"
                    checked={checked}
                    setChecked={setChecked}
                  />

                  {/* button */}
                  <div className="btnSiqnup">
                    
                  </div>

                  <Link to="/login" className="">
                    <p className="text-center mt-4 text-[rgba(100,116,139,1)] w-[25%] mx-auto pb-2 border-b-2 border-solid border-[#0eb582] ">
                      ورود
                    </p>
                  </Link>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiqnUp;

