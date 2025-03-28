import { createContext, useContext, useState } from "react";

export const AuthContext = createContext<any>(null);


export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }: any) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("app_user") || '""'));

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
