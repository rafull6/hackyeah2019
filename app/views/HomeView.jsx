import React from "react";
import styled, { css } from "styled-components";
import HomeButton from "../components/HomeButton";
import microphone from '../assets/microphone.svg';
import location from '../assets/location.svg';

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

  ${props => props.type === 'footer' && css`
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 0;
  `};
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

    <Section type="footer">
      <HomeButton type="3" onClick={() => history.push("/rescue")}>
        <img src={microphone} />
        <span>Wyszukaj <br />głosem</span>
      </HomeButton>
      <HomeButton type="4" onClick={() => history.push("/map")}>
        <img src={location} />
        <span>Znajdź najbliższy <br />punkt NFZ</span>
      </HomeButton>
    </Section>

  </>
);

export default HomeView;