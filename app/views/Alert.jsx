import React from "react";
import styled from "styled-components";

const AlertWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  background: red;
`;

const Pulse = styled.div`
  margin: 100px;
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #cca92c;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(204,169,44, 0.4);
  animation: pulse 2s infinite;
`

const Alert = () => {
  return (
    <AlertWrapper></AlertWrapper>
  );
};

export default Alert;
