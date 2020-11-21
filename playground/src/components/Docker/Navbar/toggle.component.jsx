import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import './toggle.styles.scss';

const Toggle = (props) => {
  const { id, onClick, active } = props;
  return (
    <div className='toggle'>
      <FontAwesomeIcon icon={faSun} style={{color: 'white'}} />
      <div className={`${active ? 'active ' : ''}toggle-slider`} id={id} onClick={onClick}>
        <div className='toggle-circle'/>
      </div>
      <FontAwesomeIcon icon={faMoon} style={{color: 'white'}} />
    </div>
  );
};

export default Toggle;