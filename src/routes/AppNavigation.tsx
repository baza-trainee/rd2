import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { PublicRoutes } from "routes/PublicRoutes/PublicRoutes";
import { AuthRoutes } from "routes/AuthRoutes/AuthRoutes";
import { AdminRoutes } from "routes/AdminRoutes/AdminRoutes";

export const AppNavigation = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Route>,
  ),
);
