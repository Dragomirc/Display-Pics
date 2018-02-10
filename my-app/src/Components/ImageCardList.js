import React from "react";
import ImageCard from "./ImageCard";

const ImageCardList = ({ images: { hits = [] } }) => {
  const images = hits
    .slice(0, 5)
    .map(({ previewURL, pageURL, id }) => (
      <ImageCard previewURL={previewURL} key={id} url={pageURL} />
    ));

  return <ul>{images}</ul>;
};

export default ImageCardList;
