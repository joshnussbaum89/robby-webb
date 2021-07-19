import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

// Components
import EntryNav from './EntryNav';
import MainNav from './MainNav';

const MainContainerStyles = styled.div`
  margin: 2rem 1rem;

  @media (min-width: 820px) {
    margin: 4rem;
  }
`;

const Layout = ({ children }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelection = () => {
    if (selected === false) {
      setSelected(!selected);
    }
  };

  return (
    <>
      <GlobalStyles />
      {!selected ? (
        <EntryNav toggleSelection={toggleSelection} />
      ) : (
        <MainContainerStyles id='main-container'>
          <MainNav toggleSelection={toggleSelection} />
          {children}
        </MainContainerStyles>
      )}
    </>
  );
};

export default Layout;
