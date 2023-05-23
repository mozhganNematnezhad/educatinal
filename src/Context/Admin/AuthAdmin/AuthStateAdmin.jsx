import { createContext, useContext, useState } from "react";

export const authAdContext = createContext();

const AuthStateAdmin = ({ children }) => {

  
  const convertToJson = JSON.parse(localStorage.getItem("admin-data"));
  const [admin, setAdmin] = useState(convertToJson || {});
  // console.log("adminData", admin);

  return (
    <authAdContext.Provider value={{ admin, setAdmin }}>
      {children}
    </authAdContext.Provider>
  );
};

export default AuthStateAdmin;

export const ConsumeAuthAdState = () => useContext(authAdContext);
