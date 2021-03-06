import React from "react";
import styled, { css } from "styled-components";
import HomeButton from "../components/HomeButton";
import HomeButtonLink from "../components/HomeButtonLink";
import microphone from "../assets/microphone.svg";
import location from "../assets/location.svg";
import { initRecognition } from "../utils/VoiceRecognition";

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

  ${props =>
    props.type === "footer" &&
    css`
      display: flex;
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      margin: 0;
    `};
`;

const HomeView = ({ history }) => {
  const openHelp = res => {
    const filters = {
      case1: "zawał",
      case2: "wypadek"
    };

    for (let key in filters) {
      if (res[0].includes(filters[key])) {
        history.push(`/rescue-steps/${key}`);
      }
    }
  };

  const listen = () => {
    document.addEventListener(
      "deviceready",
      () => {
        initRecognition().then(res => {
          openHelp(res);
        });
      },
      false
    );
  };

  return (
    <>
      <Section>
        <HomeButtonLink href="tel:+48667900601" >
          Zadzwoń 112
        </HomeButtonLink>
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
        <HomeButton onClick={() => history.push("/survival")}>
          Survival
          <br />
          Kit
        </HomeButton>
        <HomeButton onClick={() => history.push("/quiz")}>Quiz</HomeButton>
      </Section>

      <Section>
        <h2>Lokalny alarm</h2>
        <HomeButton onClick={() => history.push("/alert")}>
          Aktywuj lokalny alarm
        </HomeButton>
      </Section>

      <Section type="footer">
        <HomeButton type="3" onClick={listen}>
          <img src={microphone} />
          <span>
            Wyszukaj <br />
            głosem
          </span>
        </HomeButton>
        <HomeButton type="4" onClick={() => history.push("/map")}>
          <img src={location} />
          <span>
            Znajdź najbliższy <br />
            punkt NFZ
          </span>
        </HomeButton>
      </Section>
    </>
  );
};

export default HomeView;
