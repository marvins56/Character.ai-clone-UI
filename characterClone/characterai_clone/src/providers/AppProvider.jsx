import React from "react";
import { ReduxProvider } from "./ReduxProvider";
import { AppThemeProvider } from "./AppThemeProvider";

export const AppProviders = (props) => {
  return (
    <ReduxProvider>
      <AppThemeProvider>{props.children}</AppThemeProvider>
    </ReduxProvider>
  );
};
