import React from "react";
import * as Styles from "../styles/style.module.css";
import {StaticImage } from "gatsby-plugin-image";
import {BsQuestionCircle ,BsClockHistory ,BsFileEarmarkMedical} from 'react-icons/bs'
import Timeline  from '../constants/timeline';
import Certification from "../components/certification";
const Bio = () => {
    return(
        <>
        <div className={Styles.tabs}>
            <input type="radio" id="tab1" name="tab-control" defaultChecked/>
            <input type="radio" id="tab2" name="tab-control"/>
            <input type="radio" id="tab3" name="tab-control"/>  
            <input type="radio" id="tab4" name="tab-control"/>
            <ul>
                <li title="Features">
                    <label htmlFor="tab1" role="button"><BsQuestionCircle/> <br/><span>Who I am</span></label>
                </li>
                <li title="Delivery Contents">
                    <label htmlFor="tab2" role="button"><BsClockHistory/><br/><span>Work History</span></label>
                </li>
                <li title="Shipping"><label htmlFor="tab3" role="button">
                    <BsFileEarmarkMedical/><br/><span>Certification</span></label>
                </li>    
                
            </ul>
            <div className={Styles.slider}>
            <div className={Styles.indicator}></div>
            </div>
            <div className={Styles.content}>
                <section className={Styles.whoIam}>
                <h2>Who I am</h2>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <StaticImage src="../images/personal-pic.png" alt="oumaima" style={{width:"600px" , marginTop:"-25px" , marginLeft:"20px"}}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <h3>About Me</h3>
                            <p>
                            I'm Oumaima ,web developer and my job is to <span>create</span> awesome websites and web apps characterized by <span>high</span> quality and <span>new ideas and concepts</span>. 
                            </p>
                            <p>
                            My goal is to <span>bring</span> my client's <span>brilliant ideas</span> <br/>to <span>reality</span> and help them grow their businesses and let them shine .
                            </p>
                        </div>
                    </div>
                </section>
                <section className={Styles.workHistory}>
                    <h2>Work History</h2>
                    <Timeline/>
                </section>
                <section className={Styles.certification}>
                    <h2>Certification</h2>
                    <Certification/>
                </section>
                
            </div>
        </div>
    </>
    );
}
export default Bio;
