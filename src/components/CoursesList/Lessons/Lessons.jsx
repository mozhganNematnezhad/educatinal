import React, { useState } from "react";

import Lesson from "./Lesson";
import Pagination from "components/CoursesList/Pagination/Pagination";

import { ConsumeAllDataState } from "Context/AllData/AllData";

// import Spinner from "../../commen/Spinner/Spinner";

const Lessons = ({ searchItem ,selectedOption}) => {
  const { data } = ConsumeAllDataState();
  const [loading, setloading] = useState(true);


  const filterDataHandler = () => {
    if (selectedOption === "رایگان") {
      return data.course.filter((item) => item.cost === 0);
    }
    if (selectedOption === "نقدی") {
      return data.course.filter((item) => item.cost > 0);
    }
    return data.course;
  };


  const renderData = (filterData) => {
    return filterData.filter((item) =>
      item.title.trim().toLowerCase().includes(searchItem.trim().toLowerCase())
    );
  };

  // pagination
  // BOX pagination
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [];
  const filterData = filterDataHandler();
  const searchData = renderData(filterData);

  for (let i = 1; i <= Math.ceil(searchData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  // چه تغدادایتم رواز 9 تا نشون  بده
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const resultData = searchData.slice(indexOfFirstItem, indexOfLastItem);
  // end pagination

  return (
    <>
      {/* {!loading ? (
        <div className="lds-ringL">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : ( */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {resultData.length > 0 &&
          resultData.map((lesson) => {
            return (
              <React.Fragment key={lesson._id}>
                <Lesson lesson={lesson} />
              </React.Fragment>
            );
          })}
      </div>
      {/* )} */}

      {/* <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      /> */}
    </>
  );
};

export default Lessons;
