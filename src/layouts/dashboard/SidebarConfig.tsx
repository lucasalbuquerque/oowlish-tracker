import React from "react";
import { Schedule } from "@material-ui/icons";
import { TRACKER_PATH } from "../../routes/paths";

const sidebarConfig = [
  {
    title: "Time",
    path: TRACKER_PATH,
    icon: <Schedule />,
  },
];

export default sidebarConfig;
