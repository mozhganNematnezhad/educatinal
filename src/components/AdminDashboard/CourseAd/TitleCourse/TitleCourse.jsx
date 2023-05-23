import React from "react";

const TitleCourse = () => {
  return (
    <>
      <thead
        className="w-full  text-center
bg-rose-600 text-white items-center p-1 rounded-t-xl py-3 text-sm md:text-base"
      >
        <tr>
          <th>تصویر دوره</th>
          <th> عنوان دوره</th>
          <th>قیمت دوره(تومان)</th>
          <th> مدرس</th>
          <th>اطلاعات دوره</th>
          <th> ویرایش</th>
          <th> حذف</th>
        </tr>
      </thead>
    </>
  );
};

export default TitleCourse;
