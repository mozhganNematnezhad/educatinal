import { createContext, useState } from "react";

export const themeContext = createContext();

const ThemeState = ({ children }) => {
  const getTheme = localStorage.getItem("theme")
  // console.log("getTheme",getTheme)
  const [theme, setTheme] = useState(getTheme||"light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeState;



