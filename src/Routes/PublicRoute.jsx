import React from "react";
import { ConsumeAuthState } from "Context/AuthContext/AuthState";
import {Navigate} from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { userData } = ConsumeAuthState();
  // console.log("userData", userData);

  return userData.email ? <Navigate to="/userdashboard" />  : children ;
};

export default PublicRoute;



