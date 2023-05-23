import { FaPhone, FaUser } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { BiMap } from "react-icons/bi";

export const registerAdData = [
  {
    icon: <FaUser />,
    label: "نام کاربری ",
    id: "fullName",
    name: "fullName",
  },

  {
    icon: <MdEmail />,
    label: "  ایمیل ",
    id: "email",
    name: "email",
  },

  {
    icon: <FaPhone />,
    label: " تلفن همراه ",
    id: "phoneNumber",
    name: "phoneNumber",
  },

  {
    icon: <HiIdentification />,
    label: " کد ملی ",
    id: "nationalId",
    name: "nationalId",
  },
   {
    icon: <BiMap />,
    label: "آدرس ",
    id: "address",
    name: "address",
  },
];
