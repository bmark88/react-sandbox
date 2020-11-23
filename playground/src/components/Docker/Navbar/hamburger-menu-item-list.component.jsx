import React from 'react';

import Toggle from './toggle.component';

import './hamburger-menu-item-list.styles.scss';

const HamburgerMenuItemList = (props) => {
  const { items, theme, setTheme, expand } = props;

  const handleClick = (e) => {
    e.preventDefault();

    const classes = e.target.className.split(' ')

    if (classes.includes('toggle-slider') || classes.includes('toggle-circle')) {
        window.localStorage.setItem('theme', theme === 'day' ? 'night' : 'day')
        setTheme(theme === 'day' ? 'night' : 'day');
      }
  };
  
  return (
    <ul className={`list ${expand}${theme}`}>
      {items.map(item => <li key={item}>{item}</li>)}
      <Toggle 
        className={`dark-mode ${expand}`}
        onClick={handleClick} 
        theme={theme}
        expand={expand}
      />
    </ul>
  );
};

export default HamburgerMenuItemList;