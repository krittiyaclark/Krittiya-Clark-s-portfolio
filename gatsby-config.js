module.exports = {
  siteMetadata: {
    title: "Krittiya Clark's Software Engineer portfolio",
    author: 'Krittiya Clark',
    description: "Krittiya Clark's Software Engineer portfolio",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/Krittiya-Clark-avatar.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
