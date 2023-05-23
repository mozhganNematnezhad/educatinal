import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

// imports
import InputFeildEdit from "./InputFeildEdit/InputFeildEdit";
import { updateStudent } from "Services/Student";
import { ConsumeAuthState } from "Context/AuthContext/AuthState";
import { EditSchema } from "components/LoginSiqnUp/Validation/ValidationSchema";

import {
  toastifuyErr,
  toastifuySuccess,
} from "HelperFunctions/Toastify/Toastify";
import { uploadImage } from "Services/Student";
import { EditData } from "./EditData/EditData";

// icon
import { FiUploadCloud } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const EditUserAccount = () => {
  const { userData, setUserData } = ConsumeAuthState();
  // console.log("userDate-edit", userData);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const initialValues = {
    fullName: userData.fullName,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
    nationalId: userData.nationalId,
    birthDate: userData.birthDate,
    profile: userData.profile,
  };

  const handelUploadImage = async (e, setvalue) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("image", files);
    try {
      setLoading(true);
      const response = await uploadImage(formData);
      // console.log("response", response);
      if (response.status === 200) {
        setLoading(false);
        setvalue("profile", response.data.result);
        toastifuySuccess("عکس با موفقیت آپلود شد");
      }
    } catch (error) {
      setLoading(false);
      toastifuyErr("مشکلی در آپلود عکس بوجود آمده");
    }
  };

  const submitHandler = async (values) => {
    // console.log("values", values);
    // console.log("test");
    const editUser = {
      fullName: values.fullName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      nationalId: values.nationalId,
      birthDate: values.birthDate,
      profile: values.profile,
    };

    try {
      setLoading(true);
      const { status, data } = await updateStudent(userData._id, editUser);
      // console.log("response", response);
       console.log("response-edit", data);
      if (status === 200) {
        toastifuySuccess("اطلاعات شما با موفقیت تغییر یافت");
        setUserData(data.result);
    

        // console.log("data.result",data.result)// object
        const convertTojson = JSON.stringify(data.result);
        localStorage.setItem("user-data", convertTojson);
        setLoading(false);

        setTimeout(() => {
          navigate("/userdashboard");
        }, 2000);
      }
    } catch (error) {
      toastifuyErr("مشکلی در به روز رسانی بوجود آمده");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="Da_Edit   ">
        <div className=" mt-16 mx-8 text-[#2d3339]  border-b-4 border-solid border-[#00ffb1] ">
          <h3 className="text-center pb-4 text-base dark:text-white"> ویرایش حساب کاربری</h3>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={EditSchema}
          onSubmit={submitHandler}
        >
          {(props) => (
            <div className="Da_edit rounded-lg my-8 mx-8 shadow-xl md:px-[40px]  py-[10px] border border-solid border-[#ecf0f4]
            dark:bg-[rgb(27,52,77)]
              dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]
            ">
              <Form className="">
                <div className="grid md:grid-cols-2 items-center">
                  {EditData.map((item) => {
                    return (
                      <InputFeildEdit
                        id={item.id}
                        label={item.label}
                        key={item.id}
                        name={item.name}
                        type={item.type}
                      />
                    );
                  })}

                  {/* upload image */}
                  <div>
                    <div className="py-2 lg:py-4 flex flex-col px-4 md:flex md:items-center md:flex-row md:pr-0">
                      <label
                        htmlFor="image"
                        className=" w-[70%]  bg-[#0eb582]  cursor-pointer text-center justify-center flex rounded mt-2 h-10 px-3 py-2 gap-2"
                      >
                        <FiUploadCloud className="text-white " />{" "}
                        <p className="text-white">انتخاب عکس</p>:{" "}
                      </label>
                      <Field
                        type={"file"}
                        id="image"
                        name="image"
                        className="hidden"
                        // onChange={handelUploadImage}
                        onChange={(e) =>
                          handelUploadImage(e, props.setFieldValue)
                        }
                      />
                      {console.log("nnnn", props.values)}
                      {console.log("nnnn", props.errors)}
                    </div>

                    {/* <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="image"
                    />
                  </div> */}
                  </div>
                </div>




                <div className="flex justify-center mt-8 mb-6">
                  {loading ? (
                    <AiOutlineLoading3Quarters className="text-2xl " />
                  ) : (
                    <button
                      type="submit"
                      className="btn text-[#fff] bg-[#00ffb1] py-[0.5rem] px-4 rounded-lg"
                    >
                      ویرایش تغییرات
                    </button>
                  )}

                  <Link
                    to="/"
                    className="btn text-[#fff] bg-[#ff2929] py-[0.5rem] px-4 rounded-lg mr-4"
                  >
                    انصراف
                  </Link>
                </div>
              </Form>
              {/* {console.log("props",props)} */}
              {/* {console.log(props.values)} */}
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default EditUserAccount;

// *************
// *************
// *************
// *************
// *************
// *************
// *************
// *************

// ***نکته اول
// اول نیاز به لوکال استورچ نیست چون ما اومدیم کانتکس خودمون رو با
// لوکال استورچ مقداردهی کردیم
// یعنی الان کانتکس ما داخل لوکال هست

// ***تکته دوم
// این اسم هایی که توی
// initialValues
// نوشتیم
// ما میایم و داخل کانتکس یوزر دیتا داریم  باید
// با نیم اون اینپوت هایی که رندر کردیم
// یکی باشه

// ***نکته سوم
// کار درست تر اینه که کل دیتایی که
// توی کانتکس داریم رو
// یه
// initialValues
// پاس ندهیم
//  فقطا اونایی که
// نیاز داریم روپاس دهیم

//  fullName: userData.fullName,
// email: userData.email,

// *************
// *************
// *************
// *************
// *************
// *************

// هرموقع ریکویست ما درخواست نمیدهید یا با خطا مواجه میشه بیایم
// تب
// network
// ببینیم درخواست ارسال می شود یا نه

// وقتی من سایمیت رومیزنم باید یه چیزی بیاد یه درخواستی ارسال کند
// ولی اصلا تابع سابمیت اجرا نمیشه
// اینم گفتیم به خاطر این هست که وقتی
// از ولیو های فرمیک خالی باشه
// یا مقدار معتبری نباشد
// کلاتابع سابمیت رواجرا نمیکنه

// *************
// *************
// *************
// *************
// *************
// *************

// اینواول برای این گداشتم که بتونم اون دانشجو روبگیرم وفتی مونت
// اون دانشجو بیاد توی فیلدها  قراربگیره

// useEffect(() => {
//   const FechOneStudent = async () => {
//     try {
//       const response = await getStudentById(userData._id);
//       console.log("response", response.data.result);
//       setUserData(response.data.result);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   FechOneStudent();
// }, [userData._id]);

// ولی بعد استاد گغت که
// چون کانتکس داریم واز طریق همون کانتکس ما میتونیم بگیریم
// یعنی الان ای دی ما داخل کانتکس هست
// دیگهه نیازی نیست که تو بیای ای دی بگیری داخل یوز افکت بزاری

// در واقع وقتی که صفحه مونت میشه این دیتاها باید وارد اینپوت بشن
// این دیتاها روما از کجا میاریم؟
// از کانتکس

// کانتکس ما مقدار اولیه خودمونوکجا کزاشتیم؟
// داخل لوکال استورج
// در واقع الان دیتای کانتکس توی لوکال استورچ هست

// *****Context
// الان کانتکس چی هست ؟
// کانتکس به ما میاد مقادیری که توی کل
// درخت ریکت توی همه جای
// کامپوننت ها نیاز داریم
// داخل کانتکس میریزیم

// مقداری که داخل کانتکس میریزیم چی هست؟
// زمانی که طرف وارد شد لاگین کرد
// اطلاعاتشو داخل کانتکس بریز
// چون زمانی که صفحه رفرش میشه یا طرف میره
// مرورگزمیبنده دوباره
// این کانتکس باید مقداردهی شود
// نمیخوایم دوباره بره لاگین کنه و باز دوباره کانتکس مقداردهی شود
// همون بار اول که لاگین کرده اطلاعاتشو میزاریم توی لوکال استورچ
// بعد از اینکه طرف دوباره وب سایت باز کرد
// ما چک مکنیم اگر لوکال استورچ مقادیرش هست
// بریزه
// داخل کانتکس
// یعنی اطلاعات کاربری که ما داریم از کانتکس میخونیم در اضل توی لوکال استورچ
// هست
// گرفتیمش داخل کانتکس
// و داریم از کانتکس میخوتیم

// مهم نکته
// چون مقادیرداخل  کانتکس داریم  و کانتکس هم از لوکال استورچ هست
// پس دیتا رو داریم و دیگه نیاز نیست از سروز دیتا روبخونیم

// نکته مهم
// پس نبازی به درخواست زدن دوباره نداریم
// کانتکسی که الان داریم در واقع همون لوکال استورج هست

// ************* important -----imporatnt
//1---- مرحلهcontimport { uploadImage } from './../../Services/Student/index';

// پس در واقع ما دوتا مفهوم داریم
// کانتکس یه استیت گلوبال هست هر جایی که ما استیت گلوبال رو ابدیت کنیم  تمامی جاهایی که از این داده
// استغاده میکنیم ابدیت میشه
// مثل الان که اسم راحیل رو به سارا تعییر دادم
// چون دیتا داره از کانتکس خونده میشه
// چون دیتای گلوبال هستش دیتایی که داره در کل برنامه استغاده میکنیم

// 2------مرحلهlocalstorage
// مانیاز داریم مقداری که به کانتکس میدهیم رو یه جایی دخیره کنیم که بعد از این که مرورگر بسته میشه
// یا صفحه رفرش میشه این دیتا ار بین نره
// و داشته باشیم که بعد از این که سایت دوباره میاد بالا
// کانتکس ها مقداردهی شود
// اگر این کار ر نکینم دوباره بایدبفرستیم لاگین دیتارو وارد کنه
// لاگین کنه
// یوزر فول نیم پسورد بگیریم
// بزاریم داخل کانتکس
//پس برای این که این کا رونکنیم و داده روداشته باشیم
// ویکبار لاگین کنه و بعد از اون دیتا رو داشته باشیم
// نیاره که کت یه جا اینو دخیره کنیم و یه جا نگه داریم
// بهترین کار برای این لوکال استورچ هست
// یه حافظه مرورگرکه بهمون اجازه میدهد دیتایی رو نگه داریم

// ----------
// به محض اینکه صفحه ما لودمیشه کانتکس ما توی رندر
// App
// نوشته میشه
// context.provider
// نوشتیم به محص اینکه اجرا میشه
// کانتکس که میادمقداردهی شود
// چک میکند
// که اگر لوکال استورچ مقدارش معتبر هست
// همان را بزارد داخل کانتکس ولی اگر چیزی نیست
// ولاگین نکرده ودیتایی نیست
// یه ارایه خالی بزاربه ارور برنخوریم

// ------------
// پس مقدارکانتکس ما قراره از یه جایی بالاخره داشته باشیم
// چون کانتکس تو خود درخت ریکت است هر موقع رفرش شوداز تو اجرامیشه

// -------------
// پس ما کاری با لوکال استورج نداریم
// لوکال استورچ فقط
// وظیقه اش اینه که کانتکس ما رو مقداردهی پیش فرض کنه
// که اطلاعات قبلی کاربر
// بعد رفرش شدن صفحه داخل کانتکس ما بشینه
// تمامی کار ما با کانتکس هست
// این کانتگس هست که یه استیت گلوبال کلی هست
// توی کل درخت ریکت
// که ما جاهای مختلف ازش استفاده میکنیم
//   که اگه از جایی ابدیت شد همه اون جاهایی که استفاده کردیم
// اوننا هم همزمان باهاش ابدیت بشن

// *************
// *************
// *************
// *************
// *************

// e.preventDefault("")
//چون تابعی که توسظ فرمیکارسال میشه
// خودش مقداردهی میکند

// *************
// *************
// *************

// برای
// put
// نیاز نداره که ما
// همه دیتاها روبهش پاس بدهیم
// از طرفی مطمین نیستیم که کدومش  تعییر پیدا کرده
// همین کاری که الان انجام دادیم درسته
// *************
// *************
// *************
// update
// if (status === 200) {
//   toastifuySuccess("اطلاعات شما با موفقیت تغییر یافت");
//   setUserData(data.result);
//   const convertTojson = JSON.stringify(data.result);
//   localStorage.setItem("user-data", convertTojson);
//   setLoading(false);

// *****نکته اول
// وقتی که ابدیت شد ما  باید کانتکس هم ابدیت کتیم
// چون مقداری که داریم نمایش می دهیم از کاربر داخل  کانتکس هست

// یعنی اینجا دیتایی که از رسپانس میگیریم رو دوباره باید
// داخل کانتکس دخیره کنیم

// چون دیتا الان سمت سزوز ابدیت شد
// ولی چیزی که ما الان داخل کانتکس داریم
// هنوز همون دیتای قبلی هست
// setUserData(data.result);

// الان ما اومدیم دیتا رو ست کردیم داخل کانتکس ولی با رفرش شدن دوباره از بین میره
// اینجا باید چهکنیم
// داخل لوکال استورچ دخیره کنیم
// چون مقدار اولیه کانتکس
// یعنی کانتکس تا زمانی که رفرش میشه
// صفجه
// کلا از بین میره
// مقدار اولیه کانتکس و که الان توی لوکال استورچ هست
// باید ابدیت کنیم

// بعد از ابدیت کاربر سه تا تعییر اتقاقمی افتد
// یکی سمت سروزابدیت میشه
// یکی داخل کانتکس
// بعدش هم لوکال استورچ باید با مقدار جدید
// ابدیت بشه

// const convertTojson = JSON.stringify(data.result);
// localStorage.setItem("user-data", convertTojson);
// *************
// *************
// *************

// خاصیت کانتکس اینه
// زمانی از کانتکس استغاده میکنیم
// که یه دیتا چندین جا تکرار شده باشد



// *************
// *************
// *************
// **********اپلود عکس**********
// ما قراره دیتا رو
// ابدیت کنیم
// ما قراره که دیتارو ابدیت کنیم
// ما قراره که مقدار
// پروفایل
// توی
// inistailvalue
// بهش دسترسی پیدا کنیم
// و اینجا توی تابع
// handleimage
// ابدیت کنیم
// پس باید یه جوری به دیتای فرمیک
// دسترسی پیدا کنیم
// پس داخل فرمیک باید بیایم
// onChange={(e) =>
//   handelUploadImage(e, props.setFieldValue)
// }

// setFieldValue
// پارامتربعدی یه تابعی هست از خود فرمیک
// که بهمون اجازه میده
// مقادیر بهش دسترسی
// پیدا کنیم
// ابدیت کنیم

// formData()
// باهاش دیتا رو تبدیل کنیم
// به یه عکسی که ما مبگیریم
// بایدیه یوارال ازش دریافت کنیم
// تبدیل کنیم به یه یو ارال
// واون یو ارال به عنوان یه رشته
// پاس بدیم به بک اند

// این
// formData()
// در اضل
// بهش یه فایلی رو داریم رو
// append
// کنیم
// عکسی که داریم تبدیل بشه یه اون یو ارال
// که میخوایم
// چون داخل ابدیت هسنیم فعلا با اون ای پی ای
// عکس کاری نداریم

// upload image formik=== google

// *************
// *************
// *************

// props.setFieldValue
// با این میتونیم مقادیر فرمیک رو بیرون از فرم   ست کنیم
// *************
// *************
// *************
// *****setvalue
// مقدار اولو باید بهش پاس بدهیم
// باید بگیم کدوم یک از مقادیر رو باید ابدیت گنیم
// مقدار اول یه رشته باید بدیم به نام پروفایل
// مقدار دوم
// response.data.result

// گفتیم ما  میخوایم
// مقدار پروفایل داخل فرمیکمون
// بعد اپلود تعییر کنه
// در حالت عادی قبل از اپلود
// مقدار پروفایل ما یه رسته خالی هست
// بعد ا زاین که اپلود انجام شد
// فعلا فقط مقدار فرمیک  ما
// برابر با ادرس عکس میشه
// هنوزچیزی ثبت نشده
// بعد از این که ادرسی که گرفتیم
// داخل فرمیگ گزاشتیم
// حالا میتونیم سایمت نهایی انجام بدیم
// setvalue("profile", response.data.result);

// ما عکسها و آپلود فایل روباید به شکل فرم دیتا به بک اند ارسال کنیم
// ما اومده بودیمتو هدر کلی 
// axios
// فرمت ارسالی ماهمیشه
// json
// است
// کار اشتباهس هست 
// چون بعضی جاها نباز هست که فرمت های ارسال
// دیتا تعییر کنه
// یا تعریف

// *******************
// *******************
// *******************
