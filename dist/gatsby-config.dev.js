"use strict";

module.exports = {
  siteMetadata: {
    title: "Krittiya Clark's Software Engineer portfolio",
    author: 'Krittiya Clark',
    description: "Krittiya Clark's Software Engineer portfolio"
  },
  plugins: ['gatsby-plugin-react-helmet', "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: 'images',
      path: "".concat(__dirname, "/src/assets/images/thumbs")
    }
  }, {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: ['UA-212320652-1' // Google Analytics / GA
      ],
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true
      }
    }
  }, {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: 'gatsby-starter-default',
      short_name: 'starter',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'src/assets/images/Krittiya-Clark-avatar.png' // This path is relative to the root of the site.

    }
  }, 'gatsby-plugin-sass', 'gatsby-plugin-offline']
};