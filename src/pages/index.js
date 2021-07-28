import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { motion } from 'framer-motion';

// Components
import Home from '../components/Home';
import SEO from '../components/SEO';

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <SEO />
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <Home />
      </motion.section>
    </>
  );
};

export default IndexPage;
