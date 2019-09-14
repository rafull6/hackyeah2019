import React, { useEffect } from "react";
import styled from "styled-components";

import LogoImg from "../assets/splash.png";

const Wrapper = styled.div`
  background: var(--primaryColor);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;

  div {
    text-align: center;
  }

  img {
    height: 160px;
    display: block;
    margin: 0 auto 10px;
  }

  span {
    color: #ebebeb;
    font-size: 20px;
    line-height: 26px;
  }
`;

const SplashView = ({ history }) => {
  useEffect(() => {
    setTimeout(() => history.push("/home"), 1000);
  });

  return (
    <Wrapper>
      <div>
        <img src={LogoImg} />
        <span>Pierwsza Pomoc</span>
      </div>
    </Wrapper>
  );
};

export default SplashView;
