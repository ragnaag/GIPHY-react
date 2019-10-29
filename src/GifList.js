import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <Gif gif={image}
                link={image.url}/>
  });

  return (
    <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;
