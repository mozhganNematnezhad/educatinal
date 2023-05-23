import React, { useState, useEffect } from "react";
import HeaderPage from "components/AdminDashboard/Commen/HeaderPage/HeaderPage";
import NewAd from "components/AdminDashboard/NewAd/NewAd";
import TitleNews from "components/AdminDashboard/NewAd/TitleNew/TitleNew";

import react from "../../../Assets/images/course/reeact.png";
import { getNews } from "Services/Public";
import PaginationAdmin from "components/AdminDashboard/PaginationAdmin/PaginationAdmin";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PAGE_SIZE = 4;

const NewsAd = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [NewsData, setNews] = useState({
    news: [],
    count: 0,
  });

  // console.log("nnn",lessonData.lesson)
  useEffect(() => {
    const NewsData = async () => {
      try {
        setLoading(true);
        const { data } = await getNews(PAGE_SIZE, pageNumber);
        // console.log("response-lessons", response);
        // console.log("response-lessons", data.result.newsList);
        setNews({
          news: data.result.newsList,
          count: data.result.count,
        });
        setLoading(false);
      } catch (error) {}
    };
    NewsData();
  }, [pageNumber]);

  return (
    <div className="p-2 md:p-4 lg:p-8">
      <HeaderPage
        btn={"افزودن دانشجو"}
        title={"دانشجویان"}
        link="/admindashboard/adddata/news"
      />

      <div className="border-dashed border-t-2 w-full my-7 border-teal-700/20"></div>
      
      <div className="relative overflow-x-auto">
        {!loading ? (
          NewsData.news.length > 0 ? (
            <table className="w-full ">
              <TitleNews />

              {NewsData.news.map((New) => {
                return (
                  <React.Fragment key={New._id}>
                    <NewAd New={New} />
                  </React.Fragment>
                );
              })}
            </table>
          ) : (
            <>خبری وجود ندارد</>
          )
        ) : (
          <AiOutlineLoading3Quarters />
        )}

        {NewsData.news.length > 0 ? (
          <PaginationAdmin
            count={NewsData.count}
            pageSize={PAGE_SIZE}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NewsAd;

// const [News, setNews] = useState([
//   { id: 1, imgNews: react, title: "انتخاب تایپ اسکریپت در 2022" },
//   { id: 2, imgNews: react, title: "انتخاب ریکت در 2022" },
// ]);
