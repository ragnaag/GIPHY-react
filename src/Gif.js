
import React from 'react';

const Gif = (image) => {
  return (
    <div className="img-grd">
        <img src={(image.gif.images.fixed_height.url)} alt=" GIPHY image"
        onClick={()=> window.open(image.gif.url)}></img>
    </div>
  )
};

export default Gif;
