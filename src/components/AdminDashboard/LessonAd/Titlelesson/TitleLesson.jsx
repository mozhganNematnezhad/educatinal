import React from "react";

const TitleLesson = () => {
  return (
    <thead
      className="w-full  text-center
bg-green-600 text-white items-center p-1 rounded-t-xl py-3 text-sm md:text-base"
    >
      <tr>
        <th>تصویردرس</th>
        <th> عنوان درس </th>
        <th>اطلاعات درس</th>
        <th> ویرایش</th>
        <th> حذف</th>
      </tr>
    </thead>
  );
};

export default TitleLesson;
