// import axios from "axios";
import { create } from "axios";
import { toast } from "react-toastify";



const SERVER_URL = "http://localhost:5000/api";

export const API = create({
  baseURL: SERVER_URL,
});



// admin
API.interceptors.request.use((request) => {
  // console.log("request", request);
  // alert("admin-token")
  const token = localStorage.getItem("admin-token");
  request.headers["x-auth-token"] = token;
  return request;
  // console.log("test");
});




API.interceptors.response.use((response) => response,
  (err) => {
    if ([401, 403].includes(err.response.status)){
      localStorage.removeItem("admin-token");

      window.location.replace("/admindashboard/login");
    }

  //   const expectedErrors =
  //   err.response &&
  //   err.response.status >= 400 &&
  //   err.response.status < 500
  //   if (!expectedErrors) {
  //     // console.log("error",error);
  //     toast.error("مشکلی از سمت سرور رخ داده است", {
  //         position: "top-right",
  //         closeOnClick: true
  //     });
  // }


    return Promise.reject(err);
  }
);


// API.interceptors.response.use(null, error => {
//   const expectedErrors =
//       error.response &&
//       error.response.status >= 400 &&
//       error.response.status < 500
//   if (!expectedErrors) {
//       // console.log("error",error);
//       toastifuyErr("مشکلی از سمت سرور رخ داده است", {
//           position: "top-right",
//           closeOnClick: true
//       });
//   }
//   // console.log(expectedErrors);
//   return Promise.reject(error);
// });














// **********************************
// **********************************
// **********************************

// request
// قبل از ارسال ریکویست این تابع اجرا کن همیشه داخل
// هدر توکنی که داخل لوکال استورچ هست قرار بده
// و ریکوست و ارسال کن

// حالا الان ما میخوایم جگ کنیم در رسپانس

// status code
// برای وقتی که
//  عذم دسترسی یا احراز هویت کاربر هست
// 401 و403
// برای اینکه ریدایرکت کنیم به صفحه لاگین

// API.interceptors.response.use((response) => {
  // console.log("response-777",response)
  // console.log("response-777",response.ok)
  // console.log("response-777",response.status)
  // return response
// });

// الان باید بیایم روی 
// status
// شرط بزاریم که کلا یا 
// 401هست
// یا 403
// بیایم ریدایرکت کنیم به لاگین
// API.interceptors.response.use((response) => {
  
//   if(response ===401 || response ===403)
//   return response
// });

// ولی بهتر اینه که مثل بالا بزاریم
// if ([401, 403].includes(err.response.status)) 


// اگراون
// or
// های ما تعداد شرط هاش بیشتر بشه
// فقط کافی هست که ما 
// اون مقدارشو
// داخل ارایه اضافه کنیم


// اگریک کدام از این دو تا درست باشه
// این متد  
// includes 
// برای ما ترو برمیگرداند
// ❤❤❤❤
// includes
// مال زمانی هست که ما میخوایم چک کنیم ببنیم
// داخل ارایه هست یا نه


// 💟💟💟💟💟
// اینجا 
// response.status
// میگیم هرچی هست 
// باید سرچش کنی داخل 
// این 
// [401 ,403]
// اگر 200 باشه
// فالز برمیگرداند
// اگر 500 باشد بازم فالز برمیگرداند
// اگر401ویا 403 باشد
// مفدارش ترو میشود و شرط ما اجرا میشود

// 🎈🎈🎈🎈
// search=== axios interseptor response react


// 1:18 ===refresh token
// اگربعد از یک هفته اومدی داخل سایت
// توکنت 
// expire 
// شده یا زمانت
// گدشته
// ومعتبر نیست



// ✔✔✔✔
// مهم
// فاتکشن اول زمانی اتفاق می افند 
// که
// در حالت عادی است
// مانند
// try catch
// API.interceptors.response.use(function(),function())
// فانکشن اول برای زمانی که 
// try
// باشد و همه چی درست است
// status 
// 200 
// است
// فانکشن دوم برای زمانی هست که ما به ارور میخوریم
// status 
// ما قرمزمیشه یعنی همون 401
// 403
// یا 500
// ویا هر چیز دیگه ای

// هرچیزی که داخل این تابع بود 
// رسپانسی که داشتیم
// همونوبرای ما ریترن کن

// برای تابع دوم باید شرط بزاریم برای اون مقدارها
// تابع هایی که داخلش هستن میتونیم 
// arrow function 
// بنویسیم


// 1:23 
// آکولاد بازو بسته نزاشتم چون داخل یک خط نوشتم همون و برام ریترن میکند

// -------
// -------
// حالا میایم میگیم که هر موقع به این ارورها خورده یعنی 401 و403
// یعنی توکنش مشکل داره
// پس من بایدبیایم توکنشو پاک کنم
// اول از همه توکن  روپاک میکنیم
//  localStorage.removeItem("admin-token");
// یعنی کلا توکنش مشکل داشت حالا یا کلا لاگین نبود یا 
// ادمین نبوده
// باید بفرستیم به صفحه لاگین وسایناپ
// ولی ما در صفحه لاگین و سایناپبه ارور401 و403
// نمیخوریم
// چون میخوایم فرایند اجراز هویت ولاگین رو انجام بدیم
// بعدش مینویسم 
// window.location.replace("/admindashboard/login");

// -------
// -------
// حالا باید بگیم که اگر هیچ کدوم از این ها نبود و شرطمون اجرا نشد
// چیزی ریترن بشه برای ما که این فرایند ادامه پیدا کنه

// -------
// -------
// Promise.reject(err);
// اگر این شرطمون برقراربودو این اتفاق افتاد که هیچی
// اگرچنین نبود وچنین اتفاقی نیغتاد
// وارورمون هر چیز دیگه ای بود
// بیا همون اروربهش برگردون 
// این ریترن همیشه ودر هر حالتی اجرا میشه

// 1:31
// الان توکن اومدیم داخل نتورک دستکاری کردیم و بعد صفحه رفرش زدیم
// دیدم که داخل همون  صفجه نموند و  رفت به لاگین


// 1:41
// الان داخل لوکال استورچ هم برای ادمین هست هم برای یوزر
// منظورم توکن بود
// این باعث میشه که
// هم روتهای ادمین براتون باز باشه هم روت های یوزر عادی


// 1:48
// درثبت نام ادمین و کاربر
// کلا لوکال استورچ رو کامل پاک کنیم
// که هم توکن ادمین پاک بشه و هم توکن کاربر
// در ان واحد بهتر هست که فقط یه روت داخل اپلیکیشن باشه
// داخل لایگنی که برای خود یوزرنوشتیم
// داخل 
// try
// قبل از
// response 
// localStorage.removeItem("admin-token")
// localStorage.removeItem("user-token")
// وقتی اول هیچ روتی داخل برنامه نیست
// وقتی که کازبر داخل
// فرم لاگین
// یوزر و یا ادیمن اومد
// کلا هر چی توکن از قبل داره روپاک کن
// برای اینکه نتونه همزمان هم کاربر
// داخل اپ ما باشه و هم یوزر
// داریم پاک میکنیم که در آن واحد یه روت داشته باشیم


// این دو تا باید داخل فرم لاگین کاربرهم بنویسم
// اصلا ما نبایداون
// ادمین توکن

//  شناسه لوکال استورچ
// اینجا داخل لاکین داشته باشیم
// یه کم غیر اصولی هست



// **********************
// **********************
// **********************
// **********************
// response
// زمانی بررسی کردیم که کاربر توکنش مشکل داشت
// 401 و403
// مربوط به توکن
// authentication 
// هست