import React from "react";
import { Link } from "react-router-dom";
import { Form } from "formik";
import { Formik } from "formik";
// import components
import { userFordetPass } from "Services/Student";
import { toastifuySuccess} from "HelperFunctions/Toastify/Toastify";
import InputFeild from "../Login/InputFeild/InputFeild";
import { forgetPassSchema } from "../Validation/ValidationSchema";

// import icon
import { MdEmail } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

const ForgetPassword = () => {
  // initialValue
  const initialValues = {
    email: "",
  };

  const submiteHandler = async (values) => {
    // console.log(values)
    let email = values;
    console.log("email", email);
    try {
      let newsResult = await userFordetPass(email);
      console.log("first",newsResult)

      if (newsResult.status === 200) {
        toastifuySuccess(`لینک تغییر رمز عبور به ایمیل شما ارسال شد`);
        // toastifuySuccess(`${newsResult.data.data.message.message}`);
      }
      
    } catch (err) {
      console.log(err)

      // if (err.response.status === 501) {
      //   toastifuyErr(`ایمیل وارد شده معتبر نمیباشد`);
      // } else {
      //   toastifuyErr(
      //     `مشکلی پیش آمده لطفا بعد از چند دقیقه دوباره اقدام نمایید`
      //   );
      // }

    }
  };

  return (
    <div className="Login">
      <div className="container mx-auto md:h-screen flex  justify-center items-center pt-8 pb-20 md:py-0">
        <div className="bg-white mx-auto  py-9  px-5 rounded-2xl shadow-sm w-[85%] lg:w-[60%] xl:w-[50%]   ">
          <Link to="/home" className="flex  justify-end">
            <p className="text-end mb-4  text-[rgba(100,116,139,1)]">
              صفحه اصلی
            </p>
            <AiFillHome className="text-[#0eb582]" />
          </Link>
          {/* title */}
          <div className="flex flex-col">
            <h1 className="text-[rgba(86,86,86)] text-xl md:text-2xl text-center">
              سلام رفیق رمزت رو فراموش کردی؟
            </h1>
            <span className="text-[rgba(149,160,177,1)] text-[0.8rem] md:text-base mt-4 text-center">
              ایمیلت رو وارد کن، لینک ریست پسورد رو برات میفرستیم
            </span>
          </div>

          {/* input */}
          <Formik
            initialValues={initialValues}
            validationSchema={forgetPassSchema}
            onSubmit={submiteHandler}
          >
            <div className="mt-10 LoginForm">
              <Form>
                {/* email */}
                <InputFeild
                  id="email"
                  name="email"
                  label="ایمیل"
                  icon={<MdEmail />}
                  type="email"
                />

                {/* button */}
                <div className="btnlogin">
                  <button type="submit">ورود</button>
                </div>
                <Link to="/login" className="">
                  <p className="text-center mt-4 text-[rgba(100,116,139,1)] w-[25%] mx-auto pb-2 border-b-2 border-solid border-[#0eb582] ">
                    ورود به لاگین
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

export default ForgetPassword;
