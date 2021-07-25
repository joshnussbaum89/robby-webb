import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const DiscographyContainer = styled.div`
  text-align: center;
  margin: 6rem 0;
  width: 100%;
`;

const AlbumsContainer = styled.div`
  margin: 5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
`;

const Discography = ({ data }) => {
  const { nodes: albumData } = data.allDataJson;

  const albums = albumData.map((image, id) => (
    <GatsbyImage
      image={getImage(image.image.childImageSharp.gatsbyImageData)}
      alt={image.artist}
      key={id}
    />
  ));

  return (
    <DiscographyContainer>
      <div className='header-container'>
        <h2>Discography</h2>
      </div>
      <AlbumsContainer>{albums}</AlbumsContainer>
    </DiscographyContainer>
  );
};

export default Discography;
