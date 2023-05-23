import React from "react";

const TitleStudent = () => {
  return (
    <thead
      className="w-full  text-center
  bg-purple-600 text-white items-center p-1 rounded-t-xl py-3 text-sm md:text-base"
    >
      <tr>
        <th>نفش</th>
        <th> نام کاربری</th>
        <th>ایمیل</th>
        <th>شماره تلفن</th>
        <th>اطلاعات دانشجو</th>
        <th> حذف</th>
      </tr>
    </thead>
  );
};

export default TitleStudent;
