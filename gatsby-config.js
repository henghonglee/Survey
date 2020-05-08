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
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "HasuraGraphDB",
        fieldName: "hasura",
        url: "http://localhost:8080/v1/graphql",
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