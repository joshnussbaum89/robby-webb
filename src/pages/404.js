import React from 'react';
import styled from 'styled-components';

// Components
import Nav from '../components/Nav';

const ErrorHeader = styled.h1`
  display: block;
  text-align: center;
  margin: 2rem auto;
  padding: 2rem;
  width: 75%;
  border-top: 1px solid var(--pink);
`;

const NotFoundPage = () => {
  return (
    <>
      <Nav />
      <ErrorHeader>Page Not found 😢</ErrorHeader>
    </>
  );
};

export default NotFoundPage;
