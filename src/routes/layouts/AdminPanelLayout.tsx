import { Outlet } from "react-router-dom";

import { AdminContainer } from "components/Admin/AdminContainer/AdminContainer";
import { AdminPageContainer } from "components/Admin/AdminPageContainer/AdminPageContainer";
import { ToolBar } from "components/Admin/sidebar/ToolBar/ToolBar";
import {App} from "../../App";
import {AuthHeader} from "../../components/Auth/AuthHeader/AuthHeader";

export const AdminPanelLayout = () => {
  return (
      <App>

          <AuthHeader />

      <AdminContainer>
        <ToolBar />

        <AdminPageContainer>
          <Outlet />
        </AdminPageContainer>
      </AdminContainer>
          </App>
  );
};
