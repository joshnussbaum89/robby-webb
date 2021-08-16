import React from 'react';
import { motion } from 'framer-motion';

// Components
import Layout from '../components/Layout';
import About from '../components/About';
import Seo from '../components/SEO';

const about = () => {
  return (
    <Layout>
      <Seo siteTitle='Robby Webb | About' />
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <About />
      </motion.section>
    </Layout>
  );
};

export default about;
