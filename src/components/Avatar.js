import React from 'react';

import './Avatar.css';

const Avatar = (props) => {
  const { src, width, alt } = props;
    return <img  
    src={src}
    alt={alt}
    width={width}
  />
}

export default Avatar;