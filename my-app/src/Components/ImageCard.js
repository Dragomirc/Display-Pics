import React from "react";
const ImageCard = ({ previewURL, tags }) => {
  return (
    <li>
      <img src={previewURL} alt={tags} />
    </li>
  );
};

export default ImageCard;
