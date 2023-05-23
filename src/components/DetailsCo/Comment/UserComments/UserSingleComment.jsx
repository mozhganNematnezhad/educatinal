import React from "react";
import { BsPersonCircle } from "react-icons/bs";

import * as shamsi from "shamsi-date-converter";

const UserSingleComment = ({ user  }) => {
  // console.log("user", user);

  const date = shamsi.gregorianToJalali(user.createDate);
  //console.log("date", date); //[1401, 9, 14]

  const finalDate = `${date[0]}/${date[1] < 10 ? `0${date[1]}` : date[1]}/${
    date[2] < 10 ? `0${date[2]}` : date[2]
  }`;
  //console.log("finalDate", finalDate);

  return (
    <>
      <div className="w-full border border-solid border-[#edf1f4] py-[10px]
       px-[20px] rounded-lg mt-4 dark:bg-[#061B33]   dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)] ">
        <div className=" flex justify-between ">
          <div className="flex items-center">
            <BsPersonCircle className="text-[#0eb582] text-3xl" />
            <p className="text-[#686e71] pr-4 dark:text-white ">{user.username}</p>
          </div>
          <p className="text-[#686e71]  dark:text-white ">{finalDate}</p>
        </div>

        <div className="pt-4">
          <p className="text-[#686e71] text-sm dark:text-white">{user.comment}</p>
        </div>

        {user.answer && (
          <div className="bg-[rgb(236,238,239)] mx-8 mt-3 rounded-lg p-4 dark:bg-[#15293E] dark:text-white">
            {user.answer}
          </div>
        )}
      </div>
    </>
  );
};

export default UserSingleComment;
