import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const Main = styled.main`
  margin: 2rem 0rem;

  @media (min-width: 768px) {
    margin: 4rem;
  }
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyles />
      {children}
    </Main>
  );
};

export default Layout;
