require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log(process.env.GATSBY_FORM_API);

module.exports = {
  siteMetadata: {
    siteUrl: "https://jtamedrano.com",
    title: "Jesse Medrano",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jesse Medrano - Developer`,
        short_name: `Jesse Medrano`,
        description:
          "Jesse Medrano, Software Engineer & Web Developer based out of Southern California",
        start_url: `/`,
        lang: "en",
        icon: "./src/images/favicon-32x32.png",
        icons: [
          {
            src: "./src/images/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./src/images/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
      },
    },
  ],
};
