import { API } from "./Api/Student";

// course
// localhost:5000/api/course/getall
export const getAllCourses = () => {
  const url = "/course/getall";
  return API.get(url);
};

// localhost:5000/api/course/2
export const getOneCourse = (courseId) => {
  const url = `/course/${courseId}`;
//  console.log("url--getOneCourse",url)
  return API.get(url);
};



// article
// localhost:5000/api/news
export const getAllArticle = () => {
  const url = "/news";
  return API.get(url);
};

// http://5000/api/news/5e62ec724c0a6f1a787f76ed
export const getOneArticle = (articleId) => {
  const url = `/news/${articleId}`;
  return API.get(url);
};


export const updateArticle = (id, news) => {
  const url = `/news/${id}`;
  return API.put(url, news);
};

// *بپرس
// teacher
// http://{{apiurl}}/api/employee/getallteachers
export const getAllTeachers = () => {
  const url = "/employee/getallteachers";
  return API.get(url);
};


export const getAllLessons = () => {
  const url = "/lesson";
  return API.get(url);
};



export const getOneLessons = (lessonId) => {
  const url = `/lesson/${lessonId}`;
  // console.log("url-gggg" ,url)
  return API.get(url);
};

// ******
export const deleteLesson =(lessonId)=>{
  const url =`/lesson/${lessonId}`
  return API.delete(url)
}



// ***comments
export const getAllComments = () => {
  const url ="/comments"
  return API.get(url);
};


// http://{{apiurl}}/api/comments/send
export const sendComments = (comment) => {
  const url="/comments/send"
  return API.post(url, comment);
};


// http://{{apiurl}}/api/comments/answer
export const answerComment = (comment) => {
  const url="/comments/answer"
  return API.post(url, comment);
};



// http://{{apiurl}}/api/news/list?pagenumber=1&pagesize42&category=news
export const getNews = (pageSize, pageNumber) => {
  const url = "/news/list";
  return API.get(url, {
    params: { pagenumber: pageNumber, pagesize: pageSize },
  })
};



export const getOneNews = (NewsId) => {
  const url = `/news/${NewsId}`;
  // console.log("url-gggg" ,url)
  return API.get(url);
};


export const getCategory = () => {
  const url = "/category/getall";
  return API.get(url);
};











