import React from "react";

import student from "../../../Assets/images/Service/1.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Thumbs, Autoplay } from "swiper";


import { ConsumeAllDataState } from "Context/AllData/AllData";

import "../Article/Article.css";


const Article = () => {
  const {data} = ConsumeAllDataState();



  return (
    <div className="AR-aticle container mx-auto mb-[12rem] mt-[5rem]  ">
      <div className="flex items-center relative">
        <div className="relative right-8">
          <img src={student} alt="" className="w-32" />
        </div>
        <div className="absolute right-[8rem]">
          <h2 className="text-[19px] text-[#333] dark:text-white">مقالات</h2>
        </div>
      </div>
      <div className="container mx-auto px-8 md:px-14 ">
        <Swiper
          loop={true}
          className="mySiwper"
          modules={[Pagination ,Autoplay ,Thumbs]}
          navigation={true}
          pagination={true}
          spaceBetween={20}
          // slidesPerView={1}
          grabCursor={true}
          autoplay={{
            delay: 1000,
          }}
          breakpoints={{
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 1,
            },
          }}
        >
          {data.article.length > 0 ? (
            data.article.map((article) => {
              return (
                <SwiperSlide
                  className="slidesBrands bg-[#0eb582] mx-auto 
                min-h-[70vh]
                  shadow-[0_0_10px_rgba(0,0,0,0.2)] my-10 rounded-lg"
                  key={article._id}
                >
                  {/* <Link to={`/article/${article._id}`}> */}
                  <div className="card-content  dark:bg-[rgb(27,52,77)] 
                   !border !border-solid !border-transparent
                  dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]   ">
                    <div className="image w-full">
                      <img
                        src={article.image}
                        className="lg:w-[70%] md:w-[65%] p-4 mx-auto slidimg rounded-[1.5rem]	"
                        alt=""
                      />
                    </div>
                    <div className="detail flex flex-col text-center	mt-[1.5rem] justify-center  ">
                      <h3 className="compony font-bold text-lg text-[white] dark:text-[rgb(96,156,255)] ">
                        {article.title}
                      </h3>

                      <p className="textArticle text-justify leading-7 text-white overflow-hidden h-[7rem] my-4 mx-4 ">
                        {article.text}...
                      </p>
                      {/* dark:text-white */}
                      {/* اینجا لینکی که دارم میفرستم باید با ایدی هر ایتم باشه */}
                      <Link to={`/article/${article._id}`}>
                        <div className="flex items-center justify-end p-4 text-[#333]">
                          <span className="text-end dark:text-[#0eb582] ">ادامه مقاله</span>
                          <AiOutlineArrowLeft className="dark:text-[#0eb582]" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* </Link> */}
                </SwiperSlide>
              );
            })
          ) : (
            <>data is empty</>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Article;





