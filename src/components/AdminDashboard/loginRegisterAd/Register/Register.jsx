import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";

// import components
import {
  toastifuyErr,
  toastifuySuccess,
} from "HelperFunctions/Toastify/Toastify";
import InputFeild from "components/LoginSiqnUp/SiqnUp/InputFeild/InputFeild";
import PasswordS from "components/LoginSiqnUp/SiqnUp/PasswordS/PasswordS";
// admin
import { adminRegister } from "Services/Admin";
// date picker
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/transition";
import "react-multi-date-picker/styles/colors/teal.css";
// import icons
import { BsFillCalendarDateFill } from "react-icons/bs";
// import css
import "./Register.css";
import { registerAdData } from "./RegisterData/registerAdData";
import { employeschema } from "components/LoginSiqnUp/Validation/ValidationAdminSchema/ValidationAdminSchema";
import SelectAdmin from "components/AdminDashboard/CreateEmploy/SelectAdmin/SelectAdmin";

const Register = () => {
  const navigate = useNavigate();

  // data picker
  let [datePicker, setDatePicker] = useState();

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    nationalId: "",
    address: "",
    role: "",
    profile:
      "http://res.cloudinary.com/df9w7u89a/image/upload/v1666800839/dfc79kgjcj5o4pqbts1t.gif",
  };

  const submiteHandler = async (values) => {
    // console.log("values-submite", values);
    // console.log("date" ,datePicker.month)
    // تاریخ تولد برای دیت==birthDate==birthDate.year "/" + birthDate.month
    const { month, year, day } = {
      month:
        datePicker.month.number > 10
          ? datePicker.month.number
          : `0${datePicker.month.number}`,
      year: datePicker.year,
      day: datePicker.day > 10 ? datePicker.day : `0${datePicker.day}`,
    };

    let admin = {
      ...values,
      birthDate: year + "/" + month + "/" + day,
    };
    // console.log("admin", admin);
    try {
      let newResult = await adminRegister(admin);
      console.log("newResult", newResult);
      if (newResult.status === 200) {
        toastifuySuccess(
          `ثبت نام ${newResult.data.result.fullName}   با موفقیت انحام شد`
        );
        setTimeout(() => {
          navigate("/admindashboard/login");
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

  return (
    <div className="register">
      <div className="container mx-auto  flex  justify-center items-center pt-8 pb-20 md:py-8">
        <div className="formSiqnup bg-white mx-auto  py-9  px-5 rounded-2xl shadow-sm w-[85%] lg:w-[60%] xl:w-[50%]   ">
          {/* title */}
          <div className="flex flex-col">
            <h1 className="text-[rgba(86,86,86)] text-xl md:text-2xl text-center">
              ثبت نام ادمین در توریتور
            </h1>
          </div>

          {/* input siqu-up */}
          <div className="mt-10 SiqnUpForm">
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={employeschema}
                onSubmit={(values) => {
                  if (datePicker !== "") {
                    console.log("values", values);
                    submiteHandler(values);
                  } else {
                    toastifuyErr(
                      "مشکلی پیش آمده لطفا دوباره اطلاعات خود را چک کنید "
                    );
                  }
                }}
              >
                {({ values, handleChange, errors }) => (
                  <Form>
                    {registerAdData.map((item) => {
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

                    {/* {console.log("values", values)}
                    {console.log("errors", errors)} */}
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
                          {/* {console.log(datePicker)} */}
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

                    <SelectAdmin handleChange={handleChange} />

                    {/* button */}
                    <div className="btnSiqnup">
                      <button type="submit"> ثبت نام</button>
                    </div>

                    <Link to="/admindashboard/login" className="">
                      <p className="text-center mt-4 text-[rgba(100,116,139,1)] w-[25%] mx-auto pb-2 border-b-2 border-solid border-[#0eb582] ">
                        ورود
                      </p>
                    </Link>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
