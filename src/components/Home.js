import React from 'react';
import styled from 'styled-components';

// Components
import Logo from './Logo';
import NavIcons from './NavIcons';
import EntryAndMainNavItems from './EntryAndMainNavItems';

const HomeStyles = styled.nav`
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
      color: var(--pink);
    }
    span {
      position: absolute;
      color: var(--text-primary);
      left: 3.77px;
      top: 54px;
    }
  }
`;

const Home = () => {
  return (
    <HomeStyles id='entry-nav'>
      <Logo className='logo' />
      <EntryAndMainNavItems />
      <NavIcons />
    </HomeStyles>
  );
};

export default Home;
