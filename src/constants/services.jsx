import React from "react";
import * as Styles from '../styles/style.module.css'; 
import { Container } from "react-bootstrap";
const Service = () => {
    return(
        <div className={Styles.services}>
            <Container>
                <h1>What do I offer?</h1>
                <h5>My Services</h5>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className={Styles.block}>
                            <div className={Styles.card}>
                                <div className={Styles.serviceDev}></div>
                                <span>Web Development</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className={Styles.block}>
                            <div className={Styles.card}>
                                <div className={Styles.serviceDesign}></div>
                                <span>UI/UX Design</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className={Styles.block}>
                            <div className={Styles.card}>
                                <div className={Styles.serviceSeo}></div>
                                <span>SEO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default Service;