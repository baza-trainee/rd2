import { Suspense, lazy } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES_ENUM } from "types/enums/routes.enum";
import { Fallback } from "components/commonComponents/Fallback/Fallback";
import { AdminPageLayout } from "routes/layouts/AdminPageLayout";

const Feedback = lazy(() => import("pages/admin/Feedback"));
const FeedbackDetails = lazy(() => import("pages/admin/FeedbackDetails"));
const OurContacts = lazy(() => import("pages/admin/OurContacts"));
const Partners = lazy(() => import("pages/admin/Partners"));
const Reports = lazy(() => import("pages/admin/Reports"));
const ChangePassword = lazy(() => import("pages/admin/ChangePassword"));
const NotFound = lazy(() => import("pages/public/NotFound"));

export const AdminRoutes = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<AdminPageLayout />}>
          <Route path={ROUTES_ENUM.ADMIN_PARTNERS} element={<Partners />} />

          <Route
            index
            element={<Navigate to={ROUTES_ENUM.ADMIN_PARTNERS} replace={true} />}
          />

          <Route path={ROUTES_ENUM.ADMIN_REPORTS} element={<Reports />} />

          <Route path={ROUTES_ENUM.ADMIN_OUR_CONTACTS} element={<OurContacts />} />

          <Route path={ROUTES_ENUM.ADMIN_FEEDBACK}>
            <Route index element={<Feedback />} />
            <Route path={ROUTES_ENUM.FEEDBACK_DETAILS} element={<FeedbackDetails />} />
          </Route>

          <Route path={ROUTES_ENUM.CHANGE_PASSWORD} element={<ChangePassword />} />
        </Route>

        <Route path={ROUTES_ENUM.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
