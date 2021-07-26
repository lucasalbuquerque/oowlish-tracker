import React from "react";
import { Outlet } from "react-router-dom";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import Box from "@material-ui/core/Box";

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

export default function DashboardLayout(): JSX.Element {
  return (
    <RootStyle>
      <DashboardNavbar />
      <DashboardSidebar />
        <Box component="main" sx={{ flexGrow: 1, paddingTop: 12 }}>
          <Outlet />
        </Box>
    </RootStyle>
  );
}
