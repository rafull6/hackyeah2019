import React from "react";
import styled from "styled-components";

import HomeButton from "../components/HomeButton";

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 13px;
  margin-bottom: 23px;
  h2 {
    color: #424242;
    font-size: 24px;
    font-weight: 300;
    line-height: 31px;
    margin: 0;
    grid-column: span 2;
  }
`;

const HomeView = ({ history }) => (
  <>
    <Section>
      <HomeButton type="1" onClick={() => history.push("/rescue")}>
        Ratuj Życie
      </HomeButton>
    </Section>

    <Section>
      <h2>Instrukcje</h2>
      <HomeButton type="2">
        Zabezpiecz
        <br />
        Wypadek
      </HomeButton>
      <HomeButton type="2">
        Instrukcja
        <br />
        Pogotowia
      </HomeButton>
    </Section>

    <Section>
      <h2>Dodatki</h2>
      <HomeButton>
        Survival
        <br />
        Kit
      </HomeButton>
      <HomeButton>Quiz</HomeButton>
    </Section>
  </>
);

export default HomeView;
