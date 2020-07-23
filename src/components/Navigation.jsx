import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavContainer } from '../styles/Container';

export default function Navigation() {
  const activeStyle = {
    borderBottom: '5px solid #fff',
    paddingBottom: '10px',
  };
  return (
    <NavContainer>
      <NavLink exact activeStyle={activeStyle} to='/'>
        Overview
      </NavLink>
      <NavLink activeStyle={activeStyle} to='/list'>
        List
      </NavLink>
      <NavLink activeStyle={activeStyle} to='/density'>
        Density Map
      </NavLink>
    </NavContainer>
  );
}
