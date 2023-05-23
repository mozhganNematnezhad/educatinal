import { useState } from "react";
import { Formik, Form } from "formik";
import InputFeild from "components/LoginSiqnUp/SiqnUp/InputFeild/InputFeild";
import { BsFillCalendarDateFill } from "react-icons/bs";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/transition";
import "react-multi-date-picker/styles/colors/teal.css";
import PasswordS from "components/LoginSiqnUp/SiqnUp/PasswordS/PasswordS";
import { createEmploySchema } from "components/LoginSiqnUp/Validation/ValidationSchema";
import { createEmployData } from "components/AdminDashboard/CreateEmploy/CreateEmployData";
import SelectAdmin from "components/AdminDashboard/CreateEmploy/SelectAdmin/SelectAdmin";
import { addEmploy } from "Services/Admin";

const AddEmployee = () => {
  const [loading, setLoading] = useState(false);

  // data picker
  let [datePicker, setDatePicker] = useState();
  console.log("date-add-empoly", datePicker);

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    nationalId: "",
    address: "",
    // role: "",
    profile:
      "http://res.cloudinary.com/df9w7u89a/image/upload/v1666800839/dfc79kgjcj5o4pqbts1t.gif",
  };

  const submiteHandler = async (values) => {
    console.log("values-addemploy", values);

    const { month, year, day } = {
      month:
        datePicker.month.number > 10
          ? datePicker.month.number
          : `0${datePicker.month.number}`,
      year: datePicker.year,
      day: datePicker.day > 10 ? datePicker.day : `0${datePicker.day}`,
    };

    let employ = {
      ...values,
      // birthDate: birthDateShamsi,
      birthDate: year + "/" + month + "/" + day,
    };

    try {
      setLoading(true);
      const response = await addEmploy(employ);
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="createEmploy  bg-green-100 m-8 rounded-lg  ">
      <div className="container mx-auto  flex  justify-center items-center pt-8 pb-20 md:py-8">
        <div className="formSiqnup bg-white mx-auto  py-9  px-5 rounded-2xl shadow-sm w-[85%] lg:w-[60%] xl:w-[50%]   ">
          {/* title */}
          <div className="flex flex-col">
            <h1 className="text-[rgba(86,86,86)] text-xl md:text-2xl text-center">
              افزودن کارمند جدید
            </h1>
          </div>

          {/* input siqu-up */}
          <div className="mt-10 SiqnUpForm">
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={createEmploySchema}
                onSubmit={submiteHandler}
              >
                <Form>
                  {createEmployData.map((item) => {
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

                      <span className="borderLeft"></span>
                    </div>
                  </div>

                  {/***password ****/}
                  <PasswordS />

                  <SelectAdmin />

                  {/* button */}
                  <div className="btnSiqnup">
                    <button type="submit"> افزوندن کارمند جدید</button>
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

export default AddEmployee;
