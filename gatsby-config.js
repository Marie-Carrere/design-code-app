module.exports = {
  siteMetadata: {
    title: `Design+Code - Learn to design and code React and Swift apps`,
    description: `Complete courses about the best tools and design systems. 
    Prototype and build apps with React and Swift. `,
    author: ``,
    keywords: `react course, react for designers, ios development, sketch app, swift app course`
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
    `gatsby-plugin-sharp`,
     {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `75pgnb8xb0ze`,
        accessToken: `i5waY1FoUBUZXk_1mYIQqjhXoR-XxOZLznSjcTtkMX8`
      }
    }
  ],
}
