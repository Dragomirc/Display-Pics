import React from "react";
import ImageCard from "./ImageCard";

const ImageCardList = ({ images: { hits = [] } }) => {
  const images = hits
    .slice(0, 5)
    .map(({ previewURL, id }) => (
      <ImageCard previewURL={previewURL} key={id} />
    ));

  return <ul>{images}</ul>;
};

export default ImageCardList;
