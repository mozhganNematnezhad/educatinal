
import { AiOutlineDashboard } from 'react-icons/ai'; 
import { FiEdit } from 'react-icons/fi'; 
import { TbTicket } from 'react-icons/tb'; 
import { MdCastForEducation } from 'react-icons/md'; 




export const MenuSidbars = [
    {
      name: "داشبورد",
      path: "/userdashboard",
      cName:"navItem-D",
      icon :<AiOutlineDashboard/>
    },
    {
      name: "دوره های رایگان",
      path: "freecourses",
      cName:"navItem-D",
      icon :<MdCastForEducation/>,
    },
    {
      name: "دوره های خریداری شده",
      path: "purchasecourses",
      cName:"navItem-D",
      icon :<MdCastForEducation/>

    },
    {
      name: " ویرایش پروفایل ",
      path: "editprofile",
      cName:"navItem-D",
      icon:<FiEdit/>
    },
    {
      name:  "تیکت",
      path: "ticket",
      cName:"navItem-D",
      icon:<TbTicket />
    },
  ];
  