import React, { ReactNode } from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, ThemeOptions, createTheme } from "@material-ui/core/styles";
import StyledEngineProvider from "@material-ui/core/StyledEngineProvider";
import componentsOverride from "./overrides";

import palette from "./palette";
import typography from "./typography";
import GlobalStyles from "./globalStyles";

type ThemeConfigProps = {
  children: ReactNode;
};

export default function ThemeConfig({ children }: ThemeConfigProps): JSX.Element {
  
  const themeOptions: ThemeOptions = {
    palette: { ...palette.light, mode: "light" },
    typography,
    direction: "ltr",
  };

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
