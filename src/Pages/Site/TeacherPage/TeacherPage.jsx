import React from "react";
import IntroduceTeacher from "components/Teaher/IntroduceTeacher";
import HelmetTitle from "components/commen/Helmet/Helmet";

const TeacherPage = () => {
  return (
    <div className=" backTeacher overflow-hidden mb-8 md:mb-0">
      <HelmetTitle title="   صفحه اساتید  " />
      <IntroduceTeacher />
    </div>
  );
};

export default TeacherPage;

// overflow-hidden
