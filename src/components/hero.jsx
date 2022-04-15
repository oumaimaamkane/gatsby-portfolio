import React from "react";
import * as Style from "../styles/style.module.css";
import Socialinks from "../constants/socialLinks";
import Fade from "react-reveal/Fade";
import Resume from '../static/oumaima-amkane-cv.pdf';
const Hero= () => {
    return(
        <section className={Style.hero}>
            <div className={Style.heroContent}>
                <Fade left><h1 >Oumaima Amkane <br/><span>I'm a Full Stack Developer</span></h1></Fade>
                <div className={Style.buttonGroup}>
                    <a className={Style.buttonPrimary} href="/contact" style={{marginRight:'2em'}}>Hire Me</a>
                    <a className={Style.buttonPrimaryOutlined} href={Resume} target={"_blank"} rel='noreferrer'>Download CV</a>
                </div>
                <Fade><Socialinks/></Fade>

            </div>
        </section>
    );
}

export default Hero;