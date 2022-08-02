import { useState, createContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({});

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
