import React, { useState } from 'react';

import NavBarListItem from './navbar-list-item.component';
import Toggle from './toggle.component';
import HamburgerMenu from './hamburger-menu.component';

import companyLogo from '../../../assets/images/docker-logo.svg';

import './navbar.styles.scss';

const Navbar = (props) => {
  const [currentItem, setCurrentItem] = useState('');
  const { setTheme, theme } = props;

  const listItems = ['Home', 'Guides', 'Product manuals', 'Reference', 'Articles'];

  // On initial render, add or remove 'night' class to body depending on localStorage theme
  theme === 'day' ? document.body.classList.remove('night') : document.body.classList.add('night') 

  const handleClick = (e) => {
    const classes = e.target.className.split(' ')

    if (classes.includes('toggle-slider') || classes.includes('toggle-circle')) {
        window.localStorage.setItem('theme', theme === 'day' ? 'night' : 'day')
        setTheme(theme === 'day' ? 'night' : 'day');
      } else {
          setCurrentItem(e.target.innerText)
    }
  };
  
  return (
    <nav className={theme}>
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
          className='dark-mode' 
          onClick={handleClick} 
          theme={theme}
        />
        <HamburgerMenu 
          id='hamburger-toggle'
          items={listItems} 
          setTheme={setTheme} 
          theme={theme}
        />
      </div>
    </nav>
  );
};

export default Navbar;