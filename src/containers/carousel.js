import React from 'react';

import '../styles/carousel.less';

export default ({data}) => {
  const maxHeight = data.reduce((prevH, currentImg) => {
    if (currentImg.height > prevH) return currentImg.height;
    return prevH; 
  }, 0);
  function renderImage(image) {
    return (<img height={maxHeight} key={image.src} src={image.src}/>);
  }

  return (
    <div className="carousel">
      {data.map(renderImage)}
    </div>);
}