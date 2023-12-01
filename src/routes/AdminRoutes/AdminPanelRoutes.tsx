import { Suspense, lazy } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { AdminPanelLayout } from "routes/layouts/AdminPanelLayout";
import { ROUTES_ENUM } from "types/enums/routes.enum";
import { Fallback } from "components/commonComponents/Fallback/Fallback";

const Feedback = lazy(() => import("pages/admin/Feedback"));
const FeedbackDetails = lazy(() => import("pages/admin/FeedbackDetails"));
const OurContacts = lazy(() => import("pages/admin/OurContacts"));
const Partners = lazy(() => import("pages/admin/Partners"));
const Reports = lazy(() => import("pages/admin/Reports"));
const NotFound = lazy(() => import("pages/public/NotFound"));

export const AdminPanelRoutes = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<AdminPanelLayout />}>

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

        </Route>

        <Route path={ROUTES_ENUM.NOT_FOUND} element={<NotFound />} />

      </Routes>
    </Suspense>
  );
};
