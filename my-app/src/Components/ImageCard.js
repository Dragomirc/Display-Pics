import React from "react";
const ImageCard = ({ previewURL, url, tags }) => {
  return (
    <li>
      <a href={url}>
        <img src={previewURL} alt={tags} />
      </a>
    </li>
  );
};

export default ImageCard;
