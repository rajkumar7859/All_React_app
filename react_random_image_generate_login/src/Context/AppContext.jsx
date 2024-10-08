import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);

  const loginUser = (token) => {
    setIsAuth(true);
    setToken(token);
    console.log(token);
  };

  const logoutUser = () => {
    setIsAuth(false);
    setToken(null);
  };

  return (
    <AppContext.Provider value={{ isAuth, loginUser, logoutUser, token }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
