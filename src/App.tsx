import React from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";

import Home from "./views/Home";

import styled, { createGlobalStyle } from "styled-components";

import "./App.scss";
import Social from "./components/Social/Social";

const InnerWindow = styled.div`
  background-color: var(--color-grey);
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  border: 1px solid var(--border-grey);
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary-gradient: linear-gradient(180deg, #3CAEAD 0%, #173F5F 100%);
    --color-primary-green: rgb(60, 174, 163);
    --color-primary-blue: rgba(23, 63, 95, 1);

    --color-light: #fff;
    --color-grey: #faf3f3;

    --border-grey: #d8d8d8;

    --shadow: 6px 9px 10px rgba(0, 0, 0, 0.25);
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <InnerWindow>
          <Nav theme="green" />
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
        </InnerWindow>
        <Social />
      </div>
    </>
  );
};

export default App;
