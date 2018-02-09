import React from "react";

const ColorCard = props => {
  return (
    <li onClick={() => props.onColorSelect(props.color)}>
      <div />
    </li>
  );
};

export default ColorCard;
