import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Components
import Logo from './Logo';

// Icons
import InstagramIcon from '@material-ui/icons/Instagram';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';

const MainNavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;

  .nav-icons {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  }

  .nav-items {
    display: flex;
    text-transform: uppercase;
    list-style: none;
    padding: 4rem 0 0;
    li {
      margin: 0 0 0 2rem;
    }
    a {
      margin: 0 0 0 2rem;
    }
  }

  .nav-icons {
    position: fixed;
    bottom: 0;
    right: 20px;
    a {
      padding: 1rem 0 1rem 2rem;
    }
  }

  .logo {
    position: relative;

    h1 {
      color: var(--yellow);
      font-size: var(--extraLarge);
      font-weight: 900;
    }

    span {
      position: absolute;
      color: var(--text-primary);
      left: 0;
      top: 54px;
    }
  }
`;

const MainNav = ({ toggleSelection }) => {
  return (
    <MainNavStyles id='main-nav'>
      <Logo />
      <ul className='nav-items'>
        <li>
          <Link to='/about' onClick={toggleSelection}>
            About
          </Link>
        </li>
        <li>
          <Link to='/discography' onClick={toggleSelection}>
            Discography
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={toggleSelection}>
            Contact
          </Link>
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
    </MainNavStyles>
  );
};

export default MainNav;
