// TODO:
// 1. Render Album cards to 'discography' page
// 2. Create About page with bio and photo - figure out styling
// 3. Implement SEO
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

// Components
import MainNav from './MainNav';

const MainContainerStyles = styled.div`
  margin: 1rem;
  height: 100vh;

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
