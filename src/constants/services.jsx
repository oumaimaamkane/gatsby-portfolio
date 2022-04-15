import React from "react";
import * as Styles from '../styles/style.module.css'; 
import { Container , Row , Col} from "react-bootstrap";
const Service = () => {
    return(
        <div className={Styles.servicesSection}>
            <Container>
                <h1>What do I offer?</h1>
                <h5>My Services</h5>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className={Styles.block}>
                            <div className={Styles.card}>
                                <div className={Styles.serviceDev}></div>
                                <span>Web Development</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={Styles.block}>
                            <div className={Styles.card}>
                                <div className={Styles.serviceDesign}></div>
                                <span>UI/UX Design</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                    <div className={Styles.block}>
                            <div className={Styles.card}>
                                <div className={Styles.serviceSeo}></div>
                                <span>SEO</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Service;