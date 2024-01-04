import { Suspense, lazy } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { AuthLayout } from "routes/layouts/AuthLayout";
import { ROUTES_ENUM } from "types/enums/routes.enum";
import { Fallback } from "components/commonComponents/Fallback/Fallback";

const Auth = lazy(() => import("pages/auth/Auth"));
const Restore = lazy(() => import("pages/auth/Restore"));
const NewPassword = lazy(() => import("pages/auth/NewPassword"));
const NotFound = lazy(() => import("pages/public/NotFound"));

export const AuthRoutes = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES_ENUM.LOGIN} element={<Auth />} />
          <Route index element={<Navigate to={ROUTES_ENUM.LOGIN} />} />
          <Route path={ROUTES_ENUM.RESTORE} element={<Restore />} />
          <Route path={ROUTES_ENUM.NEW_PASSWORD} element={<NewPassword />} />
        </Route>

        <Route path={ROUTES_ENUM.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
