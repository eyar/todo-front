
module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `heebo`,
          `limelight`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}
