import React from "react";
import {
  DummyVIewWithDefaultContainer,
  DummyVIewWithoutDefaultContainer,
} from "./views";
import { DocumentTitle } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./config";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <DocumentTitle title="Home">
              <DummyVIewWithDefaultContainer />
            </DocumentTitle>
          </Route>
          <Route exact path="pricing/packages">
            <DocumentTitle title="Packages">
              <DummyVIewWithDefaultContainer />
            </DocumentTitle>
          </Route>
          {/* Showcases */}
          <Route exact path="/product/quickcells-graphs">
            <DocumentTitle title="CC1C Graphs">
              <DummyVIewWithDefaultContainer />
            </DocumentTitle>
          </Route>
          <Route exact path="/product/quickcells-solvers">
            <DocumentTitle title="CC1C Solvers">
              <DummyVIewWithDefaultContainer />
            </DocumentTitle>
          </Route>
          {/* Contact */}
          <Route exact path="/contact">
            <DocumentTitle title="contact">
              <DummyVIewWithoutDefaultContainer />
            </DocumentTitle>
          </Route>
          {/* Legal */}
          <Route path="/legal/privacy">
            <DocumentTitle title="Privacy Policy">
              <DummyVIewWithDefaultContainer />
            </DocumentTitle>
          </Route>
          <Route path="/legal/tos">
            <DocumentTitle title="Terms of Service">
              <DummyVIewWithDefaultContainer />
            </DocumentTitle>
          </Route>
          <Route path="/legal/dpa">
            <DocumentTitle title="Data Processing Adendum">
              <DummyVIewWithDefaultContainer />
            </DocumentTitle>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
