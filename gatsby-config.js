module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.robbywebb.com',
    title: 'Robby Webb',
    description: 'Robby Webb - Philadelphia based producer and musician',
    keywords: [
      'music',
      ' recording',
      ' engineer',
      ' flamingo studios',
      ' drums',
      ' bass',
      ' guitar',
      ' philadelphia',
      ' philly',
    ],
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
        icon: 'src/assets/images/headshot.jpg',
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
