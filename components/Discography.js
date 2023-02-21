import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import PageTitle from './PageTitle'

const DiscographyContainerStyles = styled.section`
  text-align: center;
  margin: 6rem 0;
  width: 100%;
`

const AlbumsContainerStyles = styled.div`
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  grid-gap: 2rem;
  max-width: 2000px;

  @media (min-width: 1020px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const SingleAlbumStyles = styled.div`
  position: relative;
  cursor: pointer;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  :hover .release-info {
    opacity: 1;
  }

  .release-info {
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
`

const Discography = ({ albumData }) => {
  return (
    <DiscographyContainerStyles>
      <PageTitle title="Discography" />
      <AlbumsContainerStyles>
        {albumData.map((album) => (
          <SingleAlbumStyles key={album.id}>
            <Link href={`/discography/${album.slug}`} key={album.id}>
              <Image
                src={album.image}
                alt={`${album.artist}, ${album.record}`}
                width={460}
                height={460}
                sizes="(min-width: 820px) 50vw, 100vw"
              />
              <div className="release-info">
                <h3>{`${album.artist} "${album.record}"`}</h3>
              </div>
            </Link>
          </SingleAlbumStyles>
        ))}
      </AlbumsContainerStyles>
    </DiscographyContainerStyles>
  )
}

export default Discography
