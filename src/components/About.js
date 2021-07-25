import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const AboutContainer = styled.div`
  text-align: center;
  margin: 6rem 0;
  width: 100%;
`;

const ImageAndBio = styled.div`
  margin: 5rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  .header-container_text {
    text-align: center;
    padding: 1rem;
  }

  @media (min-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Titles = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const About = () => {
  return (
    <AboutContainer>
      <div className='header-container'>
        <h2>About</h2>
      </div>
      <ImageAndBio>
        <div className='header-container_text'>
          <Titles>
            <h3>Producer</h3>
            <h3>Drummer</h3>
            <h3>Engineer</h3>
          </Titles>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            aliquet enim tortor at auctor urna. In massa tempor nec feugiat nisl
            pretium fusce id. Tortor condimentum lacinia quis vel eros donec ac
            odio tempor. In hac habitasse platea dictumst. Et malesuada fames ac
            turpis egestas sed tempus. Duis at tellus at urna condimentum mattis
            pellentesque id nibh. Tellus pellentesque eu tincidunt tortor
            aliquam. Orci ac auctor augue mauris augue neque gravida in. Lacus
            sed turpis tincidunt id aliquet risus feugiat in.
          </p>
        </div>
        <StaticImage src='../assets/images/headshot.jpg' alt='A dinosaur' />
      </ImageAndBio>
    </AboutContainer>
  );
};

export default About;
