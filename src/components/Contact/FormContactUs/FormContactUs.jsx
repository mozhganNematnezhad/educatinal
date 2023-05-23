import React from "react";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { MdSubject } from "react-icons/md";
import { BiComment } from "react-icons/bi";
const FormContactUs = () => {
  return (
    <form>
        <h3 className="text-[#1e2f38] mb-8 text-center dark:text-white">فرم تماس با ما</h3>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <div className="flex  items-center">
              <AiOutlineUser className="text-[#0eb582]" />
              <label className="pr-2 text-[#6e8ea4] text-sm">
                نام و نام خانوادگی
              </label>
            </div>
            <input type="text" className="dark:bg-[#1B314C] dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)] " />
          </div>

          <div className="md:col-span-6">
            <div className="flex  items-center">
              <BsPhone className="text-[#0eb582]" />
              <label className="pr-2 text-[#6e8ea4] text-sm">شماره تماس</label>
            </div>
            <input type="text" className="dark:bg-[#1B314C] dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]  " />
          </div>
        </div>

        <div className="mt-8 emialContactTome">
          <div className="flex  items-center">
            <AiOutlineMail className="text-[#0eb582]" />
            <label className="pr-2 text-[#6e8ea4] text-sm">ایمیل</label>
          </div>
          <input type="text" className="dark:bg-[#1B314C] dark:text-white dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)] " />
        </div>
        <div className="mt-8 subject">
          <div className="flex  items-center">
            <MdSubject className="text-[#0eb582]" />
            <label className="pr-2 text-[#6e8ea4] text-sm">عنوان</label>
          </div>
          <input type="text" className="dark:bg-[#1B314C] dark:text-white dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)] " />
        </div>
        <div className="mt-8 commentToMe">
          <div className="flex  items-center">
            <BiComment className="text-[#0eb582]" />
            <label className="pr-2 text-[#6e8ea4] text-sm ">توضیحات</label>
          </div>
          <div
            id="commentToMe"
            name="commentToMe"
            rows="5"
            cols="20"
            className="textToMe dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]  "
          >
            <textarea className="dark:bg-[#1B314C] dark:text-white dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)] " />
          </div>
        </div>

        <div className="text-end btnC ">
          <button className=" btnContactToMe ">ارسال پیام</button>
        </div>
    </form>
  );
};

export default FormContactUs;



