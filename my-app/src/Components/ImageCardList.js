import React from "react";
import ImageCard from "./ImageCard";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: space-around;
`;
const ImageCardList = ({ images: { hits = [] } }) => {
  const images = hits
    .slice(0, 5)
    .map(({ previewURL, pageURL, id, tags }) => (
      <ImageCard previewURL={previewURL} key={id} url={pageURL} tags={tags} />
    ));

  return <List>{images}</List>;
};

export default ImageCardList;
