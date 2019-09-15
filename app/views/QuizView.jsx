import React, { useState } from "react";
import styled, { css } from "styled-components";

import List from "../components/List";

import KubicaImg from "../assets/kubica.png";
import QuizImg from "../assets/quiz.png";

const Body = styled.div`
  flex: 1 1 auto;
  h2 {
    color: var(--primaryColor);
    font-size: 32px;
    font-weight: 700;
    line-height: 41px;
    text-align: center;
    margin: 0;
  }

  h4 {
    color: #424242;
    font-size: 20px;
    font-weight: 400;
    line-height: 41px;
    text-align: center;
    margin: 0;
  }

  h5 {
    color: #424242;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    text-align: center;
    margin: 0 0 16px;
  }

  img.quiz {
    width: 100%;
    margin-top: 10px;
  }

  img.kubica {
    width: 225px;
    display: block;
    margin: 10px auto 30px;
  }

  > p {
    color: #707070;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
  }
`;

const Footer = styled.div`
  flex: 0 0 auto;
  margin: 0 -24px -37px;
`;

const SecondaryButton = styled.button`
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

const PrimaryButton = styled.button`
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
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const LevelList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 260px;
`;

const LevelListItem = styled.li`
  background: #ffffff;
  display: block;
  text-align: center;
  color: #424242;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 8px;
  padding: 10px 0;
  border-radius: 4px;
  cursor: pointer;
  &:last-child {
    scroll-margin: 0;
  }

  ${props =>
    props.active &&
    css`
      background: var(--primaryColor);
      color: #fff;
    `}
`;

const Question = styled.span`
  color: #707070;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  display: block;
  margin: 15px 0;
`;

const CurrentQuestion = styled.span`
  color: #b0afb5;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  display: block;
  strong {
    color: var(--primaryColor);
    font-size: 32px;
  }
`;

const mocks = [
  {
    letter: "A",
    name: "Wypadek samochodowy",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    letter: "B",
    name: "Wypadek samochodowy",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    letter: "C",
    name: "Wypadek samochodowy",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

const QuizView = ({ history }) => {
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState(null);
  const [option, setOption] = useState(null);

  function nextStep() {
    setStep(step + 1);
  }

  function backStep() {
    setStep(step - 1);
  }

  if (step === 1) {
    return (
      <>
        <Body>
          <h4>Pytanie</h4>
          <CurrentQuestion>
            <strong>1</strong>/10
          </CurrentQuestion>
          <img src={QuizImg} className="quiz" />
          <Question>Co zrobić w przedstawionej sytuacji?</Question>
          <List items={mocks} option={option} callback={id => setOption(id)} />
        </Body>
        <Footer>
          <SecondaryButton onClick={backStep}>Wróć</SecondaryButton>
          <PrimaryButton onClick={nextStep}>Przejdź dalej</PrimaryButton>
        </Footer>
      </>
    );
  } else if (step === 2) {
    return (
      <>
        <Body>
          <h2>Brawo!</h2>
          <h4>
            Odpowiedziałeś na <strong>8 pytań!</strong>
          </h4>
          <img src={KubicaImg} className="kubica" />
          <p>
            Przejdź trudny Quiz z wynikiem 10/10 by dostać się na spotkanie z{" "}
            <strong>Robertem Kubicą</strong>
          </p>
        </Body>
        <Footer>
          <SecondaryButton onClick={() => history.push("/home")}>
            Wróć do strony głównej
          </SecondaryButton>
          <PrimaryButton>Spróbuj jeszcze raz</PrimaryButton>
        </Footer>
      </>
    );
  } else {
    return (
      <>
        <Body>
          <h4>Witaj w interaktywnym</h4>
          <h2>Quizie!</h2>
          <br />
          <p>
            Spróbuj odpowiedzieć na 10 pytań z każdego poziomu trudności. Jeśli
            uda Ci się z poziomem "Trudny", będziesz miał szansę w losowaniu na
            spotkanie z Robertem Kubicą!
          </p>
          <br />
          <br />
          <h5>Wybierz poziom trudności:</h5>
          <LevelList>
            <LevelListItem active={level === 1} onClick={() => setLevel(1)}>
              Łatwy
            </LevelListItem>
            <LevelListItem active={level === 2} onClick={() => setLevel(2)}>
              Średni
            </LevelListItem>
            <LevelListItem active={level === 3} onClick={() => setLevel(3)}>
              Trudny
            </LevelListItem>
          </LevelList>
        </Body>
        <Footer>
          <PrimaryButton disabled={level === null} onClick={nextStep}>
            Rozpocznij Quiz
          </PrimaryButton>
        </Footer>
      </>
    );
  }
};

export default QuizView;
