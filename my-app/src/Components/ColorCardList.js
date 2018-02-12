import React from "react";
import ColorCard from "./ColorCard";
import styled from "styled-components";

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: space-around;
`;

const colors = ["red", "yellow", "green", "purple"];
const ColorCardList = ({ info }) => {
  const colorItems = colors.map(color => {
    return <ColorCard color={color} info={info} key={color} />;
  });

  return <CardList>{colorItems}</CardList>;
};

export default ColorCardList;
