import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

// Components
import Layout from '../components/Layout';

const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 6rem 0;
  width: 100%;
`;

const Album = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <Layout>
      <AlbumContainer>
        <div className='header-container'>
          <h2>{pageContext.record}</h2>
        </div>
        <GatsbyImage
          image={getImage(pageContext.image.childImageSharp.gatsbyImageData)}
          alt={pageContext.artist}
          key={pageContext.id}
        />
      </AlbumContainer>
    </Layout>
  );
};

export default Album;
