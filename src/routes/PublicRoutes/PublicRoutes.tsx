import { Suspense, lazy } from "react";

import { Route, Routes } from "react-router-dom";

import { MainLayout } from "routes/layouts/MainLayout";
import { ROUTES_ENUM } from "types/enums/routes.enum";
import { Fallback } from "components/commonComponents/Fallback/Fallback";

const About = lazy(() => import("pages/About"));
const Activity = lazy(() => import("pages/Activity"));
const Contacts = lazy(() => import("pages/Contacts"));
const Demining = lazy(() => import("pages/Demining"));
const NotFound = lazy(() => import("pages/NotFound"));

export const PublicRoutes = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path={ROUTES_ENUM.ACTIVITY} element={<Activity />} />
          <Route path={ROUTES_ENUM.DEMINING} element={<Demining />} />
          <Route path={ROUTES_ENUM.CONTACTS} element={<Contacts />} />
          <Route path={ROUTES_ENUM.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
