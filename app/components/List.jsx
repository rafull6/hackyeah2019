import React from "react";
import styled from "styled-components";

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
`;

const Item = styled.li`
  background: #fff;
  color: var(--primaryColor);
  border-radius: 5px;
  margin-bottom: 12px;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: var(--primaryColor);
    box-shadow: 0px 3px 30px #d81e0573;
    ${ItemIcon} {
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

const List = ({ items }) => (
  <Wrapper>
    {items.map(item => (
      <Item>
        {item.icon && (
          <ItemIcon>
            <img src={item.icon} />
          </ItemIcon>
        )}
        <ItemContent>
          <h3>{item.name}</h3>
          <p>{item.content}</p>
        </ItemContent>
      </Item>
    ))}
  </Wrapper>
);

export default List;
