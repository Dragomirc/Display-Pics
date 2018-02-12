import React from "react";
import { generateSearchTerm, searchTerms } from "../logic";
import styled from "styled-components";
const API_KEY = "7992273-497c1e332db1f866e31f42872";

const Card = styled.li`
  padding: 1rem;
  margin: 1rem;
  border: 3px dashed;
  width: 5em;
  height: 5em;
  cursor: pointer;
`;
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

  return (
    <Card
      style={{ backgroundColor: props.color }}
      onClick={() =>
        onColorSelect(props.color, searchTerms[generateSearchTerm(searchTerms)])
      }
    />
  );
};

export default ColorCard;
