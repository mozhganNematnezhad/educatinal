import React, { useEffect, useState } from "react";
import { createContext ,useContext } from "react";

const AdminContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  adminProfile: false,
  notification: false,
};

const AdminContextState = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);

// سایدبار من باید  ترو باشه در حالت پیش فرض یعنی باید وجود داشته باشد
// یهنی وفتی ادمین میاد داخل این سایدبار باید باز باشه
  const [activeAdminMenu, setActiveAdminMenu] = useState(true);

  
  const [isClicked, setIsClicked] = useState(initialState);

  
  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  // handelResize menu
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1000) {
      setActiveAdminMenu(false);
    } else {
      setActiveAdminMenu(true);
    }
  }, [screenSize]);

  return (
    <AdminContext.Provider
      value={{
        activeAdminMenu,
        setActiveAdminMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextState;


export const  ConsumeAdminState =()=>useContext(AdminContext)