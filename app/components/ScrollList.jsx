import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 -24px;
  padding-bottom: 36px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const Item = styled.li`
  background: #fff;
  flex: 0 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  margin-right: 13px;
  box-shadow: 0px 3px 20px #0000000a;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--primaryColor);
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  cursor: pointer;
  &:first-child {
    margin-left: 24px;
  }

  &:active,
  &:focus {
    color: #fff;
    background: var(--primaryColor);
    box-shadow: 0px 3px 30px #d81e0573;
  }
`;

const ScrollList = ({ history, items, nextView }) => (
  <Wrapper>
    <List>
      {items.map(item => (
        <Item onClick={() => history.push(nextView)}>{item}</Item>
      ))}
    </List>
  </Wrapper>
);

export default withRouter(ScrollList);
