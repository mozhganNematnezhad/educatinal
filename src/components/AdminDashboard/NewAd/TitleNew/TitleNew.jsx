import React from "react";

const TitleNews = () => {
  return (
    <thead
      className="w-full  text-center
bg-blue-600 text-white items-center p-1 rounded-t-xl py-3 text-sm md:text-base"
    >
      <tr>
        <th>تصویر خبر </th>
        <th> عنوان خبر </th>
        <th>مشاهده خبر</th>
        <th> ویرایش</th>
        <th> حذف</th>
      </tr>
    </thead>
  );
};

export default TitleNews;
