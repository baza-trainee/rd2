import {Route, createBrowserRouter, createRoutesFromElements, Navigate} from "react-router-dom";

import { ROUTES_ENUM } from "types/enums/routes.enum";
import { About } from "pages/About";
import { Activity } from "pages/Activity";
import { Demining } from "pages/Demining";
import { Contacts } from "pages/Contacts";
import { NotFound } from "pages/NotFound";
import { Auth } from "pages/auth/Auth";
import { Restore } from "pages/auth/Restore";
import { NewPassword } from "pages/auth/NewPassword";

import { MainLayout } from "routes/layouts/MainLayout";
import { AuthLayout } from "routes/layouts/AuthLayout";
import { AdminLayout } from "routes/layouts/AdminLayout";

import {Feedback} from "../pages/adminPanel/Feedback";
import {Reports} from "../pages/adminPanel/Reports";
import {Partners} from "../pages/adminPanel/Partners";
import {OurContacts} from "../pages/adminPanel/OurContacts";

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
      <Route element={<AuthLayout />}>
        <Route path={ROUTES_ENUM.AUTH} element={<Auth />} />,
        <Route path={ROUTES_ENUM.RESTORE} element={<Restore />} />
        <Route path={ROUTES_ENUM.NEW_PASSWORD} element={<NewPassword />} />
      </Route>
      ,
      <Route element={<AdminLayout />}>
        <Route index
               path={ROUTES_ENUM.ADMINPARTNERS} element={<Partners />}
        />
        <Route path={ROUTES_ENUM.ADMIN}
               element={<Navigate to={ROUTES_ENUM.ADMINPARTNERS} replace={true}/>}
        />
        <Route path={ROUTES_ENUM.ADMINREPORTS} element={<Reports />} />
        <Route path={ROUTES_ENUM.ADMINOURCONTACTS} element={<OurContacts />} />
        <Route path={ROUTES_ENUM.ADMINFEEDBACK} element={<Feedback />} />
      </Route>
    </Route>,
  ),
);
