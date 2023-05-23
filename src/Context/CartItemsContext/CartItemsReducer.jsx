import { toast } from "react-toastify";


const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const copyCart = [...state];
      const findLessonIndex = copyCart.findIndex(
        (lesson) => lesson._id === action.payload._id
      );
      if (findLessonIndex === -1) {
        // toast.success(` ${action.lessonTitle} به سبد خرید اضافه شد `);
        return [...state, action.payload]
      } else {
        // toast.error(`  دوره ${action?.lessonTitle} در سبد خرید وجود دارد    `);
        return state;
      }
    }

    case "REMOVE_CART": {
      const copyCart = [...state];
      return copyCart.filter((lesson) => lesson._id !== action.payload)
    
    }

    case "Clear_Cart":{
      return []
    }

    default:
      return state;
  }
};

export default CartReducer;






// ***********************
// ***********************
// const copyCart = [...state];
// چون  دیگه ما فقط یهدونه
// initail =[]
// داریم یعنی یه کارت
// داریم دیگه پس نیاز نیست بنویسم
// state.cart
// چون داخلش یه دونه هست چیزی نیست به جز این یه دونه

// **********************
// **********************
// **********************
// return [...state, action.payload]
// این جا هم نیاز نیست دیگه ابجکت داشته باشیم
// مثلا قبلامیزاستیم
// return {
  // این مقادیری که قبلا تو استیت من هست رو حفظ کن
  // ...state,
  // و یک مقدار جدید هم بهش اصافه  کن
  // cart:[...state.cart ,action.payload]
// }
// ولی اینجا فقط یه دونه کارت هست دیگه ابجکتی نداریم پس پرانتز ابجکت
// برمیداریم
// **********************
// spread
// فقط برای ابجکت نیست برای 
// object 
// هم کاربرد دارد
//  let person ={
//   name:"aaaa"
//   age:15
// }

// let person2={
//   ...person ,job :"react"
// }

// person2 ={name:"aaaa" ,age:15 ,job:"react"}

// **********************
// **********************
// case "Clear_Cart":{
//   return cart :[]
// }

// **********************
// **********************
// **********************
// case "ADD_TO_CART": {
//   const copyCart = [...state.cart];
//   const findLesson = copyCart.filter(lesson => lesson._id === action.payload._id)

//   if (findLesson.length === 0) {
// toast.success(` ${action?.lessonTitle} به سبد خرید اضافه شد `);
// return {
//   ...state,
//   cart: [...state.cart, action.payload],
// };
// } else {
// toast.error(` ${action?.lessonTitle} is exist`);
// return state;
//   }
// }
// **********************
// **********************
// case "ADD_TO_CART": {
//   const copyCart = [...state];
//   const findLessonIndex = copyCart.findIndex(
//     (lesson) => lesson._id === action.payload._id
//   );
//   if (findLessonIndex === -1) {
//     toast.success(` ${action.lessonTitle} به سبد خرید اضافه شد `);
//     return [...state, action.payload]
//   } else {
//     toast.error(`  دوره ${action?.lessonTitle} در سبد خرید وجود دارد    `);
//     return state;
//   }
// }

// **********************
// **********************