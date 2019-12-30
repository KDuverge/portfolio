import React from "react";
import { Route, Switch } from "react-router-dom";

import PageBase from "./components/PageBase/PageBase";

import { Home, About, Skills } from "./views";

import { AnimationProvider } from "./lib/context";

const App = () => {
  return (
    <AnimationProvider>
      <PageBase>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </PageBase>
    </AnimationProvider>
  );
};

export default App;
