import React from "react";

import ImgBanner from "./ImgBanner/ImgBanner";
import Button from "components/commen/Button/Button";

import { useDarkMode } from "Hooks/DarkMode";

// import icon
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const { theme } = useDarkMode();
  // console.log("theme-banner", theme);

  return (
    <div className="Ba_back bg-[#f7f9fb] sm:h-[600px] lg:h-[1000px]
     dark:bg-[#001E3C] dark:lg:h-[630px] dark:xl:h-[1000px]">
      <div className="  z-[-999] ">
        <div className="">
          <div className="container mx-auto">
            {/* text */}
            <div className="flex flex-col justify-center items-center pt-28 md:pt-32">
              <span className="text-[#777] text-base font-normal dark:text-[#B2BAC2]">
                بهبود زندگی از طریق یادگیری
              </span>

              <h1
                className="heading1  text-2xl md:text-3xl lg:text-5xl 
                py-[1.2rem] md:py-[1.5rem] 	 
                tracking-[- 0.64px] text-[#333] dark:text-white"
              >
                هر زمان، هر جا یاد بگیرید.
              </h1>

              <h1 className="heading2 text-2xl md:text-3xl lg:text-5xl 	 text-[#333] dark:text-white ">
                آینده خود را تسریع کنید.
              </h1>

              <p
                className="text-[#7a7a7a] text-center
               text-lg xl:text-xl leading-10 pt-8
               lg:w-[48rem] w-[18rem] md:w-[40rem] xl:w-[60rem] dark:text-[#B2BAC2] "
              >
                ما معتقدیم که همه ظرفیت خلاق بودن را دارند. Turitor مکانی است که
                در آن افراد پتانسیل های خود را توسعه می دهند.
              </p>

              <div className="md:flex mt-12">
                <Link to="/courses">
                  <Button customClass="Ba-btn1" icon={<FaEye />}>
                    مشاهده دوره ها
                  </Button>
                </Link>

                {/* <Button
                  customClass="Ba-btn2 mt-4 md:mt-0"
                  icon={<AiFillPlusCircle />}
                >
                 مش
                </Button> */}
              </div>
            </div>
            {/* end text */}

            <div className="grid grid-cols-12">
              <ImgBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
