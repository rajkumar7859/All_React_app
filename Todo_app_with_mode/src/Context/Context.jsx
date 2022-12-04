const { createContext, useState } = require("react");

export const AppContext = createContext();

export const Context = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggoleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <AppContext.Provider
      value={{ theme, isTheme: theme === "light", toggoleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};
