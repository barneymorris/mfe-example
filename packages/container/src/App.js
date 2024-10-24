import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

export default () => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <div>
            <Header
              isSignedIn={isSignIn}
              onSignOut={() => setIsSignIn(false)}
            />
            <Suspense fallback={<h1>Loading...</h1>}>
              <Switch>
                <Route path="/auth">
                  <AuthLazy onSignIn={() => setIsSignIn(true)} />
                </Route>
                <Route path="/" component={MarketingLazy} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Suspense>
          </div>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};
