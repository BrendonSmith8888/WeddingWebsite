import React, { Component } from "react";
import {Link} from "react-router-dom";

class WeddingInfo extends Component{
    render(){
        return(
            <div id="weddinginfo">
                <body>
                    <nav><Link to="/">Home</Link></nav>
                    <h1>Wedding Info</h1> 
                    <h2>Venue: Lythwood Lodge</h2>
                    <p>Address: Farm 37, Lidgetton West, 3270, Kwa-Zulu Natal, South Africa</p>
                    
                </body>
            </div>
        );
    }
}

export default WeddingInfo;