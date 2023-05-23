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















// ***************************
// ***************************
// ***************************

// return axios.get(url,{
//   headers:{"test":AdminToken}
// });

// توی اون 
// axios.defult
// که داخل 
// api
// ساختیم 

// الان میاد چه کار میکنه
// الان میاد به صورت دیفالت اون 
// توکنی که ما اومدیم داخل 
// interseptor
// خودمون درست کردیم
// داره میزاره
// یعنی توکن دانش اموز
// ولی ما اینجا توکن ادمین رو میخوایم
// برای همین دوباره نمیره مقدار دهی مجدد کنه
// همون مقدار دیفالت داره میزاره
// باید بیایم یه هدر جدید برای
//این ایدی درست کنیم

// باید چی کار کنیم نمیایم دیگه از اون 
// api
// که کدومون ساختیم از اون
// create
// که کردیم وساختیم استفاده کنیم
// باید از همون
// axios
// کلی استفاده کنیم

// این تیچرکه نیاز به ادمین توکن داره رو باید از
// همون axios
// کلی
// بنویسم

// const url = `http://localhost:5000/api/employee/${id}`;
// باید کامل بنویسمم


// ****************
// هر شخضی که لاگین میکند
// با استفاده از اون توکنی که سرور بهش میده
// اونومیزاریم توی لوکال استورچ و
// با درخواستش میفرستیم
// این روت مربوط به دیتیل مغلم ها
// در اضل ادمین بهش دسترسی داره
// اینجا ما مجبوریم
// یه توکن دستی از ادمین اینجا بزاریم
// جداگانه بهش بدیم
// و اینجا قرار بدیم

// این الان توکن یه ادمین هست اگر تعداد ادمین بیشتر باشه
// توکن هر ادمینی میتونه باشه

// ادمین توکنش ثابت هست حالا مهم نیست کدوم ادمین
// مهم نیست کدوم ادمین باشه 
// ادمین a, b , c

// ما توکن هر کدوم از این ها رو بزاریم موقعی
// که درخواست میدیم به بک اند
// بک اند متوجه میشه این توکن مربوط به
// ادمین هست
// مهم این هست که رولش ادمین باشه
// اون وقت اجازه دسترسی میده و دیتا رو میاره

// توکن یه شناسه شخصی هست برای هرفردو هیچ وقت عوض نمیشه