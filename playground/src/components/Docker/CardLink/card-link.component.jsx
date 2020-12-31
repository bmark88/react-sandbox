import React from 'react';

import './card-link.styles.scss';

const CardLink = (props) => {
  const { id, imgUrl, title, description, theme } = props;

  return (
      <div key={id} className={`card-link ${theme}`}>
        <img src={imgUrl} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
  );
};

export default CardLink;