import React from 'react';

// Icons
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const NavIcons = () => {
  return (
    <div className='nav-icons'>
      <a
        href='https://www.instagram.com/rwebbdrums/?hl=en'
        target='_blank'
        rel='noopener noreferrer'
      >
        <InstagramIcon />
      </a>
      <a
        href='https://www.twitter.com/robby_drums?lang=en'
        target='_blank'
        rel='noopener noreferrer'
      >
        <TwitterIcon />
      </a>
    </div>
  );
};

export default NavIcons;
