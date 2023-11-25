import { Outlet } from "react-router-dom";

import { App } from "App";

import { AuthHeader } from "components/Auth/AuthHeader/AuthHeader";
import { AuthContainer } from "components/Auth/AuthContainer/AuthContainer";
import { PaperContainer } from "components/Auth/PaperContainer/PaperContainer";

export const AuthLayout = () => {
  return (
    <App>
      <AuthHeader />

      <AuthContainer>
        <PaperContainer>
          <Outlet />
        </PaperContainer>
      </AuthContainer>
    </App>
  );
};
