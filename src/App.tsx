import React from "react";
import {
  HomepageContainer,
  GraphpageContainer,
  SolverpageContainer,
  EssayVersion,
  PersonalQuote,
  TarifsPremium,
  TarifsIntro, 
  PricingTable,
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
              <HomepageContainer />
            </DocumentTitle>
          </Route>
          <Route exact path="/pricing/packages">
            <DocumentTitle title="Packages">
              <PricingTable />
            </DocumentTitle>
          </Route>
          {/* Showcases */}
          <Route exact path="/product/quickcells-graphs">
            <DocumentTitle title="CC1C Graphs">
              <GraphpageContainer />
            </DocumentTitle>
          </Route>
          <Route exact path="/product/quickcells-solvers">
            <DocumentTitle title="CC1C Solvers">
              <SolverpageContainer />
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
          {/* Version d'essai */}
          <Route exact path="/essay-version">
            <DocumentTitle title="essay version">
              <EssayVersion />
            </DocumentTitle>
          </Route>
          {/* Devis personnalisé */}
          <Route exact path="/personalized-quote">
            <DocumentTitle title="personalized quote">
              <PersonalQuote />
            </DocumentTitle>
          </Route>
          {/* Tarifs Premium */}
          <Route exact path="/tarifs-premium">
            <DocumentTitle title="tarifs premium">
              <TarifsPremium />
            </DocumentTitle>
          </Route>
          {/* Tarifs Intro */}
          <Route exact path="/tarifs-intro">
            <DocumentTitle title="tarifs introduction">
              <TarifsIntro />
            </DocumentTitle>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
