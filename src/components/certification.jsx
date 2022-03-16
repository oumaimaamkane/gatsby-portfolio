import React from "react";
import {StaticImage} from 'gatsby-plugin-image'
import * as Styles from '../styles/style.module.css';

const Certification = () =>{
    /*const data = useStaticQuery(graphql`
    query{
        allFile {
            edges {
              node {
                childImageSharp {
                  fluid {
                    src
                    srcSet
                    aspectRatio
                    originalName
                  }
                }
              }
            }
          }
      }`);
      */
    return(
        <div className={Styles.certification}>
            <center><h3>My certification</h3></center>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="row">
                            <div className="col-lg-6">
                                <StaticImage src="../images/certifications/google-digital-garage.jpg" height={400} alt="google" />
                            </div>
                            <div className="col-lg-6">
                                <h4>Digital Marketing Cirtification</h4>
                                <span>Google</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="row">
                            <div className="col-lg-6">
                                <StaticImage src="../images/certifications/udacity_page-0001.jpg" height={400} alt="udacity" />
                            </div>
                            <div className="col-lg-6">
                                <h4>Full Stack Development Track Certification</h4>
                                <span>Udacity</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="row">
                            <div className="col-lg-6">
                                <StaticImage src="../images/certifications/udemy-certificat-basics of marketing.jpg" height={400} alt="google" />
                            </div>
                            <div className="col-lg-6">
                                <h4>Basics Of Marketing Cartificarion</h4>
                                <span>Udemy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Certification;
