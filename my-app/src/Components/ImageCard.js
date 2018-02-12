import React from "react";
import styled from "styled-components";
const Card = styled.li`
  padding: 0.25rem;
  margin: 1rem;

  border: 3px dashed;

  cursor: pointer;
`;

const ImageCard = ({ previewURL, url, tags }) => {
  return (
    <Card>
      <a href={url}>
        <img src={previewURL} alt={`Reflecting ${tags}`} />
      </a>
    </Card>
  );
};

export default ImageCard;
