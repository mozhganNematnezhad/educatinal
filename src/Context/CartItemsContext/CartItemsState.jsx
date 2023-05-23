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

