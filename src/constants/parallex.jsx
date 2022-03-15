import React from 'react';
import classnames from 'classnames';
import * as Styles from '../styles/style.module.css';
import {FaArrowRight} from 'react-icons/fa';
const Parallex = () =>{
    return (
        <div className={Styles.parallex2 }>
            <div className={Styles.overlay}>
                <h5>Meet Me</h5>
                <h1>Ready to get any projects</h1>
                <button className={Styles.buttonPrimary}>Contact Me <FaArrowRight/> </button>
                <button className={Styles.buttonPrimaryOutlined}>My Projects <FaArrowRight/> </button>
            </div>
        </div>
    );
}
export default Parallex;