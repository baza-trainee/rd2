import { Suspense, lazy } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { AuthLayout } from "routes/layouts/AuthLayout";
import { ROUTES_ENUM } from "types/enums/routes.enum";
import { Fallback } from "components/commonComponents/Fallback/Fallback";

const Auth = lazy(() => import("pages/auth/Auth"));
const ForgotPassword = lazy(() => import("pages/auth/ForgotPassword"));
const UpdatePassword = lazy(() => import("pages/auth/UpdatePassword"));
const NotFound = lazy(() => import("pages/public/NotFound"));

export const AuthRoutes = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES_ENUM.LOGIN} element={<Auth />} />
          <Route index element={<Navigate to={ROUTES_ENUM.LOGIN} />} />
          <Route path={ROUTES_ENUM.FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path={ROUTES_ENUM.UPDATE_PASSWORD} element={<UpdatePassword />} />
          <Route path={ROUTES_ENUM.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
