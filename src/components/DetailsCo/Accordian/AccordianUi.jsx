import React from "react";

import { HiArrowCircleDown, HiX } from "react-icons/hi";

const AccordianUi = ({ id, setIndex, index, title, children }) => {
  const handleSetIndex = (id) => {
    index !== id && setIndex(id);
  };

  // icon close
  const onClose = () => {
    setIndex(!index);
  };
  return (
    <>
      <div
        onClick={() => handleSetIndex(id)}
        className="De-Accordian-All flex group"
      >
        {/* title-question */}
        <div className="flex group cursor-pointer ">
          <div className="De-Acoordian-Title" onClick={onClose}>
            {title}
          </div>
        </div>

        {/* icon */}
        <div className="flex items-center justify-center pr-10">
          {index !== id ? (
            <HiArrowCircleDown className="De-icon dark:text-white" />
          ) : (
            <HiX className="De-icon dark:text-white " onClick={onClose} />
          )}
        </div>
        {/* end icon */}
      </div>
      {/* content */}
      {index === id && <div className="De-Accordian-Content">{children}</div>}
    </>
  );
};

export default AccordianUi;

















// **************************


// const AccordianUi = ({ id, setIndex, index, title, children }) => {
//   const handleSetIndex = (id) => {
//     index !== id && setIndex(id);
//   };
//   return (
//     <>
//       <div
//         onClick={() => handleSetIndex(id)}
//         className="flex group cursor-pointer border-t border-l border-r border-dashed border-[#d7e0e9] w-full mx-auto h-16 justify-between items-center p-2 mt-2 rounded bg-white
//   hover:bg-pink-500 hover:shadow-lg focus:bg-pink-500
//   "
//       >
//         <div className="flex group cursor-pointer ">
//           <div className="text-pink-600 font-semibold pl-10 group-hover:text-white">
//             {title}
//           </div>
//         </div>

//         <div className="flex items-center justify-center pr-10">
//           {index !== id ? (
//             <HiArrowCircleDown className="w-6 h-6 group-hover:text-white text-pink-500" />
//           ) : (
//             <HiX className="w-6 h-6 group-hover:text-white text-pink-500" />
//           )}
//         </div>
//       </div>

//       {index === id && (
//         <div className="bg-pink-100 border-b border-l border-r border-dashed border-[#d7e0e9]  px-10 font-semibold text-pink-500 h-auto w-full rounded-md border-l-2 py-4 border-blue-300 mb-2">
//           {children}
//         </div>
//       )}
//     </>
//   );
// };

// export default AccordianUi;
