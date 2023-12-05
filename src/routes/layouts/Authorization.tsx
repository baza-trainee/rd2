import { createContext, useState } from "react";
import { App } from "App";
import { AuthHeader } from "components/Auth/AuthHeader/AuthHeader";

import { AuthRoutes } from "routes/AuthRoutes/AuthRoutes";
import { AdminPanelRoutes } from "routes/AdminRoutes/AdminRoutes";

import { checkIsLoggedIn } from "api/adminAuth";

type ContextValueProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (newIsLoggedIn: boolean) => void;
};

export const AuthContext = createContext<ContextValueProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const Authorization = () => {
  const initialState = checkIsLoggedIn();
  const [isLoggedIn, setIsLoggedIn] = useState(initialState);

  return (
    <App>
      <AuthHeader />

      <AuthContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
        }}
      >
        {isLoggedIn ? <AdminPanelRoutes /> : <AuthRoutes />}
      </AuthContext.Provider>
    </App>
  );
};
