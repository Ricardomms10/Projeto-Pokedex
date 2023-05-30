import { GlobalStyles } from "./theme/GlobalStyled";

import React from "react";
import { AppRoutes } from "./contain/routes";
import { BackgroundProvider } from "./context/themeContext";

export const App = () => {

  return (
    <BackgroundProvider>
      <GlobalStyles />
      <AppRoutes />
    </BackgroundProvider>
  );
}

