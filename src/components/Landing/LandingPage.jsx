import React from "react";
import Article from "./Article/Article";
import AvailableCourses from "./AvailableCourses/AvailableCourses";
import Banner from "./Banner/Banner";
import Tab from "./Course/Tab";
import Email from "./Email/Email";
import Service from "./Service/Service";

const LandingPage = () => {
  return (
    <>
      <Banner />
      <Service />
      <Tab />
      <AvailableCourses />
      <Article />
      <Email />
    </>
  );
};

export default LandingPage;
