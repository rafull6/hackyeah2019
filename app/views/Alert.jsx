import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import AlarmSound from '../assets/alarm.mp3';

const myAnimantion = keyframes`
0% {
  background: black;
}
50% {
  background: white;
}
100% {
  background: black;
}
`;

const AlertWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  background: black;

  animation: ${myAnimantion} 0.5s linear infinite;

`;

const Alert = () => {
  return (<>
    <AlertWrapper></AlertWrapper>
    <audio src={AlarmSound} controls autoPlay loop />
  </>
  );
};

export default Alert;
