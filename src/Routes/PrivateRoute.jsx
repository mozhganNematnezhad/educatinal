import React from "react";
import { ConsumeAuthState } from "Context/AuthContext/AuthState";
import {Navigate} from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { userData } = ConsumeAuthState();
  
  return userData.email ? children : <Navigate to="/login" />;
};

export default PrivateRoute;






