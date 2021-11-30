import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const useAuth = (authCallback) => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("AuthContext must be placed within AuthProvider");
  if (authCallback) {
    const config = authCallback(context);
    return { ...context, config };
  }
  return context;
};

export default useAuth;
