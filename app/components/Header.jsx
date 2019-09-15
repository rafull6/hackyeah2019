import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import LogoImg from "../assets/logo.png";
import LeftArrowImg from "../assets/left-arrow.svg";

const Wrapper = styled.div`
  background: #f5f5f5;
  flex: 0 0 auto;
  height: 53px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    flex: 1 1 100%;
  }

  img {
    height: 34px;
  }
`;

const BackButton = styled.button`
  background: url(${LeftArrowImg}) no-repeat;
  width: 31px;
  height: 22px;
  display: block;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const Header = ({ history }) => (
  <Wrapper>
    <div>
      <BackButton onClick={() => history.goBack()} />
    </div>
    <img src={LogoImg} />
    <div></div>
  </Wrapper>
);

export default withRouter(Header);
