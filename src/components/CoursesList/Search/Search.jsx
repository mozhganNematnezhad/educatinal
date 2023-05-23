import React from "react";

// import Lottie from "lottie-react";
// import search from "Assets/images/nav/search.json";

const Search = ({ searchItem, setSearchItem }) => {
  

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchItem(e.target.value);
  };

  return (
    <form className="flex bg-[#f3f4f6]  p-4  rounded-lg dark:bg-[#001E3C]">
      <input
        type="text"
        className="border-2 border-solid border-[#0eb582] text-[#333]
              outline-0 rounded-lg w-full px-[1.3rem] py-[0.4rem]
              dark:bg-[#1B314C] dark:text-white"
        placeholder="دنبال چی میگردی؟؟"
        value={searchItem}
        onChange={inputChangeHandler}
      />
      {/* <div className=" w-10">
        <Lottie animationData={search} loop={true} />
      </div> */}
    </form>
  );
};

export default Search;
