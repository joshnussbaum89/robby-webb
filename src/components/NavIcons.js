import React from 'react';
import { Link } from 'gatsby';

// Icons
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const NavIcons = () => {
  return (
    <div className='nav-icons'>
      <Link
        to='https://www.instagram.com/rwebbdrums/?hl=en'
        target='_blank'
        rel='noopener noreferrer'
      >
        <InstagramIcon />
      </Link>
      <Link
        to='https://www.twitter.com/robby_drums?lang=en'
        target='_blank'
        rel='noopener noreferrer'
      >
        <TwitterIcon />
      </Link>
    </div>
  );
};

export default NavIcons;
