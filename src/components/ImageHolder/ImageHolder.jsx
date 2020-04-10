import "./ImageHolder.scss";
import React from "react";

const ImageHolder = ({ alt, src }) => (
  <div className="img-wrap">
    <img src={src} alt={alt} className="img"></img>
  </div>
);

export default ImageHolder;
