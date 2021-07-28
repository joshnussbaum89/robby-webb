import React from 'react';
import styled from 'styled-components';

// Components
import Logo from './Logo';
import NavIcons from './NavIcons';
import EntryAndMainNavItems from './EntryAndMainNavItems';
import MobileNav from './MobileNav';

const MainNavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;

  .nav-items {
    display: none;
  }

  .nav-icons {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 100;
    bottom: 0;
    right: 20px;
    a {
      padding: 1rem 0;
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
      color: var(--pink);
    }
    span {
      position: absolute;
      color: var(--text-primary);
      left: 3.77px;
      top: 54px;
    }
  }

  @media (min-width: 820px) {
    .nav-items {
      display: flex;
      height: 50px;
      align-items: flex-end;
      text-transform: uppercase;
      list-style: none;
      li {
        margin: 0 0 0 2rem;
      }
      a {
        margin: 0 0 0 2rem;
      }
    }
  }
`;

const MainNav = () => {
  return (
    <MainNavStyles id='main-nav'>
      <Logo />
      <EntryAndMainNavItems />
      <MobileNav />
      <NavIcons />
    </MainNavStyles>
  );
};

export default MainNav;
