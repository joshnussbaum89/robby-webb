import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Link } from 'gatsby';

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

const SingleAlbum = styled.div`
  position: relative;
  cursor: pointer;

  :hover .text-block {
    opacity: 1;
  }
  .text-block {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.2s;
    background-color: var(--pinkFaded);
    color: var(--bg-primary);
    h3 {
      padding: 1rem;
    }
  }
`;

const Discography = ({ data }) => {
  const { nodes: albumData } = data.allDataJson;

  console.log(albumData);
  const albums = albumData.map((image, id) => (
    <Link to={`/${image.slug}`}>
      <SingleAlbum>
        <GatsbyImage
          image={getImage(image.image.childImageSharp.gatsbyImageData)}
          alt={image.artist}
          key={id}
        />
        <div className='text-block'>
          <h3>{`${image.artist} "${image.record}"`}</h3>
        </div>
      </SingleAlbum>
    </Link>
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
