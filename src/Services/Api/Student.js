import { create } from "axios";
import { toast } from "react-toastify";

const SERVER_URL = "http://localhost:5000/api";

export const API = create({
  baseURL: SERVER_URL,
});

API.interceptors.request.use((request) => {
  const token = localStorage.getItem("user-token");
  request.headers["x-auth-token"] = token;
  return request;
  // console.log("test");
});





// API.interceptors.response.use(
//   (response) => response,
//   (err) => {
//     const expectedErrors =
//       err.response && err.response.status >= 400 && err.response.status < 500;
//     if (!expectedErrors) {
//       // console.log("error",error);
//       toast.error("مشکلی از سمت سرور رخ داده است", {
//         position: "top-right",
//         closeOnClick: true,
//       });
//     }

//     return Promise.reject(err);
//   }
// );









// ***************
// ***************
// ***************
// ***************


// مدیریت خطاها
// axios.interceptors.response.use(
//   (response) => response,
//   (err) => {
//     if ([401, 403].includes(err?.response?.status)) {
//       localStorage.removeItem("user-token");
//       if (!["/auth/register", "auth/login"].includes(window.location.pathname))
//          window.location.replace("/auth/login");
//     }
//     return Promise.reject(err?.response?.data)
//   }
// )

// ********************
// ********************
// ********************
// ********************
// ********************
// ********************
// ********************
// ********************
//برای قبل از ارسال هر ریکوِیست یا درخواست  توکن توی هدر دخیره بشه
// قبل این که درخواست ارسال بشه
// توی هدرش دخیره بشه
// اینجا ما کجا توکنی رودخیره کرذیم  داخل لاگین
// axios.interceptors.request.use((request) => {
// console.log("test");
//   const token = localStorage.getItem("user-token");
//   request.headers["x-auth-token"] = token;
//   return request;
// });

// ****نکته:
//   برای دسترسی به
// apiهای
// مربوط به ادمین باید توکن ادمین توی هدر دخیره بشه
//  برای دسترسی به
// api های
// مربوط به یوزرباید توکن یوزر توی هدر دخیره بشه

// ****نکته
// الان پس متوجه شدیم قبل از این که هر رکوئستی ارسال شود توی هدر رکوئست برامون توکن میاد و قرار میدهد

// ********************
// ********************
// ********************
// x-auth-token
// ربطی به توکن ادمبن یا کاربر نداره کلا یک شناسه ای است برای توکن توی هدر دخیره بشه
// فرقی نمیکنه توکن کاربر باشه یا ادمین
// اون
// user-token
// که نوشتین
// شناسه ای هست که توی  لوکال استورچ دخیره میکتیم

// این
// user-token
// هر چیزی میتونه باشه

// چیزی که دراضل باید سمت سرور بفرستیم توی هدر هست
// واون
// x-auth-token
// که مهم هست
// همین شناسه کلیدی باشه
// چون سروراینو میشناسه

// اما
// user-token
// اون چیزی که ما خودمون ست کردیم
// توی لوکال استورج
// فرقی نمیکنه که اسمش روچی بزاریم

// توکن کاربر یا ادمین هم سمت ما فرقی نمیکنه
// وقتی سمت سروزفرستاده میشه
// سروز پردازش میکنه که این کسی که الان اومده کاربر هست یا ادمین هست

// ********************
// ********************
// ********************
// export const API = axios.create({
//   baseURL: SERVER_URL,
//    headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// });

// خود
// Axios
// مقدار دیفالت
// application/json
// قرار میدهد
// چون هیچ موقع نباید برای ابزاری که میخوایم توی کل برنامه در جاهای ));
// مختلف
// استفاده میکنیم یه تنطیم خاض بنویسم
// باید چیزی بنویسم که همه جا یکسان باشد

// axios.interceptors.response.use(null, (error) => {
//   const expectedErrors =
//     error.response &&
//     error.response.status >= 400 &&
//     ErrorEvent.response.status < 500;
//     console.log("expectedErrors",expectedErrors);
//     // اگرخطایی که من انتطارشو نمیبرم
//     if(!expectedErrors){
//       console.log(error);
//       toastifuyErr("مشکلی ازسمت سرور رخ داده است")
//     }

//     return Promise.reject(error)
// });
