import React from "react";
import ColorCard from "./ColorCard";

const colors = ["red", "yellow", "green", "purple"];
const ColorCardList = ({ info }) => {
  const colorItems = colors.map(color => {
    return <ColorCard color={color} info={info} key={color} />;
  });

  return <ul>{colorItems}</ul>;
};

export default ColorCardList;
