import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({
  user: "",
  setUser: () => {},
});

function AppcontextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("email"));

  const ctxVal = {
    user,
    setUser,
  };
  return <AppContext.Provider value={ctxVal}>{children}</AppContext.Provider>;
}
export const useAppContext = () => {
  return useContext(AppContext);
};
export default AppcontextProvider;
