import { PropsWithChildren } from "react";

import { Navigate } from "react-router-dom";

import { App } from "App";
import { AuthHeader } from "components/Auth/AuthHeader/AuthHeader";
import { AdminContainer } from "components/Admin/AdminContainer/AdminContainer";
import { ToolBar } from "components/Admin/sidebar/ToolBar/ToolBar";
import { AccessTokenService } from "services/AccessTokenService";
import { checkIsTokenValid } from "helpers/auth/checkIsTokenValid";

export const AdminLayout = ({ children }: PropsWithChildren) => {
  const { getAccessToken } = new AccessTokenService();
  const isAuthorizated = checkIsTokenValid(getAccessToken());

  return (
    <App>
      <AuthHeader />

      {isAuthorizated ? (
        <>
          <AdminContainer>
            <ToolBar />

            {children}
          </AdminContainer>
        </>
      ) : (
        <Navigate to="/auth" replace />
      )}
    </App>
  );
};
