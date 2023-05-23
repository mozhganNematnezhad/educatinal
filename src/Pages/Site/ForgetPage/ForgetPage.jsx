import React from "react";
import ForgetPassword from "components/LoginSiqnUp/ForgetPassword/ForgetPassword";
import HelmetTitle from "components/commen/Helmet/Helmet";

const ForgetPage = () => {
  return (
    <>
      <HelmetTitle title="     فراموشی رمز عبور" />
      <ForgetPassword />
    </>
  );
};

export default ForgetPage;
