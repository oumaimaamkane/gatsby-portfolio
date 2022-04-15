import React from "react";
import {Breadcrumb , BreadcrumbItem} from 'react-bootstrap'
import * as Styles from '../styles/style.module.css';
const Banner = (props) => {
    return(
        <section className={Styles.banner}>
            <div className={Styles.bannerContent}>
                <h1>{props.title}</h1>
                <Breadcrumb className={Styles.breadcrumb}>
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem active>{props.title}</BreadcrumbItem>
                </Breadcrumb>
            </div>
        </section>
    );
}
export default Banner;