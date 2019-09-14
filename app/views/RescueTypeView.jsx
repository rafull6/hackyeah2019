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
    name: "Resustytacja serca",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Krwotok",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

const RescueTypeView = () => (
  <>
    <Section>
      <h2>Wypadek samochodowy</h2>
      <List items={mocks} nextView="/rescue-person" />
    </Section>
  </>
);

export default RescueTypeView;
