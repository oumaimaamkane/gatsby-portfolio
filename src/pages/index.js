import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../constants/header";
import Banner from "../components/hero";
import Bio from "../components/bio";
import { Helmet } from "react-helmet";
import Service from "../constants/services";
import Skills from "../constants/skills";
import Funfact from "../components/Funfact";
import FeaturedWork from "../components/featuredWork";
import Parallex from "../constants/parallex";
import Clients from "../components/clients";
import Footer from "../constants/footer";

const Home = () =>{
  return(
    <>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>Home | Oumaima Amkane | Full Stack Developer</title>
      <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="../images/favicon/site.webmanifest"/>
      <link rel="mask-icon" href="../images/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/> 
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
    </Helmet>
        <Header/>
        <Banner/>
        <Bio/>
        <Service/>
        <Skills/>
        <Funfact/>
        <FeaturedWork/>
        <Parallex/>
        <Clients/>
        <Footer/>

    </>
  );
}
export default Home; 