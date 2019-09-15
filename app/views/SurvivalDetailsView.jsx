import React, { useEffect } from "react";
import styled from "styled-components";

import ScrollList from "../components/ScrollList";

import SurvivalImg from "../assets/survival.png";

const Section = styled.div`
  margin-bottom: 23px;
  h2 {
    color: #424242;
    font-size: 24px;
    font-weight: 300;
    line-height: 31px;
    margin: 0 0 13px;
    grid-column: span 2;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: #707070;
  }
`;

const Image = styled.div`
  position: relative;

  img {
    max-width: 100%;
    margin: 0 auto;
  }

  span {
    background: var(--primaryColor);
    display: block;
    width: 63px;
    height: 63px;
    border: 3px solid #f4f3f4;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    box-shadow: 0px 3px 20px #00000029;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-top: 12px solid transparent;
      border-bottom: 12px solid transparent;
      border-left: 16px solid #fff;
      margin-left: 4px;
    }
  }
`;

const mocks = [
  "Jak wyciągnąć auto ze śniegu?",
  "Jak wymienić plyn do spryskiwaczy?"
];

const SurvivalDetailsView = ({ history }) => (
  <>
    <Section>
      <h2>Jak zmienić koło?</h2>
      <Image>
        <img src={SurvivalImg} />
        <span></span>
      </Image>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo massa,
        tincidunt et volutpat eget, blandit id eros. Vestibulum eu rhoncus quam.
        Phasellus ut euismod tortor.
      </p>
    </Section>
    <Section>
      <h2>Zobacz pozostałe</h2>
      <ScrollList items={mocks} />
    </Section>
  </>
);

export default SurvivalDetailsView;
