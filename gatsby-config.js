module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Robby Webb',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'robbyAssets',
        path: './src/assets/',
      },
      __key: 'robbyAssets',
    },
  ],
};
