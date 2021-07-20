import React from 'react';
import { Link } from 'gatsby';

const Logo = () => {
  return (
    <div className='logo'>
      <h1>
        <Link to='/'>
          ROBBY <span>WEBB</span>
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
