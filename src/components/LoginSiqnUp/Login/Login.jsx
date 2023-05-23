import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

// react-icon
import { AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
// import components
import { userLogin } from "Services/Student";
import {
  toastifuyErr,
  toastifuySuccess,
} from "HelperFunctions/Toastify/Toastify";
import { frozenGlass } from "components/LoginSiqnUp/Constants/Particles";
import { loginSchema } from "../Validation/ValidationSchema";
import InputFeild from "./InputFeild/InputFeild";
import Password from "./Password/Password";
import Terms from "./../Terms/Terms";

// import context
import { ConsumeAuthState } from "Context/AuthContext/AuthState";

import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const { setUserData } = ConsumeAuthState();

  const [checked, setChecked] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const submitHandler = async (values) => {
    // e.preventDefault();
    // console.log("values", values); //{email: 'ne.mozhgan23@gmail.com', password: '123456789Mn@'}
    let user = values;

    try {
      localStorage.removeItem("admin-token")
      localStorage.removeItem("user-token")
      const newResult = await userLogin(user);
      console.log("newResult", newResult); // data :{} ,status:200

      if (newResult.status === 200) {
        toastifuySuccess(
          `  ${newResult.data.result.studentModel.fullName}  در توریتور خوش آمدید  `
        );

        setUserData(newResult.data.result.studentModel);
        // console.log("userdataSTudent", newResult.data.result.studentModel);

        // set token in localstorage //
        localStorage.setItem("user-token", newResult.data.result.jwtToken);

        //  convert to string
        const convertTostring = JSON.stringify(
          newResult.data.result.studentModel
        );
        localStorage.setItem("user-data", convertTostring);
        console.log("storage", convertTostring);

        setTimeout(() => {
          navigate("/");
        }, 600);
      }
    } catch (err) {
      // console.log(err);
      // setLoading(false);
      // console.log("response", err.response);
      // console.log(err.response.data.message.eventId); //400
      if (err.response.status === 403) {
        toastifuyErr("ایمیل یا رمزعبور نادرست است");
      } else {
        toastifuyErr("مشکلی پیش آمده لطفا دوباره اطلاعات خود را چک کنید");
      }
    }
  };

  // particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  },[]);

  return (
    <div className="Login">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={frozenGlass}
      />
      <div className="container mx-auto  flex  justify-center items-center pt-8 pb-20 md:py-8">
        <div className=" formLogin  bg-white mx-auto  py-9  px-5 rounded-2xl shadow-sm w-[85%] lg:w-[60%] xl:w-[50%]   ">
          <Link to="/home" className="flex  justify-end">
            <p className="text-end mb-4  text-[rgba(100,116,139,1)]">
              صفحه اصلی
            </p>
            <AiFillHome className="text-[#0eb582]" />
          </Link>
          {/* title */}
          <div className="flex flex-col">
            <h1 className="text-[rgba(86,86,86)] text-xl md:text-2xl text-center">
              سلام رفیق{" "}
            </h1>
            <span className="text-[rgba(149,160,177,1)] text-[0.8rem] md:text-base mt-4 text-center">
              به خونه خوش اومدی!!! اگه عضو توریتور هستی وارد شو{" "}
            </span>
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

                <Link to="/siqnup" className="">
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










