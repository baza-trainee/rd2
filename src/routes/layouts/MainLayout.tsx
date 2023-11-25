import { Outlet } from "react-router-dom";

import { App } from "App";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";

export const MainLayout = (): JSX.Element => {
  return (
    <App>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </App>
  );
};
