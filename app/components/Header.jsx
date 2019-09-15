import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { initRecognition } from "../utils/VoiceRecognition";

import LogoImg from "../assets/logo.png";
import LeftArrowImg from "../assets/left-arrow.svg";
import MicrophoneImg from "../assets/microphone.svg";

const Wrapper = styled.div`
  background: #f5f5f5;
  flex: 0 0 auto;
  height: 53px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

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

const VoiceButton = styled.button`
  background: var(--primaryColor) url(${MicrophoneImg}) no-repeat center center;
  background-size: 17px auto;
  width: 53px;
  height: 53px;
  display: block;
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;

const Header = ({ history }) => {
  const openHelp = res => {
    const filters = {
      case1: "zawał",
      case2: "wypadek"
    };

    for (let key in filters) {
      console.log(filters[key]);

      if (filters[key] === res[0]) {
        history.push(`/rescue-steps/${key}`);
      }
    }
  };

  const listen = () => {
    document.addEventListener(
      "deviceready",
      () => {
        initRecognition().then(res => {
          console.log("TCL: HomeView -> res", res);
          openHelp(res);
        });
      },
      false
    );
  };

  return (
    <Wrapper>
      <div>
        {history.location.pathname !== "/home" && (
          <BackButton onClick={() => history.goBack()} />
        )}
      </div>
      <img src={LogoImg} />
      <div>
        {history.location.pathname !== "/home" && (
          <VoiceButton onClick={listen} />
        )}
      </div>
    </Wrapper>
  );
};

export default withRouter(Header);
