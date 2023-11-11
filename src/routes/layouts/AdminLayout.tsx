import { Outlet } from "react-router-dom";

import { App } from "components/App";
import { AuthHeader } from "components/Auth/AuthHeader/AuthHeader";

export const AdminLayout = () => {
  return (
    <App>
      <AuthHeader />

      <Outlet />
    </App>
  );
};
