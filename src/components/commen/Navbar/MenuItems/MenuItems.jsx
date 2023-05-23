
import { FaReact } from 'react-icons/fa'; 
import { FaJava } from 'react-icons/fa'; 
import { SiTailwindcss } from 'react-icons/si'; 
import { SiNodedotjs } from 'react-icons/si'; 
import { SiNextdotjs } from 'react-icons/si'; 
import { FaHome } from 'react-icons/fa'; 
import { GiBookCover } from 'react-icons/gi'; 
import { GiTeacher } from 'react-icons/gi'; 
import { MdContactPhone } from 'react-icons/md'; 
import { BiUserCircle } from 'react-icons/bi'; 



export const MenuItems = [
    {
      name: "خانه",
      path: "/",
      cName:"TwIN-navItem",
      icon :<FaHome/>
    },
    {
      name: "دوره ها",
      path: "/courses",
      cName:"TwIN-navItem",
      icon :<GiBookCover/>,
  
      subMenus: [
        {
          name: "ریکت",
          path: "/courses/react",
          icon :<FaReact/>
        },
        {
          name: "جاوا اسکریپت",
          path: "/courses/javaScript",
          icon:<FaJava/>
        },
        {
          name: "تیلویند",
          path: "/courses/tailwindcss",
          icon:<SiTailwindcss/>
        },
        {
          name: "Node.js",
          path: "/courses/node.js",
          icon :<SiNodedotjs/>
        },
        {
          name: "Next.js",
          path: "/courses/Nnext.js",
          icon :<SiNextdotjs/>
        },
      ],
    },
    {
      name: "اساتید",
      path: "/teachers",
      cName:"TwIN-navItem",
      icon :<GiTeacher/>

    },
    {
      name: "تماس با ما",
      path: "/contact",
      cName:"TwIN-navItem",
      icon:<MdContactPhone/>
    },
    {
      name: "درباره ما",
      path: "/about",
      cName:"TwIN-navItem",
      icon:<BiUserCircle />
    },
   
  ];
  