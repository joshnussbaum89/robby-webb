import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Components
import Logo from './Logo';

// Icons
import InstagramIcon from '@material-ui/icons/Instagram';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';

const EntryNavStyles = styled.nav`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
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

  .logo {
    position: relative;
    h1 {
      font-size: var(--extraLarge);
      font-weight: 900;
    }
    h1,
    a {
      color: var(--yellow);
    }
    span {
      position: absolute;
      color: var(--text-primary);
      left: 0;
      top: 54px;
    }
  }
`;

const EntryNav = () => {
  return (
    <EntryNavStyles id='entry-nav'>
      <Logo className='logo' />
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
    </EntryNavStyles>
  );
};

export default EntryNav;
