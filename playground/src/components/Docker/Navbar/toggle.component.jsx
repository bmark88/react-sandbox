import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import './toggle.styles.scss';

const Toggle = (props) => {
  const { className, onClick, theme, expand } = props;

  return (
    <div className={`toggle ${expand ? expand : ''}`}>
      <FontAwesomeIcon icon={faSun} style={{color: 'white'}} />
      <div className={`toggle-slider ${className} ${theme}`} onClick={onClick}>
        <div className='toggle-circle'/>
      </div>
      <FontAwesomeIcon icon={faMoon} style={{color: 'white'}} />
    </div>
  );
};

export default Toggle;