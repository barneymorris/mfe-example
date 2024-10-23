import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  ThemeProvider,
  createGenerateClassName,
} from "@mui/styles";
import { createTheme } from "@mui/material";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const theme = createTheme();
const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Switch>
              <Route path="/auth/signin" component={SignIn} />
              <Route path="/auth/signup" component={SignUp} />
            </Switch>
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};
