import React from "react";
//import Slider from "react-slick";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as Styles from '../styles/style.module.css';
import classnames from 'classnames';
import {StaticImage } from "gatsby-plugin-image";
const FeaturedWork = () =>{
    const responsive = {
            superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
            }
        };
    return(
<div className={classnames('container' , Styles.featuredWork)}>
        <h1>Featured Work</h1>
        <div className={Styles.clientWork}>
            <h6>Clients Projects</h6>
            <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-margin-40-px"
            >
            <div className="card" style ={{marginRight:'15px' ,width:'300px'}}>
                <div className="card-header">
                    <StaticImage src='../images/work/hamzapub.png' alt="Or Hamza Pub" style={{width:"250px" ,height:'270px', display:'block' , marginLeft:'auto' , marginRight:'auto'}}/>
                </div>
                <div className="card-body">
                    <h6><a target='_blank' href="https://www.orhamzapub.com" rel="noreferrer">Or Hamza Pub</a></h6>
                    <p>Digital Agency in Oujda</p>
                </div>
            </div>
            <div className="card" style ={{marginRight:'15px' , width:'300px'}}>
                <div className="card-header">
                    <StaticImage src='../images/work/bilker-school.png' alt="Bilker" style={{width:"250px" , height:'270px', display:'block' , marginLeft:'auto' , marginRight:'auto', objectFit:'contain',}}/>
                </div>
                <div className="card-body">
                    <h6><a target='_blank' href="https://www.bilker.ma" rel="noreferrer">Bilker Deutsche Schule</a></h6>
                    <p>German School in Agadir</p>
                </div>
            </div>
            <div className="card" style ={{marginRight:'15px' , width:'300px'}}>
                <div className="card-header">
                    <StaticImage src='../images/work/bilker-orient.png' alt="Bilker" style={{width:"250px" , height:'270px', display:'block' , marginLeft:'auto' , marginRight:'auto' , objectFit:'contain'}}/>
                </div>
                <div className="card-body">
                    <h6><a target='_blank' href="http://www.bilker-orient.com" rel="noreferrer">Bilker Orient</a></h6>
                    <p>German Company in Germany</p>
                </div>
            </div>
            <div className="card" style ={{marginRight:'15px' , width:'300px'}}>
                <div className="card-header">
                    <StaticImage src='../images/work/betrap.png' alt="Betrap" style={{width:"250px" , height:'270px', display:'block' , marginLeft:'auto' , marginRight:'auto'}}/>
                </div>
                <div className="card-body">
                    <h6><a target='_blank' href="http://www.betrap.ma" rel="noreferrer">Betrap</a></h6>
                    <p>Sanitry Distribution Company in Agadir</p>
                </div>
            </div>
            <div className="card" style ={{marginRight:'15px' , width:'300px'}}>
                <div className="card-header">
                    <StaticImage src='../images/work/LOGO-OZAMA.png' alt="ozama" style={{width:"250px" , height:'270px', display:'block' , marginLeft:'auto' , marginRight:'auto'}}/>
                </div>
                <div className="card-body">
                    <h6><a target='_blank' href="http://ozama.epizy.com" rel="noreferrer">Ozama</a></h6>
                    <p>Designer Portfolio</p>
                </div>
            </div>
            
            </Carousel>
        </div>
        <div className={Styles.sideWork}>
            <h6>Side Projects</h6>
            <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1500}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-margin-40-px"
            >
            <div className="card" style ={{marginRight:'15px' ,width:'300px'}}>
                <div className="card-header">
                    <StaticImage src='../images/work/tarragt.png' alt="tarragt" style={{width:"250px" ,height:'270px', display:'block' , marginLeft:'auto' , marginRight:'auto'}}/>
                </div>
                <div className="card-body">
                    <h6><a target='_blank' href="https://www.instagram.com/tarragt.ma/" rel="noreferrer">Tarragt</a></h6>
                    <p>Make Personalised Gifts</p>
                </div>
            </div>
            <div className="card" style ={{marginRight:'15px' , width:'300px'}}>
                <div className="card-header">
                    <StaticImage src='../images/work/bookiliya.png' alt="tarragt" style={{width:"250px" , height:'270px', display:'block' , marginLeft:'auto' , marginRight:'auto'}}/>
                </div>
                <div className="card-body">
                    <h6><a target='_blank' href="http://www.bookylia.com" rel="noreferrer">Bookylia</a></h6>
                    <p>Book your hairdresser online</p>
                </div>
            </div>
            
            </Carousel>
        </div>
        
      </div>
    );
}
export default FeaturedWork;