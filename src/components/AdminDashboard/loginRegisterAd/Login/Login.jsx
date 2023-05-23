import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";

// import components
import Terms from "components/LoginSiqnUp/Terms/Terms";
import Password from "components/LoginSiqnUp/Login/Password/Password";
import InputFeild from "components/LoginSiqnUp/Login/InputFeild/InputFeild";
import { MdEmail } from "react-icons/md";
import { loginSchema } from "components/LoginSiqnUp/Validation/ValidationSchema";

// import css
import "./Login.css";
import { adminLogin } from "Services/Admin";

import {
  toastifuyErr,
  toastifuySuccess,
} from "HelperFunctions/Toastify/Toastify";
import { ConsumeAuthAdState } from "Context/Admin/AuthAdmin/AuthStateAdmin";

const Login = () => {
  const navigate = useNavigate();

  const { setAdmin } = ConsumeAuthAdState();
  const [checked, setChecked] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const submitHandler = async (values) => {
    console.log("values", values); //{email: 'neda@gmail.com', password: '12345678Mn@'}

    let admin = values;

    try {
      localStorage.removeItem("admin-token")
      localStorage.removeItem("user-token")
      const response = await adminLogin(admin);
      console.log("response", response);

      // success== fullname
      if (response.status === 200) {
        toastifuySuccess(
          `  ${response.data.result.employeeModel.fullName}  در توریتور خوش آمدید  `
        );
      }

      // save admin information to context=employeeModel
      setAdmin(response.data.result.employeeModel);

      // Save jwt in local 
      localStorage.setItem("admin-token", response.data.result.jwtToken);

      // save admin information to local storage =employeeModel
      const convertTostring = JSON.stringify(
        response.data.result.employeeModel
      );
       console.log("convertTostring",convertTostring)

      localStorage.setItem("admin-data", convertTostring);
       console.log("storage",convertTostring)

      setTimeout(() => {
        navigate("/admindashboard/panel");
      }, 600);
    } catch (err) {
      if (err.response.status === 400) {
        toastifuyErr("ایمیل یا رمزعبور نادرست است");
      } else {
        toastifuyErr("مشکلی پیش آمده لطفا دوباره اطلاعات خود را چک کنید");
      }
    }
  };
  return (
    <div className="Login">
      <div className="container mx-auto  flex  justify-center items-center pt-8 pb-20 md:py-8">
        <div className=" formLogin  bg-white mx-auto  py-9  px-5 rounded-2xl shadow-sm w-[85%] lg:w-[60%] xl:w-[50%]   ">
          {/* title */}
          <div className="flex flex-col">
            <h1 className="text-[rgba(86,86,86)] text-xl md:text-2xl text-center">
              ثبت نام ادمین در توریتور
            </h1>
          </div>

          {/* input */}
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={submitHandler}
          >
            <div className="mt-10 LoginForm">
              <Form>
                {/* email */}
                <InputFeild
                  id="email"
                  name="email"
                  icon={<MdEmail />}
                  label="ایمیل"
                  type="email"
                />

                {/* password */}
                <Password />

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
                <div className="btnlogin">
                  <button type="submit">ورود</button>
                </div>

                <Link to="/admindashboard/register" className="">
                  <p className="text-center mt-4 text-[rgba(100,116,139,1)] w-[25%] mx-auto pb-2 border-b-2 border-solid border-[#0eb582] ">
                    ثبت نام
                  </p>
                </Link>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;

// *****************************
// *****************************
// *****************************

//     console.log("values",values)   //{email: 'neda@gmail.com', password: '12345678Mn@'}
// من میخوام این ولیوز رو بفرستم سمت بک اند ... }
// چون این ادمین  باید اول چک کنه ببینه که هست یا نه دیه

// *****************************
// *****************************
// localStorage.setItem("admin-token", response.data.result.jwtToken)
// این چون رشته بود دیگه نباز به تبدیل نداشت

// *****************************
// *****************************
// *****************************

// ولی برای
// employeeModel
// ما چون خودش یک ابجکت هست پس باید قبل
// setItem
// باید اول تبدیل به ابجکت شود  کنیم

// const convertTostring=JSON.stringify(response.data.result.employeeModel);
//      console.log("convertTostring",convertTostring)

// ما رسپانسی که میگیریم به صورت ابجکت هست ولی داخل لوکال استورچ که میخوایم دخیره کنیم باید تبدیل کنیم به استرینگ
// که برای تبدیل باید
// JSON.stringify(response.data.result.employeeModel);
