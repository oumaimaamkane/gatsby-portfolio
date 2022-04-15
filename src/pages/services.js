import React from 'react';
import {Helmet} from 'react-helmet';
import Header from "../constants/header";
import Banner from "../constants/banner";
import Footer from "../constants/footer";
import * as Styles from '../styles/style.module.css'; 
import { Card, Row ,Col, Container} from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import classnames from 'classnames';
const Services = () => {
    return(
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Services | Oumaima Amkane | Full Stack Developer</title>
                <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="../images/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="../images/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/> 
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            </Helmet>
            <Header/>
            <Banner title='Services'/>
            <section className={Styles.servicesPage}>
                <h1>My Services</h1>
                <h5>What do I offer?</h5>
                <Container>
                    <div className='mt-3'>
                        <Card className={Styles.serviceBlock}>
                            <Row>
                                <Col lg={4} md={4} sm={12} className={Styles.serviceLeftcol}>
                                    <StaticImage src='../images/services/development-white.png' alt='dev' className={classnames(Styles.centered , Styles.serviceImage)} />
                                    <h4 className='text-center mt-2'>Web Development</h4>
                                </Col>
                                <Col lg={8} md={8} sm={12} >
                                    <p>I develop and I build websites , stores , blogs ... which serve to presente your activity , in order to digitize your business and to reach more people</p>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                    <div className='mt-3'>
                        <Card className={Styles.serviceBlock}>
                            <Row>
                                <Col lg={4} md={4} sm={12} className={Styles.serviceLeftcol}>
                                    <StaticImage src='../images/services/ui-ux-white.png' alt='design' className={classnames(Styles.centered , Styles.serviceImage)} />
                                    <h4 className='text-center mt-2'>UI/UX Design</h4>
                                </Col>
                                <Col lg={8} md={8} sm={12} >
                                    <p>Put UI/UX mockup is the first step before developping is an important thing , that's why I'm design the interfaces first then code it</p>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                    <div className='mt-3'>
                        <Card className={Styles.serviceBlock}>
                            <Row>
                                <Col lg={4} md={4} sm={12} className={Styles.serviceLeftcol}>
                                    <StaticImage src='../images/services/seo-white.png' alt='seo' className={classnames(Styles.centered , Styles.serviceImage)} />
                                    <h4 className='text-center mt-2'>SEO</h4>
                                </Col>
                                <Col lg={8} md={8} sm={12} >
                                    <p>To ensure that your site has a high ranking on a search engine result page I use SEO techniques</p>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Container>
                
            </section>
            <Footer/>
        </>
    );
}
export default Services;