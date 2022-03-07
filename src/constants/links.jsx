import React from "react";
import { Nav , NavLink } from "react-bootstrap";
import * as Style from "../styles/style.module.css";

const data =[
    {
        id: 1,
        text: 'Home' ,
        url : '/'
    },
    {
        id: 2,
        text: 'About' ,
        url : '/about'
    },
    {
        id: 3,
        text: 'Services' ,
        url : '/services'
    },
    {
        id: 4,
        text: 'Projects' ,
        url : '/projects'
    },
    {
        id: 5,
        text: 'Contact' ,
        url : '/contact'
    }
];
const links = data.map(link =>{
    return(
        <NavLink className={Style.navLink} key={link.id} to={link.url}>{link.text}</NavLink>
    );
})
const Headerlink=(props)=>{
    return(
        <Nav id={props.id}>
        {links}
        </Nav>
    );
}
export default Headerlink;