import { Outlet } from "react-router-dom";

import { App } from "App";
import { AuthHeader } from "components/Auth/AuthHeader/AuthHeader";
import { AdminContainer } from "components/Admin/AdminContainer/AdminContainer";
import { AdminPageContainer } from "components/Admin/AdminPageContainer/AdminPageContainer";
import { SideBar } from "components/Admin/sidebar/SideBar/SideBar";

export const AdminLayout = () => {
  return (
    <App>
      <AuthHeader />

      <AdminContainer>
        <SideBar />

        <AdminPageContainer>
          <Outlet />
        </AdminPageContainer>
      </AdminContainer>
    </App>
  );
};
