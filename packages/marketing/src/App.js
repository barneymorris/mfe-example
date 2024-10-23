import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { StylesProvider, ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";

const theme = createTheme();

export default () => {
  return (
    <div>
      <StylesProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/pricing" component={Pricing} />
              <Route path="/" component={Landing} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};
