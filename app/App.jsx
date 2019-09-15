// import React, { useState, useEffect } from "react";
// import { initRecognition } from './utils/VoiceRecognition';

// const App = () => {

//   const [aaa, setAaa] = useState('Heoadadasdsadooo');

//   const pronounce = sayArray => {
//     if (sayArray) {
//       sayArray.forEach(element => {
//         TTS
//           .speak({
//             text: element,
//             locale: 'pl-PL',
//             rate: 0.75
//           });
//       });
//     }
//   }

//   useEffect(() => {
//     document.addEventListener('deviceready', () => {
//       initRecognition().then(res => {
//         pronounce(res);
//       })

//     }, false);
//   }, [])

//   return <div id="app">{aaa}</div>
// };
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import SplashView from "./views/SplashView";
import HomeView from "./views/HomeView";
import RescueView from "./views/RescueView";
import RescueTypeView from "./views/RescueTypeView";
import RescuePersonView from "./views/RescuePersonView";
import MapView from "./views/MapView";

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
        <Route path="/rescue-type" exact component={RescueTypeView} />
        <Route path="/rescue-person" exact component={RescuePersonView} />
        <Route path="/map" exact component={MapView} />
      </Content>
    </Router>
  </>
);

export default App;
