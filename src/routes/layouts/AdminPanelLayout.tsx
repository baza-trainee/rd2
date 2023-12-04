import { useEffect } from "react";

import { Outlet } from "react-router-dom";

import { AdminContainer } from "components/Admin/AdminContainer/AdminContainer";
import { AdminPageContainer } from "components/Admin/AdminPageContainer/AdminPageContainer";
import { ToolBar } from "components/Admin/sidebar/ToolBar/ToolBar";

export const AdminPanelLayout = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AdminContainer>
      <ToolBar />

      <AdminPageContainer>
        <Outlet />
      </AdminPageContainer>
    </AdminContainer>
  );
};
