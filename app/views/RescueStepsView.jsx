import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import SpeakerImg from "../assets/speaker.svg";
import Step1Img from "../assets/steps/1.svg";
import Step2Img from "../assets/steps/2.svg";

const Section = styled.div`
  flex: 1 1 auto;
  h2 {
    color: #424242;
    font-size: 24px;
    font-weight: 300;
    line-height: 31px;
    margin: 0;
    grid-column: span 2;
  }
`;

const Footer = styled.div`
  flex: 0 0 auto;
  margin: 0 -24px -37px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 13px;
  span {
    color: #b0afb5;
    font-size: 18px;
    line-height: 23px;
    font-style: italic;
  }

  strong {
    color: var(--primaryColor);
    font-size: 32px;
    font-weight: 700;
    font-style: normal;
    line-height: 23px;
  }
`;

const Step = styled.div`
  img {
    background: #fff;
    display: block;
    width: 100%;
    height: 250px;
    border-radius: 5px;
    object-position: center center;
    object-fit: scale-down;
    margin-bottom: 20px;
  }

  p {
    color: #707070;
    font-size: 14px;
    line-height: 18px;
    margin: 0;
    flex: 1 1 auto;
    overflow: auto;
  }
`;

const Stepper = styled.ul`
  flex: 0 0 auto;
  list-style: none;
  padding: 17px 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.li`
  background: #fff;
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }

  ${props =>
    props.active &&
    css`
      background: #b4b4b4;
    `}
`;

const End = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    color: var(--primaryColor);
    font-size: 32px;
    font-weight: 400;
    line-height: 41px;
    margin: 0 0 10px;
  }

  span {
    color: #424242;
    font-size: 20px;
    line-height: 26px;
  }
`;

const BackButton = styled.button`
  flex: 0 0 auto;
  background: #f4f3f4;
  color: #424242;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  height: 63px;
  border: 0;
  outline: 0;
  width: 100%;
  cursor: pointer;
`;

const RepeatButton = styled.button`
  flex: 0 0 auto;
  background: #f4f3f4;
  color: #424242;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  height: 63px;
  border: 0;
  outline: 0;
  width: 100%;
  cursor: pointer;
  &:after {
    content: "";
    display: inline-block;
    background: url(${SpeakerImg}) no-repeat;
    width: 24px;
    height: 19px;
    vertical-align: top;
    margin-left: 13px;
  }
`;

const NextButton = styled.button`
  flex: 0 0 auto;
  background: var(--primaryColor);
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  height: 63px;
  border: 0;
  outline: 0;
  width: 100%;
  cursor: pointer;
`;

const mocks = {
  case1: [
    {
      image: Step1Img,
      content:
        "Resuscytację osoby dorosłej rozpoczynamy od 30 uciśnięć klatki piersiowej"
    },
    {
      image: Step2Img,
      content: "Udrożnij drogi oddechowe i wykonaj dwa oddechy ratownicze"
    },
    {
      image: Step1Img,
      content: "Powtarzamy 30 uciśnięć klatki piersiowej"
    },
    {
      image: Step2Img,
      content: "Udrażnij drogi oddechowe przez 15 sekund"
    },
    {
      image: Step1Img,
      content: "Sprawdź czy poszkodowany oddycha"
    }
  ],
  case2: [
    {
      image: Step2Img,
      content: "Sprawdź czy poszkodowany oddycha"
    }
  ]
};

const pronounce = element => {
  TTS.speak({
    text: element,
    locale: "pl-PL",
    rate: 1
  });
};

const RescueStepsView = ({ match }) => {
  const [step, setStep] = useState(0);
  const key = match.params.key ? match.params.key : "case2";

  useEffect(() => {
    readText();
  }, []);

  function nextStep() {
    if (step === mocks[key].length - 1) {
      setStep(step + 1);
      return;
    }
    setStep(step + 1);
    pronounce(mocks[key][step + 1].content);
  }

  const readText = () => {
    pronounce(mocks[key][step].content);
  };

  const resetStep = () => {
    setStep(0);
  };

  if (step === mocks[key].length) {
    return (
      <>
        <End>
          <div>
            <h2>Zakończyłeś procedurę pomocy.</h2>
            <span>Poczekaj na karetkę pogotowia</span>
          </div>
        </End>
        <Footer>
          <BackButton onClick={resetStep}>Wróć na początek</BackButton>
          <NextButton>Znajdź najbliższy punkt NFZ</NextButton>
        </Footer>
      </>
    );
  }

  return (
    <>
      <Section>
        <Header>
          <h2>Resustytacja - Dorosły</h2>
          <span>
            <strong>{step + 1}</strong>/ {mocks[key].length}
          </span>
        </Header>
        <Step>
          {mocks[key][step] && (
            <img src={mocks[key][step].image} onClick={nextStep} />
          )}
          {mocks[key][step] && <p>{mocks[key][step].content}</p>}
        </Step>
      </Section>
      <Footer>
        <Stepper>
          {mocks[key].map((item, id) => (
            <Dot active={id === step} />
          ))}
        </Stepper>
        <RepeatButton onClick={readText}>Powtórz komendę</RepeatButton>
        <NextButton onClick={nextStep}>Przejdź dalej</NextButton>
      </Footer>
    </>
  );
};

export default RescueStepsView;
