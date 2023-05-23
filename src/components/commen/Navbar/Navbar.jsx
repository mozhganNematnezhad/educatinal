import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";

// import components
import CartClick from "components/Cart/CartClick/CartClick";
import SubMenu from "./SubMenu/SubMenu";
import Search from "components/Search/Search";
import { MenuItems } from "components/commen/Navbar/MenuItems/MenuItems";
import { CategoryItems } from "./Categories/CategoryItems";
import CartHover from "components/Cart/CartHover/CartHover";
import Dot from "./Dot/Dot";
// import img
import category from "Assets/images/nav/category.json";
import logo from "Assets/images/Touritor/white-logo.png";

// import context
import { ConsumeCartState } from "Context/CartItemsContext/CartItemsState";
import { ConsumeAuthState } from "Context/AuthContext/AuthState";

// react-icons
import { FaUserAlt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

// import css
import "../../commen/Navbar/Navbar.css";
import { useDarkMode } from "Hooks/DarkMode";

const Navbar = () => {
  const { cart } = ConsumeCartState();
  const { userData } = ConsumeAuthState();
  const { toggleTheme, theme } = useDarkMode();

  // console.log("myobject-navbar" ,myobject);

  // **serach
  const [isSearch, setIsSearch] = useState(false);
  const searchHandler = () => {
    setIsSearch(!isSearch);
  };
  // end search

  //  **mobile -toggle-menu
  const [click, setClick] = useState(false);
  const toggleHandler = () => {
    setClick(!click);
  };
  // end mobile-toggle-menu

  //  **cart-click in mobile
  const [iscart, setIsCart] = useState(false);
  const cartHandler = () => {
    setIsCart(!iscart);
  };
  const location = useLocation();
  // console.log("location",location);
  // برای اینکه وقتی میری داخل صفحه تسویه
  //  حساب اون باکس محصولات کارت از بین برود
  useEffect(() => {
    if (location.pathname === "/cart") {
      setIsCart(false);
    }
  }, [location.pathname]);
  // *end  cart-click in mobile

  return (
    <nav
      className="sticky w-full bg-Main-Blue  lg:h-24 dark:bg-[#0A1929] dark:border-b dark:border-[rgba(248,250,252,.06)]">
      <div className="xl:container mx-auto">
        <div className="grid lg:grid-cols-12 lg:p-4 items-center stickyHeader">
          <div className="TwIN-logo col-span-1  hidden lg:flex  ">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          {/*********/}
          {/* دسکتاپ-منوها */}
          <div className="TwIN-navbar col-span-8  hidden lg:flex justify-center items-center  ">
            <div className="TwIN-category flex justify-center items-center p-4 text-white relative  ">
              <div className="w-[2rem]">
                <Lottie animationData={category} loop={true} />
              </div>
              <span className="pr-2  ">دسته ها </span>

              <div
                className="TwIN-categoryItem absolute min-w-[12rem] mt-8  
              rounded-lg  flex flex-col  !bg-white text-center
                text-black z-[500] top-[3rem]">
                {/*دسته بندی  */}
                <ul className="dark:bg-[rgb(27,52,77)]  ">
                  {CategoryItems.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="TwIN-categoryLink text-lg px-4 py-[0.5rem] w-full border-b border-dashed border-[#dfdfdf] text-[#333] dark:text-white "
                      >
                        <a href={item.path} className="text-[14px]">
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* منوی اصلی */}
            <ul className="flex justify-center items-center gap-8  text-white mr-12">
              {MenuItems.map((MenuItem, index) => {
                // submenu
                if (MenuItem.subMenus) {
                  return <SubMenu MenuItem={MenuItem} key={MenuItem.name} />;
                }
                // menu asli

                return (
                  <div key={index}>
                    <li className="xl:text-lg lg:text-base relative">
                      <NavLink
                        to={MenuItem.path}
                        className={({ isActive }) =>
                          isActive
                            ? `text-green-500`
                            : "MenuItem.cName"
                        }
                      >
                        {MenuItem.name}
                      </NavLink>
                    </li>

                    <span className="absolute">
                      <Dot />
                    </span>
                  </div>
                );
              })}

              {userData.fullName ? (
                <div>
                  <li className="xl:text-lg lg:text-base relative">
                    <NavLink
                      to="/userdashboard"
                      className={({ isActive }) =>
                        isActive
                          ? `text-green-500
      `
                          : "TwIN-navItem"
                      }
                    >
                      پنل کاربری
                    </NavLink>
                  </li>
                  <span className="absolute">
                    <Dot />
                  </span>
                </div>
              ) : null}
            </ul>
          </div>
          {/*********/}
          {/* btns-language -search-cart-login Desktop*/}
          <div className="col-span-3  hidden lg:flex  justify-center items-center ">
            <div>
              <button className="TwIN-logIn">
                {isSearch ? (
                  <Search
                    show={isSearch}
                    onCancle={searchHandler}
                    className=" text-2xl"
                  />
                ) : null}
                <BsSearch onClick={searchHandler} />
              </button>
            </div>

            <div>
              <Link
                to={userData.fullName ? "/userdashboard" : "/login"}
                className="TwIN-logIn"
              >
                {userData.fullName ? (
                  <>
                    {/* <AiOutlineUserAdd className=" xl:text-2xl lg:text-xl" /> */}
                    <span>{userData.fullName}</span>
                  </>
                ) : (
                  <FaUserAlt className=" xl:text-2xl lg:text-xl" />
                )}
              </Link>
            </div>

            <div className="TwIN-BasketBox relative ">
              <button className="TwIN-basket relative">
                <BsFillCartFill className="  transition-all duration-100 ease-in-out  xl:text-2xl lg:text-xl" />

                <div className="absolute right-0 top-0">
                  {cart.length > 0 ? (
                    <span className="Count  ">{cart.length}</span>
                  ) : (
                    <span className="bg-red-400 Count">0</span>
                  )}
                </div>
              </button>
              <CartHover />
            </div>

            {/* <div>
              <button className="TwIN-language">
                <MdLanguage className=" xl:text-2xl lg:text-xl" />
              </button>
            </div> */}
            <div>
              <button className="TwIN-darkMode" onClick={toggleTheme}>
                {theme === "light" ? (
                  <MdOutlineLightMode className=" xl:text-2xl lg:text-xl" />
                ) : (
                  <BsFillMoonStarsFill className=" xl:text-2xl lg:text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*************** */}
      {/****** mobile menue ******/}

      <div className="lg:container">
        <div className="grid grid-cols-12  items-center p-4">
          {/* hamburgur menu */}
          <div
            // m-8 lg:m-0
            className="block lg:hidden  col-span-1 z-[10] "
            onClick={toggleHandler}
          >
            {click ? (
              <FaTimes size="30px" className="text-white " />
            ) : (
              <BiMenuAltRight size="30px" className="text-white" />
            )}
          </div>
          {/* end hamburgur menu */}

          {/* logo */}
          <div
            className="TwIN-logoM 
          block 
          col-span-2 md:col-span-2  mx-auto  md:mx-inherit w-[5rem]
           smcustom:w-32 md:w-40 smcustom:mr-4"
          >
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          {/* end logo */}

          {/* btns */}
          {/* mb-4 md:mb-0 */}
          <div className=" lg:hidden flex justify-end items-center col-span-9    md:col-span-9">
            <div>
              <button className="TwIN-logIn">
                {isSearch ? (
                  <Search
                    show={isSearch}
                    onCancle={searchHandler}
                    className=" text-2xl"
                  />
                ) : null}
                <BsSearch onClick={searchHandler} />
              </button>
            </div>

            <div>
              <Link
                to={userData.fullName ? "/userdashboard" : "/login"}
                className="TwIN-logIn"
              >
                {userData.fullName ? (
                  <>
                    {/* <AiOutlineUserAdd className=" xl:text-2xl lg:text-xl" /> */}
                    <span>{userData.fullName}</span>
                  </>
                ) : (
                  <FaUserAlt className=" xl:text-2xl lg:text-xl" />
                )}
              </Link>
            </div>

            <div className="">
              <button className="TwIN-basket col-span-4 relative">
                <BsFillCartFill
                  className="  transition-all duration-100 ease-in-out  xl:text-2xl lg:text-xl "
                  onClick={cartHandler}
                />

                <div className="absolute right-[-8px] top-0">
                  {cart.length > 0 ? (
                    <span className="Count  ">{cart.length}</span>
                  ) : (
                    <span className="bg-red-400 Count">0</span>
                  )}
                </div>

                {iscart ? (
                  <CartClick
                    // clickcart={iscart}
                    onCancle={cartHandler}
                  />
                ) : null}
              </button>
            </div>

            {/* <div>
              <button className="TwIN-language">
                <MdLanguage className=" xl:text-2xl lg:text-xl" />
              </button>
            </div> */}

            <div>
              <button className="TwIN-darkMode" onClick={toggleTheme}>
                <BsFillMoonStarsFill className=" xl:text-2xl lg:text-xl" />
              </button>
            </div>
          </div>
          {/* end btn */}

          {/* ******************* */}

          {/********  منوی موبایل *******/}
          <div
            className={
              click
                ? "w-7/12 h-[650px] bg-[#264067e6]  text-white absolute top-0 right-0 transition-all duration-[0.5s] ease "
                : "w-7/12 absolute h-[650px]  top-0 right-[-100%] transition-all duration-[0.5s] ease"
            }
          >
            <div className="TwIN-logo  bg-[#264067e6] shadow-lg  mt-20 mx-auto rounded-lg p-11">
              <NavLink to="/">
                <img src={logo} alt="" className="w-36" />
              </NavLink>
            </div>

            <ul className=" mt-12">
              {MenuItems.map((MenuItem, index) => {
                // menu asli
                return (
                  <div key={index} className="TwIn-navLink">
                    <li className="py-3 flex text-xl mr-6">
                      <span className="ml-3 text-2xl">{MenuItem.icon}</span>
                      <a href={MenuItem.path} className={MenuItem.cName}>
                        {MenuItem.name}
                      </a>
                    </li>
                    <span className=""></span>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// *************************
// *************************
// *************************
// *************************
// to={userData.fullName ? "/userdashboard" : "/login"}
// من گفتم که تو بیا اون یوز اسمشو بگیر و بعد لاگ اوت کن
// یعنی کاربر ببره بیرون

// *************************
// *************************
// const {cart}  = ConsumeCartState();

// توقبلی ما میگفتیم
// cart.cart
// ولی الان دیگه داخلش یه کارت هست  دیگه نبازی به کارت دوم نیست
// چون قبلی یه ابجکت بود
// در هر کامپوننتی که
// cart.cart
// داری باید
// cart
// بزاری

// *************************
// *************************

// برای وقتی که میخوای بری ضفحه خرید ودکمه تسویه حساب و میزنی و باید
// این باکسش با رفتن به صفجه کارت از بین بره
// useEffect(() => {
//   setIsCart(false)

// },[window.location.pathname])

// *************************
// *************************
// *************************
// *************************
// *************************

//sticky
// const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
// const headerRef = useRef(null);
// const handleScroll = (elTopOffset, elHeight) => {
//   if (window.pageYOffset > elTopOffset + elHeight) {
//     setSticky({ isSticky: true, offset: elHeight });
//   } else {
//     setSticky({ isSticky: false, offset: 0 });
//   }
// };
// // add/remove scroll event listener
// useEffect(() => {
//   var header = headerRef.current.getBoundingClientRect();
//   const handleScrollEvent = () => {
//     handleScroll(header.top, header.height);
//   };
//   window.addEventListener("scroll", handleScrollEvent);
//   return () => {
//     window.removeEventListener("scroll", handleScrollEvent);
//   };
// }, []);

// <nav
//      className={`navbar  ${sticky.isSticky ? " sticky" : " "}
//       w-full bg-Main-Blue z-[10]  lg:h-24 dark:bg-[#0A1929]
//       dark:border-b dark:border-[rgba(248,250,252,.06)]`}
//      ref={headerRef}
//   ></nav>

//end sticky
// *************************
// *************************
// *************************
// *************************
// *************************
