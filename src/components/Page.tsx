import React, { forwardRef, ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Box, BoxProps } from "@material-ui/core";

interface PageProps extends BoxProps {
  children: ReactNode;
  title?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>(({ children, title = "", ...other }, ref) => (
  <Box ref={ref} {...other}>
    <Helmet>
      <title>
        OowlishTracking -
        {" "}
        {title}
      </title>
    </Helmet>
    {children}
  </Box>
));

export default Page;
