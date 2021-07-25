import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";

import { TRACKER_PATH } from "./paths";

const Loadable = (Component: any) => (props: any) => (
  <Suspense fallback={<h1>loading..</h1>}>
    <Component {...props} />
  </Suspense>
);

const TrackerList = Loadable(lazy(() => import("../pages/Tracker/List")));

export default function Router(): JSX.Element | null {
  return useRoutes([
    {
      path: TRACKER_PATH,
      element: <DashboardLayout />,
      children: [{ path: "/", element: <TrackerList /> }],
    },
  ]);
}
