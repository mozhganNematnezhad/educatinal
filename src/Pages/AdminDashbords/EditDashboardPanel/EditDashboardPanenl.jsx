import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form } from "formik";
import { Formik } from "formik";
import { EditDataDashbord } from "components/AdminDashboard/Data/Data";

import InputFeildEdit from "Pages/UserDashboard/EditUserAccount/InputFeildEdit/InputFeildEdit";
import { FiUploadCloud } from "react-icons/fi";
import { ConsumeAuthAdState } from "Context/Admin/AuthAdmin/AuthStateAdmin";
import { EditAdminSchema } from "components/LoginSiqnUp/Validation/ValidationAdminSchema/ValidationAdminSchema";
import { updateAdmin } from "Services/Admin";
import { toastifuyErr, toastifuySuccess } from "HelperFunctions/Toastify/Toastify";
import { uploadImage } from "Services/Student";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const EditDashboardPanel = () => {
  const navigate = useNavigate();
  const { admin, setAdmin } = ConsumeAuthAdState();
  // console.log("admin-edit", admin);

  const [loading, setLoading] = useState(false);

  // intialvalue
  // برای این هست که ماداریم اطلاعات فیلدها روداخلش میبینم
  // ما اینجا اومدیم  اون فیلدها رو از  کانتکس خوندیم
  // یعنی وقتی برای بار اول فچ میشه
  const initialValues = {
    fullName: admin.fullName,
    // isActive: admin.isActive,
    // role: admin.role,
    email: admin.email,
    nationalId: admin.nationalId,
    phoneNumber: admin.phoneNumber,
    birthDate: admin.birthDate,
    address: admin.address,
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
    // console.log("values" ,values)
    // اینجا رو باید با همون 
    // values
    // بفرستیم این کار اشتباه هست
    // زمانی که ما میخوایم
    // دیتای نهایی روارسال کنیم دیگه با کانتکس کاری نداریم
    // کانتکس برای دیتای فعلی مون هست برای دیتای نهایی از
    // values
    // همین قسمت
    // استفاده میکنیم

    // const editAdmin = {
    //   fullName: values.fullName,
    //   // role: admin.role,
    //   email: values.email,
    //   nationalId: values.nationalId,
    //   phoneNumber: values.phoneNumber,
    //   birthDate: values.birthDate,
    //   address: values.address,
    // };

 
    try {
      // console.log("edittt",values)
      setLoading(true);
      const {data,status} = await updateAdmin(admin._id, values);
      // console.log("response" ,response)
      console.log("response" ,data)
      if (status === 200) {
        toastifuySuccess("اطلاعات کارمند بروز شد");
        // setAdmin(data.result)
        setAdmin((prevState)=>{
          const result={...prevState ,...values}
        // console.log("prevState",prevState)
        // console.log("values",values)
          const convertToJson=JSON.stringify(result)
          localStorage.setItem("admin-data" ,convertToJson)
          return result
          
        })
      // const convertToJson=JSON.stringify(data.result)
      // localStorage.setItem("admin-data" ,convertToJson)
      setLoading(false)
      setTimeout(() => {
        navigate("/admindashboard/panel");
      }, 2000);
        
      }
    } catch (error) {
      toastifuyErr("مشکلی در به روز رسانی بوجود آمده");
      setLoading(false);
    }
  };
  return (
    <div className="Da_Edit   ">
      <div className=" mt-16 mx-8 text-[#2d3339]  border-b-4 border-solid border-[#00ffb1] ">
        <h3 className="text-center pb-4 text-base dark:text-white">
          {" "}
          ویرایش پروفایل ادمین
        </h3>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={EditAdminSchema}
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
              <div>
                <div
                  className="py-2 lg:py-4 flex flex-col px-4 md:flex md:items-center md:flex-row md:pr-0 w-[150px] h-[150px]
                m-auto
                "
                >
                  <img src={admin.profile} alt="" className="rounded-[50%]" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 items-center">
                {EditDataDashbord.map((item) => {
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
              </div>

              {/* upload image */}
              <div>
                <div className="py-2 w-[400px] lg:py-4 flex flex-col px-4 md:flex md:items-center md:flex-row md:pr-0">
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
                    onChange={(e) =>
                      handelUploadImage(e, props.setFieldValue)
                    }
                  />
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
          </div>
        )}
      </Formik>
    </div>
  );
};

export default EditDashboardPanel;












// *****************
// *****************
// *****************
// *****************

// هر جا که ما ارور عدم دسترسی میگیریم
// طبیعی که ما
// دسترسی نداریم
// یا توکن به درستی ست نکردیم
// اومد داخل هدرش دید که توکن ارسال کرد یا نه
// ولی توکن برای یوزر بود
// اینجا خودش یه اشتباه چون نباید توکن یوزر باشه
// پس لاگین کردیم و بعد توکنشو گزاشتیم داخل
// یو ار ال 
// employ
// ولی ایدی نامعتبر گرفتیم
// که باید ایدیشوبزاریم
// مقادیرشو گزاشتیم داخل بادی 
// پست من
// ولی ارور400 گرقتیم
// address  is requred
// phone is required
// اون قسمت هدر توکنشو گرفتیم
// ولی باز عدم دسترسی زد .وارد حساب شوید
// پس فهیمیدیم که مشکل ما از توکن هست
// پس توکنی که داریم داخل کد میزنیم توکم معتبر نیست
// اینجا چون توکن عیر غعال کردیم داریم ارورعدم دسترسی میگیریم
// داخل کد خودمم عدم دسترسی گرفتیم به خاطز اینکه توکن من اشتباه هست
// اول باید مشکل توکن روحل کنیم

// *****
// اول اومدیم اون توکن ادیمن گزاشتیم داخل 
// همون
// JWT
// گزاشتیم داخل 
// admintoken="ثابت"

// *****
// من اومدم کل 
// interseptor
// داخل همون 
// api
// گزاشتم
// ولی نباید باشه هرکردوم باید جدا باشه
// دو تا اکسیوزداشته باشیم
// برای کارهایی که میخوایم انجام بدیم
// توی لوکال استورچ ما میتونیم هر اسمی روداشته باشیم
// user-token
// admin-token

// کاری که باید بکنیم اینه که ما باید
// دو تا اکسیوزداشته باشیم
// یکی برای ادمین یگی برای یوزرها 

// ***
// پس ما یه
// api
// داشتیه باشیم 
// اما قسمت هایی که برای ادمین هست
// interseptor
// اش 
// توکن ادمین ست بشه
// وقسمت هایی که مربوط به یوزر هست
// interseptor
// اش 
// توکن یوزر ست بشه

// ***این کار ودرست نیست ولی انجامش دادیم اول***
// یه 
// api
// کلی داسته باشیم
// interseptor
// ای
// داخلش نباشه
// هر 
// interseptor
// داخل و باید براریم مربوط به خودش
// interseptor
// مربوط یه 
// student
// داخل خودش 
// وبرای ادیمن هم داخل خود همون ادمین که بقیه
// url
// ها هستن 
// الان توکن هر دو هست 
// ولی مشکل اینه که دیگه ابدیت نکرد
// داخل رسپانس دیگه دیتای ابدیت شده رونداد دیتای قبلی روداد

// اینکاری که انجام دادیم اشتباه بود
// ما گفتیم یه
// api
// ساده مینویسیم با اون 
// url
// هر جایی که استفاده کردیم توی فایل 
// student
// interseptor
// ست میکنیم 
// توکن استیودنت
// وبرای ادمین هم توکن ادمین ولی دیدیم که نشد

// الان کار درست اینه که توی فولدر 
// api
// دوتا یکی برای ادمین و یکی هم برای 
// student
// برای هرکدام یه
// interseptor
// مینویسیم

// *************************
// *************************
// هر رولی که ما داخل اپلیکیشن داریم
// هرنوع یوزری که ما داریم
// هرکدوم یه توکن مخصوص به خودش رو دارد

// اگر ادمینی که بخواد وارد سیستم بشه
// یه توکن ساخته میشه
// موقعی که یوزرلاگین میکنه
// یه توکن ساخته میشه 
// موقعی که ادمین لاگین میکنه یه توکن ساخته میشه
// بک اند از طریق همین توکن ها ساخته  میشه

// ***
// گفتیم توکن بیاد از لوکال بخونه
// یعنی اونجا ست کردیم
// داخل 
// interseptor
// پس دیگه نیاز نداری که مثل دفعات قبل 
// admintoken ="تابت"
// بزاری
// اگر دقعات قبل میزاشتیم چون  هنوز توکنی نزاشتیم برای همین توکن واز پست من کپی کردیم
// برای تست اینکا رو انجام دادیم
// موقتی بود 

// ***
//ولی درستش اینه که بیایم
// توکن دریک جایی داشته باشیم
// وبعد از اونجا بخونیم
// مثل لوکال استورچ


// ***
// پابلیک یعنی روت هایی که همه به ان دسترسی دارن چه یوزر مهمان باشه چه یوزر عادی باشه
// اینجا اصلا نیازبه 
// interseptor
// نیست

// ***
// اینجا هایی که 
// employ
// نداره یه روت پابلیک حساب میشه چه ما توکن بزاریم چه نزاریم
// دیتا رو به ما میدهد


// *************
   // setAdmin(data.result)
  //  setAdmin((prevState)=>{
  //   const result={...prevState ,...values}
  //   const convertToJson=JSON.stringify(result)
  //   localStorage.setItem("admin-data" ,convertToJson)
  //   return result
    
  // })

  // 1:38
// این یه مشکلی هست از سمت بک اند
// زمانی که دیتا ابدیت میشه زمانی که ریکوئست ارسال میکنیم همه چیز موفقیت امیز بود
// توی رسپانسش باید دیتای جدید و ابدیت شده رو به ما بدهد
// اما این کار رو انجام نمیدهد
// همون دیتای قیلی داخل رسپانس به ما میدهد
// اگرهمه چیز اکی بود داخل اون 
//setAdmin()
// ّباید اون 
// editAdmin
// که ارسال کردیم وبزاریم
// چون بک اند دیتای جدید و ابدیت شده رو داخل رسپانس بهمون نمیده
// ما باید همون دیتایی که ارسال کردیم و
// که همین 
// editadmin
// باید داخل 
// SetAdmin
// ست کنیم
// که این کار اشتباه هست 
// معمولا کم پیش میاد
// در پروژه بعدی همون دیتایی که از رسپانس میگیریم
// باید بیاد

// داخل لوکال استورچ هم به جای 
// data.result
// همون
// editAdmin
// باشد

// **
// این کانتکس چه زمانی مقداردهی میکنیم زمانی که لاگین ادمین اتفاق میفته 
// وما اطلاعی که داریم داخل کانتکس دخیره میکنیم

// 1:47
// توی رسپانس لاگین ماای دی رو داریم
// داخل کانتکس هم ما ایدی رو داخل استیت داریم
// وفتی ابدیت میزنیم دیگه اون ایدی اولیه رو میبره 
// یعنی نیست
// داخل همون کانتکس

// چه اتفاقی می افتد
// این مشکلی که داریم بهش برمیخوریم دلیل اصلی
// بکاند هست
// زمانی که ما میایم لاگین انجام میدیم کامل اطلاعات شخص روبه ما میدهد وما
// میزاریم داخل کانتکس
// مثل ایدی فول نیم
// وبه محص لاگین کردیم
// بعدش میتونست کامل ابدیت کنه
// ولی الان که ابدیت انجام شد
// دوباره بخوایم انجام بدیم نمیشه
// چون محبور شدیم چیزی که خودمون میفرستیم و براش بزاریم
// چون بک اند بهمون دیتای ابدیت شده مثل رسپانس لاگین نمیده


//**** */ مهم
// اون مقادیرقبلی که داخل 
// ادمین ما وجود دارد رو 
// حفط بکن
// که ایدی که داریم داخلش بمون
// مقادیر جدید رو بیا بهش اصافه کن 
// حالا چه جوری انجام میدیم؟
// اینجایی که 
// SetAdmin
// صدا میزنیم
// باید بهش یه 
// arrow function
// پاس بدیم

 //setAdmin(()=>{

// })

// setAdmin((prevState)=>{
//   const result={...prevState ,...values}
//   const convertToJson=JSON.stringify(result)
//   localStorage.setItem("admin-data" ,convertToJson)
//   return result
  
// })

// زمانی که به تابع ست استیت خودمون یک 
// فانکشن پاس میدهیم
// زمانی که میخوایم مقادیر قبلی مون هم حقط بشه
// ارگیومنت داخلی یه اسم میدهیم
// prevState
// اینجا اگر دقت کنید ما از کلمه ریترن استفاده نکردیم
// 1:53
// چرا که داریم
// مستقیما
// اگربعد از علامت ارو
// ما اکولاد باز وبشته بزاریم
// یعنی داریم یه فانکشن تعریف میکنیم
// و باید یه چیزی هم میوتد شود 
// اگر ریترن نداشت و تک خطی بود
// نیاز به محاسه نداشتیم
// میایم از اکولاد استفاده نمیکنیم
// و مستقیما هر چیزی که سمت راست ارو
// هست همون ریترن میشه به صورت خودکارو برامون ست میشه
// حالا باید چی کار کنیم ؟
// ما یه ابجکتی رو داریم استفاده میکنیم
// باید مقادیر قبلی رو حغط کنیم
// ...prevState
// مقادیر جدید هم بهش اصافه کنیم
// همون کانتکسمون موقغ لاگین هست
// مقادیری که موقع لاگین داخل کانتکسمون میره 
// اول کانتکسمون با لاگین پر میشه وبعد ابدیت میکنیم 

// ...values
// این هم باید سه نقطه
// قبلش قرار بدیم
// اگراین سه نقطه رونزاریم 
// values
// خودش ابجکت هست
// دوباره میاد داخل ابجکت وبعد ابجکت ابجکت میشه
// 1:54
// وقتی سه نقطه استفاده میکنیم بایدمقادیر یه ابجکت و
// بکشیم بیرون ازش 

// 2:14
// پس در نتییجه اینجا چون به مقادیر قبلی
// ای دی بود نیاز داشتیم
// مجبور بودیم این طوری استیت خودمونو 
// با لوکال استورچ یه جا ست کنیم
// اگر لوکال بیاریم بیرون به 
//prevState
// خودمون دیگه دسترسی نداریم
// در حقیقت این کاری که انجام دادیم یه کار استثنا بود
// کم پیش میاد 
// چون که قایدتا
// بک اند به ما اون اطلاعات جدید
// وابدیت شده رومیده
// ما هم مثل لاگین میزاریم
// داخل کانتکس

// این چیزی هم که داخل  استیت اومدیم
//  لوکال استورچ ست کردیم
// این مربوط به هوک ها میشه
// ماداخل ست استیت همیشه یه مقدار ثابت میریختیم
// الان داریم یه تابع میریزیم