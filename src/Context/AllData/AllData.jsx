import { createContext, useState, useContext, useEffect } from "react";

import { getAllCourses, getAllArticle, getAllLessons } from "Services/Public";

const AllDataContext = createContext({
  course: [],
  article: [],
  lesson: [],
});

const AllDataState = ({ children }) => {
  const [data, setData] = useState({
    course: [],
    article: [],
    lesson: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getAllCourses(), getAllArticle(), getAllLessons()])
      .then(([course, article, lesson]) => {
        setData({
          course: course.data.result,
          article: article.data.result,
          lesson: lesson.data.result,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AllDataContext.Provider value={{ data, loading, setData,setLoading }}>
      {children}
    </AllDataContext.Provider>
  );
};

export default AllDataState;

export const ConsumeAllDataState = () => useContext(AllDataContext);






// *************
// *************
// *************
// *************

// یه استیت مینویسم واطلاعاتی که میخوایم همینجا فچ میکنیم
// چون ما    میخوایم یه ابجکتی درنظربگیریم
// وتمامی اطلاعاتی که نیاز داریم بزاریم داخلش
// مثل کورس ومقاله
// یه ابجکت  در نظر میگیریم که بتونیم همه اطلاعاتی
// که میخوایم وداخلش  داسته باشیم
//   const [ data ,setData]= useState({
//     course:[],
//     article:[]
// })

// یه یوزافکت بزاریم و هردیتایی که نیاز هست همین جا کال کنیم

// *************
// *************
// *************
// *************
// promis.all

// اینجا ما میخوایم از  چند تا
// api
// مختلف استفاده کنیم
// مثل مثلا
// api course
// api-news
// اینایی که ادرس هاشون فرق میکنه باید بیایم چه کنیم ؟
// Promise.all
// اشنا بشیم

// زمانی که چند تا api
// داریم باید بیایم
// از
// promis.all.
// بریم
// زمانی که دیتای
// کورس گرفته شد ویا اخبار گرفته شد
// حالا بیا دیتارو ست کن
// که یکبار ست استیت اتفاق بیفتد

// مثال
// const promise1 = Promise.resolve(3);  //api1
// const promise2 = 42;  ///api2
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// }); //api3

// در قالب یه ارایه تمام اون
// api
// روبه
// promis.all
// داده
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// useEffect(() => {
//   Promise.all([getAllCourses(),getAllArticle()]).then(([values]) => {
// console.log(value);
//   }).catch((err)=>{
//       console.log(err)
//   })

// },[])

// *************
// *************
// *************
// *************

// نکته:

// یه ابجکت هست که پروپرتی های مختلف رو باید اینجا داشته باشیم
// یکی کورس ودیگری مقاله
// setData({course:course.data.result,article:article.data.result});

// **************************
// **************************
// **************************
// **************************

// در ابتدا
// الان کورس تو مفدار اول هست
// چون ارایه هست وکورس در مقدار صفرم هست
// وارتیکل در اندیس ارایه یک ام هست

//   useEffect(() => {
//     Promise.all([getAllCourses(),getAllArticle()]).then((value) => {
//         console.log(value);
//         setData({course:value[0].data.result,article:value[1].data.result});
//         setLoading(false)
//     }).catch((err)=>{
//         console.log(err)
//     })

// },[])

// مثال دیستراکچر
// const arr =[1,2,3,4]

// const [n1,n2] =arr

// n1=1
// n2=2

// پس میتونیم داخل این
// value
// یه ارایه پاس باید بذیم
// مفدار اول باشه
// course
// مقدار دوم باشه
// news

// دومین
// useEffect(() => {
//   Promise.all([getAllCourses(),getAllArticle()]).then(([course ,article]) => {
//       setData({course:course.data.result,article:article.data.result});
//       setLoading(false)
//   }).catch((err)=>{
//       console.log(err)
//   })

// },[])

// **************************
// **************************
// **************************
// **************************

// همون موقغ که App
// ما بالا میاد یه خورده طول میکشه
// دیتایما فچ بشه
// و داخل کانتکش قرار بگیره
// برای این که مستقیم قبل این که دیتا بیاد
// چیزی درکانتکس نیست
// ومقدار خالی که اصلا پروپرنی
// lenght نداره
// برای همین به ارور میخوریم
// راه حلش اینه که بیایم  به کانتکس خودمون
// یه مقددار پیش فرض به کانتکس خودمون بدیم
// داخل یوزاستیت
// const [ data ,setData]= useState({
//   course:[],
//   article:[]
// })
// چون ارایه هست وطول داره به ارور نمیخوریم
// بهتره یه لودینگ قرار بدیم که تا زمانی که لودینگ  ترو هست چیزی داخل سایت نباشه

// const AllDataContext = createContext({
//   course:[],
//   article:[]
// });
// این مقدار دبفالت کانتکس هست

// فعلا راه لودینگ رو نرفتیم

// **************************
// **************************
// **************************
// **************************

// provider
// داخل پرووایدر ما داریم  یه ابجکت  پاس میدهیم و بعد داخل
// این ابجکته دیتا هم دوباره ابجکت هست
// data {course ,article}
