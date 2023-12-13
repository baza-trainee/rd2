import { Outlet } from "react-router-dom";

import { AdminPageContainer } from "components/Admin/AdminPageContainer/AdminPageContainer";

export const AdminPanelLayout = () => {

  return (
    <AdminPageContainer>
      <Outlet />
    </AdminPageContainer>
  );
};
