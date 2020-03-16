import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import PageBase from "./components/PageBase/PageBase";

import { Home, About, Skills, Experience, Projects } from "./views";

import { AnimationProvider } from "./lib/context";

const App = () => {
  return (
    <AnimationProvider>
      <PageBase>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route exact path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/skills' component={Skills} />
          <Route path='/experience' component={Experience} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </PageBase>
    </AnimationProvider>
  );
};

export default App;
