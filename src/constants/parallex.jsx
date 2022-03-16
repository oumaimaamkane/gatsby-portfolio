import React from 'react';
import * as Styles from '../styles/style.module.css';
import {FaArrowRight} from 'react-icons/fa';
const Parallex = () =>{
    return (
        <div className={Styles.parallex2 }>
            <div className={Styles.overlay}>
                <h5>Meet Me</h5>
                <h1>Ready to get any projects</h1>
                <br/>
                <a className={Styles.buttonPrimary} href="/contact">Contact Me <FaArrowRight/></a>
                <a className={Styles.buttonPrimaryOutlined} href="/portfolio">My Projects <FaArrowRight/></a>
            </div>
        </div>
    );
}
export default Parallex;