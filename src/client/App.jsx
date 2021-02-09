import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { routes } from "./utils/constants/routes";
import "./App.scss";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 996px;
  margin: auto;
  display: flex;
  & > div {
    margin: 0 16px;
    width: 100%;
  }
`;

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Switch>
        {routes.map(({ ...rest }, i) => (
          <Route {...rest} key={i} />
        ))}
      </Switch>
    </Wrapper>
  </BrowserRouter>
);

export default App;
