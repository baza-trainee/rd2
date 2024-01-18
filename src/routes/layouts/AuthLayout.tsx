import { Outlet } from "react-router-dom";

import { AuthContainer } from "components/Auth/AuthContainer/AuthContainer";
import { AuthHeader } from "components/Auth/AuthHeader/AuthHeader";
import { App } from "App";

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
