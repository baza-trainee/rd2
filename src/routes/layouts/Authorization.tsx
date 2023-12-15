import { createContext, useState } from "react";
import { App } from "App";
import { AuthHeader } from "components/Auth/AuthHeader/AuthHeader";

import { AuthRoutes } from "routes/AuthRoutes/AuthRoutes";
import { AdminRoutes } from "routes/AdminRoutes/AdminRoutes";

import { checkIsLoggedIn } from "api/adminAuth";

import { ToolBar } from "../../components/Admin/sidebar/ToolBar/ToolBar";

import { AdminContainer } from "../../components/Admin/AdminContainer/AdminContainer";

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
        {isLoggedIn ? (
          <AdminContainer>
            <ToolBar />
            <AdminRoutes />
          </AdminContainer>
        ) : (
          <AuthRoutes />
        )}
      </AuthContext.Provider>
    </App>
  );
};
