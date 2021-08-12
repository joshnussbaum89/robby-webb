const path = require(`path`);

async function turnAlbumsIntoPages({ graphql, actions }) {
  const { createPage } = actions;
  const albumPageTemplate = path.resolve(`src/templates/Album.js`);

  const { data } = await graphql(`
    query {
      allDataJson {
        nodes {
          id
          artist
          credits
          year
          record
          type
          slug
          image {
            id
            childImageSharp {
              id
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          musicLinks {
            link
            id
            type
          }
        }
      }
    }
  `);

  data.allDataJson.nodes.forEach((album) => {
    createPage({
      path: `/${album.slug}`,
      component: albumPageTemplate,
      context: {
        id: album.id,
        artist: album.artist,
        credits: album.credits,
        year: album.year,
        record: album.record,
        type: album.type,
        slug: album.slug,
        image: album.image,
        musicLinks: album.musicLinks,
      },
    });
  });
}

exports.createPages = async (params) => {
  await Promise.all([turnAlbumsIntoPages(params)]);
};
