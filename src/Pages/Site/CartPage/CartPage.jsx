import React from "react";
import Cart from "components/Cart/Cart/Cart";
import HelmetTitle from "components/commen/Helmet/Helmet";

const CartPage = () => {
  return (
    <>
      <HelmetTitle title="   سبد خرید"/>
      <Cart />
    </>
  );
};

export default CartPage;
