import React from "react";
import {StaticImage} from 'gatsby-plugin-image'
import * as Styles from '../styles/style.module.css';
import {Card , Row , Col , Container} from 'react-bootstrap';

const Certification = () =>{
    return(
        <div className={Styles.certification}>
            <center><h3>My certification</h3></center>
<Container>
    <Row>
        <Col lg={6} md={6} className='mb-3'>
            <Card>
                <StaticImage src="../images/certifications/udacity_page-00011.jpg"  alt="udacity" className="card-img-top"/>
                <Card.Body>
                    <Card.Title style={{color:'#d6225a'}}>Full Stack Development Track Certification</Card.Title>
                    <Card.Text color="text-purple">Udacity</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col lg={6} md={6} className='mb-3'>
            <Card>
                <StaticImage src="../images/certifications/google-digital-garage.jpg"  alt="google"  className="card-img-top" />
                <Card.Body>
                    <Card.Title style={{color:'#d6225a'}}>Digital Marketing Certification</Card.Title>
                    <Card.Text color="text-purple">Google</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col lg={6} md={6} className='mb-3'>
            <Card>
                <StaticImage src="../images/certifications/udemy-certificat-basics of marketing.jpg"  alt="google" className="card-img-top"/>
                <Card.Body>
                    <Card.Title style={{color:'#d6225a'}}>Basics Of Marketing Certificarion</Card.Title>
                    <Card.Text color="text-purple">Udemy</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        
        
    </Row>
</Container>

        </div>
    );
};
export default Certification;
