import React from 'react';
import * as Styles from '../styles/style.module.css';
import { StaticImage } from 'gatsby-plugin-image';
const Clients = () =>{
    return(
        <div className={Styles.clients}>
            <h1>Clients Who Trust Me</h1>
            <h5>A satisfied costumer is the best business strategy</h5>
            <center>
                <div className="row" style={{marginTop:'2em' , width:'100%'}}>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <StaticImage src='../images/work/hamzapub.png' alt='Hamza Pub' style={{width:'300px' , height:'300px' , objectFit:'contain'}} />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <StaticImage src='../images/work/bilker-school.png' alt='Bilker' style={{width:'157px' ,height:'200px' ,objectFit:'contain'}} />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <StaticImage src='../images/work/betrap.png' alt='Betrap' style={{width:'214px' , height:'200px' , objectFit:'contain'}} />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <StaticImage src='../images/work/LOGO-OZAMA.png' alt='Ozama' style={{width:'214px' , height:'200px' , objectFit:'contain'}} />
                    </div>
                </div>
            </center>
            
        </div>
    );
}
export default Clients;