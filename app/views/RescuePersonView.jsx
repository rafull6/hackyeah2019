import React from "react";
import styled from "styled-components";

import List from "../components/List";

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
    name: "Dorosły"
  },
  {
    name: "Niemowlę"
  },
  {
    name: "Dziecko"
  }
];

const RescuePersonView = () => (
  <>
    <Section>
      <h2>Resustytacja</h2>
      <List items={mocks} nextView={"/rescue-steps"} center />
    </Section>
  </>
);

export default RescuePersonView;
