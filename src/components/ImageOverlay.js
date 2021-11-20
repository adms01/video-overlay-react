import React, { useState } from "react";

function ImageOverlay({ startTime, endTime, image, occurance, alt, currentTime, className }) {
  const [count, setCount] = useState(0);

  /**
   * countHandler runs upon image load,
   * counter incremented after image duration elapsed
   */
  const countHandler = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, endTime - startTime);
  };

  const showImage = () => {
    if (currentTime >= startTime && currentTime <= endTime && count < occurance) return true;
    return false;
  };

  return <>{showImage() && <img src={image} alt={alt} className={className} onLoad={countHandler} />}</>;
}

export default ImageOverlay;
