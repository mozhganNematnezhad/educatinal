import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import svg
import semikolon from "Assets/images/teacher/a.svg";
// import icon
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

// import anim
import "aos/dist/aos.css";
import Aos from "aos";

const Professor = ({ teacher }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div className="le_Semi">
        <img src={semikolon} alt="semikolon" className="w-[4rem]" />
      </div>
      <div className="professor text-sm md:text-xl text-[#212121] dark:text-white">
        <p>{teacher.fullName}</p>
        <p className="my-4 ">{teacher.email}</p>
        {/* <p>{teacher.phoneNumber}</p> */}
      </div>

      <div className="md:mt-8 flex justify-start dark:text-white ">
        <span className="text-2xl ">
          {" "}
          <AiOutlineInstagram />
        </span>
        <span className="text-2xl px-2 ">
          {" "}
          <BsWhatsapp />
        </span>
        <span className="text-2xl ">
          {" "}
          <AiFillLinkedin />{" "}
        </span>
      </div>
      <div className="mt-6 text-[#0eb582] ">
        <Link to={`/teachers/moreinformation/${teacher["_id"]}`}>
          اطلاعات بیشتر
        </Link>
      </div>
    </div>
  );
};

export default Professor;
