import React from "react";

import Course from "components/CoursesList/Course";
import HelmetTitle from "components/commen/Helmet/Helmet";

const Courses = () => {
  return (
    <>
      <HelmetTitle title="   دوره های آموزشی| آموزش برنامه نویسی" />
      <Course />
    </>
  );
};

export default Courses;
