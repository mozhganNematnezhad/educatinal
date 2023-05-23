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










// ******************
// ******************
// ******************
// اول به ابجکت هست
// const [userData, setUserData] = useState({}); 
// ّبرای این که با رفرش شدن ضفحه از بین نره
// باید اینجا از لوکال استورچ بخونه
// یعنی به جای یه ابجکت خالی از لوکال استورچ بخونه
// ******************
// ******************
// ******************
// اینجا باید اون یوزر روبگیریم از داخل لوکال استورچ
// const convertTojson = JSON.parse(localStorage.getItem("user-data"));
// ******************
// ******************
// ******************
// باید یا بگیم اینواز لوکال بخونه یا بگیم
// کسی نیست ویه
// {}
// خالی نیست
// useState(convertTojson || {}); //user
// ******************
// ******************
// ******************