import React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';

// Components
import Discography from '../components/Discography';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const discography = ({ data }) => {
  return (
    <Layout>
      <Seo siteTitle='Robby Webb | Discography' />
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <Discography data={data} />
      </motion.section>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allDataJson {
      nodes {
        id
        artist
        credits
        year
        record
        type
        slug
        image {
          id
          childImageSharp {
            id
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        musicLinks {
          link
          id
          type
        }
      }
    }
  }
`;

export default discography;
