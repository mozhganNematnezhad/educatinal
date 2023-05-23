import React from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ pages, setCurrentPage, currentPage }) => {


  const handleClick = (event) => {
    console.log(event)
    setCurrentPage(Number(event.target.id));
  };


  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <nav aria-label="Page navigation example" className="mx-auto">
      <ul className="pagination  flex flex-row-reverse justify-center
       my-20 bg-white rounded-lg dark:bg-slate-900 ">
        {/* button back */}
        <li
          className="page-item  h-12 rounded-l-lg border-2 border-r-0 cursor-pointer
           border-[#0eb582] w-12 flex justify-center hover:bg-[#0eb582] hover:text-white   dark:!border-[rgb(66,63,81)] "
        >
          <button
            type="button"
            aria-label="Previous"
            onClick={handlePrev}
            className="w-full grid place-content-center dark:bg-[#1B314C] dark:text-white "
            disabled={currentPage === pages[0] ? true : false}
          >
            <IoIosArrowBack />
          </button>
        </li>

        {/* count pages */}
        {pages.map((number) => {
          return (
            <li
              key={number}
              id={number}
              onClick={handleClick}
              className={`page-item h-12 border-2 border-r-0 cursor-pointer
                 border-[#0eb582] w-12 flex justify-center items-center 
                  dark:!border-[rgb(66,63,81)]   ${
                   currentPage === number ? "active   " : null
                 } `}
            >
              {number}
            </li>
          );
        })}

        {/* button next */}
        <li
          className="page-item  h-12 rounded-r-lg border-2 cursor-pointer
           border-[#0eb582] w-12 flex justify-center hover:bg-[#0eb582] hover:text-white   dark:!border-[rgb(66,63,81)]  "
        >
          <button
            type="button"
            aria-label="Next"
            disabled={currentPage === pages[pages.length - 1] ? true : false}
            onClick={handleNext}
            className="w-full grid place-content-center  dark:bg-[#1B314C] dark:text-white"
          >
            <IoIosArrowForward />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;












