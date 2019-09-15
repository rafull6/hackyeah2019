import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
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
  height: 86px;
  box-shadow: 0px 3px 20px #0000000a;
  cursor: pointer;
  outline: 0;
  ${props =>
    props.type == 1 &&
    css`
      background: var(--primaryColor);
      color: #fff;
      grid-column: span 2;
      font-size: 21px;
      font-weight: 400;
      line-height: 27px;
      box-shadow: 0px 3px 30px #d81e059e;
    `}

  ${props =>
    props.type == 2 &&
    css`
      color: var(--primaryColor);
      font-size: 18px;
      line-height: 23px;
    `}

  ${props =>
    props.type == 3 &&
    css`
      background: var(--primaryColor);
      color: #fff;
      font-weight: 400;
      line-height: 27px;
      font-size: 12px;
      line-height: 23px;
      height: 63px;
      line-height: 16px;
      border-radius: 5px 0 0 0;

      span {
        margin-left: 10px;
      }

      img {
        width: 20px;
      }
    `}

    ${props =>
    props.type == 4 &&
    css`
      height: 63px;
      background: #F3BBB3;
      color: var(--primaryColor);
      font-size: 12px;
      line-height: 16px;
      border-radius: 0 5px 0 0;

      span {
        margin-left: 10px;
      }

      img {
        width: 20px;
      }
    `}
`;

export default Button;
