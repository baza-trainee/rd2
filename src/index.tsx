import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import reportWebVitals from "reportWebVitals";

import { AppNavigation } from "routes/AppNavigation";

const root = document.getElementById("root") as HTMLDivElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={AppNavigation} />
  </React.StrictMode>,
);

reportWebVitals();
