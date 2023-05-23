import React from "react";
import "./ImgBanner.css";

import img1 from "../../../../Assets/images/banner/1.png";
import img2 from "../../../../Assets/images/banner/2.png";
import img3 from "../../../../Assets/images/banner/3.png";
import img4 from "../../../../Assets/images/banner/4.png";
import img5 from "../../../../Assets/images/banner/5.png";
import img6 from "../../../../Assets/images/banner/6.png";
import img7 from "../../../../Assets/images/banner/7.png";
import img8 from "../../../../Assets/images/banner/8.png";
import front from "../../../../Assets/images/banner/front.svg";
import next from "../../../../Assets/images/banner/next.svg";
import react from "../../../../Assets/images/banner/react.svg";
import vase from "../../../../Assets/images/banner/9.png";


const ImgBanner = () => {
  return (
    <>
      <div className=" Ba_cloud">
        <div className=" hidden xl:flex   animC anim1 ">
          <img
            src={img1}
            alt="img1"
            className="xl:absolute  xl:top-[5rem] xl:right-[12rem]  "
          />
        </div>

        <div className="hidden xl:flex ">
          <img
            src={img2}
            alt="img2"
            className="xl:absolute  xl:top-[44rem] xl:right-[36rem] sideToSide "
          />
        </div>

        <div className=" hidden xl:flex  animC anim1 ">
          <img
            src={img3}
            alt="img3"
            className="xl:absolute xl:top-[0] xl:right-[65rem]  "
          />
        </div>
      </div>

      <div className=" hidden  xl:flex  Ba_sofa ">
        <img
          src={img4}
          alt="img4"
          className="xl:absolute xl:top-[57rem] xl:right-[3rem] wiggle   "
          data-depth="0.2"
        />
      </div>

      <div className=" hidden xl:flex animC anim2 w-[12rem]">
        <img
          src={img5}
          alt="img5"
          className="xl:absolute xl:top-[17.5rem] xl:right-[20rem]  "
        />
      </div>
      <div className=" hidden xl:flex animC anim3  w-[12rem]">
        <img
          src={img6}
          alt="img6"
          className="xl:absolute xl:top-[13rem] xl:right-[22rem]  "
        />
      </div>
      <div className=" hidden xl:flex w-[12rem]">
        <img
          src={img7}
          alt="img7"
          className="xl:absolute xl:top-[46rem] xl:right-[57rem]  "
        />
      </div>

      <div className="hidden xl:flex">
        <img
          src={img8}
          alt="img8"
          className="books xl:absolute  xl:top-[56rem] xl:right-[12rem] xl:w-[30rem]   "
        />
      </div>

      <div className=" hidden xl:flex front animC jump1">
        <img
          src={front}
          alt="front"
          className="xl:absolute w-20 xl:top-[20rem] xl:right-[-30rem]   "
        />
      </div>
      <div className=" hidden xl:flex react animC jump">
        <img
          src={react}
          alt="react"
          className="xl:absolute w-20 xl:top-[21rem] xl:right-[-32rem]    "
        />
      </div>

      <div className=" hidden xl:flex next animC jump1">
        <img
          src={next}
          alt="next"
          className="xl:absolute w-20   xl:top-[21rem] xl:right-[-33rem]    "
        />
      </div>
      <div className=" hidden xl:flex vase">
        <img
          src={vase}
          alt="vase"
          className="xl:absolute w-24 wiggle xl:top-[61rem]    "
        />
      </div>
    </>
  );
};

export default ImgBanner;
