import { AdminPageContainer } from "components/Admin/AdminPageContainer/AdminPageContainer";
import { Outlet } from "react-router-dom";

export const AdminPageLayout = () => {
  return (
    <AdminPageContainer>
      <Outlet />
    </AdminPageContainer>
  );
};
