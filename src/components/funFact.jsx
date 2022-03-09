import React from "react";
import * as Styles from '../styles/style.module.css';
import CountUp from "react-countup";
import classNames from "classnames";
const Funfact = () =>{
    return(
        <div className={Styles.funFact}>
            <h1>Fun Facts</h1>
            <div className={classNames('row' , Styles.parallax)}>
                <div className="col-lg-4" style={{borderRight:"2px solid var(--primary-color)"}}>
                    <span><CountUp end={4} duration={9}/></span>
                    <h6>Happy Clients</h6>
                </div>
                <div className="col-lg-4" style={{borderRight:"2px solid var(--primary-color)"}}>
                    <span><CountUp end={5} duration={9}/></span>
                    <h6>Completed Projects</h6>
                </div>
                <div className="col-lg-4" style={{borderRight:"2px solid var(--primary-color)"}}>
                    <span><CountUp end={800} duration={9}/></span>
                    <h6>Working Hours</h6>
                </div>
            </div>
        </div>
    );
}
export default Funfact;