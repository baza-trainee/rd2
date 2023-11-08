import { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { AuthHeader } from "components/Auth/AuthHeader/AuthHeader";
import { App } from "components/App";

import { AuthContainer } from "features/components/auth/AuthContainer/AuthContainer";

export const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("auth");
  }, [navigate]);

  return (
    <App>
      <AuthHeader />

      <AuthContainer>
        <Outlet />
      </AuthContainer>
    </App>
  );
};
