import React, { useState } from 'react';

import HamburgerMenuItemList from './hamburger-menu-item-list.component';

import './hamburger-menu.styles.scss';

const HamburgerMenu = (props) => {
  const [expand, setExpand] = useState('');
  const { items, theme, setTheme, id } = props;

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.id === 'hamburger-toggle' || e.target.className.split(' ').includes('bar')) {
      setExpand(expand ? '' : 'expand ');
    }
  };
  
  return (
    <>
      <button 
        id={id}
        className='hamburger-menu' 
        onClick={handleClick}
      >
        <div className='bar top'></div>
        <div className='bar'></div>
        <div className='bar bottom'></div>
      </button>
      <HamburgerMenuItemList 
        items={items} 
        theme={theme} 
        setTheme={setTheme} 
        expand={expand}
      />
    </>
  );
};

export default HamburgerMenu;