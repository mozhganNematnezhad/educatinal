import React, { useState, useEffect } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <div
          className="scroll-to-top fixed bottom-[12px] left-[35px] w-[40px] h-[40px] rounded-full
        bg-[#0eb582] cursor-pointer text-white text-center flex items-baseline  justify-center z-[3]"
        >
          <BsArrowUpCircle className=" icon mt-[10px]" onClick={goToTop} />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
