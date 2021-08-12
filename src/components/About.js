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
    max-width: 525px;
  }

  p {
    font-size: var(--small);
    font-weight: 200;
    margin: 2rem 0;
  }

  @media (min-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Titles = styled.div`
  h3 {
    font-size: var(--large);
    font-weight: 400;
    margin-top: 0;
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
          <Titles>
            <h3>Producer | Drummer | Engineer</h3>
          </Titles>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            aliquet enim tortor at auctor urna. In massa tempor nec feugiat nisl
            pretium fusce id. Tortor condimentum lacinia quis vel eros donec ac
            odio tempor.
          </p>
          <p>
            In hac habitasse platea dictumst. Et malesuada fames ac turpis
            egestas sed tempus. Duis at tellus at urna condimentum mattis
            pellentesque id nibh. Tellus pellentesque eu tincidunt tortor
            aliquam. Orci ac auctor augue mauris augue neque gravida in. Lacus
            sed turpis tincidunt id aliquet risus feugiat in.
          </p>
        </div>
      </ImageAndBio>
    </AboutContainer>
  );
};

export default About;
