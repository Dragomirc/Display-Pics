import React from "react";
import ColorCard from "./ColorCard";

const colors = ["red", "yellow", "green", "purple"];
const ColorCardList = props => {
  const colorItems = colors.map(color => {
    return <ColorCard color={color} info={props.info} />;
  });

  return <ul>{colorItems}</ul>;
};

export default ColorCardList;
