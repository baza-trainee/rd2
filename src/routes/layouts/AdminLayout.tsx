import { Outlet } from "react-router-dom";

import { App } from "components/App";
import { AuthHeader } from "components/Auth/AuthHeader/AuthHeader";
import { AdminContainer } from "components/Admin/AdminContainer/AdminContainer";
import { ToolBar } from "components/Admin/SideBar/SideBar";

export const AdminLayout = () => {
  return (
    <App>
      <AuthHeader />

      <AdminContainer>
        <ToolBar />

        <Outlet />
      </AdminContainer>
    </App>
  );
};
