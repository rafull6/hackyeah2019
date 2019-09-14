import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import SplashView from "./views/SplashView";
import HomeView from "./views/HomeView";
import RescueView from "./views/RescueView";

const GlobalStyle = createGlobalStyle`
  body {
    --backgroundColor: #EBEBEB;
    --primaryColor: #D81E05;
    background: var(--backgroundColor);
    font-family: 'Futura', sans-serif;
    padding: 0;
    margin: 0;
  }
`;

const Content = styled.div`
  padding: 37px 24px;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Header />
      <Content>
        <Route path="/" exact component={SplashView} />
        <Route path="/home" exact component={HomeView} />
        <Route path="/rescue" exact component={RescueView} />
      </Content>
    </Router>
  </>
);

export default App;
