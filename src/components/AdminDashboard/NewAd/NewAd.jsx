import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const NewAd = ({ New }) => {
  // console.log("news" ,New)
  return (
    <tbody
      className=" text-gray-500 bg-gray-50 md:text-[0.9] xl:text-[17px] 
  border-b-4 border-double content-center text-center 
  dark:bg-gray-300 items-center"
    >
      <tr>
        <th scope="col" className="px-6 py-3 ">
          <img src={New.image} alt="" className="w-[6rem]" />
        </th>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {New.title}
        </th>
        <th scope="col" className="px-6 py-3">
          <Link to={`shownews/${New._id}`} className="flex justify-center">
            <IoEyeSharp />
          </Link>
        </th>
        <th scope="col" className="px-6 py-3">
          <Link to={`editnews/${New._id}`} className="flex justify-center">
            <BiEdit />
          </Link>
        </th>
        <th scope="col" className="px-6 py-3">
          <Link to=" " className="flex justify-center">
            <MdDelete />
          </Link>
        </th>
      </tr>
    </tbody>
  );
};

export default NewAd;







// 💎💎💎💎💎💎💎

// <ul
//   className="p-4 grid  grid-cols-5 text-gray-500 bg-gray-50
//   md:text-[0.9] xl:text-[17px] border-b-4 border-double content-center text-center py-5
//   dark:bg-gray-300 items-center
//       "
// >
//   <li>
//     <img src={New.imgNews} alt="" className="w-[6rem]" />
//   </li>
//   <li>
//     <p className="text-sm md:text-base" > {New.title}</p>
//   </li>

//   <li className="flex justify-center items-center">
//     <Link to={`shownews/{New.id}`}>
//       <IoEyeSharp />
//     </Link>
//   </li>

//   <li className="flex justify-center items-center">
//     <Link to={`editnews/${New.id}`}>
//       <BiEdit />
//     </Link>
//   </li>

//   <li className="flex justify-center items-center">
//     <p>
//       <MdDelete />
//     </p>
//   </li>
// </ul>
