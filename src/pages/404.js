import React from 'react';
import styled from 'styled-components';

// Components
import Layout from '../components/Layout';

const ErrorHeader = styled.h1`
  text-align: center;
  margin: 5rem 0;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <ErrorHeader>Page Not found 😢</ErrorHeader>
    </Layout>
  );
};

export default NotFoundPage;
