import { createContext, useContext, useReducer, useEffect } from "react";
import CartReducer from "./CartItemsReducer";
import { confirmAlert } from "react-confirm-alert"; // Import

const cartsContext = createContext();


const initialState = JSON.parse(localStorage.getItem("cart"))  || [];

const CartItemsState = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, initialState);

  // addcart
  const ADD_TO_CART = (lesson) => {
    // console.log("mmmmmmmmmmm",lesson)
    dispatch({
      type: "ADD_TO_CART",
      payload: lesson,
    });
  };

  // remove-cart
  const REMOVE_CART = (id) => {
    // lessonTitle: lesson.title
    // console.log("called", id)
    dispatch({ type: "REMOVE_CART", payload: id });
  };

  const Clear_Cart = () => {
    dispatch({ type: "Clear_Cart" });
  };

  const confirm = (id, title) => {
    // console.log(title);
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            dir="rtl"
            style={{
              zIndex: "999999999999",
              backgroundColor: "#f3f4f6",
              // border: "1px solid black",
              borderRadius: "1rem",
            }}
            className="p-4"
          >
            <h1 style={{ color: "black", fontSize: "1.1rem" }}>پاک کردن درس</h1>
            <p style={{ color: "black", margin: "1rem  0" }}>
              مطمین هستید که میخوای درس{" "}
              <span style={{ color: "#0eb582", fontSize: "1.5rem" }}>
                {title}{" "}
              </span>
              خود را پاک کنید؟{" "}
            </p>
            <button
              onClick={() => {
                REMOVE_CART(id);
                onClose();
                // toast.error(`  دوره ${title} از سبد خرید حذف شد     `);
              }}
              className="mx-2 bg-[#0eb582] text-white rounded-lg px-4 py-[0.6rem]"
            >
              مطمین هستم
            </button>

            <button
              onClick={onClose}
              className="mx-2 bg-gray-300  text-white rounded-lg px-4 py-[0.6rem]"
            >
              انصراف
            </button>
          </div>
        );
      },
      overlayClassName: "react-confirm-alert-overlay-above",
    });
  };

  // localstorage ===update
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <cartsContext.Provider
      value={{ cart, ADD_TO_CART, REMOVE_CART, confirm, Clear_Cart }}
    >
      {children}
    </cartsContext.Provider>
  );
};

export default CartItemsState;

export const ConsumeCartState = () => useContext(cartsContext);
























// LOCALSTORAGE
// ******setItem******
// مرحله اول
// میگم تو برو توی لوکال استورچ مرورگر ست کن یه دیتایی رو به اسم کارت
// ما نمیتوانیم ابجکت یا چیز دیکر را در لوکال دخیره کنیم
// تنها میتوانیم استرینگ باشد

// localStorage.setItem("cart " ,JSON.stringify(cart) )

//یعنی میگه که اون وروردی که گرفتی رو بگیر و بعد استرینگ کن و توی لوکال دخیره کن

// JSON.stringify(cart)
// نوع اون ایتمی که داری دخیره میکنی رو سیو میکنه
// مثلا اگر ارایه داری دخیره میکنی
// ارایه رو تبدیل به استرینگ میکنه
// و اگر بخواد برگردونه دوباره ارایه برمیگردونه
// با
// json.parse
//  نوع خودشو حغط میکنه
//  اگر نامبر بدی نامبر بهت میده

// **********************
//   useEffect(() => {
//   localStorage.setItem('cart', JSON.stringify(cart.cart));
// }, [cart.cart]);

// هر موقع استیت عوض شد تعییر کرد تو بیا دوباره همینو فراخوانی کن
// هر چیز جدید داره اتقاف میفته
// هر چیزی کم یا زیاد شد بیاد  تعییر میکنه
// داخل همین ابدیت میشه

// هر بار سبد خرید من داره آبدیت میشه این یوز افکت من داره ست میشه
// کم بشه یا زیاد بشه

// localstorage ===update
// useEffect(() => {
// const CartTojson =JSON.stringify(cart)
// console.log(convertTojson)
// localStorage.setItem("cart" ,cart )  //[object object]
// الان من داخل لوکال ابجکت گرفتم ولی نباید داخل لوکال
// ابجکت سبوکنم باید قبلش یه تبدیلی انجام بدم بعدش بیارم داخل  لوکال
// }, [cart]);

// **********************
// **********************
// **********************
// **********************
// اول  کار

// const initialState ={
//   cart:[
// {id:1 ,name:kif ,qty:1},
// {id:2 ,,name:pol ,qty:1},
// toal:0
// name:mohzgan
// }

// ولی بعدش باید بیای اون داده اولیه تو از لوکالت بگیری این که چه چیزی داخل لوکالت هست
// بنابراین چبزی کهداخل لوکالت هست و تو میخوای بگیری باید دوباره به ارایه  تبدیل کنی
// هر دو تا میشه
// *1
//const carts = JSON.parse(localStorage.getItem("cart"))
// *2
// const convertToJson =localStorage.getItem("cart")

// const carts =JSON.parse(convertToJson)

// const initialState ={
//   cart:carts || []
// }

// **********************
// **********************
// const initialState ={
//   cart:[]
// }

// الان داخل این یه ابجکت هست که داخلش کارت ولی ما یه دونه داریم
// زمانی که ما یک مقدار واجد داریم و نیاز به پروپرتی های مختلف نداریم

// محصولاتی که داخل سبد خرید هست داخل این میزاریم
// const initialState = []
// **********************
// **********************
// let arr1 =[1,2,3]
// let arr2 =[4,5,6]

// let arr3 =arr.concat(arr2)

// arr3 =[]

// arr3 =[...arr1,...arr2]
// arr3 =[1,2,3,4,5,6,]
// ترتیت مهم نیست
// برعکس میشه

// **********************
// **********************
// برای این که کارتم رو صفرکنم
//  const Clear_Cart =()=>{
//   dispatch({ type: "Clear_Cart"});
// }
// **********************
// **********************
// **********************
// **********************
// ----------^^^^^-----------
// مرحله دوم
// cart: localStorage.getItem("cart") === null ? [] : JSON.parse(localStorage.getItem("cart")),

// اگر نال بود یعنی کارتی وجود نداشت
// یعنی هیچ کارتی نیست
// اولین بار کاربر بیاد
// و هیچ کارتی نداره
// برابر با ارایه خالی باشه
// چون سبد خریدت خالی هست
// پس باید همون ارایه اولیه باشه

// و اگر داشت
// JSON.parse(localStorage.getItem("cart"))
//   یعنی لوکال استورچ بکن
// اون دیتایی که داری
// اون ارایه ای که هست
// و اگر ارایه ای بود تو با اینا رو بگیر
// GET
// کن

// PARSE
// یعنی از حالت استرینگ در بیار

// در پارس کردن به ما ارایه برمیگرداند

// ----------^^^^^^^-----------
// من اول میخوام یه چیزی رو ست کنم مثلا میخوام مژگان داخل لوکال خودم ست کنم
// localStorage.setItem("name" ,mozhgan)

//******* */ moun

// خالت اولیه وقتی ساخته میشه
// useEffect(() => {
// const shopCart =localStorage.getItem("cart") "[{} ,{}]"
// نوعشو به ارایه برگردونه
//   const cartItem = JSON.parse(shopCart); [{}, {}]

// for (const item of cartItem) {
//   ADD_TO_CART(item)
// }
// }, []);

// چیزی که سیو کردی تو بیا گت  کن برای وقتی که داره مونت میشه
//  const shopCart =localStorage.getItem("cart")

// ولی من برای این گذاشتم که وقتی  سایت من داره لود میشه  و ساخته میشه
// برای اولین بار   یه بار بیاد چک کنه که ایا داخل لوکال استورچ من چیزی هست یا نه
//  اگر  بود بیاد این تابع add to cartصدابزنه و مثلا اگر دو تا ایتم داخلش بود بهش بده ..

// **********************
// **********************
// **********************
// lessonTitle
// برای وفتی که میخوای  برای تست استفاده کنی برای ریدیوسر

// const ADD_TO_CART = (lesson) => {
//   console.log("mmmmmmmmmmm",lesson)
//   dispatch({
//     type: "ADD_TO_CART",
//     payload: lesson,
//     lessonTitle: lesson.lesson.lessonName,
//   });
// };
