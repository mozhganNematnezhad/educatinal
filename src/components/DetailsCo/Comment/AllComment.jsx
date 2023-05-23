import React, { useEffect, useState } from "react";
import TextearaComment from "./TextearaComment";
import UserComments from "./UserComments/UserComments";
import { getAllComments } from "Services/Public";

const AllComment = ({ courseId }) => {
  // console.log("courseId", courseId);
  const [allcomments, setAllcomments] = useState([]);

  useEffect(() => {
    const FetchAllComments = async () => {
      try {
        const response = await getAllComments();
        // console.log("response-AllComment",response)
        // console.log("response",response.data)
        const filterComment = response.data.filter(
          (item) => item.postId === courseId //
        );
        // console.log("filterComment",filterComment); //5 تایی که مطابفت داشت
        setAllcomments(filterComment);
        
      } catch (error) {
        console.log(error.message);
      }
    };

    FetchAllComments();
  }, []);

  return (
    <>
      <TextearaComment courseId={courseId}  setAllcomments={setAllcomments} />
      <UserComments allcomments={allcomments} />
    </>
  );
};

export default AllComment;






// ********************
// ********************
// ********************
// ********************

// کامنت های هر درس

// request
// میزنیم به
// getAllComments
// کل کامنت ها رو میگیریم
// بعد خودمون دستی فیلترمیکنیم
// اون کامنت هایی که ایدیشون با
// یوز پارامز مایکی هست
// اونو نمایش بده

// const filterComment = response.data.filter(
//   (item) => item.postId === courseId //
// );

// هرکامنت یه پروپرتی دارد که ایدی هر درس هست
// ما میخوایم از بین کامنت ها اون کامنت هایی رو بگبریم که
// مربوط به این درس هست وبقیه فیلتر بشن

// postId== 
// ایدی اون درس مورد نطر 
// که کاربران برای اون درس مورد نظر پیام گداشتن

// (5) [{…}, {…}, {…}, {…}, {…}]
// 0
// : 
// {verified: false, _id: '636f4ae884c5a73164a78744',postId: '636223a936e4f81c18354658', email: 'sina.m@gmail.com', …}
// 
// : 
// {verified: false, _id: '6380c72e8b4be812900587e7',postId: '636223a936e4f81c18354658', email: 'kosar.aghajani51@gmail.com', …}
// 2
// : 
// {verified: false, _id: '638251261d518206e8a2e2b2',postId: '636223a936e4f81c18354658', email: 'shiv@gmail.com', …}
// 3
// : 
// {verified: false, _id: '638e1f02166c9438f4de450e',postId: '636223a936e4f81c18354658', email: 'melinaghanbary@gmail.com', …}
// 4
// : 
// {verified: false, _id: '6396039481a9230a08fa6413',postId: '636223a936e4f81c18354658', email: 'navid@gmail.com', …}


// courseId===636223a936e4f81c18354658 ایدی درس ریکت 
// ای دی اون درس مورد نظر هست که ما وارد جزییات اون درس شدیم

// باید بگیم که اگر 

 //postId===courseId 3==3

// ********************
// ********************
// ********************
// ********************

// allcomments
// الان ما اینجا دیتای فیلترشده روست کردیم