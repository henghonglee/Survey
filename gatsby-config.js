require("dotenv").config()
const fetch = require('isomorphic-fetch')
const { createHttpLink } = require('apollo-link-http')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages/resources`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          resources: require.resolve(`./src/components/resources/layout.js`),
          default: require.resolve(`./src/components/layout.js`)
        },
      }
    },
    `gatsby-plugin-typescript`,
  ],
}