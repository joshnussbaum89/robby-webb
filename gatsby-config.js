module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.robbywebb.com',
    title: 'Robby Webb | Producer, Drummer, Engineer',
    description: 'Philadelphia based producer, drummer and engineer',
    keywords: [
      'music',
      ' musician',
      ' recording',
      ' engineer',
      ' flamingo studios',
      ' drums',
      ' bass',
      ' guitar',
      ' philadelphia',
      ' philly',
    ],
    image: '/favicon.jpg',
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
        icon: 'src/assets/images/favicon.jpg',
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
