import React, { useState, useEffect } from "react";
import HeaderPage from "components/AdminDashboard/Commen/HeaderPage/HeaderPage";
import EmployAd from "components/AdminDashboard/EmployAd/EmployAd";
import TitleEmploy from "components/AdminDashboard/EmployAd/TitleEmploy/TitleEmploy";
import { getEmployes } from "./../../../Services/Admin";
import PaginationAdmin from "components/AdminDashboard/PaginationAdmin/PaginationAdmin";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PAGE_SIZE = 10;

const EmployesAd = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [employesData, setEmployes] = useState({
    employees: [],
    count: 37,
  });

  // console.log("nnn",lessonData.lesson)
  useEffect(() => {
    const EmployData = async () => {
      try {
        setLoading(true);
        const { data } = await getEmployes(PAGE_SIZE, pageNumber);
        // console.log("response-employs", data);
        // console.log("response-lessons", data.result);
        setEmployes({
          employees: data.result.employees,
          count: data.result.count,
        });
        setLoading(false);
      } catch (error) {}
    };
    EmployData();
  }, [pageNumber]);

  return (
    <div className="p-2 md:p-4 lg:p-8">
      <HeaderPage
        btn={"افزودن کارمندان"}
        title={"کارمندان"}
        link="/admindashboard/adddata/employees"
      />

      <div className="border-dashed border-t-2 w-full my-7 border-teal-700/20"></div>

      <div className="relative overflow-x-auto cssScrolAdmin">
        {!loading ? (
          employesData.employees.length > 0 ? (
            <table className="w-full ">
              <TitleEmploy />

              {employesData.employees.map((employe) => {
                return (
                  <React.Fragment key={employe._id}>
                    <EmployAd employe={employe} setEmployes={setEmployes} />
                  </React.Fragment>
                );
              })}
            </table>
          ) : (
            <>ادمینی وجود ندارد</>
          )
        ) : (
          <>
            {" "}
            <AiOutlineLoading3Quarters />
          </>
        )}
      </div>

      {employesData.employees.length > 0 ? (
        <PaginationAdmin
          count={employesData.count}
          pageSize={PAGE_SIZE}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default EmployesAd;

// *************************
// *************************
// 25:00
// هرموقع مشکل عدم دسترسی پیش میاد مشکل همون توکن هست
// احتمالا درست پاس نمیدیم

// کلا نباید تو قسمت ادمین عدم دسترسی بگیریم
// وقتی وارد داشبورد ادمین شده
// حتما باید لاگین کرده باشه به عنوان ادمین
// بتونیم اضلا روت روببینم

// 38:00
// داخل لوکال استورچ وتوکن ادمین یکی ازحروفش روبگیر
// ودوباره رفرش میکنیم
// الان اینجا باید دیتا رو بهمون نده
// هر رونی که نیار به توکن ادمین داشته باشیم باید داخل هدرش ست کنیم
// روتهایی که مربوط به ادمین هست توکن داشته باشیم که دیتا بهمون بده

// 42:00
// هر کسی که داخل سیستم لاگین میکند
// اون توکنی که ساخته میشه
// یه تکس یا متن رندوم نیست
// چیزی که براساس دیتایی که کاربر داره
// ایدی ایمیلش
// با استفاده از همون توکنش
// ساخته میشه
// یعنی نمیشه که فلان کاربر که لاگین کرد توکنش این باشه
// ویه ساعت بعد لاگین کرد توکنش فرق داشته باشه
// بپرسم
//  هر ادمین و یوزری که لاگین میکنه
// توکنش همیشه ثابت است

// 43:
// ما ممکنه توی سیستم چند تا ادمین داشته باشیم یه ادمین علی داشته باشیم
// یکی یه شخض دیگه
// براساس اطلاعات شخض یهر فرد اون توکن
// ساخته میشه

// توی سایت ممکنه هزار تا کاربر داشته باشیم
// هر کاربری توکنش مخضوص خودش است
// براساس چی ساخته میشه
// براساس ایمیل و ایدی
// ایمیل و ایدی هر شخضی براش یونیک هست
// توکن هم براساس اطلاعات یونیکش ساخته میشه

// *************************
// *************************

// const [employes, setEmploye] = useState([
//   { id: 1, role: "admin", name: "مریم", email: "maryam@gmail.com" },
//   { id: 2, role: "teacher", name: "حسن", email: "hasan@gmail.com" },
// ]);
