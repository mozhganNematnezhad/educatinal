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
