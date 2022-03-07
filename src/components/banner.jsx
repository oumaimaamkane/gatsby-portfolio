import React from "react";
import * as Style from "../styles/style.module.css";
import Socialinks from "../constants/socialLinks";
import Fade from "react-reveal/Fade";
import Button from "../constants/button";

const Banner= () => {
    
    
    return(
        <section className={Style.hero}>
            
            <div className={Style.heroContent}>
                <Fade left><h1 >Oumaima Amkane <br/><span>I'm a Full Stack Developer</span></h1></Fade>
                <div className={Style.buttonGroup}>
                    <Button text='Hire Me' type='primary'/>
                    <Button text='Download CV' type='primary-outlined'/>
                </div>
                <Fade><Socialinks/></Fade>

            </div>
        </section>
    );
}

export default Banner;