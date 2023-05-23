import { createContext, useState, useContext} from "react";
// import { useJwt } from "react-jwt";
// import Cookies from "universal-cookie";

const authContext = createContext();

const AuthState = ({ children }) => {

  const convertTojson = JSON.parse(localStorage.getItem("user-data"));
  const [userData, setUserData] = useState(convertTojson || {}); //user
// console.log("userData---AuthState",userData);


  return (
    <authContext.Provider value={{ userData, setUserData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthState;

export const ConsumeAuthState = () => useContext(authContext);








