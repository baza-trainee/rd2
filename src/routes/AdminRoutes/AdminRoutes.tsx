import { Suspense, lazy } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { AdminLayout } from "routes/layouts/AdminLayout";
import { ROUTES_ENUM } from "types/enums/routes.enum";
import { Fallback } from "components/commonComponents/Fallback/Fallback";

const Feedback = lazy(() => import("pages/adminPanel/Feedback"));
const FeedbackDetails = lazy(() => import("pages/adminPanel/FeedbackDetails"));
const OurContacts = lazy(() => import("pages/adminPanel/OurContacts"));
const Partners = lazy(() => import("pages/adminPanel/Partners"));
const Reports = lazy(() => import("pages/adminPanel/Reports"));

export const AdminRoutes = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index path={ROUTES_ENUM.ADMIN_PARTNERS} element={<Partners />} />
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
      </Routes>
    </Suspense>
  );
};
