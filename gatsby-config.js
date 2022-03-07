module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Oumaima Amkane | Full Stack Developer",
    description:"",
    author:"Oumaima Amkane"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-scroll-reveal',
    {
      resolve : 'gatsby-source-filesystem',
      options : {
        name:'images',
        path : `${__dirname}/src/images/certifications`,
      }
    }
],
};
