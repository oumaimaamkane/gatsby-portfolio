import React from "react";
import {Helmet} from 'react-helmet';
import Header from "../constants/header";
import Banner from "../constants/banner";
import Footer from "../constants/footer";
import * as Styles from '../styles/style.module.css';
import classnames from 'classnames';
import {Container , Row , Col , Form } from 'react-bootstrap';
import {FaMapMarkerAlt,FaEnvelope,FaPhone,FaGithub,FaFacebook,FaInstagram ,FaLinkedin } from 'react-icons/fa';
const data=[
    {
        id:1,
        text:'Github',
        url:'https://github.com/oumaimaamkane',
        icon :<FaGithub></FaGithub>
    },
    {
        id:2,
        text:'Facebook',
        url:'https://www.facebook.com/oumaimaamkane/',
        icon :<FaFacebook></FaFacebook>
    },
    {
        id:3,
        text:'Instagram',
        url:'https://www.instagram.com/oumaima_codes/',
        icon:<FaInstagram></FaInstagram>
    },
    {
        id:4,
        text:'Linkedin',
        url:'https://www.linkedin.com/in/oumaima-amkane/',
        icon :<FaLinkedin></FaLinkedin>
    }
]
const Contact = () =>{
    return(
        <>
            <Helmet>
            <meta charSet="utf-8"/>
            <title>Contact | Oumaima Amkane | Full Stack Developer</title>
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
            <Banner title='Contact Me'/>
            <section className="mt-4 mb-4">
                <h4 className={classnames(Styles.textPurple ,'text-center' , 'mb-3')}>Get In Touch</h4>
                <Container>
                    <Row>
                        <Col lg={7} md={12} sm={12}>
                            <h6>For business inquiries feel free to fill in this form</h6>
                            <Form className={Styles.contactForm} method='post'>
                                <Row>
                                    <Col lg={6} md={6} sm={12} className='mb-3'>
                                        <Form.Group controlId="formBasicEmail" >
                                            <Form.Label >Full Name</Form.Label>
                                            <Form.Control type="text" name='fullName' placeholder="Enter your Name"/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} className='mb-3'>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" name='email' placeholder="Enter your Email"/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} className='mb-3'>
                                        <Form.Group>
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="phone" name='phone' placeholder="Enter your phone number"/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} className='mb-3'>
                                        <Form.Group>
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control type="text" name='subject' placeholder="Enter your Subject"/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} md={12} sm={12}>
                                        <Form.Group>
                                            <Form.Label>Message</Form.Label>
                                            <textarea className="form-control" name='message' placeholder="Enter your message"></textarea>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <button className={classnames(Styles.buttonPrimary ,Styles.sendBtn, Styles.centered ,'mt-3')}>Send</button>
                            </Form>
                        </Col>
                        <Col lg={5} md={12} sm={12} style={{fontWeight:500}}>
                                <div className="mb-3">
                                    <Row>
                                        <Col lg={6} md={12} sm={12}>
                                            <FaEnvelope className={Styles.textPink}/> Email:
                                        </Col>
                                        <Col lg={6} md={12} sm={12}>
                                            omaymaamkane@gmail.com
                                        </Col>
                                    </Row>
                                </div>
                                <div className="mb-3">
                                    <Row>
                                        <Col lg={6} md={12} sm={12}>
                                            <FaPhone className={Styles.textPink}/> Phone Number:
                                        </Col>
                                        <Col lg={6} md={12} sm={12}>
                                            +212 6 89 77 30 69
                                        </Col>
                                    </Row>
                                </div>
                                <div className="mb-3">
                                    <Row>
                                        <Col lg={6} md={12} sm={12}>
                                            <FaMapMarkerAlt className={Styles.textPink}/> Location:
                                        </Col>
                                        <Col lg={6} md={12} sm={12}>
                                            Agadir , Morocco
                                        </Col>
                                    </Row>
                                </div>
                            <div className="mt-3">
                                <span >Social Media :</span>
                                <ul className={Styles.socialMedia}>
                                    {data.map((x)=>{
                                        return(
                                            <li key={x.id}>
                                                <a href={x.url} style={{fontSize:'20px'}}>{x.icon}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer/>
        </>
    );
}
export default Contact ;