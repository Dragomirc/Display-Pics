import React from "react";
const API_KEY = "7992273-497c1e332db1f866e31f42872";
const ColorCard = props => {
  const onColorSelect = color => {
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${color}&image_type=photo`)
      .then(res => {
        if (res.status !== 200) {
          console.log("Something went wrong with the request");
        }
        return res.json();
      })
      .then(images => props.info(images))

      .catch(err => {
        console.log(err);
        throw new Error("Fetching failed");
      });
  };
  return (
    <li onClick={() => onColorSelect(props.color)}>
      <div />
    </li>
  );
};

export default ColorCard;
