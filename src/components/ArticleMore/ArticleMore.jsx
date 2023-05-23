import React ,{useEffect ,useState} from "react";
import { useParams} from "react-router-dom";
// import api
import { getOneArticle } from "Services/Public";


const ArticleMore = () => {
  const [articlemore ,setArticleMore]=useState([])
  
  // const params=useParams()
  const {articleId}=useParams()
  // console.log(params)
  // console.log(articleId)

// http://{{apiurl}}/api/news/5e62ec724c0a6f1a787f76ed
  useEffect(()=>{
    const fetchOneNews=async()=>{
    try {

      const response =await getOneArticle(articleId)
      // console.log(response.data.result);
      setArticleMore(response.data.result)

        
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchOneNews()
  },[articleId])


  return (
    <div className="container mx-auto ">
      <div className="mx-4 xl:mx-0 border border-solid border-[#ecf0f4] bg-white p-4 
       shadow-[0_0_7px_0_#eaeff4] rounded-lg mt-4
      dark:bg-[rgb(27,52,77)]
      dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)] 
      dark:shadow-none
      ">
        <div className="w-full">
          <img src={articlemore.image} alt="" className=" w-full md:w-[30%] m-auto mt-8 rounded-lg" />
        </div>

        <div className="Article-Details mt-8">
          <div className="text-center">
            <h3 className="text-xl text-[#212121] font-bold dark:text-white">{articlemore.title}</h3>
            <p className="py-4 text-[#212121] dark:text-gray-100">مژگان</p>
            <p className="text-[#212121] dark:text-gray-100">1401.6.5</p>
            <p className="ArticleTest dark:text-gray-300 ">
            {articlemore.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMore;
