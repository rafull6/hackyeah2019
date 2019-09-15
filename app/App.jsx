import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import SplashView from "./views/SplashView";
import HomeView from "./views/HomeView";
import RescueView from "./views/RescueView";
import RescueTypeView from "./views/RescueTypeView";
import RescuePersonView from "./views/RescuePersonView";
import MapView from "./views/MapView";
import RescueStepsView from "./views/RescueStepsView";
import SurvivalView from "./views/SurvivalView";
import SurvivalDetailsView from "./views/SurvivalDetailsView";
import QuizView from "./views/QuizView";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    --backgroundColor: #EBEBEB;
    --primaryColor: #D81E05;
    background: var(--backgroundColor);
    font-family: 'Futura', sans-serif;
    padding: 0;
    margin: 0;
    height: 100%;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const Content = styled.div`
  padding: 37px 24px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  height: 0;
  overflow: auto;
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
        <Route path="/rescue-type" exact component={RescueTypeView} />
        <Route path="/rescue-person" exact component={RescuePersonView} />
        <Route path="/rescue-steps/:key" exact component={RescueStepsView} />
        <Route path="/rescue-steps" exact component={RescueStepsView} />
        <Route path="/survival" exact component={SurvivalView} />
        <Route path="/survival-details" exact component={SurvivalDetailsView} />
        <Route path="/quiz" exact component={QuizView} />
      </Content>
    </Router>
  </>
);

export default App;
