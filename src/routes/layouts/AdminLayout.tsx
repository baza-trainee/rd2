import { Outlet } from "react-router-dom";

import { App } from "components/App";
import { AuthHeader } from "components/Auth/AuthHeader/AuthHeader";
import { AdminContainer } from "components/Admin/AdminContainer/AdminContainer";

export const AdminLayout = () => {
  return (
    <App>
      <AuthHeader />

      <AdminContainer>
        <Outlet />
      </AdminContainer>
    </App>
  );
};
