import React from "react";
import styled from "styled-components";

import List from "../components/List";

import CrashImg from "../assets/types/crash.svgin";
import SensesImg from "../assets/types/senses.svgin";
import HeartImg from "../assets/types/heart.svgin";
import KneeImg from "../assets/types/knee.svgin";
import TrainImg from "../assets/types/train.svgin";

const Section = styled.div`
  h2 {
    color: #424242;
    font-size: 24px;
    font-weight: 300;
    line-height: 31px;
    margin: 0 0 13px;
    grid-column: span 2;
  }
`;

const mocks = [
  {
    icon: CrashImg,
    name: "Wypadek samochodowy",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: SensesImg,
    name: "Utrata przytomności",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: HeartImg,
    name: "Zawał",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: KneeImg,
    name: "Oderwanie kończyny",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: TrainImg,
    name: "Zablokowany przejazd kolejowy",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

const RescueView = () => (
  <>
    <Section>
      <h2>Rodzaj wypadku</h2>
      <List items={mocks} nextView="/rescue-type" />
    </Section>
  </>
);

export default RescueView;
