import React from 'react';

const NavBarListItem = (props) => {
  const { onClick, className, itemName } = props;

  return (
    <li 
      onClick={onClick} 
      className={className}
    >
      {itemName}
    </li>
  );
};

export default NavBarListItem;