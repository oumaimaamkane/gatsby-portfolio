import React from "react";
import * as Styles from '../styles/style.module.css';
import CountUp from "react-countup";
import classNames from "classnames";
import { Row , Col} from 'react-bootstrap';
const Funfact = () =>{
    return(
        <div className={Styles.funFact}>
            <h1>Fun Facts</h1>
            <Row className={Styles.parallax}>
                <Col lg={4} md={4} sm={4} className={Styles.parallaxBlock}>
                    <span><CountUp end={4} duration={9}/></span>
                    <h6>Happy Clients</h6>
                </Col>
                <Col lg={4} md={4} sm={4} className={Styles.parallaxBlock}>
                    <span><CountUp end={5} duration={9}/></span>
                    <h6>Completed Projects</h6>
                </Col>
                <Col lg={4} md={4} sm={4} className={Styles.parallaxBlock}>
                    <span><CountUp end={800} duration={9}/></span>
                    <h6>Working Hours</h6>
                </Col>
            </Row>
            {/* <div className={classNames('row' , Styles.parallax)} style={{width:'100%'}}>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{borderRight:"2px solid var(--primary-color)"}}>
                    <span><CountUp end={4} duration={9}/></span>
                    <h6>Happy Clients</h6>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{borderRight:"2px solid var(--primary-color)"}}>
                    <span><CountUp end={5} duration={9}/></span>
                    <h6>Completed Projects</h6>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{borderRight:"2px solid var(--primary-color)"}}>
                    <span><CountUp end={800} duration={9}/></span>
                    <h6>Working Hours</h6>
                </div>
            </div> */}
        </div>
    );
}
export default Funfact;