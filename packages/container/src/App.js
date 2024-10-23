import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import {
  StylesProvider,
  createGenerateClassName,
  ThemeProvider,
} from "@mui/styles";
import { createTheme } from "@mui/material";

const theme = createTheme();
const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={MarketingApp} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};
