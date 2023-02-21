import Image from 'next/image'
import PageTitle from './PageTitle'
import styled from 'styled-components'

import robbyHeadshot from '../public/images/headshot.jpg'

const AboutContainerStyles = styled.section`
  text-align: center;
  margin: 6rem 0;
`

const ImageAndBioStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5rem;
  margin: 5rem auto;

  img {
    max-width: 100%;
    height: auto;
    margin: auto;
  }

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
`

const About = () => {
  return (
    <AboutContainerStyles>
      <PageTitle title="About" />
      <ImageAndBioStyles>
        <Image
          src={robbyHeadshot}
          width={500}
          height={750}
          title="Robby Webb"
          alt="Robby Webb Headshot"
          placeholder="blur"
          blurDataURL={`${robbyHeadshot}`}
        />
        <section className="header-container_text">
          <p>
            Robby Webb is a producer, drummer, and engineer based out of
            Philadelphia, PA. He has worked with numerous artists performing and
            making records all over the country.
          </p>
        </section>
      </ImageAndBioStyles>
    </AboutContainerStyles>
  )
}

export default About