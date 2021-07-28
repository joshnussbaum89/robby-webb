import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';

// Components
import MainNav from './MainNav';

const MainContainerStyles = styled.div`
  margin: 1rem;
  height: 100vh;

  @media (min-width: 820px) {
    margin: 4rem;
  }

  @media (min-width: 1020px) {
    margin: 4rem auto;
    width: 90%;
    max-width: 1800px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <MainContainerStyles id='main-container'>
        <MainNav />
        {children}
        <Footer />
      </MainContainerStyles>
    </>
  );
};

export default Layout;
