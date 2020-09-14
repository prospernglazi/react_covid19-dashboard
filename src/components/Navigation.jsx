import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const activeStyle = {
    fontWeight: 'bold',
    transition: '.2s ease',
  };
  return (
    <>
      <NavLink exact activeStyle={activeStyle} to='/'>
        Overview
      </NavLink>
      <NavLink activeStyle={activeStyle} to='/list'>
        List
      </NavLink>
      <NavLink activeStyle={activeStyle} to='/info'>
        Health Information
      </NavLink>
    </>
  );
}
