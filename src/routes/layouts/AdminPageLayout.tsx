import { Outlet } from "react-router-dom";

import { AdminPageContainer } from "components/Admin/AdminPageContainer/AdminPageContainer";

export const AdminPageLayout = () => {
  return (
    <AdminPageContainer>
      <Outlet />
    </AdminPageContainer>
  );
};
