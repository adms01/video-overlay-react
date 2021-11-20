import React, { useState } from "react";

function ImageOverlay({ startTime, endTime, image, occurance, alt, currentTime, className }) {
  return (
    <>
      <img src={image} alt={alt} className={className} />
    </>
  );
}

export default ImageOverlay;
