import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { ROUTES_ENUM } from "types/enums/routes.enum";
import { MainLayout } from "routes/layouts/MainLayout";
import { About } from "pages/About";
import { Activity } from "pages/Activity";
import { Demining } from "pages/Demining";
import { Contacts } from "pages/Contacts";
import { NotFound } from "pages/NotFound";
import { Auth } from "pages/Auth";
import { Restore } from "pages/Restore";

import { AuthLayout } from "./layouts/AuthLayout";

export const AppNavigation = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route path={ROUTES_ENUM.HOME} element={<About />} />
        <Route path={ROUTES_ENUM.ACTIVITY} element={<Activity />} />
        <Route path={ROUTES_ENUM.DEMINING} element={<Demining />} />
        <Route path={ROUTES_ENUM.CONTACTS} element={<Contacts />} />
        <Route path={ROUTES_ENUM.NOT_FOUND} element={<NotFound />} />
      </Route>
      ,
      <Route path={ROUTES_ENUM.ADMIN} element={<AuthLayout />}>
        <Route path={ROUTES_ENUM.AUTH} element={<Auth />} />,
        <Route path={ROUTES_ENUM.RESTORE} element={<Restore />} />
      </Route>
    </Route>,
  ),
);
