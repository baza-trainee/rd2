import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { ROUTES_ENUM } from "../types/enums/routes.enum";
import { MainLayout } from "./layouts/MainLayout";
import About from "../pages/About";
import Activity from "../pages/Activity";
import Demining from "../pages/Demining";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";

export const AppNavigation = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path={ROUTES_ENUM.HOME} element={<About />} />
      <Route path={ROUTES_ENUM.ACTIVITY} element={<Activity />} />
      <Route path={ROUTES_ENUM.DEMINING} element={<Demining />} />
      <Route path={ROUTES_ENUM.CONTACTS} element={<Contacts />} />
      <Route path={ROUTES_ENUM.NOT_FOUND} element={<NotFound />} />
    </Route>,
  ),
);
