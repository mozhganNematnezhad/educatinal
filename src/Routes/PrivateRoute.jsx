import React from "react";
import { ConsumeAuthState } from "Context/AuthContext/AuthState";
import {Navigate} from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { userData } = ConsumeAuthState();
  
  return userData.email ? children : <Navigate to="/login" />;
};

export default PrivateRoute;









// *********************
// *********************
// *********************
// *********************
// *********************



// ----private roote ------

// private roote , publicrote in react roter 6
// نمونه از اینترنت
// const PrivateRoute = ({children }) => {

//    const { userData } = ConsumeAuthState();
//   if (!userData.email) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };
//  export default PrivateRoute;


// یه سری روت های پابلیک داریم ویه سری روت های پرایوت
// روت های پرایوت همان هایی هستنکه بعد از این که کاربر لاگین کرد
// اون  روت هایی که بعد از لاگین بهشون دسترسی پیدا میکنن
// بهش میگیم پرایوت روت

// روت های پابلیک هم که مشخض هست مثل لاگین درباره ما

// یعنی اگر لاکین نکرده بود و رفت توی ضفحه داشبورد
// اونجا جگ میکنیم که اکر لاکین نکرده بود ریدایرکت کنیم به صفحه لاگین

// ******نکته*******
// پس  کار کامپوتت پرایوت  روت این هست که برامون چک کند اگر کاربر لاگین کرده
// همون روت و برامون برگردونه در عیر این ضورت بفرسته صفحه لاگین


// *************
// *************
// *************

// console.log("userData", userData);
// اگر ایمیل وجود داشت یعنی لاگین کرده
// بیات اون روت های پرایوت بهت نشون بده
// یعنی فری ادیت رایگان 
// در غیر این صورت نویگیت کنه به لاگین
// userData.email ? children : <Navigate to="/login" />;

// *************
// *************
// *************

// private roote
// برای این هست  که کسی که لاگین نکرده
// یا کسی که 
// Student
// هست 
// نتونه بیاد