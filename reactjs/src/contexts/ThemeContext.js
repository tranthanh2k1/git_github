import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // State
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      background: "rgb(240, 240, 240)",
      color: "black",
    },
    dark: {
      background: "rgb(39, 39, 39)",
      color: "white",
    },
  });

  // Function thay đổi theme
  const toggleTheme = () => {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  };

  // Context data: obj chứa data và fucntion truyền đi
  const themeContextData = {
    theme,
    toggleTheme,
  };

  // Return Provider
  return (
    // children: tất cả những components con nằm trong <ThemeContextProvider/>
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
