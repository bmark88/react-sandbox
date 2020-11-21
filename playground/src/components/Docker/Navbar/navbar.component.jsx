import React, { useState } from 'react';
import NavBarListItem from './navbar-list-item.component';
import Toggle from './toggle.component';
import companyLogo from '../../../assets/images/docker-logo.svg';

import './navbar.styles.scss';

const Navbar = () => {
  const [currentItem, setCurrentItem] = useState('');
  const [active, setActive] = useState(false);
  
  const listItems = ['Home', 'Guides', 'Product manuals', 'Reference', 'Articles'];

  const handleClick = (e) => {
    if (e.target.id === 'dark-mode') {
      setActive(!active)
    } else {
      setCurrentItem(e.target.innerText)
    }
  };
  
  return (
    <nav>
      <div className='container'>
        <img src={companyLogo} alt='company-logo' />
        <ul className='nav-items-container'>
          {
            listItems.map(item => (
              <NavBarListItem 
                key={item}
                itemName={item} 
                className={currentItem === item ? 'underline' : ''}
                onClick={handleClick}
              />
            ))
          }
        </ul>
        <Toggle 
          id='dark-mode' 
          onClick={handleClick} 
          active={active}
        />
      </div>
    </nav>
  );
};

export default Navbar;