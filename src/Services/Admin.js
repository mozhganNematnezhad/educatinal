import { API } from "Services/Api/Admin";


// http://localhost:5000/api/auth/employee/register
export const adminRegister = (admin) => {
  const url = "/auth/employee/register";
  return API.post(url, admin);
};

// http://{{apiurl}}/api/auth/employee/login
export const adminLogin = (admin) => {
  const url = "/auth/employee/login";
  return API.post(url, admin);
};


export const updateAdmin = (id, admin) => {
  const url = `/employee/${id}`;
  return API.put(url, admin);
};


export const addEmploy = (newemploy) => {
  const url = "/auth/employee/register";
  return API.put(url, newemploy);
};




export const getTeacherById = (id) => {
  const url = `/employee/${id}`;
  return API.get(url);
};

// http://{{apiurl}}/api/employee/list?pagenumber=1&pagesize=10
export const getEmployes = (pageSize, pageNumber) => {
  const url = "/employee/list";
  return API.get(url, {
    params: { pagenumber: pageNumber, pagesize: pageSize },
  })
};

// http://{{apiurl}}/api/employee/:id
export const deleteTeacher =(thId)=>{
  const url =`/employee/${thId}`
  return API.delete(url)
}



// ****
// http://{{apiurl}}/api/course/list? 
export const getCourse = (pageSize, pageNumber) => {
  const url = "/course/list";
  return API.get(url, {
    params: { pagenumber: pageNumber, pagesize: pageSize },
  });
};


// http://{{apiurl}}/api/lesson/list?pagenumber=1&pagesize=2
export const getLessons = (pageSize, pageNumber) => {
  const url = "/lesson/list";
  return API.get(url, {
    params: { pagenumber: pageNumber, pagesize: pageSize },
  });
};


export const deleteCourse =(courseId)=>{
  const url =`/course/${courseId}`
  return API.delete(url)
}


export const updateCourse = (id ,courseItem) => {
  const url = `/course/${id}`;
  return API.put(url,courseItem);
};
export const updateLesson = (id ,lessonItem) => {
  const url = `/lesson/${id}`;
  return API.put(url,lessonItem);
};



export const createCourse = (course) => {
  const url = "/course";
  return API.post(url,course);
};


// http://{{apiurl}}/api/student/list?pagenumber=1&pagesize=10
export const getStudents = (pageSize, pageNumber) => {
  const url = "/student/list";
  // console.log("url" ,url)
  return API.get(url, {
    params: { pagenumber: pageNumber, pagesize: pageSize },
  })
};

// const BaseAuthUrl = "http://localhost:5000/api/student";
export const getStudentById = (id) => {
  const url = `/student/${id}`;
  return API.get(url);
};


// http://5000/api/news/5e62ec724c0a6f1a787f76ed
export const deleteStudent = (id) => {
  const url = `/student/${id}`;
  return API.delete(url);
};

export const createLesson = (lesson) => {
  const url = "/lesson/add";
  return API.post(url,lesson);
};

export const createNews = (news) => {
  const url = "/news";
  return API.post(url,news);
};



export const getAllStudents = () => {
  const url = "/student/getall";
  return API.get(url);
};




// *************************
// *************************
// *************************

// pagination
// دو تا ارگیومنت به تابع پاس میدهیم
// pageSize, pageNumber
// 39:45

// *************************

// وقتی یه تابع رو میخوایم صدا بزنیمم میتونیم مقادیری رو بهش پاس بدیم
// وبراساس اون
// مقادیر داینامیک داخل
// تابع
// کارمون روانجام بدیم
// ما گفتیم داخل
// getcourse
// میخوایم دو تا مقدار روداینامیک بگیریم
// یعنی هر موقع تابع اجرا شد
// اینارو خودمون بهت پاس میدیم
// شما فقط جایگداری کن داخلش

// مقدار اول رو گفتیم
// pageNumber=== شماره صفحه .....صفحه 1و2و3و4
// pageSize===هر صفحه چه تعداد دیتا داخلش باشه
// زمانی که بخوایم
// getcourse
// صدا بزنیم
// دوتاا مقدار طبق این ترتیبی که نوشتیم باید بدیم

// *************************
// *************************
// *************************

// اینجا زمانی که ما از
// get
// Axios
// استفاده میکنیم
// میتونمی یه ارگیومنت دوم بعد
// url
//بنویسمم
// و اینا رو یه ابجکت بنویسم
// const url = "/course/list";
//   return API.get(url, {
//     params: { pagenumber: pageNumber, pagesize: pageSize },
//   });

// این
// pagenumber
// pagesize
// این
// key
// که نوشتیم همون هایی هست که داخل پست من هست

// این ابچکت دوم که نوستیم مجموعه ای از  کانفیگ هاست
// مجموعه ای از درخواست هایی که میتونیم
// همراه با ریکویستمون
// ارسال کنیم
// params
// اینا درخواست ها وکوئری هایی که میخوایم ارسال کنیم

// 😍😍😍😍
// این
// API.get
// که نوشتیم
// مقدار اولش
// url
// هست و مقدار دومش یه ابجکت هست
// که ما بهش پاس دادیم
// ابجکتی که پاس دادیم
// مفدار پروپرتی پارامزش
// همون کوِئری هایی هست که
// ما مینویسیم
// اون قسمتی که علامت سوال میزاریم بعد ));
// url
// http://{{apiurl}}/api/course/list?pagenumber=1&pagesize=4
// ومقدارها رومیچسبونیم بهش
// اومدیم  جداکردیم
// ودر اخر هم مثل
// axios
// همون میشه
// میچسبه به
// url
// این چیزی که نوشتیم ثایت هست
// مفدار ابجکت و پارامزی که نوشتیم ثابت هست
// اما مقدادیری که باید  به 
// pageNumber  وpageSiz 
// پاس بدیم چیزهایی که خودمون از  ارگیومنت تابع گرفتیم
