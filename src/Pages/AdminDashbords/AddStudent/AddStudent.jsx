import React from "react";
import { useState } from "react";
import PasswordS from "components/LoginSiqnUp/SiqnUp/PasswordS/PasswordS";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/transition";
import "react-multi-date-picker/styles/colors/teal.css";
import { Form, Formik } from "formik";
import { registerSchema } from "components/LoginSiqnUp/Validation/ValidationSchema";
import { registerData } from "components/LoginSiqnUp/SiqnUp/registerationData/registerationData";
import InputFeild from "components/LoginSiqnUp/SiqnUp/InputFeild/InputFeild";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { userRegister } from "Services/Student";
import { toastifuyErr, toastifuySuccess } from "HelperFunctions/Toastify/Toastify";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let [datePicker, setDatePicker] = useState();

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
      birthDate: year + "/" + month + "/" + day,
      profile:
      "http://res.cloudinary.com/df9w7u89a/image/upload/v1666800839/dfc79kgjcj5o4pqbts1t.gif",
    };
    console.log(user);

    try {
      setLoading(true)
      const response = await userRegister(user);
      console.log("response", response);

      if(response.status === 200) {
        toastifuySuccess(`  دانشجوی جدید با موفقیت اضافه شد`);
        setLoading(false);
      }

      setTimeout(() => {
        navigate("/admindashboard/pages/students");
      }, 600);
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (err.response.status === 401) {
        toastifuyErr("ایمیل یا شماره ملی موجود است");
      } else {
        toastifuyErr("مشکلی پیش آمده لطفا دوباره اطلاعات خود را چک کنید");
      };
    }




  }

   

  



  return (
    <div className="addStudent bg-green-100 m-8 rounded-lg">
      <div className="container mx-auto  flex  justify-center items-center pt-8 pb-20 md:py-8">
        <div className="formSiqnup bg-white mx-auto  py-9  px-5 rounded-2xl shadow-sm w-[85%] lg:w-[60%] xl:w-[50%]   ">
          {/* title */}
          <div className="flex flex-col">
            <h1 className="text-[rgba(86,86,86)] text-xl md:text-2xl text-center">
              ثبت نام دانشجو
            </h1>
          </div>

          {/* input siqu-up */}
          <div className="mt-10 SiqnUpForm">
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                  onSubmit={(values) => {
                    if (datePicker !== "") {
                      // console.log("values", values);
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

                  {/* button */}
                  <div className="btnSiqnup">
                    <button type="submit">  افزودن دانشجو جدید</button>
                  </div>

                  {/* <Link to="/login" className="">
                  <p className="text-center mt-4 text-[rgba(100,116,139,1)] w-[25%] mx-auto pb-2 border-b-2 border-solid border-[#0eb582] ">
                    ورود
                  </p>
                </Link> */}
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
