import { GlobalStyles } from "./theme/GlobalStyled";

import React from "react";
import { AppRoutes } from "./components/contain/routes";

export const App = () => {

  return (
    <>
      <GlobalStyles/>
      <AppRoutes />
    </>
  );
}

