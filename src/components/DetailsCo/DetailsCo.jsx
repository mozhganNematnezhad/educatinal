import React ,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

import ContentCourse from "./ContentCourse/ContentCourse";
import SidbarDe from "./SidbarDetailsCourse/SidbarDe";

import { getOneCourse } from "Services/Public";

const DetailsCo = () => {
  const { courseId } = useParams();
  const [detailsCourse, setDetailsCourse] = useState([]);
  // const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchallData = async () => {
      try {
        //courseId ==id dars mordnazar ==
        const response = await getOneCourse(courseId);
        //  console.log("DetailsCo----",response);
        setDetailsCourse(response.data.result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchallData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4">
          {detailsCourse ? <SidbarDe detailsCourse={detailsCourse} /> : null}
        </div>
        <div className=" col-span-12 lg:col-span-8">
          <ContentCourse detailsCourse={detailsCourse} courseId={courseId} />
        </div>
      </div>
    </div>
  );
};

export default DetailsCo;



 