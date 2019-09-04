module.exports = {
  siteMetadata: {
    title: `Stacy Vicknair`,
    description: `People-first Software Engineering Manager. Speaker. Amateur at best D&D player.`,
    author: `Stacy Vicknair`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stacyvicknair.com`,
        short_name: `stacyvicknair.com`,
        start_url: `/`,
        background_color: `#f5f5f6`,
        theme_color: `#4a148c`,
        display: `minimal-ui`,
        icon: `src/images/sv-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
