import React, { useEffect } from "react";
import styled from "styled-components";

import ScrollList from "../components/ScrollList";

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
  "Jak zmienić koło?",
  "Jak wyciągnąć auto ze śniegu?",
  "Jak wymienić plyn do spryskiwaczy?"
];

const SurvivalView = ({ history }) => (
  <>
    <Section>
      <h2>Samochód</h2>
      <ScrollList items={mocks} nextView="/survival-details" />
    </Section>

    <Section>
      <h2>Lorem Ipsum</h2>
      <ScrollList items={mocks} nextView="/survival-details" />
    </Section>
  </>
);

export default SurvivalView;
