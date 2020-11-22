import React from 'react';

import './card-link.styles.scss';

const CardLink = (props) => {
  const { id, imgUrl, title, description } = props;

  return (
    <div key={id} className='card-link'>
      <img src={imgUrl} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardLink;