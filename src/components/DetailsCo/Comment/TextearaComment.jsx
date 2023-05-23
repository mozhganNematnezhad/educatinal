import React, { useState } from "react";
import { ConsumeAuthState } from "Context/AuthContext/AuthState";
import { GoCommentDiscussion } from "react-icons/go";
import {
  toastifuyErr,
  toastifuySuccess,
} from "HelperFunctions/Toastify/Toastify";
import { sendComments } from "Services/Public";

const TextearaComment = ({ courseId, setAllcomments }) => {
  const { userData } = ConsumeAuthState();
  // console.log("userData-text", userData);

  const [comment, setcomment] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const newComment = {
      postId: courseId,
      email: userData.email,
      username: userData.fullName,
      comment,
    };
    // console.log("newComment",newComment)
    try {
      const response = await sendComments(newComment);
      console.log("response-submitHandler", response);
      // toastifuySuccess("پیام مورد نظر ارسال شد")
      toastifuySuccess(response.data.message);
      setAllcomments((prevComment) => [...prevComment, newComment]);
      setcomment("");
    } catch (error) {
      toastifuyErr("مشکلی در ارسال به وجود امد");
    }
  };

  return (
    <>
      {userData._id ? (
        <form onSubmit={submitHandler}>
          <div className="flex text-[#1e2f38] text-xl items-center">
            <GoCommentDiscussion className="text-[#0eb582]" />
            <h3 className="pr-2 dark:text-white"> نظر خود را وارد کنید </h3>
          </div>

          <div className="De-teaxtNazar">
            <textarea
              id="comment"
              name="comment"
              rows="5"
              cols="20"
              value={comment}
              placeholder="نظر خود را بیان کنید..."
              className="dark:bg-[#1B314C] dark:text-white  "
              onChange={(e) => setcomment(e.target.value)}
            />
          </div>

          <div className="text-end">
            <button type="submit" className="mt-4 De-btnTextComment">
              ثبت دیدگاه شما
            </button>
          </div>
        </form>
      ) : (
        <p>جهت ثبت نظر باید در سایت عضو شوید و یا وارد سایت شده باشید .</p>
      )}

      {/* <div className="my-8">
        <input type="text" placeholder="ایمیل خود را بنویسید"  className="inputComment" />

        <button></button>
      </div> */}
    </>
  );
};

export default TextearaComment;

// ********************
// ********************
// ********************
// ********************
// trycatch
// وقتی  try
// مینویسم و اجرا میشه
// اگر وارد
// catch
// نشه
// یعنی مثلا 200 بوده دیگه

// داخل
// try
// که مینویسیم یعنی موفقیت امیز بود
// ********************
// ********************
// ********************
// ********************
// اگر بخواین بعد از این که نظرشو مینویسه
// بدون رفرش شدن صفحه تظرش بیاد
//  باید این تابع
// const [allcomments, setAllcomments] = useState([]);
// setAllComment
// رو برسونیم به کامپوننت
// comment

// وقتی  که ما میخوایم نظر جدیدی یعنی کامنت جدیدی رو ثبت کنیم
// بگ اند وظیفه داره که اون دیتایی که ثبت شده رواطلاعات رو داخل
// رسپانس به ما برگرداند
// به ابجکت  مثل همین همه کامنت ها داخلش هست رو باید به ما برگرداند
// verified": true,
// "_id": "62e22e436650d833e807de03",
// "createDate": "2022-07-28T06:35:47.097Z",
// "postId": "123fsfdfsfsdd4",
// "email": "dasda@dsasa.sssssssssssssssssssssssssssss",
// "username": "snda",
// "comment": "test",
// "__v": 0,
// "answer": "Kheili awliiiii"
// یه  همچین ابجکت رو به ما برگرداند
// که ما بتونیم اونو ست کنیم در ادامه دیتا

// چون الان این استیت
// allcomment
// که ما داخل پست من داریم
// همه دیتاهاش با چنین ساختاری هستش
// اما دیتای جدیدی که ما میخوایم  بعد از دکمه ثبت  داخلش دخیره کنیم
// با این ساختار فرق داره
// چون بعضی چیزهاشو نداریم
// برای همین میتونیم اون دیتایی که داریم و همونی که خودمون ارسال میکنیم
// به سمت بک
// const newComment = {
//   postId:courseId,
//   email: userData.email,
//   username: userData.fullName,
//   comment,
// };

// یعنی این چهار چیزداخلش هست
// بازم کار غیر استانداری هست ولی
// کارمون پیش بره همون دیتا رو که داریم میتونیم اصافه کنیم به استیت
// allcomment
//که ضرفا نمایش داده بشه داخل کامیت

// ********************
// ********************
// *****نکته نگته نکته******
// اگرنیاز باشه که مقدار جدید استیت به مقدار  قبلی وابسته باشه میایم به تابع پاس میدهیم
// به تابع ست استیت خودمان
// یعنی یه کال بک پاس میدهیم
// الان در واقع ما کامنت قبلی رو میخوایم
// وهمچتین میخوایم یه کامنت جدیدهم به اون قبلی اضافه بشه
// setAllcomments((prevComment)=>[...prevComment,newComment])
// گفتیم که چیزی که الان ازاین کال بک ریترن میشه
// مستقیما داخل استیت ما ست میشه
// کل دیتای ما یه ارایه بود
// که روشم ما فیلتر زدیم
// و اون دیتایی که ایدیشوبرابر بودگرفتیم وبعد  مپ روش انجام دادیم
// commnt =[
// prevComment   {id:1},
//   prevComment  {id:2},
//   prevComment  {id:3}
// newComment  {id:4}
// ]
// ********************
// ********************
// ********************
// ********************
