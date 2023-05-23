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



