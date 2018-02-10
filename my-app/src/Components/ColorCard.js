import React from "react";
const API_KEY = "7992273-497c1e332db1f866e31f42872";
const searchTerms = [
  "man",
  "mountain",
  "state",
  "ocean",
  "country",
  "building",
  "cat",
  "airline",
  "wealth",
  "happiness",
  "pride",
  "fear",
  "religion",
  "bird",
  "book",
  "phone",
  "rice",
  "snow",
  "water"
];
const ColorCard = props => {
  const onColorSelect = (color, searchTerm) => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${color}+${searchTerm}&image_type=photo`
    )
      .then(res => {
        if (res.status !== 200) {
          console.log("Something went wrong with the request");
        }
        return res.json();
      })
      .then(images => props.info(images))
      .catch(err => {
        throw new Error("Fetching failed");
      });
  };
  const generateSearchTerm = array =>
    Math.floor(Math.random() * (array.length + 1));

  return (
    <li
      onClick={() =>
        onColorSelect(props.color, searchTerms[generateSearchTerm(searchTerms)])
      }
    >
      <div />
    </li>
  );
};

export default ColorCard;
