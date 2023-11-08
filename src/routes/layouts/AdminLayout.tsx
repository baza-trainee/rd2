import { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { AdminHeader } from "components/Admin/AdminHeader/AdminHeader";
import { App } from "components/App";

export const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("auth");
  }, [navigate]);

  return (
    <App>
      <AdminHeader />

      <Outlet />
    </App>
  );
};
