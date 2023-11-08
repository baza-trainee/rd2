import { Outlet } from "react-router-dom";

import { AuthHeader } from "components/Auth/AuthHeader/AuthHeader";
import { App } from "components/App";

import { AuthContainer } from "features/components/auth/AuthContainer/AuthContainer";

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
