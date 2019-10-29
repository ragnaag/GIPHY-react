import React from 'react';
import Gif from './Gif';

const TrendingList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <Gif key={image.id}
                gif={image}/>
  });

  return (
    <div className="gif-list">{gifItems}</div>
  );
};

export default TrendingList;
