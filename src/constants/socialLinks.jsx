import React from 'react';
import * as Style from "../styles/style.module.css";
import {FaFacebook , FaLinkedin , FaInstagram , FaGithub} from 'react-icons/fa';
import Slide from "react-reveal/Slide";
const data=[
    {
        id:1,
        text:'Github',
        url:'https://github.com/oumaimaamkane',
        icon :<FaGithub></FaGithub>
    },
    {
        id:2,
        text:'Facebook',
        url:'https://www.facebook.com/oumaimaamkane/',
        icon :<FaFacebook></FaFacebook>
    },
    {
        id:3,
        text:'Instagram',
        url:'https://www.instagram.com/oumaima_codes/',
        icon:<FaInstagram></FaInstagram>
    },
    {
        id:4,
        text:'Linkedin',
        url:'https://www.linkedin.com/in/oumaima-amkane/',
        icon :<FaLinkedin></FaLinkedin>
    }
]

const links=data.map((link) => {
    return(
        <Slide left key={link.id}>
            <li >
                <a href={link.url}>{link.icon}</a>
            </li>
        </Slide>
    );
});
const Socialinks=()=>{
    return(
        <ul className={Style.socialLinks}>
            {links}
        </ul>
    );
}
export default Socialinks;