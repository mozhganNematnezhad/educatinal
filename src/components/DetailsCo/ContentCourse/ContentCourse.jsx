import React from "react";

import movie1 from "Assets/video/mov_bbb.mp4";
import Accordian from "components/DetailsCo/Accordian/Accordian";
import ContentIntroduce from "./ContentIntroduce/ContentIntroduce";
import AllComment from "../Comment/AllComment";

const ContentCourse = ({detailsCourse ,courseId}) => {
  return (
    <div className="container mx-auto">
      <div className="De-contentIntroduce">
        <ContentIntroduce detailsCourse={detailsCourse}/>
      </div>

      <div className="De-videoContent ">
        <div className="flex justify-center mt-8 ">
          <video  height="240" controls className=" w-full md:w-[85%]">
            <source src={movie1} type="video/mp4" />
          </video>
        </div>

        <div className="Accordian">
          <Accordian/>
        </div>
      </div>


      <div className="De-Comment my-8">
        <AllComment courseId={courseId}/>
      </div>
    </div>
  );
};

export default ContentCourse;
