import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
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

const InfoContainer = styled.div`
  margin: 5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 5rem;
  text-align: left;
  h3 {
    font-size: var(--large);
    font-weight: 400;
    margin-top: 0;
  }

  .streaming-link {
    display: inline-block;
    background: var(--pink);
    padding: 0.3rem;
    margin-right: 0.5rem;
    border-radius: 2px;
    background: var(--bg-primary);
    border: 1px solid var(--text-primary);
    :hover {
      background: var(--pink);
      color: var(--bg-primary);
      border: 1px solid var(--pink);
    }
  }
`;

const Album = ({ pageContext }) => {
  return (
    <Layout>
      <AlbumContainer>
        <div className='header-container'>
          <h2>{pageContext.record}</h2>
        </div>
        <InfoContainer>
          <GatsbyImage
            image={getImage(pageContext.image.childImageSharp.gatsbyImageData)}
            alt={pageContext.artist}
          />
          <div>
            <h3>
              {pageContext.artist} "{pageContext.record}"
            </h3>
            <p>{pageContext.type}</p>
            <p></p>
            <p>{pageContext.credits}</p>
            <p>Independent</p>
            <p>
              {pageContext.musicLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='streaming-link'
                >
                  {link.type}{' '}
                </Link>
              ))}
            </p>
          </div>
        </InfoContainer>
      </AlbumContainer>
    </Layout>
  );
};

export default Album;
