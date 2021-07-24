import React from 'react';
import { graphql } from 'gatsby';

// Components
import Discography from '../components/Discography';
import Layout from '../components/Layout';

const discography = ({ data }) => {
  return (
    <Layout>
      <Discography data={data} />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allDataJson {
      nodes {
        artist
        image {
          id
          childImageSharp {
            id
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default discography;
