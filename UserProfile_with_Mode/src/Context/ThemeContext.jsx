import { createContext, useState } from "react";

export const ThemeContextProvider = createContext();

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContextProvider.Provider
      value={{ theme, isTheme: theme === "light", handleMode }}
    >
      {children}
    </ThemeContextProvider.Provider>
  );
};