import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import SEO from '../../components/SEO'

import albumData from '../../public/data.json'

const AlbumContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 6rem 0;
  text-align: center;
`

const InfoContainerStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 5rem;
  margin: 5rem 0;
  text-align: left;

  img {
    max-width: 100%;
    height: auto;
  }

  h3 {
    font-size: var(--large);
    font-weight: 400;
    margin-top: 0;
  }

  .streaming-link {
    display: inline-block;
    padding: 0.3rem;
    margin-right: 0.5rem;
    background: var(--bg-primary);
    border: 1px solid var(--text-primary);
    border-radius: 2px;
    :hover {
      color: var(--bg-primary);
      background: var(--pink);
      border: 1px solid var(--pink);
    }
  }
`

const Album = ({ album }) => {
  const { record, artist, type, credits, label, slug, musicLinks, image } =
    album[0]

  return (
    <Layout>
      <SEO
        subTitle={record}
        description={`${artist}, "${record}"`}
        url={`https://www.robbywebb.com/discography/${slug}`}
      />
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <AlbumContainerStyles>
          <PageTitle title={record} />
          <InfoContainerStyles>
            <Image
              src={image}
              title={`${artist}: ${record}`}
              width={633}
              height={633}
              sizes="(min-width: 820px) 50vw, 100vw"
              alt={`${artist}: ${record}`}
              priority="true"
            />
            <div>
              <h3>
                {artist} "{record}"
              </h3>
              <p>{type}</p>
              <p>{credits}</p>
              <p>{label || 'Independent'}</p>
              <p>
                {musicLinks?.map((link) => (
                  <Link
                    key={link.id}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="streaming-link"
                  >
                    {link.type}
                  </Link>
                ))}
              </p>
            </div>
          </InfoContainerStyles>
        </AlbumContainerStyles>
      </motion.section>
    </Layout>
  )
}

export default Album

export const getStaticPaths = async () => {
  const paths = albumData.map((album) => ({
    params: {
      slug: album.slug,
    },
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params }) => {
  const album = albumData.filter((album) => album.slug === params?.slug)

  return {
    props: {
      album,
    },
    revalidate: 10,
  }
}
