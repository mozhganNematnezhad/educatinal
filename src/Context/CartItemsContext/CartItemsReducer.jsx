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



