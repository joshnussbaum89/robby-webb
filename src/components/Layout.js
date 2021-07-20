import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

// Components
import MainNav from './MainNav';

const MainContainerStyles = styled.div`
  margin: 2rem 1rem;

  @media (min-width: 820px) {
    margin: 4rem;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <MainContainerStyles id='main-container'>
        <MainNav />
        {children}
      </MainContainerStyles>
    </>
  );
};

export default Layout;
