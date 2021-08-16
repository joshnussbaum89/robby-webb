import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const AboutContainer = styled.div`
  text-align: center;
  margin: 6rem 0;
`;

const ImageAndBio = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5rem;
  margin: 5rem auto;

  .header-container_text {
    margin: 0 auto;
    text-align: left;
  }

  .header-container_text,
  .header-container_headshot {
    max-width: 500px;
  }

  p {
    font-size: var(--small);
    font-weight: 200;
    margin: 0;
  }

  @media (min-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <div className='header-container'>
        <h2>About</h2>
      </div>
      <ImageAndBio>
        <div className='header-container_image'>
          <StaticImage
            src='../assets/images/headshot.jpg'
            alt='Robby Webb Headshot'
            title='Robby Webb'
            className='header-container_headshot'
            placeholder='blurred'
          />
        </div>
        <div className='header-container_text'>
          <p>
            Robby Webb is a producer, drummer, and engineer based out of
            Philadelphia, PA. He has worked with numerous artists performing and
            making records all over the country.
          </p>
        </div>
      </ImageAndBio>
    </AboutContainer>
  );
};

export default About;
