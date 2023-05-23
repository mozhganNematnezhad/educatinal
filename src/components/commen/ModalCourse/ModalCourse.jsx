import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import context
import { ConsumeAuthState } from "Context/AuthContext/AuthState";
// import api
import { dislikeCourse, likeCountCourse, likeCourse } from "Services/Student";
// import icon
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineComment,
  AiFillHeart,
} from "react-icons/ai";
import { RiDislikeLine, RiDislikeFill } from "react-icons/ri";
// import toastify
import {
  toastifuyErr,
  toastifuySuccess,
} from "HelperFunctions/Toastify/Toastify";

import CommentModal from "components/commen/CommentModal/CommentModal";
import { Fade } from "react-awesome-reveal";
import { getAllComments } from "Services/Public";

const ModalCourse = ({ modal, setModal, lesson }) => {
  // console.log("lesson", lesson._id);//"636223a936e4f81c18354658"
  //   const {data} = ConsumeAllDataState();
  const { userData } = ConsumeAuthState();
  // console.log("userData-modal", userData);

  const [comment, setComment] = useState(false);
  const [allcomments, setAllcomments] = useState([]);

  const [like, setLike] = useState(false);
  const [dislike, setDisLike] = useState(false);
  const [likeCount, setLikeCount] = useState();

  useEffect(() => {
    const getLikeCount = async (cId) => {
      //console.log("cId",cId);  // 636223a936e4f81c18354658
      try {
        // id darsmored nazar
        const { status, data } = await likeCountCourse(cId);
        // console.log("response-count" ,response)  result: {like: 3, dislike: 2}
        if (status === 200) {
          setLikeCount(data.result);
          // console.log("data.result--count", data.result);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getLikeCount(lesson._id);
  }, []);

  const handleLikeSubmit = async (event) => {
    event.preventDefault();
    if (userData._id) {
      const like = {
        courseId: lesson.lesson._id,
        userId: userData._id,
      };
      // console.log("like",like);
      try {
        const { data, status } = await likeCourse(like);
        // console.log("response-----modal",data);
        if (status === 200) {
          setLike(true);
          toastifuySuccess(data.message[0].message);
        }
      } catch (error) {
        console.log("likerrr", error);
      }
    } else {
      toastifuyErr("لطفا وارد حساب کاربری خود شوید.");
    }
  };
  const handledisLikeSubmit = async (event) => {
    event.preventDefault();
    if (userData._id) {
      const dislike = {
        courseId: lesson.lesson._id,
        userId: userData._id,
      };
      try {
        const { status, data } = await dislikeCourse(dislike);
        // console.log("response-----modal",response);  //courseid , like ,  userid
        if (status === 200) {
          setDisLike(true);
          toastifuySuccess(data.message[0].message);
        }
      } catch (error) {
        console.log("likerrr", error);
      }
    } else {
      toastifuyErr("لطفا وارد حساب کاربری خود شوید.");
    }
  };

  useEffect(() => {
    const FetchAllComments = async () => {
      try {
        const response = await getAllComments();
        // console.log("response-AllComment",response)
        // console.log("response",response.data)
        const filterComment = response.data.filter(
          (item) => item.postId === lesson._id //
        );
        console.log("filterComment",filterComment); //5 تایی که مطابفت داشت
        setAllcomments(filterComment);
      } catch (error) {
        console.log(error.message);
      }
    };

    FetchAllComments();
  }, []);

  return (
    <div className=" backmodal">
      <div className="closeModal" onClick={() => setModal(!modal)}>
        <AiOutlineClose />
      </div>
      <div className="modalBox  zoomer">
        <div className="grid grid-cols-12 items-center gap-16 p-8">
          <div className="md:col-span-6 lg:col-span-4">
            <div className="w-full">
              <img
                src={lesson.lesson.image}
                alt="react"
                className="rounded-2xl   md:mr-[-0.5rem] lg:mr-0 lg:w-full"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div>
              <h1 className="text-2xl text-[#333]"> {lesson.title}</h1>
            </div>

            <div className="mt-8">
              <div className="flex items-center">
                <p className="text-[#686e71] ">ظرفیت کل دوره: </p>
                <p className="text-[#1e2f38]">
                  {` ${lesson.capacity + lesson.students.length}`}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[#686e71] "> دانشجویان این دوره : </p>
                <p className="text-[#1e2f38]"> {lesson.students.length}</p>
              </div>
              <div className="flex items-center">
                <p className="text-[#686e71] "> ظرفیت باقی مانده : </p>
                <p className="text-[#1e2f38]"> {lesson.capacity} </p>
              </div>
            </div>

            <div className="mt-8 text-[#7a7a7a] text-base leading-8 md:w-[80%] lg:w-full  modalText">
              <p className="overflow-hidden text-ellipsis">
                {lesson.lesson.description}
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Link to={`courses/detailcourse/${lesson["_id"]}`}>
                <div className=" mt-4 !bg-[#0eb582] py-2 px-4  text-center rounded-lg text-white w-64">
                  <button>مشاهده اطلاعات دوره</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex ">
            {/* like */}
            <div className="relative">
              <button
                type="submit"
                className=" cursor-pointer  "
                onClick={handleLikeSubmit}
              >
                <span className="absolute left-[1.3rem] top-[1rem] bg-green-500/100  w-[20px] h-[20px] rounded-lg">
                  {likeCount && likeCount.like}
                </span>
                {like ? (
                  <AiFillHeart className="  text-red-400 text-3xl" />
                ) : (
                  <AiOutlineHeart className="text-3xl text-[#0eb582] " />
                )}
              </button>
            </div>
            {/* dislike */}
            <div className="px-4 relative">
              <button
                type="submit"
                className=" cursor-pointer  "
                onClick={handledisLikeSubmit}
              >
                <span className="absolute left-[1.3rem] top-[1rem] bg-green-500/100  w-[20px] h-[20px] rounded-lg">
                  {likeCount && likeCount.dislike}
                </span>

                {dislike ? (
                  <RiDislikeFill className="  text-red-400 text-3xl" />
                ) : (
                  <RiDislikeLine className="text-3xl text-[#0eb582] " />
                )}
              </button>
            </div>
            {/* comment */}
            <div className="relative">
              <button type="submit" className=" cursor-pointer  ">
                <AiOutlineComment
                  className={`text-3xl ${
                    comment ? "text-red-400" : "text-[#0eb582] "
                  } `}
                  onClick={() => setComment(!comment)}
                />

                <span className="absolute  top-[1rem] bg-green-500/100   w-[20px] h-[20px] rounded-lg">
                  {allcomments.length}
                </span>
              </button>

              <div className="mt-6">
                {comment && (
                  <Fade>
                    {" "}
                    <CommentModal />
                  </Fade>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCourse;

// ****************
// ****************
// ****************
// ****************
// ****************

// style={{
//   transform: modal ? "translateY(0)" : "translateY(-200vh)",
// }}

// className={`transition-all duration-1000 overflow-hidden ${
//   comment ? "h-[400px] " : "h-0"
// } `}
