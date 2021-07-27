import React from 'react';
import { motion } from 'framer-motion';

// Components
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const contact = () => {
  return (
    <Layout>
      <SEO siteTitle='Robby Webb | Contact' />
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <ContactForm />
      </motion.section>
    </Layout>
  );
};

export default contact;
