import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Components
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const ErrorHeader = styled.div`
  text-align: center;
  margin: 6rem 0;
  width: 100%;
  height: 100vh;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo siteTitle='Robby Webb | 404' />
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <ErrorHeader>
          <div className='header-container'>
            <h2>Page Not found</h2>
          </div>
        </ErrorHeader>
      </motion.section>
    </Layout>
  );
};

export default NotFoundPage;
