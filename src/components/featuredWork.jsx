import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as Styles from '../styles/style.module.css';
import classnames from 'classnames';
import {StaticImage } from "gatsby-plugin-image";
import {Card} from 'react-bootstrap';
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
            itemClass="carousel-item-margin-40-px"
            >
                <Card style={{marginRight:'2em'}}>
                    <StaticImage src='../images/work/hamzapub.png' alt="Or Hamza Pub" className="card-img-top" style={{width:'100%', height:'500px',objectFit:'cover' }}/>
                    <Card.Body>
                        <Card.Title><h6><a target='_blank' href="https://www.orhamzapub.com" rel="noreferrer">Or Hamza Pub</a></h6></Card.Title>
                        <Card.Text>Digital Agency in Oujda</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{marginRight:'2em'}}>
                <StaticImage src='../images/work/bilker-orient.png' alt="Bilker" style={{ width:'100%', height:'500px',objectFit:'cover'}}/>
                    <Card.Body>
                        <Card.Title><h6><a target='_blank' href="https://www.bilker.ma" rel="noreferrer">Bilker Deutsche Schule</a></h6></Card.Title>
                        <Card.Text>German School in Agadir</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{marginRight:'2em'}}>
                <StaticImage src='../images/work/bilker-orient.png' alt="Bilker" style={{ width:'100%', height:'500px',objectFit:'cover'}}/>
                    <Card.Body>
                        <Card.Title><h6><a target='_blank' href="http://www.bilker-orient.com" rel="noreferrer">Bilker Orient</a></h6></Card.Title>
                        <Card.Text>German Company in Germany</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{marginRight:'2em'}}>
                <StaticImage src='../images/work/betrap1.png' alt="Betrap" style={{ width:'100%', height:'500px',objectFit:'cover', marginLeft:'auto' , marginRight:'auto'}}/>
                    <Card.Body>
                        <Card.Title><h6><a target='_blank' href="http://www.betrap.ma" rel="noreferrer">Betrap</a></h6></Card.Title>
                        <Card.Text>Sanitry Distribution Company in Agadir</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{marginRight:'2em'}}>
                <StaticImage src='../images/work/LOGO-OZAMA.png' alt="ozama" style={{ width:'100%', height:'500px',objectFit:'cover',marginLeft:'auto' , marginRight:'auto'}}/>
                    <Card.Body>
                        <Card.Title><h6><a target='_blank' href="http://ozama.epizy.com" rel="noreferrer">Ozama</a></h6></Card.Title>
                        <Card.Text>Designer Portfolio</Card.Text>
                    </Card.Body>
                </Card>
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
            itemClass="carousel-item-margin-40-px"
            >
                <Card style={{marginRight:'2em'}}>
                    <StaticImage src='../images/work/tarragt.png' alt="tarragt" style={{ width:'100%', height:'500px',objectFit:'cover',marginLeft:'auto' , marginRight:'auto'}}/>
                    <Card.Body>
                        <Card.Title><h6><a target='_blank' href="https://www.instagram.com/tarragt.ma/" rel="noreferrer">Tarragt</a></h6></Card.Title>
                        <Card.Text>Make Personalised Gifts</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{marginRight:'2em'}}>
                    <StaticImage src='../images/work/bookiliya.png' alt="Bookylia" style={{ width:'100%', height:'500px',objectFit:'cover',marginLeft:'auto' , marginRight:'auto'}}/>
                    <Card.Body>
                        <Card.Title><h6><a target='_blank' href="https://www.instagram.com/tarragt.ma/" rel="noreferrer">Bookylia</a></h6></Card.Title>
                        <Card.Text>Book your hairdresser online</Card.Text>
                    </Card.Body>
                </Card>
            
            </Carousel>
        </div>
        
      </div>
    );
}
export default FeaturedWork;