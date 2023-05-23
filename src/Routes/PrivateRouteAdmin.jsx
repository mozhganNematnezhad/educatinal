import React from "react";
import {Navigate} from "react-router-dom";
import { ConsumeAuthAdState } from "Context/Admin/AuthAdmin/AuthStateAdmin";


const PrivateRouteAd = ({ children }) => {
  const {admin} = ConsumeAuthAdState();
  // console.log("admin-PrivateRouteAd" ,admin.email)
  
 return admin.email ? children : <Navigate to="/admindashboard/login" />;

};

export default PrivateRouteAd;

