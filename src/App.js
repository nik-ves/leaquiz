import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/HomePage";
import ChampionPage from "./pages/ChampionPage";
import Logo from "./components/UI/Logo";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Fragment>
      <GlobalStyles />

      <Logo />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/champion" exact>
          <ChampionPage />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
