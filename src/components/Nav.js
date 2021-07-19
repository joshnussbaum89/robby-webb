import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Components
import Logo from './Logo';

// Icons
import InstagramIcon from '@material-ui/icons/Instagram';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';

const NavStyles = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .nav-items {
    text-transform: uppercase;
    padding: 4rem 0 0;
  }
  .nav-icons {
    padding: 1rem 0;
  }

  .nav-items,
  .nav-icons {
    list-style: none;
    display: flex;
    li {
      margin: 0rem 1rem;
    }
    a {
      margin: 0rem 1rem;
    }
  }
`;

const Nav = () => {
  return (
    <NavStyles id='nav'>
      <Logo />
      <ul className='nav-items'>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/'>Discography</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
        </li>
      </ul>
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
    </NavStyles>
  );
};

export default Nav;
