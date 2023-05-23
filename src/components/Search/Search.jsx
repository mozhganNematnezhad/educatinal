import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";

// import "aos/dist/aos.css";
import search from "Assets/images/nav/search.json";

import { ConsumeAllDataState } from "Context/AllData/AllData";

import { FaTimes } from "react-icons/fa";
import "./Search.css";

const Search = ({ onCancle }) => {
  const { data } = ConsumeAllDataState();

  const [inputValue, seInputValue] = useState("");

  // state filter
  const [newsFilter, setNewsFilter] = useState([]);
  const [courseFilter, setcourseFilter] = useState([]);

  const inputHandler = (e) => {
    // console.log(e.target.value);
    seInputValue(e.target.value);

    let searctListCourse = data.course.filter((item) =>
      // item.title.startsWith(inputValue)
      item.title.trim().toLowerCase().includes(inputValue.trim().toLowerCase())
    );
    setcourseFilter(searctListCourse);

    let searctListNews = data.article.filter((item) =>
      // item.title.startsWith(inputValue)
      item.title.trim().toLowerCase().includes(inputValue.trim().toLowerCase())
    );
    setNewsFilter(searctListNews);
  };

  return (
    <>
      <div className="search barrelRoll   absolute top-0  right-0    w-full h-screen	mx-auto  pt-[14rem]  ">

        {/* <div className="container mx-auto"> */}
        <FaTimes
            className="rotateIn text-4xl absolute top-4 left-8"
            onClick={onCancle}
          />
        <form className="w-full relative  ">
        
          <div className="flex items-center !justify-center ">
            <input
              type="text"
              value={inputValue}
              onChange={inputHandler}
              placeholder=" دنبال چی میگردی؟؟..."
              className=" border-2 border-solid border-black text-black relative 
              outline-0 py-[0.8rem] px-[0.9rem] mt-[-10rem]  w-[80%] rounded-2xl bg-transparent"
            />
            <div className=" w-10 mt-[-10rem]">
              <Lottie animationData={search} loop={true} />
            </div>
          </div>
        </form>

        <ul
          className="searchbox bg-transparent
            flex flex-col justify-center items-center
            md:text-xl lg:text-2xl 
            w-[79%]  
            overflow-y-auto
            z-[11]
            m-auto  rounded-lg text-white
            absolute
            left-[5rem]
            sm:left-[5.6rem] 
            md:left-[6.5rem] 
            lg:left-[8rem] 
            xl:left-[10.8rem] top-[10.9rem]
        
        "
        >
          {courseFilter.length > 0
            ? courseFilter.map((item) => {
                return (
                  // py-2 md:py-4
                  <li key={item._id} className="text-right py-3 text-base border-b-2 border-dashed	border-[#00ffb3] w-[95%]  ">
                    <NavLink
                      to={`courses/detailcourse/${item["_id"]}`}
                      onClick={onCancle}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })
            : null}
          {/* news */}
          {newsFilter.length > 0
            ? newsFilter.map((item) => {
                return (
                  <li key={item._id} className="text-right py-3 text-base border-b-2 border-dashed	border-[#0eb582] w-[95%] ">
                    <NavLink to={`/article/${item._id}`} onClick={onCancle}>
                      {item.title}
                    </NavLink>
                  </li>
                );
              })
            : null}
        </ul>
        {/* </div> */}
      </div>
    </>
  );
};

export default Search;

// *********************************************
// *********************************************
// *********************************************
// *********************************************

// const Search = () => {
//   const inputRef = useRef();
//   const [inputValue, seInputValue] = useState(0);

//   const inputHandler = (e) => {
//     // console.log(e.target.value);
//     seInputValue(e.target.value);
//   };

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return (
// <div className="relative">
//   <input
//     ref={inputRef}
//     type="text"
//     value={inputValue}
//     onChange={inputHandler}
//     placeholder="جستجو کنید..."
//     className=" border border-solid border-[#14b8a6] text-white
//      outline-0 py-[0.4rem] px-[0.9rem] rounded-2xl bg-transparent"

//   />
//   <BsSearch
//    className="absolute right-[12rem] top-[0.7rem] text-white"
//     />
// </div>
//   );
// };

// export default Search;
