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

        // اون اطلاعات کاربر رودخیره کردم
        setUserData(newResult.data.result.studentModel);
        // console.log("userdataSTudent", newResult.data.result.studentModel);

        // set token in localstorage //
        localStorage.setItem("user-token", newResult.data.result.jwtToken);

        // اطلاعات کاربر رو داخل لوکال استورچ دخیره کردم که در صفحات دیگه داشته باشم
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













// *****************************
// *****************************
// *****************************

// import Cookies from "universal-cookie";

// *****************************
// *****************************
// *****************************

//روند authorize

// اول وارد صفحه
// ثبت نام میشویم
// بعد اطلاعات رو وارد میکنیم
// بعد ارسال میشه سمت بک
// سمت بک یه ولیدیشنی انجام میشه
// دیتا چک میشه واگر همه چیز درست بود
// اون یوزر داخل دیتابیس ثبت میشه
// یه توکن از سمت بک به شما فرستاده میشه
// این توکن رو زمانی که لاگین میکنه شخص ازسال میشه
// زمانی که ثبت نام میکنه هم ارسال میشود
// در هر صورت این توکن به دست شما میرسد
// از سمت بک

// این توکن رومیتونید داخل کوکی دخیره کنید
// میتونید داخل  لوکال دخیره کنید
// اگربک اند بگه که داخل کوکی دخیره کنید شما توی کوکی دخیره میکنید
// دیگر نیازی نیست در رکوئست ها توکن را ارسال کنید
// خود بک اند دسترسی پیدا میکنه به
// کوکی و توکن را برمیدارد

//ولی اگرگفت که داخل هدر بفرست
// و من از کوکی استفاده نمیکنم شما باید توی هر درخواست سمت سرور ارسال میشه
// توی هر
// http request
// توکن برای بک اند بفرستی

//  مهم  مهم
// در کوکی یک کلید داریم و یک ولیو
// اون کلید معمولا با اسم توکن دخیره میشه

// اولین موردی که هست قبل اینکه این کارها روانجام بدین باید جک کنید که اصلا بک اند
// به روت هایی هست که نیازبه
// authentication
// کاربر داشته باشه یا نه
// مثلا به صفحه ای باشه که داخلش جگ کنه
// مثلا اند پوینت داشبورد در داخل پست من
// چک کنه و یه رکوئست بفرسته
// سمتش و ببینه اصلا چی برمیگردونه
// اون روت هایی که پرایوت هستن یعنی نیازه که اول لاگین کرده باشی
// مثل داشبورد

// react save token to cookei

// روت های
// authenticate
// برای زمانی که کاربر اول وارد برنامه شده لاگین کرده
//. حالا به اون روت ها میتونه دسترسی پیدا کنه
// تا زمانی که انجام نداده باشه نمیتونه به اون روت هادسترسی پیدا کنه
// و دیتایی براش ارسال نمیشه

// پکیجی به نام
// npm i js-cookie
// ***********************
// ***********************
// *****auth
// اطلاعاتی که از کاربر بعد لاگین میاد از سمت سزوز روباید  داخل
// یه استیت منیجمنتی دخیره کنیم
// بعد این که شما ریدایرکت میشی یه صقحه اصلی
// دیتای کاربر همچنان داخل یه استیت منیجمنتی دخیره باشه
// و از بین نره

// newResult.data.result.studentModel [object Object] ==ابجکت
// باید اینو تبدیل به رشته کنیم داخل استورچ
// چه طوری تبدیل به رشته میکنیم با
// JSON.stringify(newResult.data.result.studentModel)

// اون چیزی که میخواستیم توی
// user-data
// دخیره کنیم یک ابجکت بود
// یه ابجکت نمیتونستیم توی لوکال دخیره کنیم برای همین تبدیل به رشته کردیم

// ****نکته مهم
// توی کوکی     معمولا دینایی رو دخیره میکنیم
// که نیاز باشه بکاند هم ازش استفاده کنه
// مثل توکنی که هم خودمون نیاز داشتیم و هم بک اند
// چیزهایی که  برای فرانت نیاز داریم روبهتره داخل لوکال استورچ دخیره کنیم

// پس الان هم دیتا رو داخل کانتکس داریم هم داخل لوکال استورچ

// *****************************
// *****************************
// *****************************

// دخیره کردن
// localStorage.setItem("test" ,"hello")

// برای  حدف
// localStorage.removeItem("test")

// برای گرفتن
// localStorage.getItem("test")

// *****************************
// *****************************
// *****************************

// setcookei
// برای این داخل کوکی دخیره کردیم که دیگه میخواستیم داخل هدر نفرستیم
// الان فرقی نمیکنه که توکن کجاباید دخیره کنیم چون در هر صورت باید با هدر بفرستیم
// { expires: 7 }
// const cookies = new Cookies();
// cookies.set("user-token", `${newResult.data.result.jwtToken}`, {
//   path: "/",
// });
// console.log("cookies", cookies);

// کوکی زمانی که نخوایم توی هدر ست کنیم
// *****************************
// *****************************
// *****************************
// jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…YwNX0.dlUfD8AT89M0mfQyCi1RAdPFbrwsnG4g9ocl1PnpvTA'}
// چون این خودش یه استرینگ  هست و داخل لوکال هم استرینگ باید باشد
// دیگه نباز نیست قبلش
// تبدیل کنیم
// JSON.stringify


// *****************************
// *****************************
// *****************************
// dark:bg-dark-930 dark:shadow-whiteShadow

// چرانیومدیم همین جا اینو دخیره کنیم دیگه کد پایین ننویشیم
// console.log("userInfo--login",newResult.data.result.studentModel["_id"]);  //6347f317ff77cb1bd8cad6b7
// setUserData(newResult.data.result.studentModel["_id"])
// چون کورس ها داخلش نیست

// console.log("result",newResult.data.result)  //coursesno




// *****************************
// *****************************
// *****************************

// console.log("token mine",newResult.data.result.jwtToken);
// setUserToken(newResult.data.result.jwtToken); //toke:nmozhgan

// ولی اینچا کورس و بقیه اطلاعات رو میگیری
// const userInfo = await getStudentById(
//   newResult.data.result.studentModel["_id"]
// );
// console.log("userInfo", userInfo.data.result);
// setUserData(userInfo.data.result);

// if (checked) {
//   // console.log("mmmmm",newResult.data.result.jwtToken)
//   setCooki("user-token", `${newResult.data.result.jwtToken}`, "/", 2);

// }

// npm i react-particles tsparticles --force
