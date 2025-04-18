import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const appContestProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  console.log(user);
  
  const [isSeller, setIsSeller] = useState(false);
  const value = { navigate, user, setUser, isSeller, setIsSeller };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
