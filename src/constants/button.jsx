import React from 'react';
import * as Style from '../styles/style.module.css';


const Button = (props) => {
    if (props.type ==='primary') {
        return(
            <button className={Style.buttonPrimary}>
                {props.text}
            </button>
        );
    } else if(props.type === 'primary-outlined') {
        return(
        <button className={Style.buttonPrimaryOutlined}>
            {props.text}
        </button>
        );
    }else if(props.type=== 'secondary'){
        return(
            <button className={Style.buttonSecondary} >
                {props.text}
            </button>
            );
    }else{
        return(
            <div></div>
        );
    }
       

}
export default Button;