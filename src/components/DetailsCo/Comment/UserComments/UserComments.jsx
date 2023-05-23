import React, { useState } from "react";

import UserSingleComment from "./UserSingleComment";

const UserComments = ({ allcomments }) => {
  const [itemPerPage, setPerPageItems] = useState(4);

  const showMoreItems = () => {
    setPerPageItems((prevValue) => prevValue + 4);
  };

  return (
    <div className="my-8 p-4">
      {allcomments.length > 0 ? (
        allcomments.slice(0, itemPerPage).map((user) => {
          return (
            <React.Fragment key={user._id}>
              <UserSingleComment user={user}  />
            </React.Fragment>
          );
        })
      ) : (
        <p className="text-xl text-[#1e2f38] bg-[rgb(236,238,239)] p-4 rounded-lg dark:bg-[#1B314C] dark:text-white ">نظری ثبت نشده است </p>
      )}

      {allcomments.length > 4 && (
        <div className="text-end btnUser">
          <button className="Le-btn " onClick={showMoreItems}>
            {" "}
            مشاهده نظرات بیشتر
          </button>
        </div>
      )}
    </div>
  );
};

export default UserComments;
