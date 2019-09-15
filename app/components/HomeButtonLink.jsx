import React from "react";
import styled from "styled-components";

const Button = styled.a`
  background: #fff;
  color: #8f8e96;
  font-size: 16px;
  line-height: 21px;
  border-radius: 5px;
  border: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 76px;
  box-shadow: 0px 3px 20px #0000000a;
  cursor: pointer;
  outline: 0;
  background: var(--primaryColor);
  color: #fff;
  grid-column: span 2;
  font-size: 21px;
  font-weight: 400;
  line-height: 27px;
  box-shadow: 0px 3px 30px #d81e059e;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    text-decoration: none;
  }
`;

export default Button;
