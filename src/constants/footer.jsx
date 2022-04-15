import React from 'react';
import * as Styles from '../styles/style.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import {FaMapMarkerAlt,FaEnvelope,FaGithub,FaFacebook,FaInstagram ,FaLinkedin} from 'react-icons/fa';
import {Row , Col} from 'react-bootstrap'
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
const Footer = () => {
    return (
        <div className={Styles.footer}>
            <Row>
                <Col lg={3} md={6} sm={12}>
                <StaticImage src='../images/logo-white2.png' alt='logo white' style={{width:'200px'}}/>
                </Col>
                <Col lg={3} md={6} sm={12} className='text-center'>
                    <h5>Contact Me</h5>
                    <ul className={Styles.secondCol}>
                        <li><FaMapMarkerAlt/> Agadir,Morocco</li>
                        <li><FaEnvelope/> omaymaamkane@gmail.com</li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12} className='text-center' >
                    <h5>Browse More</h5>
                    <ul >
                        <li>About</li>
                        <li>Contact</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12} className='text-center'>
                    <h5>Follow Me</h5>
                    <ul >
                        {data.map((x)=>{
                            return(
                                <li key={x.id}>
                                    <a href={x.url} style={{fontSize:'20px'}}>{x.icon}</a>
                                </li>
                            );
                        })}
                    </ul>
                </Col>
            </Row>
            <hr />
            <center><span>Oumaima Amkane</span> &copy; Made with &#10084;</center>
        </div>
    );
}
export default Footer;