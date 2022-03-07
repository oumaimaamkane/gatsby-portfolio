import React from 'react';
import * as Styles from '../styles/style.module.css';
import classnames from "classnames";

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  

const Funfact = () =>{
    const obj1 = document.getElementById("count1");
    animateValue(obj1, 0, 3, 6000);
    const obj2 = document.getElementById("count2");
    animateValue(obj2, 0, 5, 6000);
    const obj3 = document.getElementById("count3");
    animateValue(obj3, 0, 600, 6000);
    return(
        <div className={Styles.funFact}>
            <h1>Fun Facts</h1>
            <div className={classnames(Styles.parallax ,'row')}>
                <div className="col-lg-4" style={{borderRight:'3px solid var(--primary-color)'}}>
                    <span id='count1'>+0</span>
                    <h6>Happy Clients</h6>
                </div>
                <div className="col-lg-4" style={{borderRight:'3px solid var(--primary-color)'}}>
                    <span id='count2'>+0</span>
                    <h6>Completed Projects</h6>
                </div>
                <div className="col-lg-4">
                    <span id='count3'>+0</span>
                    <h6>Working Hours</h6>
                </div>
            </div>
        </div>
    );
}

export default Funfact;