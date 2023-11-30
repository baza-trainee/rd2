import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import { ROUTES_ENUM } from "types/enums/routes.enum";
import { AdminAuthLayout } from "routes/layouts/AdminAuthLayout";
import { AdminPanelLayout } from "routes/layouts/AdminPanelLayout";
import { MainLayout } from "routes/layouts/MainLayout";
import {AdminLayout} from "routes/layouts/AdminLayout";

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

      <Route path={ROUTES_ENUM.ADMIN} element={<AdminLayout />}/>

      <Route path={"/auth"} element={<AdminAuthLayout />}>
            <Route path={"/auth"} lazy={() => import("pages/auth/Auth")} />
            <Route path={ROUTES_ENUM.RESTORE} lazy={() => import("pages/auth/Restore")} />
            <Route
                path={ROUTES_ENUM.NEW_PASSWORD}
                lazy={() => import("pages/auth/NewPassword")}
            />
      </Route>

        <Route path={"/admin-panel"} element={<AdminPanelLayout />}>
            <Route
                index
                path={ROUTES_ENUM.ADMIN_PARTNERS}
                lazy={() => import("pages/adminPanel/Partners")}
            />

            <Route
                  path={"/admin-panel"}
                  element={<Navigate to={ROUTES_ENUM.ADMIN_PARTNERS}/>}
              />
            <Route
                path={ROUTES_ENUM.ADMIN_REPORTS}
                lazy={() => import("pages/adminPanel/Reports")}
            />
            <Route
                path={ROUTES_ENUM.ADMIN_OUR_CONTACTS}
                lazy={() => import("pages/adminPanel/OurContacts")}
            />
            <Route path={ROUTES_ENUM.ADMIN_FEEDBACK}>
                <Route index lazy={() => import("pages/adminPanel/Feedback")} />
                <Route
                    path={ROUTES_ENUM.FEEDBACK_DETAILS}
                    lazy={() => import("pages/adminPanel/FeedbackDetails")}
                />
            </Route>
        </Route>

    </Route>,
  ),
);
