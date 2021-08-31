require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log(process.env.GATSBY_FORM_API);

module.exports = {
  siteMetadata: {
    siteUrl: "https://jtamedrano.com",
    title: "Jesse Medrano",
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-react-helmet"],
};
