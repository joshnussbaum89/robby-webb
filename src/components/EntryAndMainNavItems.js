import React from 'react';
import { Link } from 'gatsby';

const EntryAndMainNavItems = () => {
  return (
    <ul className='nav-items'>
      <li>
        <Link to='/discography'>Discography</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  );
};

export default EntryAndMainNavItems;
