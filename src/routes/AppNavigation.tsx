import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import { ROUTES_ENUM } from "types/enums/routes.enum";
import { AuthLayout } from "routes/layouts/AuthLayout";
import { AdminLayout } from "routes/layouts/AdminLayout";
import { MainLayout } from "routes/layouts/MainLayout";

export const AppNavigation = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route index lazy={() => import("pages/About")} />
        <Route path={ROUTES_ENUM.ACTIVITY} lazy={() => import("pages/Activity")} />
        <Route path={ROUTES_ENUM.DEMINING} lazy={() => import("pages/Demining")} />
        <Route path={ROUTES_ENUM.CONTACTS} lazy={() => import("pages/Contacts")} />
        <Route path={ROUTES_ENUM.NOT_FOUND} lazy={() => import("pages/NotFound")} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path={ROUTES_ENUM.AUTH} lazy={() => import("pages/auth/Auth")} />,
        <Route path={ROUTES_ENUM.RESTORE} lazy={() => import("pages/auth/Restore")} />
        <Route
          path={ROUTES_ENUM.NEW_PASSWORD}
          lazy={() => import("pages/auth/NewPassword")}
        />
      </Route>
      ,
      <Route element={<AdminLayout />}>
        <Route
          index
          path={ROUTES_ENUM.ADMINPARTNERS}
          lazy={() => import("pages/adminPanel/Partners")}
        />
        <Route
          path={ROUTES_ENUM.ADMIN}
          element={<Navigate to={ROUTES_ENUM.ADMINPARTNERS} replace={true} />}
        />
        <Route
          path={ROUTES_ENUM.ADMINREPORTS}
          lazy={() => import("pages/adminPanel/Reports")}
        />
        <Route
          path={ROUTES_ENUM.ADMINOURCONTACTS}
          lazy={() => import("pages/adminPanel/OurContacts")}
        />
        <Route path={ROUTES_ENUM.ADMINFEEDBACK}>
          <Route index lazy={() => import("pages/adminPanel/Feedback")} />
          <Route
            path={ROUTES_ENUM.FEEDBACKDETAILS}
            lazy={() => import("pages/adminPanel/FeedbackDetails")}
          />
        </Route>
      </Route>
    </Route>,
  ),
);
