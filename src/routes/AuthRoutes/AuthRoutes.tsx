import { Suspense, lazy } from "react";

import { Route, Routes } from "react-router-dom";

import { AuthLayout } from "routes/layouts/AuthLayout";
import { ROUTES_ENUM } from "types/enums/routes.enum";
import { Fallback } from "components/commonComponents/Fallback/Fallback";

const Auth = lazy(() => import("pages/auth/Auth"));
const Restore = lazy(() => import("pages/auth/Restore"));
const NewPassword = lazy(() => import("pages/auth/NewPassword"));

export const AuthRoutes = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<Auth />} />
          <Route path={ROUTES_ENUM.RESTORE} element={<Restore />} />
          <Route path={ROUTES_ENUM.NEW_PASSWORD} element={<NewPassword />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
