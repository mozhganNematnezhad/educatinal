import React, { useEffect, useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { getOneNews } from "Services/Public";
import react from "../../../Assets/images/course/reeact.png";

const ShowNews = () => {
  const { shId } = useParams();
  // console.log("params",params)

  const [loading, setLoading] = useState("false");
  const [showNews, setShowNews] = useState([]);

  useEffect(() => {
    const EmployData = async () => {
      try {
        setLoading(true);
        const { data } = await getOneNews(shId);
        // console.log("response-employs", data);
        // console.log("response-lessons", data.result);
        setShowNews(data.result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    EmployData();
  }, [shId]);

  return (
    <div className=" bg-[#d6faef] mx-auto p-4 md:p-8 w-9/12 mt-12 mb-8 rounded-lg items-center gap-4">
      <div className="flex  items-center justify-between">
        <div></div>
        <div className="md:col-span-4">
          <img src={showNews.image} alt="img admin" className="rounded w-[30%] mx-auto" />
        </div>
        <div>
          <Link to={"/admindashboard/pages/news"}>
            <RiArrowGoBackFill className="text-2xl text-red-500" />
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-8 gap-8 mt-4">
        <div className=" md:col-span-8 bg-[#0eb582] p-6 rounded-lg text-justify">
          <p className="py-[0.9rem] text-[1.1rem] text-white  ">
            موضوع خبر:{" "}
            <span className="text-base text-[#eef5f3]">
            {showNews.text}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowNews;
