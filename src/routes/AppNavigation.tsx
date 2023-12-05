import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { PublicRoutes } from "routes/PublicRoutes/PublicRoutes";
import { Authorization } from "routes/layouts/Authorization";

export const AppNavigation = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/admin/*" element={<Authorization />} />
    </Route>,
  ),
);
