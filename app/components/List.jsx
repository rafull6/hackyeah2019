import React from "react";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";

const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ItemIcon = styled.div`
  background: #fafafa;
  flex: 0 0 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 40px;
  }
`;

const ItemLetter = styled.div`
  background: #fafafa;
  font-size: 32px;
  flex: 0 0 68px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemContent = styled.div`
  padding: 15px;
  h3 {
    font-size: 18px;
    line-height: 23px;
    margin: 0 auto 2px;
  }

  p {
    color: #707070;
    font-size: 14px;
    line-height: 18px;
    margin: 0;
  }

  ${props =>
    props.center &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    `}
`;

const Item = styled.li`
  background: #fff;
  color: var(--primaryColor);
  border-radius: 5px;
  margin-bottom: 12px;
  min-height: 91px;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  &:active,
  &:focus,
  &.active {
    background: var(--primaryColor);
    color: #fff;
    box-shadow: 0px 3px 30px #d81e0573;
    ${ItemIcon}, ${ItemLetter} {
      background: var(--primaryColor);
    }

    h3 {
      color: #fff;
    }

    p {
      color: #f3bbb3;
    }
  }
`;

const List = ({ history, items, nextView, center, option, callback }) => (
  <Wrapper>
    {items.map((item, id) => (
      <Item
        onClick={() => {
          if (nextView) {
            history.push(nextView);
          } else {
            callback(id);
          }
        }}
        className={option === id && "active"}
      >
        {item.icon && (
          <ItemIcon dangerouslySetInnerHTML={{ __html: item.icon }}></ItemIcon>
        )}
        {item.letter && <ItemLetter>{item.letter}</ItemLetter>}
        <ItemContent center={center}>
          <h3>{item.name}</h3>
          <p>{item.content}</p>
        </ItemContent>
      </Item>
    ))}
  </Wrapper>
);

export default withRouter(List);
