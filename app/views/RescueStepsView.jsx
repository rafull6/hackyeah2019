import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const Section = styled.div`
  flex: 1 1 auto;
  h2 {
    color: #424242;
    font-size: 24px;
    font-weight: 300;
    line-height: 31px;
    margin: 0 0 13px;
    grid-column: span 2;
  }
`;

const Footer = styled.div`
  flex: 0 0 auto;
  margin: 0 -24px -37px;
`;

const Step = styled.div`
  img {
    background: #fff;
    display: block;
    width: 100%;
    height: 250px;
    border-radius: 5px;
    object-position: center center;
    object-fit: cover;
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

const mocks = [
  {
    image: "",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    image: "",
    content: "Lorem ipsum dolor sit amet"
  },
  {
    image: "",
    content: "consectetur adipiscing elit."
  },
  {
    image: "",
    content: "Lorem"
  },
  {
    image: "",
    content: "adipiscing elit."
  }
];

const pronounce = element => {
  TTS
    .speak({
      text: element,
      locale: 'pl-PL',
      rate: 1
    });
}

const RescueStepsView = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    readText();
  }, [])

  function nextStep() {
    if (step === mocks.length - 1) return;
    setStep(step + 1);
    pronounce(mocks[step + 1].content);
  }

  const readText = () => {
    pronounce(mocks[step].content);
  }

  return (
    <>
      <Section>
        <h2>Resustytacja - Dorosły</h2>
        <Step>
          <img src={mocks[step].image} onClick={nextStep} />
          <p>{mocks[step].content}</p>
        </Step>
      </Section>
      <Footer>
        <Stepper>
          {mocks.map((item, id) => (
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
