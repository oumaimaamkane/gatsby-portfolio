import React from "react";
import { Navbar, NavbarBrand ,Container} from "react-bootstrap";
import Headerlink from "../constants/links";
import * as Style from "../styles/style.module.css";
import { StaticImage } from "gatsby-plugin-image";

 const Header=()=>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
            <NavbarBrand to= "/"> <StaticImage src="../images/logo.png" alt="oumaima amkane" loading="eager" width={100}/> </NavbarBrand>
            <Navbar.Toggle aria-controls="nav"/>
            <Navbar.Collapse className={Style.navbarCollapse}>
                    <Headerlink id="nav"/>
            </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}
export default Header