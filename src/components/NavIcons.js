import React from 'react';
import { Link } from 'gatsby';

// Icons
import InstagramIcon from '@material-ui/icons/Instagram';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';

const NavIcons = () => {
  return (
    <div className='nav-icons'>
      <Link to='/'>
        <InstagramIcon />
      </Link>
      <Link to='/'>
        <TwitterIcon />
      </Link>
      <Link to='/'>
        <PlayCircleOutlineIcon />
      </Link>
    </div>
  );
};

export default NavIcons;