import React, { useEffect } from "react";

// import animation
// import "aos/dist/aos.css";
// import Aos from "aos";

const CommentModal = () => {
//   useEffect(() => {
//     Aos.init();
//   }, []);

 
  return (
    <form >
      <div id="comment" name="comment" rows="5" cols="20">
        <textarea
          className="textareaModal"
          placeholder="نظر خود را بیان کنید..."
        />
      </div>
      <div className="mt-4">
        <input
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          className=" p-2 text-[#686e71] rounded-lg w-[48%] outline-none"
        />
        <input
          type="text"
          className=" p-2 text-[#686e71] rounded-lg w-[48%] outline-none mr-2"
          placeholder="    نام کاربری خود را واردکنید"
        />
      </div>

      <button className="buttonModal"  >دیدگاه خود را ارسال کنید</button>
    </form>
  );
};

export default CommentModal;
