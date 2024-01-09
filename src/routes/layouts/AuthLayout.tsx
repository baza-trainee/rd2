import { Outlet } from "react-router-dom";

import { AuthContainer } from "components/Auth/AuthContainer/AuthContainer";
import { App } from "App";
import { AuthHeader } from "components/Auth/AuthHeader/AuthHeader";

export const AuthLayout = () => {
  return (
    <App>
      <AuthHeader />

      <AuthContainer>
        <Outlet />
      </AuthContainer>
    </App>
  );
};
