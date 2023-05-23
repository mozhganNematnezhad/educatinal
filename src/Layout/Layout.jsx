import React from "react";
import Footer from "components/Footer/Footer";
import Navbar from "components/commen/Navbar/Navbar";
import { useLocation, Outlet } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  // console.log(pathname); // /login

  const hideheaderPath = ["/login", "/siqnup", "/forgetpassword"];

  if (!hideheaderPath.includes(pathname))
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  return <>{<Outlet />}</>;
};

export default Layout;







// *******************
// *******************
// *******************
// *******************

// اول این بود
// return (
//   <>
//   {!hideheaderPath.includes(pathname)?(
//     <>
//     <Navbar />
//     {children}
//     <Footer />
//   </>
//   ):<div>
//     {children}
//     </div>}

//   </>
// )

// یکی از جاهایی که ریترن دوباره مینویسم یا چند بار مینویسیم داخل فانکشن  زمانی هست که ازشرط استفاده میکنیم
// اینجا نیاز به
// else
// نیست
// اگر چیزی ریترن شود در شرط اول دیگه سراع ادامه اش نمیره
// برای همین دیگه شرط های بغدش رو
// else
// نمینویسم

// اما اگر شرظ های بیشتر بود
// else
// مینوشتیم

// الان چون یه
// if else
// بیشتر نداریم
// retun
// بنویسیم درسته

// *******************
// *******************
// *******************
// *******************

// در ریکت روتر 6 ما  دیگه چیزی به نام
// children
// به کار نمی بریم
// از
// outlet
// استفاده میکنیم

// برای همین اینجا اومدیم دیگه از
// outlet
// رفتیم
// *******************
// *******************
// *******************
// *******************
